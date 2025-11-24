# unity中截带Alpha图 
## 使用方法：
1. 确保场景中有一个主相机（Camera.main 可识别），若需单独截图某个物体，可给物体设置单独 Layer（如 “Player”），后续用相机 “Culling Mask” 只渲染该 Layer
2. 在 Unity 中创建 C# 脚本（命名为TransparentScreenshot）
3. 运行游戏后，按键盘S 键即可截图，截图会保存在项目根目录的 “Screenshots” 文件夹中。  
## TransparentScreenshot.cs
```
using UnityEngine;
using System.IO;
using System;

public class TransparentScreenshot : MonoBehaviour
{
    public bool useSimpleMethod = false;
    public string saveFolder = "Screenshots";

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.S))
        {
            TakeTransparentScreenshot();
        }
    }

    public void TakeTransparentScreenshot()
    {
        Camera mainCam = Camera.main;
        if (mainCam == null)
        {
            Debug.LogError("没有找到主相机（Camera.main）！");
            return;
        }

        if (!Directory.Exists(saveFolder))
        {
            Directory.CreateDirectory(saveFolder);
        }

        // 自动递增编号：capture_1, capture_2, capture_3 ...
        int nextIndex = CaptureScreenshotTool.GetNextScreenshotIndex(saveFolder);
        string fileName = saveFolder + "/capture_" + nextIndex + ".png";

        int width = Screen.width;
        int height = Screen.height;

        if (useSimpleMethod)
        {
            CaptureScreenshotTool.SimpleCapture(mainCam, width, height, fileName);
        }
        else
        {
            CaptureScreenshotTool.DiffCapture(mainCam, width, height, fileName);
        }

        Debug.Log("截图已保存：" + fileName);
    }
}


public static class CaptureScreenshotTool
{
    // 自动获取下一张截图编号：capture_1, capture_2...
    public static int GetNextScreenshotIndex(string folder)
    {
        if (!Directory.Exists(folder))
            return 1;

        string[] files = Directory.GetFiles(folder, "capture_*.png");
        int maxIndex = 0;

        foreach (string file in files)
        {
            string name = Path.GetFileNameWithoutExtension(file); // capture_12
            string[] parts = name.Split('_');
            if (parts.Length == 2)
            {
                int index;
                if (int.TryParse(parts[1], out index))
                {
                    if (index > maxIndex)
                        maxIndex = index;
                }
            }
        }

        return maxIndex + 1;
    }


    // --------- 以下截图方法不变 ---------

    public static void SimpleCapture(Camera cam, int width, int height, string savePath)
    {
        RenderTexture originalTargetTexture = cam.targetTexture;
        CameraClearFlags originalClearFlags = cam.clearFlags;
        RenderTexture originalActiveRT = RenderTexture.active;

        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);
        Rect captureRect = new Rect(0, 0, width, height);

        RenderTexture.active = tempRT;
        cam.targetTexture = tempRT;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = Color.clear;
        cam.Render();

        transparentTex.ReadPixels(captureRect, 0, 0);
        transparentTex.Apply();
        byte[] pngData = ImageConversion.EncodeToPNG(transparentTex);
        File.WriteAllBytes(savePath, pngData);

        cam.clearFlags = originalClearFlags;
        cam.targetTexture = originalTargetTexture;
        RenderTexture.active = originalActiveRT;
        RenderTexture.ReleaseTemporary(tempRT);
        Texture2D.Destroy(transparentTex);
    }

    public static void DiffCapture(Camera cam, int width, int height, string savePath)
    {
        RenderTexture originalTargetTexture = cam.targetTexture;
        CameraClearFlags originalClearFlags = cam.clearFlags;
        RenderTexture originalActiveRT = RenderTexture.active;

        Texture2D blackTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        Texture2D whiteTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);

        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);
        Rect rect = new Rect(0, 0, width, height);

        RenderTexture.active = tempRT;
        cam.targetTexture = tempRT;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = Color.black;
        cam.Render();

        blackTex.ReadPixels(rect, 0, 0);
        blackTex.Apply();

        cam.backgroundColor = Color.white;
        cam.Render();

        whiteTex.ReadPixels(rect, 0, 0);
        whiteTex.Apply();

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                float br = blackTex.GetPixel(x, y).r;
                float wr = whiteTex.GetPixel(x, y).r;

                float alpha = 1f - (wr - br);

                Color finalColor = Color.clear;
                if (alpha != 0f)
                    finalColor = blackTex.GetPixel(x, y) / alpha;

                finalColor.a = alpha;
                transparentTex.SetPixel(x, y, finalColor);
            }
        }
        transparentTex.Apply();

        byte[] png = ImageConversion.EncodeToPNG(transparentTex);
        File.WriteAllBytes(savePath, png);

        cam.clearFlags = originalClearFlags;
        cam.targetTexture = originalTargetTexture;
        RenderTexture.active = originalActiveRT;
        RenderTexture.ReleaseTemporary(tempRT);

        Texture2D.Destroy(blackTex);
        Texture2D.Destroy(whiteTex);
        Texture2D.Destroy(transparentTex);
    }
}
```