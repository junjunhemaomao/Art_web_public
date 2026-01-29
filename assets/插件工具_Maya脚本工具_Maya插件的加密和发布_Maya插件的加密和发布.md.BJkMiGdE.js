import{_ as s,o as n,c as p,ag as i}from"./chunks/framework.Bx1bucHt.js";const h=JSON.parse('{"title":"Maya插件的加密和发布","description":"","frontmatter":{},"headers":[],"relativePath":"插件工具/Maya脚本工具/Maya插件的加密和发布/Maya插件的加密和发布.md","filePath":"插件工具/Maya脚本工具/Maya插件的加密和发布/Maya插件的加密和发布.md"}'),t={name:"插件工具/Maya脚本工具/Maya插件的加密和发布/Maya插件的加密和发布.md"};function e(l,a,o,c,r,u){return n(),p("div",null,[...a[0]||(a[0]=[i(`<h1 id="maya插件的加密和发布" tabindex="-1">Maya插件的加密和发布 <a class="header-anchor" href="#maya插件的加密和发布" aria-label="Permalink to &quot;Maya插件的加密和发布&quot;">​</a></h1><h2 id="加密脚本准备" tabindex="-1">加密脚本准备 <a class="header-anchor" href="#加密脚本准备" aria-label="Permalink to &quot;加密脚本准备&quot;">​</a></h2><p>脚本放置的目录结构示例</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">D</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">\\Tool_Maya_pyarmor</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">│</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">├─ scripts              </span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"># 源 Python 脚本（需要加密）</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">│     my_tool.py</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">│     tool_a.py</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">│</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">├─ scripts_done         </span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"># 加密后输出目录</span></span></code></pre></div><h2 id="pyarmor安装" tabindex="-1">pyarmor安装 <a class="header-anchor" href="#pyarmor安装" aria-label="Permalink to &quot;pyarmor安装&quot;">​</a></h2><p>使用Maya内置 Python环境加密最稳妥，避免编码问题。<br> Maya2019：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&quot;C:\\Program Files\\Autodesk\\Maya2019\\bin\\mayapy.exe&quot; -m pip install --upgrade --force-reinstall &quot;pyarmor&lt;7.0&quot;</span></span></code></pre></div><p>Maya2023：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&quot;C:\\Program Files\\Autodesk\\Maya2023\\bin\\mayapy.exe&quot; -m pip install --upgrade --force-reinstall &quot;pyarmor&lt;7.0&quot;</span></span></code></pre></div><h2 id="python加密" tabindex="-1">Python加密 <a class="header-anchor" href="#python加密" aria-label="Permalink to &quot;Python加密&quot;">​</a></h2><p>在python3的环境驱动Maya自身环境的python来加密。<br> 可以一次性生成两个版本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import subprocess</span></span>
<span class="line"><span>import shutil</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ---------------- 配置 ----------------</span></span>
<span class="line"><span># 待加密脚本目录</span></span>
<span class="line"><span>SCRIPT_DIR = r&quot;D:\\Tool_Maya_pyarmor\\scripts&quot;</span></span>
<span class="line"><span># 输出根目录（每个 Maya 版本的结果会放到 DIST_ROOT\\&lt;MayaName&gt;）</span></span>
<span class="line"><span>DIST_ROOT = r&quot;D:\\Tool_Maya_pyarmor\\scripts_done&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Maya 安装路径（mayapy.exe）</span></span>
<span class="line"><span>MAYA_PATHS = {</span></span>
<span class="line"><span>    &quot;Maya2019&quot;: r&quot;C:\\Program Files\\Autodesk\\Maya2019\\bin\\mayapy.exe&quot;,</span></span>
<span class="line"><span>    &quot;Maya2023&quot;: r&quot;C:\\Program Files\\Autodesk\\Maya2023\\bin\\mayapy.exe&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ---------------- 辅助函数 ----------------</span></span>
<span class="line"><span>def ensure_init_files(root_dir):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    在 root_dir 及其所有子目录下创建空的 __init__.py（如果不存在）。</span></span>
<span class="line"><span>    这样可以确保输出目录被 Python 作为 package 导入。</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    for dirpath, dirnames, filenames in os.walk(root_dir):</span></span>
<span class="line"><span>        init_path = os.path.join(dirpath, &quot;__init__.py&quot;)</span></span>
<span class="line"><span>        if not os.path.exists(init_path):</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                with open(init_path, &quot;w&quot;, encoding=&quot;utf-8&quot;) as f:</span></span>
<span class="line"><span>                    f.write(&quot;# package\\n&quot;)</span></span>
<span class="line"><span>            except Exception as e:</span></span>
<span class="line"><span>                print(&quot;[WARN] 无法创建 __init__.py: {} ({})&quot;.format(init_path, e))</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def obfuscate_for_maya(maya_version, mayapy_path):</span></span>
<span class="line"><span>    print(&quot;\\n=== 处理 {} ===&quot;.format(maya_version))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not os.path.exists(mayapy_path):</span></span>
<span class="line"><span>        print(&quot;[ERROR] {} 的 mayapy.exe 不存在: {}&quot;.format(maya_version, mayapy_path))</span></span>
<span class="line"><span>        return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pyarmor_py = os.path.join(</span></span>
<span class="line"><span>        os.path.dirname(os.path.dirname(mayapy_path)),  # Maya 根目录</span></span>
<span class="line"><span>        &quot;Python&quot;, &quot;lib&quot;, &quot;site-packages&quot;, &quot;pyarmor&quot;, &quot;pyarmor.py&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    if not os.path.exists(pyarmor_py):</span></span>
<span class="line"><span>        print(&quot;[ERROR] {} 未找到 pyarmor.py: {}&quot;.format(maya_version, pyarmor_py))</span></span>
<span class="line"><span>        return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    dist_dir = os.path.join(DIST_ROOT, maya_version)</span></span>
<span class="line"><span>    os.makedirs(dist_dir, exist_ok=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # --- 执行加密 ---</span></span>
<span class="line"><span>    for filename in os.listdir(SCRIPT_DIR):</span></span>
<span class="line"><span>        if filename.endswith(&quot;.py&quot;):</span></span>
<span class="line"><span>            src_file = os.path.join(SCRIPT_DIR, filename)</span></span>
<span class="line"><span>            print(&quot;正在加密 {} ...&quot;.format(src_file))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            cmd = [mayapy_path, pyarmor_py, &quot;obfuscate&quot;, src_file, &quot;--output&quot;, dist_dir]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                subprocess.check_call(cmd)</span></span>
<span class="line"><span>            except subprocess.CalledProcessError as e:</span></span>
<span class="line"><span>                print(&quot;[ERROR] {} 加密 {} 失败: {}&quot;.format(maya_version, src_file, e))</span></span>
<span class="line"><span>                return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # --- 移动 pytransform 到平级目录 ---</span></span>
<span class="line"><span>    nested_runtime = os.path.join(dist_dir, &quot;poly&quot;, &quot;pytransform&quot;)</span></span>
<span class="line"><span>    flat_runtime = os.path.join(dist_dir, &quot;pytransform&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if os.path.exists(nested_runtime):</span></span>
<span class="line"><span>        if os.path.exists(flat_runtime):</span></span>
<span class="line"><span>            shutil.rmtree(flat_runtime)</span></span>
<span class="line"><span>        shutil.move(nested_runtime, flat_runtime)</span></span>
<span class="line"><span>        print(&quot;[INFO] 已把 pytransform 移到平级目录: {}&quot;.format(flat_runtime))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 确保输出目录中有 __init__.py</span></span>
<span class="line"><span>    ensure_init_files(dist_dir)</span></span>
<span class="line"><span>    print(&quot;[INFO] ✅ {} 加密完成，输出目录: {}&quot;.format(maya_version, dist_dir))</span></span>
<span class="line"><span>    return True</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># ---------------- 主流程 ----------------</span></span>
<span class="line"><span>if not os.path.exists(SCRIPT_DIR):</span></span>
<span class="line"><span>    raise FileNotFoundError(&quot;待加密目录不存在: {}&quot;.format(SCRIPT_DIR))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if not os.path.exists(DIST_ROOT):</span></span>
<span class="line"><span>    os.makedirs(DIST_ROOT)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for maya_ver, mayapy in MAYA_PATHS.items():</span></span>
<span class="line"><span>    obfuscate_for_maya(maya_ver, mayapy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;\\n=======================================&quot;)</span></span>
<span class="line"><span>print(&quot;✅ 完成：已分别生成 Maya2019 和 Maya2023 加密版本（并在每个目录及子目录创建 __init__.py）&quot;)</span></span>
<span class="line"><span>print(&quot;示例导入：&quot;)</span></span>
<span class="line"><span>print(&quot;  # Maya2019&quot;)</span></span>
<span class="line"><span>print(&quot;  from scripts_done.Maya2019 import my_tool&quot;)</span></span>
<span class="line"><span>print(&quot;  # Maya2023&quot;)</span></span>
<span class="line"><span>print(&quot;  from scripts_done.Maya2023 import my_tool&quot;)</span></span>
<span class="line"><span>print(&quot;=======================================\\n&quot;)</span></span></code></pre></div><h2 id="部署到-maya" tabindex="-1">部署到 Maya <a class="header-anchor" href="#部署到-maya" aria-label="Permalink to &quot;部署到 Maya&quot;">​</a></h2><p>PyArmor 的运行时 pytransform 目录必须位于 顶层可直接 import 到的路径，而不是嵌套在包里<br> 有个必要前提，需要在文件夹内创建一个空的<code>__init__.py</code>文件。<br> 这样在一个文件夹里方便对该工具集的相关资产进行集中管理。<br> 将 scripts_done 文件夹及里面的内容一起拷贝到 Maya scripts 目录，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\&lt;用户名&gt;\\Documents\\maya\\2023\\scripts\\</span></span></code></pre></div><p>Maya 中导入示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>from scripts_done import my_tool</span></span>
<span class="line"><span>my_tool.create_cube()</span></span></code></pre></div>`,17)])])}const d=s(t,[["render",e]]);export{h as __pageData,d as default};
