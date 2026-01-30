import{_ as s,o as a,c as p,aj as e}from"./chunks/framework.C7QJCfd1.js";const l="/Art_web_public/assets/image.D8TtEzIl.png",h=JSON.parse('{"title":"光滑组工具","description":"","frontmatter":{},"headers":[],"relativePath":"插件工具/3dsMax脚本工具/光滑组工具/光滑组工具.md","filePath":"插件工具/3dsMax脚本工具/光滑组工具/光滑组工具.md"}'),i={name:"插件工具/3dsMax脚本工具/光滑组工具/光滑组工具.md"};function o(t,n,c,r,d,u){return a(),p("div",null,[...n[0]||(n[0]=[e('<h1 id="光滑组工具" tabindex="-1">光滑组工具 <a class="header-anchor" href="#光滑组工具" aria-label="Permalink to &quot;光滑组工具&quot;">​</a></h1><blockquote><p>根据UV断开的切线，自动设置模型光滑组，用于高低模烘焙</p></blockquote><p><img src="'+l+`" alt="alt text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>(   </span></span>
<span class="line"><span>    -- Helper function to get the index of the first true element in a bit array</span></span>
<span class="line"><span>    function getFirstActiveInBitarray aBitArray =</span></span>
<span class="line"><span>    (</span></span>
<span class="line"><span>        for i = 1 to aBitArray.count do</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            if aBitArray[i] == true do return i</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        -- return 0 if none are found active</span></span>
<span class="line"><span>        return 0</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    -- Actually performs the operation on the currently selected object</span></span>
<span class="line"><span>    function ConvertUVIslandsToSmoothingGroups aUVChannel =</span></span>
<span class="line"><span>    (</span></span>
<span class="line"><span>        if $ != undefined then</span></span>
<span class="line"><span>        (           </span></span>
<span class="line"><span>            modPanel.addModToSelection(Edit_Poly()) ui:on</span></span>
<span class="line"><span>            local editPoly = $.modifiers[#edit_poly]</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            local facesDone = #{} -- empty bit array since no faces are done</span></span>
<span class="line"><span>            local allFaces = #{1.. polyop.getNumFaces $}</span></span>
<span class="line"><span>            local facesNotDone = allFaces</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            -- Stick on a UVW modifier</span></span>
<span class="line"><span>            modPanel.addModToSelection (Unwrap_UVW ()) ui:on</span></span>
<span class="line"><span>            local uv_modifier = $.modifiers[#unwrap_uvw]                </span></span>
<span class="line"><span>            uv_modifier.unwrap2.setTVSubObjectMode 3 -- Use face selection</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>            if (aUVChannel != 1) then -- Only need to mess with this if it&#39;s not default</span></span>
<span class="line"><span>            (</span></span>
<span class="line"><span>                uv_modifier.unwrap.setMapChannel aUVChannel</span></span>
<span class="line"><span>                uv_modifier.unwrap.reset()</span></span>
<span class="line"><span>                forcecompleteredraw dodisabled:true -- Hacky fix for a bug, see http://www.polycount.com/forum/showthread.php?t=97059</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>            local uv_islands = #() -- Empty array that will store bitarrays of all our UV islands</span></span>
<span class="line"><span>            local abort = false -- Abort boolean for breaking out of the loop and avoid the performance penalty of using break</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            -- Build array of UV islands</span></span>
<span class="line"><span>            while (facesNotDone.isEmpty == false and abort == false) do</span></span>
<span class="line"><span>            (               </span></span>
<span class="line"><span>                nextFace = getFirstActiveInBitarray facesNotDone -- Get next face that hasn&#39;t been processed yet</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                uv_modifier.unwrap2.selectFaces #{nextFace} -- Select that face</span></span>
<span class="line"><span>                uv_modifier.unwrap2.selectElement() -- Grow selection to element</span></span>
<span class="line"><span>                uv_island = uv_modifier.unwrap2.getSelectedFaces()  -- Get a bitaray of all those faces (representing a UV island)</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                -- Update faces done/not done bit masks</span></span>
<span class="line"><span>                facesDone += uv_island</span></span>
<span class="line"><span>                facesNotDone -= uv_island</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                insertItem uv_island uv_islands (uv_islands.count + 1) -- Add that bitarray to our array of UV islands</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                if uv_islands.count &gt; allFaces.count then -- this should never happen, if it does means we are in an infinite loop and will crash max, so bail</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    abort = true</span></span>
<span class="line"><span>                    print (&quot;Error, calculated too many islands, something went wrong&quot;)</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            deletemodifier $ uv_modifier -- Don&#39;t need the UV modifier anymore</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            editPoly.autoSmoothThreshold = 180.0 -- If we auto smooth, it should always be in the same smoothing group</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            for island = 1 to uv_islands.count do -- Select and auto smooth each UV island</span></span>
<span class="line"><span>            (</span></span>
<span class="line"><span>                editPoly.SetSelection #Face uv_islands[island]</span></span>
<span class="line"><span>                editPoly.ButtonOp #Autosmooth</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    local isOpen = false -- Store if the rollout is open or closed</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    rollout UV2SmoothRollout &quot;UV_2_Smooth&quot;</span></span>
<span class="line"><span>    (</span></span>
<span class="line"><span>        spinner UVChannelSpinner &quot;UV Channel&quot; range:[1,99,1] type:#integer</span></span>
<span class="line"><span>        button GoBtn &quot;        Run        &quot;</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        on GoBtn pressed do</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            ConvertUVIslandsToSmoothingGroups (UVChannelSpinner.value)</span></span>
<span class="line"><span>            destroyDialog UV2SmoothRollout -- Close rollout after running</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        on UV2SmoothRollout close do</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            isOpen = false</span></span>
<span class="line"><span>            updateToolbarButtons() -- Update the toolbar icon when closing</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    on execute do</span></span>
<span class="line"><span>    (</span></span>
<span class="line"><span>        if isOpen then --if open, close it</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            destroyDialog UV2SmoothRollout</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        else --if closed, open it</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            createDialog UV2SmoothRollout</span></span>
<span class="line"><span>            isOpen = true</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    on isChecked return isOpen --return the flag</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    on isEnabled do</span></span>
<span class="line"><span>    (</span></span>
<span class="line"><span>        -- Need an editable poly selected to work</span></span>
<span class="line"><span>        if $ == undefined then</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            -- Close the window if it&#39;s open and it shouldn&#39;t be</span></span>
<span class="line"><span>            if (isOpen) then</span></span>
<span class="line"><span>                destroyDialog UV2SmoothRollout</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>            return false</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            return true</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,4)])])}const m=s(i,[["render",o]]);export{h as __pageData,m as default};
