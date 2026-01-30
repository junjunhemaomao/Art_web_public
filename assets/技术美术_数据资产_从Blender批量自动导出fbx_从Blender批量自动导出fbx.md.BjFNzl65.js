import{_ as s,o as a,c as p,aa as e}from"./chunks/framework.D4-DbJe5.js";const l="/Art_web_public/assets/image.DiX9kdNM.png",i="/Art_web_public/assets/image-1.DpJYojAx.png",o="/Art_web_public/assets/image-2.0OheH4d4.png",g=JSON.parse('{"title":"从Blender批量自动导出fbx","description":"","frontmatter":{"readingTime":"4 min read"},"headers":[],"relativePath":"技术美术/数据资产/从Blender批量自动导出fbx/从Blender批量自动导出fbx.md","filePath":"技术美术/数据资产/从Blender批量自动导出fbx/从Blender批量自动导出fbx.md"}'),t={name:"技术美术/数据资产/从Blender批量自动导出fbx/从Blender批量自动导出fbx.md"};function c(r,n,_,u,d,b){return a(),p("div",null,[...n[0]||(n[0]=[e('<h1 id="从blender批量自动导出fbx" tabindex="-1">从Blender批量自动导出fbx <a class="header-anchor" href="#从blender批量自动导出fbx" aria-label="Permalink to &quot;从Blender批量自动导出fbx&quot;">​</a></h1><h2 id="添加blender的系统环境变量。" tabindex="-1">添加blender的系统环境变量。 <a class="header-anchor" href="#添加blender的系统环境变量。" aria-label="Permalink to &quot;添加blender的系统环境变量。&quot;">​</a></h2><p>将 Blender 安装目录路径（不包括 blender.exe）添加到 Path。<br><img src="'+l+'" alt="alt text"></p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>blender --version</span></span></code></pre></div><p><img src="'+i+`" alt="alt text"></p><h2 id="批处理脚本" tabindex="-1">批处理脚本 <a class="header-anchor" href="#批处理脚本" aria-label="Permalink to &quot;批处理脚本&quot;">​</a></h2><p>export_fbx_in_place.py<br> 对路径没要求，只是命令行参数需要注意下脚本保存的位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>import bpy</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import logging</span></span>
<span class="line"><span>from datetime import datetime</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置日志</span></span>
<span class="line"><span>def setup_logging():</span></span>
<span class="line"><span>    &quot;&quot;&quot;设置日志配置&quot;&quot;&quot;</span></span>
<span class="line"><span>    log_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), &#39;logs&#39;)</span></span>
<span class="line"><span>    if not os.path.exists(log_dir):</span></span>
<span class="line"><span>        os.makedirs(log_dir)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_file = os.path.join(log_dir, f&#39;export_log_{datetime.now().strftime(&quot;%Y%m%d_%H%M%S&quot;)}.txt&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    logging.basicConfig(</span></span>
<span class="line"><span>        level=logging.INFO,</span></span>
<span class="line"><span>        format=&#39;%(asctime)s - %(levelname)s - %(message)s&#39;,</span></span>
<span class="line"><span>        handlers=[</span></span>
<span class="line"><span>            logging.FileHandler(log_file, encoding=&#39;utf-8&#39;),</span></span>
<span class="line"><span>            logging.StreamHandler()</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    return logging.getLogger(__name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def clean_shape_keys():</span></span>
<span class="line"><span>    &quot;&quot;&quot;清理无效的Shape Keys&quot;&quot;&quot;</span></span>
<span class="line"><span>    for obj in bpy.data.objects:</span></span>
<span class="line"><span>        if obj.type == &#39;MESH&#39; and obj.data.shape_keys:</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                obj.shape_key_clear()</span></span>
<span class="line"><span>                logger.info(f&quot;已清理对象 {obj.name} 的Shape Keys&quot;)</span></span>
<span class="line"><span>            except Exception as e:</span></span>
<span class="line"><span>                logger.warning(f&quot;清理 {obj.name} 的Shape Keys时出错: {str(e)}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def remove_ik_constraints():</span></span>
<span class="line"><span>    &quot;&quot;&quot;删除IK约束以避免依赖循环&quot;&quot;&quot;</span></span>
<span class="line"><span>    for obj in bpy.data.objects:</span></span>
<span class="line"><span>        if obj.type == &#39;ARMATURE&#39;:</span></span>
<span class="line"><span>            for bone in obj.pose.bones:</span></span>
<span class="line"><span>                constraints_to_remove = [c for c in bone.constraints if c.type == &#39;IK&#39;]</span></span>
<span class="line"><span>                for const in constraints_to_remove:</span></span>
<span class="line"><span>                    bone.constraints.remove(const)</span></span>
<span class="line"><span>                if constraints_to_remove:</span></span>
<span class="line"><span>                    logger.info(f&quot;已移除骨骼 {bone.name} 的IK约束&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def remove_armature_and_clean():</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    清理场景中的骨骼和相关数据</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    # 确保所有对象都可见</span></span>
<span class="line"><span>    for obj in bpy.data.objects:</span></span>
<span class="line"><span>        obj.hide_viewport = False</span></span>
<span class="line"><span>        obj.hide_render = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 进入对象模式</span></span>
<span class="line"><span>    if bpy.context.active_object and bpy.context.active_object.mode != &#39;OBJECT&#39;:</span></span>
<span class="line"><span>        bpy.ops.object.mode_set(mode=&#39;OBJECT&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 删除所有骨骼对象和清理网格数据</span></span>
<span class="line"><span>    for obj in bpy.data.objects:</span></span>
<span class="line"><span>        if obj.type == &#39;ARMATURE&#39;:</span></span>
<span class="line"><span>            bpy.data.objects.remove(obj, do_unlink=True)</span></span>
<span class="line"><span>            logger.info(f&quot;已删除骨骼对象: {obj.name}&quot;)</span></span>
<span class="line"><span>        elif obj.type == &#39;MESH&#39;:</span></span>
<span class="line"><span>            # 清理约束</span></span>
<span class="line"><span>            obj.constraints.clear()</span></span>
<span class="line"><span>            # 清理修改器</span></span>
<span class="line"><span>            obj.modifiers.clear()</span></span>
<span class="line"><span>            # 清理顶点组</span></span>
<span class="line"><span>            obj.vertex_groups.clear()</span></span>
<span class="line"><span>            logger.info(f&quot;已清理网格对象: {obj.name}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 应用所有变换</span></span>
<span class="line"><span>    for obj in bpy.data.objects:</span></span>
<span class="line"><span>        if obj.type == &#39;MESH&#39;:</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                bpy.context.view_layer.objects.active = obj</span></span>
<span class="line"><span>                obj.select_set(True)</span></span>
<span class="line"><span>                bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)</span></span>
<span class="line"><span>                obj.select_set(False)</span></span>
<span class="line"><span>                logger.info(f&quot;已应用对象变换: {obj.name}&quot;)</span></span>
<span class="line"><span>            except Exception as e:</span></span>
<span class="line"><span>                logger.warning(f&quot;应用变换到 {obj.name} 时出错: {str(e)}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def export_fbx_in_place(root_folder):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    递归遍历文件夹，导出FBX文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Args:</span></span>
<span class="line"><span>        root_folder (str): 要处理的根文件夹路径</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    logger.info(f&quot;开始处理文件夹: {root_folder}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 记录处理的文件数量</span></span>
<span class="line"><span>    processed = 0</span></span>
<span class="line"><span>    success = 0</span></span>
<span class="line"><span>    failed = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for root, dirs, files in os.walk(root_folder):</span></span>
<span class="line"><span>        for file in files:</span></span>
<span class="line"><span>            if file.endswith(&quot;.blend&quot;):</span></span>
<span class="line"><span>                processed += 1</span></span>
<span class="line"><span>                blend_file_path = os.path.join(root, file)</span></span>
<span class="line"><span>                fbx_file_path = os.path.join(root, os.path.splitext(file)[0] + &quot;.fbx&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                # 如果目标文件已存在，则跳过</span></span>
<span class="line"><span>                if os.path.exists(fbx_file_path):</span></span>
<span class="line"><span>                    logger.info(f&quot;跳过已存在的文件: {fbx_file_path}&quot;)</span></span>
<span class="line"><span>                    continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                logger.info(f&quot;正在处理: {blend_file_path}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                try:</span></span>
<span class="line"><span>                    # 打开blend文件</span></span>
<span class="line"><span>                    bpy.ops.wm.open_mainfile(filepath=blend_file_path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 清理工作</span></span>
<span class="line"><span>                    clean_shape_keys()</span></span>
<span class="line"><span>                    remove_ik_constraints()</span></span>
<span class="line"><span>                    remove_armature_and_clean()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 导出FBX</span></span>
<span class="line"><span>                    bpy.ops.export_scene.fbx(</span></span>
<span class="line"><span>                        filepath=fbx_file_path,</span></span>
<span class="line"><span>                        use_selection=False,</span></span>
<span class="line"><span>                        use_active_collection=False,</span></span>
<span class="line"><span>                        use_mesh_modifiers=True,</span></span>
<span class="line"><span>                        mesh_smooth_type=&#39;OFF&#39;,</span></span>
<span class="line"><span>                        use_armature_deform_only=True,</span></span>
<span class="line"><span>                        add_leaf_bones=False,</span></span>
<span class="line"><span>                        bake_anim=False,</span></span>
<span class="line"><span>                        use_metadata=True</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    logger.info(f&quot;成功导出: {fbx_file_path}&quot;)</span></span>
<span class="line"><span>                    success += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                except Exception as e:</span></span>
<span class="line"><span>                    logger.error(f&quot;处理 {blend_file_path} 时出错: {str(e)}&quot;)</span></span>
<span class="line"><span>                    failed += 1</span></span>
<span class="line"><span>                    continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 输出统计信息</span></span>
<span class="line"><span>    logger.info(f&quot;&quot;&quot;</span></span>
<span class="line"><span>处理完成! 统计信息:</span></span>
<span class="line"><span>- 总处理文件数: {processed}</span></span>
<span class="line"><span>- 成功数: {success}</span></span>
<span class="line"><span>- 失败数: {failed}</span></span>
<span class="line"><span>&quot;&quot;&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    # 设置日志</span></span>
<span class="line"><span>    logger = setup_logging()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 检查命令行参数</span></span>
<span class="line"><span>    if len(sys.argv) &lt; 4:</span></span>
<span class="line"><span>        logger.error(&quot;用法: blender --background --python script.py -- &lt;input_root&gt;&quot;)</span></span>
<span class="line"><span>        sys.exit(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 获取输入路径</span></span>
<span class="line"><span>    input_root = sys.argv[-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not os.path.exists(input_root):</span></span>
<span class="line"><span>        logger.error(f&quot;输入路径不存在: {input_root}&quot;)</span></span>
<span class="line"><span>        sys.exit(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 执行导出</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        export_fbx_in_place(input_root)</span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        logger.error(f&quot;执行过程中发生错误: {str(e)}&quot;)</span></span>
<span class="line"><span>        sys.exit(1)</span></span></code></pre></div><h2 id="命令行调用处理" tabindex="-1">命令行调用处理 <a class="header-anchor" href="#命令行调用处理" aria-label="Permalink to &quot;命令行调用处理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&quot;C:\\Program Files\\Blender Foundation\\Blender 4.3\\blender.exe&quot; --background --python &quot;E:\\blender2FBX\\export_fbx_in_place.py&quot; -- &quot;D:\\角色&quot;</span></span></code></pre></div><p><img src="`+o+'" alt="alt text"></p><h2 id="从一个blender文件批量导出多个文件" tabindex="-1">从一个Blender文件批量导出多个文件 <a class="header-anchor" href="#从一个blender文件批量导出多个文件" aria-label="Permalink to &quot;从一个Blender文件批量导出多个文件&quot;">​</a></h2><p><a href="https://github.com/mrtripie/Blender-Super-Batch-Export?tab=readme-ov-file" target="_blank" rel="noreferrer">https://github.com/mrtripie/Blender-Super-Batch-Export?tab=readme-ov-file</a></p>',14)])])}const m=s(t,[["render",c]]);export{g as __pageData,m as default};
