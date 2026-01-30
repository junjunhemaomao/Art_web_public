import{_ as a,o as s,c as p,a6 as e}from"./chunks/framework.BB0md0jN.js";const x=JSON.parse('{"title":"unity中截带Alpha图","description":"","frontmatter":{"readingTime":"3 min read"},"headers":[],"relativePath":"游戏引擎/Unity3D/unity中截带Alpha图/unity中截带Alpha图.md","filePath":"游戏引擎/Unity3D/unity中截带Alpha图/unity中截带Alpha图.md"}'),l={name:"游戏引擎/Unity3D/unity中截带Alpha图/unity中截带Alpha图.md"};function i(t,n,r,c,o,u){return s(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="unity中截带alpha图" tabindex="-1">unity中截带Alpha图 <a class="header-anchor" href="#unity中截带alpha图" aria-label="Permalink to &quot;unity中截带Alpha图&quot;">​</a></h1><h2 id="使用方法" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h2><ol><li>确保场景中有一个主相机（Camera.main 可识别），若需单独截图某个物体，可给物体设置单独 Layer（如 “Player”），后续用相机 “Culling Mask” 只渲染该 Layer</li><li>在 Unity 中创建 C# 脚本（命名为TransparentScreenshot）</li><li>运行游戏后，按键盘S 键即可截图，截图会保存在项目根目录的 “Screenshots” 文件夹中。</li></ol><h2 id="transparentscreenshot-cs" tabindex="-1">TransparentScreenshot.cs <a class="header-anchor" href="#transparentscreenshot-cs" aria-label="Permalink to &quot;TransparentScreenshot.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>using UnityEngine;</span></span>
<span class="line"><span>using System.IO;</span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class TransparentScreenshot : MonoBehaviour</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public bool useSimpleMethod = false;</span></span>
<span class="line"><span>    public string saveFolder = &quot;Screenshots&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void Update()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (Input.GetKeyDown(KeyCode.S))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            TakeTransparentScreenshot();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void TakeTransparentScreenshot()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Camera mainCam = Camera.main;</span></span>
<span class="line"><span>        if (mainCam == null)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Debug.LogError(&quot;没有找到主相机（Camera.main）！&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!Directory.Exists(saveFolder))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Directory.CreateDirectory(saveFolder);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 自动递增编号：capture_1, capture_2, capture_3 ...</span></span>
<span class="line"><span>        int nextIndex = CaptureScreenshotTool.GetNextScreenshotIndex(saveFolder);</span></span>
<span class="line"><span>        string fileName = saveFolder + &quot;/capture_&quot; + nextIndex + &quot;.png&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int width = Screen.width;</span></span>
<span class="line"><span>        int height = Screen.height;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (useSimpleMethod)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            CaptureScreenshotTool.SimpleCapture(mainCam, width, height, fileName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            CaptureScreenshotTool.DiffCapture(mainCam, width, height, fileName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Debug.Log(&quot;截图已保存：&quot; + fileName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static class CaptureScreenshotTool</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 自动获取下一张截图编号：capture_1, capture_2...</span></span>
<span class="line"><span>    public static int GetNextScreenshotIndex(string folder)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (!Directory.Exists(folder))</span></span>
<span class="line"><span>            return 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        string[] files = Directory.GetFiles(folder, &quot;capture_*.png&quot;);</span></span>
<span class="line"><span>        int maxIndex = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        foreach (string file in files)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string name = Path.GetFileNameWithoutExtension(file); // capture_12</span></span>
<span class="line"><span>            string[] parts = name.Split(&#39;_&#39;);</span></span>
<span class="line"><span>            if (parts.Length == 2)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                int index;</span></span>
<span class="line"><span>                if (int.TryParse(parts[1], out index))</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    if (index &gt; maxIndex)</span></span>
<span class="line"><span>                        maxIndex = index;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return maxIndex + 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // --------- 以下截图方法不变 ---------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void SimpleCapture(Camera cam, int width, int height, string savePath)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        RenderTexture originalTargetTexture = cam.targetTexture;</span></span>
<span class="line"><span>        CameraClearFlags originalClearFlags = cam.clearFlags;</span></span>
<span class="line"><span>        RenderTexture originalActiveRT = RenderTexture.active;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);</span></span>
<span class="line"><span>        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);</span></span>
<span class="line"><span>        Rect captureRect = new Rect(0, 0, width, height);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RenderTexture.active = tempRT;</span></span>
<span class="line"><span>        cam.targetTexture = tempRT;</span></span>
<span class="line"><span>        cam.clearFlags = CameraClearFlags.SolidColor;</span></span>
<span class="line"><span>        cam.backgroundColor = Color.clear;</span></span>
<span class="line"><span>        cam.Render();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        transparentTex.ReadPixels(captureRect, 0, 0);</span></span>
<span class="line"><span>        transparentTex.Apply();</span></span>
<span class="line"><span>        byte[] pngData = ImageConversion.EncodeToPNG(transparentTex);</span></span>
<span class="line"><span>        File.WriteAllBytes(savePath, pngData);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        cam.clearFlags = originalClearFlags;</span></span>
<span class="line"><span>        cam.targetTexture = originalTargetTexture;</span></span>
<span class="line"><span>        RenderTexture.active = originalActiveRT;</span></span>
<span class="line"><span>        RenderTexture.ReleaseTemporary(tempRT);</span></span>
<span class="line"><span>        Texture2D.Destroy(transparentTex);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void DiffCapture(Camera cam, int width, int height, string savePath)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        RenderTexture originalTargetTexture = cam.targetTexture;</span></span>
<span class="line"><span>        CameraClearFlags originalClearFlags = cam.clearFlags;</span></span>
<span class="line"><span>        RenderTexture originalActiveRT = RenderTexture.active;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Texture2D blackTex = new Texture2D(width, height, TextureFormat.ARGB32, false);</span></span>
<span class="line"><span>        Texture2D whiteTex = new Texture2D(width, height, TextureFormat.ARGB32, false);</span></span>
<span class="line"><span>        Texture2D transparentTex = new Texture2D(width, height, TextureFormat.ARGB32, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RenderTexture tempRT = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);</span></span>
<span class="line"><span>        Rect rect = new Rect(0, 0, width, height);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RenderTexture.active = tempRT;</span></span>
<span class="line"><span>        cam.targetTexture = tempRT;</span></span>
<span class="line"><span>        cam.clearFlags = CameraClearFlags.SolidColor;</span></span>
<span class="line"><span>        cam.backgroundColor = Color.black;</span></span>
<span class="line"><span>        cam.Render();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        blackTex.ReadPixels(rect, 0, 0);</span></span>
<span class="line"><span>        blackTex.Apply();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        cam.backgroundColor = Color.white;</span></span>
<span class="line"><span>        cam.Render();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        whiteTex.ReadPixels(rect, 0, 0);</span></span>
<span class="line"><span>        whiteTex.Apply();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int y = 0; y &lt; height; y++)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            for (int x = 0; x &lt; width; x++)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float br = blackTex.GetPixel(x, y).r;</span></span>
<span class="line"><span>                float wr = whiteTex.GetPixel(x, y).r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                float alpha = 1f - (wr - br);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Color finalColor = Color.clear;</span></span>
<span class="line"><span>                if (alpha != 0f)</span></span>
<span class="line"><span>                    finalColor = blackTex.GetPixel(x, y) / alpha;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                finalColor.a = alpha;</span></span>
<span class="line"><span>                transparentTex.SetPixel(x, y, finalColor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        transparentTex.Apply();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        byte[] png = ImageConversion.EncodeToPNG(transparentTex);</span></span>
<span class="line"><span>        File.WriteAllBytes(savePath, png);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        cam.clearFlags = originalClearFlags;</span></span>
<span class="line"><span>        cam.targetTexture = originalTargetTexture;</span></span>
<span class="line"><span>        RenderTexture.active = originalActiveRT;</span></span>
<span class="line"><span>        RenderTexture.ReleaseTemporary(tempRT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Texture2D.Destroy(blackTex);</span></span>
<span class="line"><span>        Texture2D.Destroy(whiteTex);</span></span>
<span class="line"><span>        Texture2D.Destroy(transparentTex);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)])])}const T=a(l,[["render",i]]);export{x as __pageData,T as default};
