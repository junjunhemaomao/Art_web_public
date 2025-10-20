# unity中截带Alpha图 
## TransparentScreenshot.cs
```
using UnityEngine;
using System.IO;
using System;

public class TransparentScreenshot : MonoBehaviour
{
    // 勾选则用简单法，不勾选用黑白差值法
    public bool useSimpleMethod = false;
    // 截图保存路径（默认保存在项目根目录的Screenshots文件夹）
    public string saveFolder = "Screenshots";

    // 可绑定到按键（如按S截图），或在其他脚本中调用
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.S))
        {
            TakeTransparentScreenshot();
        }
    }

    // 核心截图方法
    public void TakeTransparentScreenshot()
    {
        Camera mainCam = Camera.main;
        if (mainCam == null)
        {
            Debug.LogError("没有找到主相机（Camera.main）！");
            return;
        }

        // 1. 创建保存文件夹
        if (!Directory.Exists(saveFolder))
        {
            Directory.CreateDirectory(saveFolder);
        }

        // 2. 生成唯一文件名（避免重复）
        string fileName = $"{saveFolder}/capture_{DateTime.Now:yyyy-MM-dd_HH-mm-ss-fff}.png";
        int width = Screen.width; // 截图宽度（可自定义，如1920）
        int height = Screen.height; // 截图高度（可自定义，如1080）

        // 3. 选择截图方法
        if (useSimpleMethod)
        {
            CaptureScreenshotTool.SimpleCapture(mainCam, width, height, fileName);
        }
        else
        {
            CaptureScreenshotTool.DiffCapture(mainCam, width, height, fileName);
        }

        Debug.Log($"截图已保存：{fileName}");
    }
}

// 工具类：封装两种截图逻辑
public static class CaptureScreenshotTool
{
    // 方法1：简单透明背景法
    public static void SimpleCapture(Camera cam, int width, int height, string savePath)
    {
        // 保存相机原始设置（后续恢复，避免影响正常渲染）
        var originalTargetTexture = cam.targetTexture;
        var originalClearFlags = cam.clearFlags;
        var originalActiveRT = RenderTexture.active;

        // 创建透明纹理和临时渲染纹理
        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);
        Rect captureRect = new Rect(0, 0, width, height);

        // 设置相机并渲染
        RenderTexture.active = tempRT;
        cam.targetTexture = tempRT;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = Color.clear; // 背景设为透明
        cam.Render();

        // 读取像素并保存
        transparentTex.ReadPixels(captureRect, 0, 0);
        transparentTex.Apply();
        byte[] pngData = ImageConversion.EncodeToPNG(transparentTex);
        File.WriteAllBytes(savePath, pngData);

        // 恢复相机原始设置，清理资源
        cam.clearFlags = originalClearFlags;
        cam.targetTexture = originalTargetTexture;
        RenderTexture.active = originalActiveRT;
        RenderTexture.ReleaseTemporary(tempRT);
        Texture2D.Destroy(transparentTex);
    }

    // 方法2：黑白背景差值法（推荐）
    public static void DiffCapture(Camera cam, int width, int height, string savePath)
    {
        // 保存相机原始设置
        var originalTargetTexture = cam.targetTexture;
        var originalClearFlags = cam.clearFlags;
        var originalActiveRT = RenderTexture.active;

        // 创建3个纹理：黑色背景图、白色背景图、最终透明图
        Texture2D blackTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        Texture2D whiteTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);
        // 临时渲染纹理（深度设为24，确保背景填充正常）
        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);
        Rect captureRect = new Rect(0, 0, width, height);

        // 步骤1：相机以黑色为背景渲染，读取像素
        RenderTexture.active = tempRT;
        cam.targetTexture = tempRT;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = Color.black;
        cam.Render();
        blackTex.ReadPixels(captureRect, 0, 0);
        blackTex.Apply();

        // 步骤2：相机以白色为背景渲染，读取像素
        cam.backgroundColor = Color.white;
        cam.Render();
        whiteTex.ReadPixels(captureRect, 0, 0);
        whiteTex.Apply();

        // 步骤3：计算黑白差值，生成透明信息
        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                // 通过红色通道差值计算alpha（黑白图中RGB值相同，取一个即可）
                float alpha = whiteTex.GetPixel(x, y).r - blackTex.GetPixel(x, y).r;
                alpha = 1 - alpha; // 反转alpha，让背景区域透明
                Color finalColor = Color.clear;

                if (alpha != 0)
                {
                    // 从黑色背景图中获取物体颜色（除以alpha修正亮度）
                    finalColor = blackTex.GetPixel(x, y) / alpha;
                }
                finalColor.a = alpha; // 设置透明通道
                transparentTex.SetPixel(x, y, finalColor);
            }
        }
        transparentTex.Apply();

        // 步骤4：保存为PNG
        byte[] pngData = ImageConversion.EncodeToPNG(transparentTex);
        File.WriteAllBytes(savePath, pngData);

        // 恢复相机设置，清理资源
        cam.clearFlags = originalClearFlags;
        cam.targetTexture = originalTargetTexture;
        RenderTexture.active = originalActiveRT;
        RenderTexture.ReleaseTemporary(tempRT);
        // 销毁临时纹理，避免内存泄漏
        Texture2D.Destroy(blackTex);
        Texture2D.Destroy(whiteTex);
        Texture2D.Destroy(transparentTex);
    }
}
```
## 使用方法：
1. 确保场景中有一个主相机（Camera.main 可识别），若需单独截图某个物体，可给物体设置单独 Layer（如 “Player”），后续用相机 “Culling Mask” 只渲染该 Layer
2. 在 Unity 中创建 C# 脚本（命名为TransparentScreenshot）
3. 运行游戏后，按键盘S 键即可截图，截图会保存在项目根目录的 “Screenshots” 文件夹中。  

