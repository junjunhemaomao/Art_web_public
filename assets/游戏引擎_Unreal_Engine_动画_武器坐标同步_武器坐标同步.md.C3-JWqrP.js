import{_ as s,o as n,c as p,a6 as e}from"./chunks/framework.CGCCzANv.js";const t="/Art_web_public/assets/rig1.DTamkO2d.gif",l="/Art_web_public/assets/rig2.BbBbnZ-O.gif",m=JSON.parse('{"title":"武器动画系统与引擎使用的设计和实现","description":"","frontmatter":{"readingTime":"9 min read"},"headers":[],"relativePath":"游戏引擎/Unreal_Engine/动画/武器坐标同步/武器坐标同步.md","filePath":"游戏引擎/Unreal_Engine/动画/武器坐标同步/武器坐标同步.md"}'),o={name:"游戏引擎/Unreal_Engine/动画/武器坐标同步/武器坐标同步.md"};function i(c,a,r,u,d,q){return n(),p("div",null,[...a[0]||(a[0]=[e('<h1 id="武器动画系统与引擎使用的设计和实现" tabindex="-1">武器动画系统与引擎使用的设计和实现 <a class="header-anchor" href="#武器动画系统与引擎使用的设计和实现" aria-label="Permalink to &quot;武器动画系统与引擎使用的设计和实现&quot;">​</a></h1><h2 id="采用ue-mannequin骨骼规范的五大核心优势" tabindex="-1">采用UE Mannequin骨骼规范的五大核心优势 <a class="header-anchor" href="#采用ue-mannequin骨骼规范的五大核心优势" aria-label="Permalink to &quot;采用UE Mannequin骨骼规范的五大核心优势&quot;">​</a></h2><p><strong>​（无需复杂适配，最大化利用引擎生态）​</strong></p><h3 id="_1-动画资源即用" tabindex="-1">1. 动画资源即用 <a class="header-anchor" href="#_1-动画资源即用" aria-label="Permalink to &quot;1. 动画资源即用&quot;">​</a></h3><p>▸ 直接兼容90%商城动画（战斗/跑动/交互）<br> ▸ 免去骨骼重定向调试，降低动画撕裂风险</p><h3 id="_2-物理系统开箱即用" tabindex="-1">2. 物理系统开箱即用 <a class="header-anchor" href="#_2-物理系统开箱即用" aria-label="Permalink to &quot;2. 物理系统开箱即用&quot;">​</a></h3><p>▸ 自动配置角色碰撞体（胶囊体/球体）<br> ▸ 内置布料锚点（<code>cloth_hip</code>/<code>cloth_chest</code>）</p><h3 id="_3-工业化开发流水线" tabindex="-1">3. 工业化开发流水线 <a class="header-anchor" href="#_3-工业化开发流水线" aria-label="Permalink to &quot;3. 工业化开发流水线&quot;">​</a></h3><p>▸ 团队协作无需重复造轮子<br> ▸ 跨项目资产复用率提升300%+</p><h3 id="_4-引擎级动画优化" tabindex="-1">4. 引擎级动画优化 <a class="header-anchor" href="#_4-引擎级动画优化" aria-label="Permalink to &quot;4. 引擎级动画优化&quot;">​</a></h3><p>▸ 原生支持Control Rig逻辑绑定<br> ▸ 完美驱动IK系统（如攀爬/瞄准姿势）</p><h3 id="_5-版本升级无忧" tabindex="-1">5. 版本升级无忧 <a class="header-anchor" href="#_5-版本升级无忧" aria-label="Permalink to &quot;5. 版本升级无忧&quot;">​</a></h3><p>▸ UE4→UE5平滑迁移（保留动画逻辑）<br> ▸ 自动继承引擎新特性（如Motion Matching）</p><p><strong>🚀 核心价值</strong>：用20%的规范遵循成本，解决80%的动画系统痛点。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>为了保持武器系统的可扩展，角色动画和武器动画解耦，使用插槽（Socket）的方案，让武器绑定系统和身体绑定系统分离</p><ul><li>如果武器只有刀剑等没动画的静态物体，两种方式区别不大</li><li>如果武器有动画，武器骨骼和身体做一体，武器没有扩展性，且和角色动画强耦合</li><li>任何静态网格体（Static Mesh）或骨骼网格体（Skeletal Mesh）都可以动态挂载到插槽上。</li></ul><blockquote><p>模拟手臂和武器。两个独立的动画系统</p></blockquote><p><img src="'+t+`" alt="alt text"></p><h2 id="插槽数据同步" tabindex="-1">插槽数据同步 <a class="header-anchor" href="#插槽数据同步" aria-label="Permalink to &quot;插槽数据同步&quot;">​</a></h2><p>需要Maya武器的挂点输出坐标信息，提供给Unreal中的插槽同步<br> json文件保存在工程路径下data文件夹下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>import maya.cmds as cmds</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取当前选择的物体</span></span>
<span class="line"><span>selected_objects = cmds.ls(selection=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 检查是否选择了物体</span></span>
<span class="line"><span>if not selected_objects:</span></span>
<span class="line"><span>    print(&quot;No objects selected. Please select a locator or control object.&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    # 获取选择的第一个物体作为挂点</span></span>
<span class="line"><span>    socket_name = selected_objects[0]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 获取物体的本地变换</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        translate = cmds.getAttr(f&quot;{socket_name}.translate&quot;)[0]</span></span>
<span class="line"><span>        rotate = cmds.getAttr(f&quot;{socket_name}.rotate&quot;)[0]</span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;Error while getting transform data for {socket_name}: {e}&quot;)</span></span>
<span class="line"><span>        exit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 构建数据</span></span>
<span class="line"><span>    socket_data = {</span></span>
<span class="line"><span>        &quot;name&quot;: socket_name,</span></span>
<span class="line"><span>        &quot;location&quot;: {&quot;x&quot;: translate[0], &quot;y&quot;: translate[1], &quot;z&quot;: translate[2]},</span></span>
<span class="line"><span>        &quot;rotation&quot;: {&quot;x&quot;: rotate[0], &quot;y&quot;: rotate[1], &quot;z&quot;: rotate[2]},</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 获取 Maya 工程路径</span></span>
<span class="line"><span>    project_path = cmds.workspace(q=True, rootDirectory=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设置导出路径 (工程路径下的 data 文件夹)</span></span>
<span class="line"><span>    export_folder = os.path.join(project_path, &quot;data&quot;)</span></span>
<span class="line"><span>    if not os.path.exists(export_folder):</span></span>
<span class="line"><span>        os.makedirs(export_folder)  # 如果文件夹不存在，则创建</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    export_path = os.path.join(export_folder, f&quot;{socket_name}_socket_data.json&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 导出到 JSON</span></span>
<span class="line"><span>    with open(export_path, &quot;w&quot;) as f:</span></span>
<span class="line"><span>        json.dump(socket_data, f, indent=4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(f&quot;Socket data exported successfully to {export_path}!&quot;)</span></span></code></pre></div><p>数据示例结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;WeaponSocket_Locator&quot;,</span></span>
<span class="line"><span>    &quot;location&quot;: {</span></span>
<span class="line"><span>        &quot;x&quot;: 34.87415616288925,</span></span>
<span class="line"><span>        &quot;y&quot;: 97.2246691574479,</span></span>
<span class="line"><span>        &quot;z&quot;: -7.911222900529021</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;rotation&quot;: {</span></span>
<span class="line"><span>        &quot;x&quot;: -22.946276037348976,</span></span>
<span class="line"><span>        &quot;y&quot;: 3.8551410351372555,</span></span>
<span class="line"><span>        &quot;z&quot;: -81.16297601679955</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Maya软件UI显示的精度有裁剪。可以看到如果手动对位是不可能精确对上的</p><h2 id="武器约束及导出" tabindex="-1">武器约束及导出 <a class="header-anchor" href="#武器约束及导出" aria-label="Permalink to &quot;武器约束及导出&quot;">​</a></h2><p>制作的关键点在于<strong>使用约束</strong>来保持角色与武器动画的一致性，而不是直接将武器作为角色骨骼的子节点。<br> 通过约束，可以独立管理角色和武器的骨骼层级，制作完成后解除约束，让武器回归原点并导出独立动画。</p><ul><li>添加一个二级控制器，用于精确调整武器与手部交互的姿态</li><li>一级控制器只用来切换约束跟随，专注于父子约束的切换。</li></ul><p>动画完成后：</p><ol><li>解除一级控制器的约束</li><li>武器一级控制器回归世界坐标原点</li><li>烘焙武器动画</li><li>导出武器动画</li></ol><p>特别要注意，武器一级控制器有没有被KEY上动画，这里是错位发生的关键点</p><blockquote><p>模拟手臂和武器。武器系统在手控制器的约束下进行动画</p></blockquote><p><img src="`+l+`" alt="alt text"><br> 如果需要频繁解除约束并将武器回归原点，可以通过 Maya 脚本简化流程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>import maya.cmds as cmds</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def bake_and_reset_selected():</span></span>
<span class="line"><span>    controller = cmds.ls(selection=True)</span></span>
<span class="line"><span>    # 获取与控制器关联的约束节点</span></span>
<span class="line"><span>    constraint_nodes = cmds.listConnections(controller, type=&quot;constraint&quot;) or []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 删除约束</span></span>
<span class="line"><span>    for constraint in constraint_nodes:</span></span>
<span class="line"><span>        if cmds.objExists(constraint):</span></span>
<span class="line"><span>            cmds.delete(constraint)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 重置控制器的位置和旋转到原点</span></span>
<span class="line"><span>    cmds.setAttr(f&quot;{controller}.translate&quot;, 0, 0, 0)</span></span>
<span class="line"><span>    cmds.setAttr(f&quot;{controller}.rotate&quot;, 0, 0, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 烘焙动画</span></span>
<span class="line"><span>    start_frame = cmds.playbackOptions(q=True, min=True)</span></span>
<span class="line"><span>    end_frame = cmds.playbackOptions(q=True, max=True)</span></span>
<span class="line"><span>    cmds.bakeResults(controller, t=(start_frame, end_frame))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(f&quot;Operation completed for {controller}.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bake_and_reset_selected()</span></span></code></pre></div><h2 id="武器约束切换" tabindex="-1">武器约束切换 <a class="header-anchor" href="#武器约束切换" aria-label="Permalink to &quot;武器约束切换&quot;">​</a></h2><p>有很多情况，角色不止一个挂载点，会从身上切换<br> 原则是把切换控制属性做在武器根控制器上，关联身体不同部位的父子约束值的切换，做到切换不同的跟随目标<br> 通过属性控制父子约束的权重，方便在武器不同的携带状态（例如手持、背挂、腰挂）之间切换。<br> 在武器根控制器上添加自定义枚举属性（例如 FollowTarget）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>import maya.cmds as cmds</span></span>
<span class="line"><span></span></span>
<span class="line"><span>selected_objects = cmds.ls(selection=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if not selected_objects:</span></span>
<span class="line"><span>    print(&quot;No objects selected. Please select a control object.&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    for obj in selected_objects:</span></span>
<span class="line"><span>        if not cmds.attributeQuery(&quot;FollowTarget&quot;, node=obj, exists=True):</span></span>
<span class="line"><span>            cmds.addAttr(</span></span>
<span class="line"><span>                obj,</span></span>
<span class="line"><span>                longName=&quot;FollowTarget&quot;,</span></span>
<span class="line"><span>                attributeType=&quot;enum&quot;,</span></span>
<span class="line"><span>                enumName=&quot;RightHand:LeftHand:Back:Waist&quot;,</span></span>
<span class="line"><span>                keyable=True</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            print(&quot;Added &#39;FollowTarget&#39; attribute to {}&quot;.format(obj))</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(&quot;Object {} already has the &#39;FollowTarget&#39; attribute.&quot;.format(obj))</span></span></code></pre></div><p>使用 Maya 的 Set Driven Key（SDK） 或脚本将 FollowTarget 属性驱动每个父子约束的权重。<br> 约束的点的命名需要按工程情况进行修改制定</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>def switch_follow_target(target):</span></span>
<span class="line"><span>    follow_targets = {</span></span>
<span class="line"><span>        &quot;RightHand&quot;: [1, 0, 0, 0],</span></span>
<span class="line"><span>        &quot;LeftHand&quot;: [0, 1, 0, 0],</span></span>
<span class="line"><span>        &quot;Back&quot;: [0, 0, 1, 0],</span></span>
<span class="line"><span>        &quot;Waist&quot;: [0, 0, 0, 1]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    weights = follow_targets.get(target, [0, 0, 0, 0])</span></span>
<span class="line"><span>    cmds.setAttr(&quot;Weapon_Root_RightHandConstraint.w0&quot;, weights[0])</span></span>
<span class="line"><span>    cmds.setAttr(&quot;Weapon_Root_LeftHandConstraint.w1&quot;, weights[1])</span></span>
<span class="line"><span>    cmds.setAttr(&quot;Weapon_Root_BackConstraint.w2&quot;, weights[2])</span></span>
<span class="line"><span>    cmds.setAttr(&quot;Weapon_Root_WaistConstraint.w3&quot;, weights[3])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>switch_follow_target(&quot;Back&quot;)  # 示例切换到背挂点</span></span></code></pre></div><p>需要说明的是：<br> 即使在 Maya 中切换了不同挂点，最终导入 Unreal 的动画，武器的位置和旋转依然只需要与 初始挂点（Socket） 对齐即可。除非有逻辑上的需要，可以操作其余插槽。<br> 在 Maya 中切换挂点的约束只是为了方便制作动画。</p><h2 id="推荐工作流" tabindex="-1">推荐工作流 <a class="header-anchor" href="#推荐工作流" aria-label="Permalink to &quot;推荐工作流&quot;">​</a></h2><ol><li>Maya 用于初始对齐<br> 在 Maya 中设置好挂点（Locator 或辅助骨骼）：<br> 帮助动画师精确制作交互动画。 导出初始位置和旋转作为 Unreal 插槽的参考。</li><li>Unreal 中完善插槽 在 Unreal 中，将 Maya 的挂点转换为插槽： 通过手动设置插槽位置和旋转，修正可能的偏差。 为插槽命名，方便蓝图逻辑调用。 在游戏逻辑中利用插槽的动态特性实现高级功能（如武器切换、挂载饰品等）。</li></ol><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>Maya 中的挂点是制作动画的工具，而 Unreal 的插槽是用于运行时动态管理挂载物体的系统。二者可以很好地结合使用：<br> 在 Maya 中完成精确的动画制作。<br> 在 Unreal 中使用插槽实现动态和实时的灵活性。<br> 这种分工可以最大限度地提升工作流效率和系统灵活性。</p><p><a href="https://www.bilibili.com/video/BV1u14y1z7kG/?spm_id_from=333.337.search-card.all.click&amp;vd_source=9cdd98cc53d87aeb4190d2743832662b" target="_blank" rel="noreferrer">3dmsx操作</a></p>`,45)])])}const _=s(o,[["render",i]]);export{m as __pageData,_ as default};
