import{_ as a,o as i,c as n,aa as p}from"./chunks/framework.D4-DbJe5.js";const l="/Art_web_public/assets/image.6mZhAWvZ.png",y=JSON.parse('{"title":"大地图迷雾实现思路","description":"","frontmatter":{"readingTime":"11 min read"},"headers":[],"relativePath":"游戏引擎/Unity3D/大地图迷雾实现/大地图迷雾实现.md","filePath":"游戏引擎/Unity3D/大地图迷雾实现/大地图迷雾实现.md"}'),t={name:"游戏引擎/Unity3D/大地图迷雾实现/大地图迷雾实现.md"};function e(h,s,k,c,r,o){return i(),n("div",null,[...s[0]||(s[0]=[p('<h1 id="大地图迷雾实现思路" tabindex="-1">大地图迷雾实现思路 <a class="header-anchor" href="#大地图迷雾实现思路" aria-label="Permalink to &quot;大地图迷雾实现思路&quot;">​</a></h1><p><img src="'+l+`" alt="alt text"></p><h2 id="_1-基础效果" tabindex="-1">1.基础效果 <a class="header-anchor" href="#_1-基础效果" aria-label="Permalink to &quot;1.基础效果&quot;">​</a></h2><p>迷雾的表现，一般可以是雾、云、烟之类的，它的特性和水有一些相似，这里我做的是云，首先肯定要动起来，我用了和常规的水相同的做法——采样一张颜色贴图两次，做uv的反向流动，两张贴图的tilling值设置不同，uv流速不同，可以有一些变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    float4 BlendTwocloud(float2 uv)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        float4 c=tex2D( cloudTex, uv* TillingFactor + Time.x*CloudSpeed.xy); </span></span>
<span class="line"><span>        float3 c2=tex2D( cloudTex, uv + Time.x*cloudSpeed.zw); </span></span>
<span class="line"><span>        c.rgb=(c.rgb + c2)/ 2; </span></span>
<span class="line"><span>        return c; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mask的贴图精度会影响云边缘的效果，但我们不能因为想要边缘清晰就随意扩大贴图，所以用一个简单的计算来调整。</span></span>
<span class="line"><span>    float clampAndPowValue(float val,float3 minMaxPow)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        float mValue;mValue = saturate((val-minMaxPow.x)/(minMaxPow.y- minMaxPow.x));</span></span>
<span class="line"><span>        mValue = saturate(pow(mValue, minMaxPow.z));</span></span>
<span class="line"><span>        return mValue;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>现在边缘看着很死板，我们需要处理一下，思路为扰动mask的uv。为了节省贴图，我把上面采样了两次的颜色帖图去色作为扰动噪声，与mask的uv做加法。因为加法会导致mask偏移，所以我加了两个变量去修正位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    //offset 处理边缘</span></span>
<span class="line"><span>    float gray =(c.r+c.g+c.b)/ 3;</span></span>
<span class="line"><span>    float2 disoffset=float2(gray-Shade0ffset.x,gray -Shadeoffset.y)Shadeoffset.z *0.01;</span></span>
<span class="line"><span>    //mask</span></span>
<span class="line"><span>    float4 mask = tex2D( MainTex, maskUV + disoffset);</span></span>
<span class="line"><span>    //mask r</span></span>
<span class="line"><span>    mask.r=clampAndPowValue(mask.r,MaskRValues.xyz);</span></span></code></pre></div><p>现在看着像一张薄薄的纸，少了点厚重感，我们需要给云加上投影。额外加一个pass渲染即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    Pass</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Name &quot;cloudshadow&quot;</span></span>
<span class="line"><span>        CGPROGRAM</span></span>
<span class="line"><span>        #pragma vertex vertShadow</span></span>
<span class="line"><span>        #pragma fragment fragShadow</span></span>
<span class="line"><span>        ENDCG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Pass</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Name &quot;cloudColor&quot;</span></span>
<span class="line"><span>        CGPROGRAM</span></span>
<span class="line"><span>        #pragma vertex vertCloud</span></span>
<span class="line"><span>        #pragma fragment fragcloud</span></span>
<span class="line"><span>        ENDCG</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>需要注意的是投影pass必须写在正常pass前面，不然投影会盖住整体。</p><h2 id="_2-选中效果" tabindex="-1">2.选中效果 <a class="header-anchor" href="#_2-选中效果" aria-label="Permalink to &quot;2.选中效果&quot;">​</a></h2><p>我们首先要获取到选中区域，这里我们用上面采样的mask的G通道来标记。然后我给选中写了个简单的闪烁效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    float flicker = lerp(1,sin( Time.y*FlickSpeed),FlickIntensity);</span></span>
<span class="line"><span>    c.rgb += c.rgb * flicker * mask.g* _FlickLevel;</span></span></code></pre></div><h2 id="_3-溶解效果" tabindex="-1">3.溶解效果 <a class="header-anchor" href="#_3-溶解效果" aria-label="Permalink to &quot;3.溶解效果&quot;">​</a></h2><p>采样一张溶解贴图，然后用mask的B通道作为溶解值去计算。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    float DissolveMaskR(float3 mask, float2 dissolveUV)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        float dissolve =tex2D( DissolveTex,dissolveUV).r;</span></span>
<span class="line"><span>        float maskR = lerp(mask.r * smoothstep(8, saturate(dissolve + mask.b)+ 0.01, mask.b), mask.r, mask.b);</span></span>
<span class="line"><span>        return maskR;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_4-逻辑思路" tabindex="-1">4.逻辑思路 <a class="header-anchor" href="#_4-逻辑思路" aria-label="Permalink to &quot;4.逻辑思路&quot;">​</a></h2><p>从以上的效果中，我们不难看出，mask占了很大的比重，而且与程序的桥接中，也主要是处理mask，它就是效果与数据之间的桥梁。一般在项目中，mask会由程序动态创建，程序从策划那里得到地图规模(N * N)，然后创建贴图，SetPixel，保存数据。这里和数据有关的只有R通道，因为从数据的角度来看，我们只需要得到迷雾那里解锁，哪里未解锁。至于选中和溶解，都是表现层的东西。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    ///&lt;summary&gt;</span></span>
<span class="line"><span>    ///初始化数据并填色</span></span>
<span class="line"><span>    ///&lt;/summary&gt;</span></span>
<span class="line"><span>    2 个引用</span></span>
<span class="line"><span>    public void InitDataAndColor()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        GlobalVariable.CreateJson();</span></span>
<span class="line"><span>        CleanDataList(GlobalVariable.curMaskRList);</span></span>
<span class="line"><span>        for(int j=0:j&lt; cloudData.height; j++)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            for(int i=0;i&lt; cloudData.width; i++)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                //cloudData.maskRList.Add(1):</span><span> //读行初始化数据</span></span>
<span class="line"><span>                GlobalVariable.curMaskRList.Add(1);//初始化临时列表数据</span></span>
<span class="line"><span>                GlobalVariable.maskTex.SetPixel(i,j, new Color(1,0,1,1)); //初始化填色</span></span>
<span class="line"><span>                //Debug.Log(i +&quot; &quot;+ j);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        GlobalVariable.ApplyColorToTex(cloudRender);</span></span>
<span class="line"><span>        GlobalVariable.WriteJson(); //写json</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>当我们点击某块迷雾解锁时，这一瞬间数据中的这块迷雾就已经是解锁状态，以保证假如玩家点击了解锁后，因为某些原因中断了游戏，再次进入时，这块被他解锁过的迷雾是正确的状态。而不能让溶解效果的滞后影响到实际解锁结果。 当已有数据，就要优先读取数据，根据数据来创建mask。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>///&lt;summary&gt;</span></span>
<span class="line"><span>/// 根据数据填色</span></span>
<span class="line"><span>///&lt;/summary&gt;</span></span>
<span class="line"><span>private void InitColorFromData()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pixelX = 0;</span></span>
<span class="line"><span>    pixelY = 0;</span></span>
<span class="line"><span>    rowCount =1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (int i=0;i&lt; GlobalVariable.curMaskRList.Count; i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //根据数据id计算行列</span></span>
<span class="line"><span>        if(i&gt;cloudData.width *rowCount -1)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            rowCount += 1;</span></span>
<span class="line"><span>            pixelY += 1;</span></span>
<span class="line"><span>            pixelX= 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Globalvariable. maskrex. SetPixel(pixelx, pixely, new Color(Globalvariable. curaskRlist[i], 0,Globalvariable. curaskRlist[i], 1); //用数据填色</span></span>
<span class="line"><span>        //Debug.Log(pixelX +&quot; &quot; + pixelY);</span></span>
<span class="line"><span>        pixelX  += 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    GlobalVariable. ApplyColorToTex(cloudRender);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在做溶解时，用到了单例计时器的思路，点击解锁时，创建计时器，以保证某块正在解锁时，玩家在点击了下一块，它们之间不会互相影响。关于计时器，网上已有很多教程，这里就不赘述了。<br> 关于格子点击，我用了射线检测，获取格子坐标的方式也比较简单，这里写了两种方式：向下取整和四舍五入，前者格子的左下角与unity单位格锚点对齐，后者格子中心与unity格子锚点对齐。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>    //射线检测</span></span>
<span class="line"><span>    clickRay = Camera.main.ScreenPointToRay(Input.mousePosition);</span></span>
<span class="line"><span>    if (Physics. Raycast (clickRay, out clickHit, float. PositiveInfinity, LayerMask. GetMask(&quot;collider&quot;)))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Debug.Log(clickHit.transform.name);</span></span>
<span class="line"><span>        curTilePos = GetTilePos(clickHit.point);</span></span>
<span class="line"><span>        //选中框位置赋值并显示</span></span>
<span class="line"><span>        selectObj.position =new Vector3(curTilePos.x,0, curTilePos.y);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //&lt;summary&gt;</span></span>
<span class="line"><span>    ///获取点击块的坐标</span></span>
<span class="line"><span>    &lt;/sumary&gt;</span></span>
<span class="line"><span>    ///&lt;param name-&quot;clickHitPos&quot;&gt;&lt;/param&gt;</span></span>
<span class="line"><span>    ///&lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>    2 个引用</span></span>
<span class="line"><span>    private Vector2GetTilePos(Vector3 clickHitPos)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        switch (pivotType)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            case PivotType. BottomLeft:</span></span>
<span class="line"><span>            return new Vector2 (Mathf.Floor(clickHitPos.x), Mathf.Floor(clickHitPos.z)); //格子坐标向下取整</span></span>
<span class="line"><span>            case PivotType.Center:</span></span>
<span class="line"><span>            return new Vector2 (Mathf. Round(clickHitPos.x), Mathf. Round(clickHitPos.z)); //格子坐标四舍五入</span></span>
<span class="line"><span>            default :</span></span>
<span class="line"><span>            return new Vector2 (Mathf. Floor(clickHitPos.x), Mathf.Floor(clickHitPos.z)); //格子坐标向下取整</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>以上是基本的思路框架，感谢观看。实际制作中更多的是美术和程序的配合与联调，才能使效果一步步变得更好。</p><p><a href="https://www.bilibili.com/video/BV18Q4y1771Z/?spm_id_from=333.337.search-card.all.click&amp;vd_source=9cdd98cc53d87aeb4190d2743832662b" target="_blank" rel="noreferrer">unity实现的SLG地图迷雾效果</a></p><hr><h2 id="gpt-总结" tabindex="-1">GPT 总结 <a class="header-anchor" href="#gpt-总结" aria-label="Permalink to &quot;GPT 总结&quot;">​</a></h2><p>在这种迷雾效果的实现中，C# 代码和 Shader 是需要结合使用的，而无法全部在 Shader 内完成。原因如下：</p><p>Shader 主要负责视觉效果：包括云的动态渲染、边缘处理、投影、选中、溶解等特效。这些处理是实时的、基于 GPU 的，适合放在 Shader 中。 C# 负责数据逻辑和状态管理：例如迷雾解锁状态、贴图的动态生成与更新、点击事件处理。这些涉及到游戏逻辑层面的操作，适合在 C# 中实现。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">using</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> UnityEngine</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">public</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> FogOfWarController</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> :</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> MonoBehaviour</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    public</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Texture2D</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> maskTex</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 迷雾贴图</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    public</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Material</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> fogMaterial</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 云的材质</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> mapWidth </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 100</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> mapHeight </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 100</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    private</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> void</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> Start</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">        InitDataAndColor</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">();</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> void</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> InitDataAndColor</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        maskTex </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> new</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Texture2D</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">mapWidth</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> mapHeight</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">);</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">        for</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">&lt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> mapHeight</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">++</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">        {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">            for</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> x </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> x </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">&lt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> mapWidth</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> x</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">++</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">            {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">                maskTex</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">SetPixel</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">x</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> new</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Color</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">));</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 初始化为不可见区域</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">            }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">        }</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        maskTex</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Apply</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">();</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        fogMaterial</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">SetTexture</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;_MaskTex&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> maskTex</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">);</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 传递贴图给Shader</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    private</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> void</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> Update</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">        if</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Input</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">GetMouseButtonDown</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">))</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 检测点击事件</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">        {</span></span>
<span class="line"><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;">            Ray</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> ray </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> Camera</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">main</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">ScreenPointToRay</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Input</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">mousePosition</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">);</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">            if</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Physics</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Raycast</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">ray</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> out</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> RaycastHit</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> hit</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">))</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">            {</span></span>
<span class="line"><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;">                Vector2</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> tilePos </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> GetTilePos</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">hit</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">point</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">);</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">                UnlockTile</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">((</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">int</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">tilePos</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">x</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">int</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">tilePos</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">y</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">);</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">            }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">        }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    private</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Vector2</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> GetTilePos</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;">Vector3</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> hitPoint</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">        return</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> new</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Vector2</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Mathf</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Floor</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">hitPoint</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">x</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">),</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> Mathf</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Floor</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">hitPoint</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">z</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">));</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    private</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> void</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> UnlockTile</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> x</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> int</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        maskTex</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">SetPixel</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">x</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> y</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> new</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#F9E2AF;--shiki-dark-font-style:italic;"> Color</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">));</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 解锁点击的区域</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        maskTex</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Apply</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">();</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 更新贴图</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span></span></code></pre></div><ol start="2"><li>Shader 代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>Shader &quot;Custom/FogOfWar&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Properties</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        _MainTex (&quot;Main Texture&quot;, 2D) = &quot;white&quot; {}</span></span>
<span class="line"><span>        _MaskTex (&quot;Mask Texture&quot;, 2D) = &quot;white&quot; {}</span></span>
<span class="line"><span>        _CloudSpeed (&quot;Cloud Speed&quot;, Vector) = (0.1, 0.1, 0.2, 0.2)</span></span>
<span class="line"><span>        _TillingFactor (&quot;Tilling Factor&quot;, float) = 1.0</span></span>
<span class="line"><span>        _FlickSpeed (&quot;Flicker Speed&quot;, float) = 1.0</span></span>
<span class="line"><span>        _FlickIntensity (&quot;Flicker Intensity&quot;, float) = 1.0</span></span>
<span class="line"><span>        _FlickLevel (&quot;Flicker Level&quot;, float) = 0.5</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    SubShader</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Tags { &quot;RenderType&quot; = &quot;Opaque&quot; }</span></span>
<span class="line"><span>        Pass</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            CGPROGRAM</span></span>
<span class="line"><span>            #pragma vertex vert</span></span>
<span class="line"><span>            #pragma fragment frag</span></span>
<span class="line"><span>            #include &quot;UnityCG.cginc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            sampler2D _MainTex;</span></span>
<span class="line"><span>            sampler2D _MaskTex;</span></span>
<span class="line"><span>            float4 _CloudSpeed;</span></span>
<span class="line"><span>            float _TillingFactor;</span></span>
<span class="line"><span>            float _FlickSpeed;</span></span>
<span class="line"><span>            float _FlickIntensity;</span></span>
<span class="line"><span>            float _FlickLevel;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            struct appdata</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float4 vertex : POSITION;</span></span>
<span class="line"><span>                float2 uv : TEXCOORD0;</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            struct v2f</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float2 uv : TEXCOORD0;</span></span>
<span class="line"><span>                float4 pos : SV_POSITION;</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            v2f vert (appdata v)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                v2f o;</span></span>
<span class="line"><span>                o.pos = UnityObjectToClipPos(v.vertex);</span></span>
<span class="line"><span>                o.uv = v.uv;</span></span>
<span class="line"><span>                return o;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            float4 BlendTwocloud(float2 uv)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float4 c = tex2D(_MainTex, uv * _TillingFactor + _Time.x * _CloudSpeed.xy);</span></span>
<span class="line"><span>                float4 c2 = tex2D(_MainTex, uv + _Time.x * _CloudSpeed.zw);</span></span>
<span class="line"><span>                return (c + c2) / 2;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            float clampAndPowValue(float val, float3 minMaxPow)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float mValue = saturate((val - minMaxPow.x) / (minMaxPow.y - minMaxPow.x));</span></span>
<span class="line"><span>                return saturate(pow(mValue, minMaxPow.z));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            float4 frag (v2f i) : SV_Target</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                float4 cloudColor = BlendTwocloud(i.uv);</span></span>
<span class="line"><span>                float4 mask = tex2D(_MaskTex, i.uv);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // Flicker effect based on mask</span></span>
<span class="line"><span>                float flicker = lerp(1, sin(_Time.y * _FlickSpeed), _FlickIntensity);</span></span>
<span class="line"><span>                cloudColor.rgb += cloudColor.rgb * flicker * mask.g * _FlickLevel;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // Combine cloud and mask</span></span>
<span class="line"><span>                cloudColor.a *= mask.r;</span></span>
<span class="line"><span>                return cloudColor;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            ENDCG</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="工作原理" tabindex="-1">工作原理： <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理：&quot;">​</a></h2><p>C# 部分：<br> 初始化并填充迷雾状态的 mask 贴图。 在点击时解锁某个区域（通过 SetPixel 修改 mask 数据），并将更新后的数据传递给 Shader。</p><p>Shader 部分：<br> 实现动态云效果，通过两次采样云的贴图进行混合。 根据 C# 传入的 mask 贴图来处理迷雾的遮盖、选中闪烁等效果。 通过片段着色器（frag 函数）将云与 mask 贴图结合显示。</p><p>FogOfWarController 通常会挂载在场景中的一个管理对象上，比如一个空的 GameObject，来控制迷雾的状态和解锁行为。这个控制器主要处理地图上的迷雾数据、与玩家的交互（如点击解锁区域）以及更新迷雾贴图的内容。</p><p>FogOfWarController 和云（Fog of War）的关系：<br> C# 负责逻辑：FogOfWarController 管理迷雾的解锁状态和更新。<br> Shader 负责视觉：负责渲染迷雾（云的效果），动态显示解锁的区域。</p><p>C# 通过更新 mask 贴图（在 FogOfWarController 中完成），Shader 通过这张贴图控制云层的显示和遮罩，实现视觉上的迷雾效果。</p>`,38)])])}const g=a(t,[["render",e]]);export{y as __pageData,g as default};
