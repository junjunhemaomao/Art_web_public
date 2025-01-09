# 从Blender批量自动导出fbx

## 添加blender的系统环境变量。   
将 Blender 安装目录路径（不包括 blender.exe）添加到 Path。   
![alt text](./image.png)   
### 测试 
```
blender --version
```
![alt text](./image-1.png)   

## 批处理脚本
export_fbx_in_place.py   
对路径没要求，只是命令行参数需要注意下脚本保存的位置   
```
import bpy
import os
import sys
import logging
from datetime import datetime


# 设置日志
def setup_logging():
    """设置日志配置"""
    log_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'logs')
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)

    log_file = os.path.join(log_dir, f'export_log_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file, encoding='utf-8'),
            logging.StreamHandler()
        ]
    )
    return logging.getLogger(__name__)


def clean_shape_keys():
    """清理无效的Shape Keys"""
    for obj in bpy.data.objects:
        if obj.type == 'MESH' and obj.data.shape_keys:
            try:
                obj.shape_key_clear()
                logger.info(f"已清理对象 {obj.name} 的Shape Keys")
            except Exception as e:
                logger.warning(f"清理 {obj.name} 的Shape Keys时出错: {str(e)}")


def remove_ik_constraints():
    """删除IK约束以避免依赖循环"""
    for obj in bpy.data.objects:
        if obj.type == 'ARMATURE':
            for bone in obj.pose.bones:
                constraints_to_remove = [c for c in bone.constraints if c.type == 'IK']
                for const in constraints_to_remove:
                    bone.constraints.remove(const)
                if constraints_to_remove:
                    logger.info(f"已移除骨骼 {bone.name} 的IK约束")


def remove_armature_and_clean():
    """
    清理场景中的骨骼和相关数据
    """
    # 确保所有对象都可见
    for obj in bpy.data.objects:
        obj.hide_viewport = False
        obj.hide_render = False

    # 进入对象模式
    if bpy.context.active_object and bpy.context.active_object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')

    # 删除所有骨骼对象和清理网格数据
    for obj in bpy.data.objects:
        if obj.type == 'ARMATURE':
            bpy.data.objects.remove(obj, do_unlink=True)
            logger.info(f"已删除骨骼对象: {obj.name}")
        elif obj.type == 'MESH':
            # 清理约束
            obj.constraints.clear()
            # 清理修改器
            obj.modifiers.clear()
            # 清理顶点组
            obj.vertex_groups.clear()
            logger.info(f"已清理网格对象: {obj.name}")

    # 应用所有变换
    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            try:
                bpy.context.view_layer.objects.active = obj
                obj.select_set(True)
                bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
                obj.select_set(False)
                logger.info(f"已应用对象变换: {obj.name}")
            except Exception as e:
                logger.warning(f"应用变换到 {obj.name} 时出错: {str(e)}")


def export_fbx_in_place(root_folder):
    """
    递归遍历文件夹，导出FBX文件

    Args:
        root_folder (str): 要处理的根文件夹路径
    """
    logger.info(f"开始处理文件夹: {root_folder}")

    # 记录处理的文件数量
    processed = 0
    success = 0
    failed = 0

    for root, dirs, files in os.walk(root_folder):
        for file in files:
            if file.endswith(".blend"):
                processed += 1
                blend_file_path = os.path.join(root, file)
                fbx_file_path = os.path.join(root, os.path.splitext(file)[0] + ".fbx")

                # 如果目标文件已存在，则跳过
                if os.path.exists(fbx_file_path):
                    logger.info(f"跳过已存在的文件: {fbx_file_path}")
                    continue

                logger.info(f"正在处理: {blend_file_path}")

                try:
                    # 打开blend文件
                    bpy.ops.wm.open_mainfile(filepath=blend_file_path)

                    # 清理工作
                    clean_shape_keys()
                    remove_ik_constraints()
                    remove_armature_and_clean()

                    # 导出FBX
                    bpy.ops.export_scene.fbx(
                        filepath=fbx_file_path,
                        use_selection=False,
                        use_active_collection=False,
                        use_mesh_modifiers=True,
                        mesh_smooth_type='OFF',
                        use_armature_deform_only=True,
                        add_leaf_bones=False,
                        bake_anim=False,
                        use_metadata=True
                    )

                    logger.info(f"成功导出: {fbx_file_path}")
                    success += 1

                except Exception as e:
                    logger.error(f"处理 {blend_file_path} 时出错: {str(e)}")
                    failed += 1
                    continue

    # 输出统计信息
    logger.info(f"""
处理完成! 统计信息:
- 总处理文件数: {processed}
- 成功数: {success}
- 失败数: {failed}
""")


if __name__ == "__main__":
    # 设置日志
    logger = setup_logging()

    # 检查命令行参数
    if len(sys.argv) < 4:
        logger.error("用法: blender --background --python script.py -- <input_root>")
        sys.exit(1)

    # 获取输入路径
    input_root = sys.argv[-1]

    if not os.path.exists(input_root):
        logger.error(f"输入路径不存在: {input_root}")
        sys.exit(1)

    # 执行导出
    try:
        export_fbx_in_place(input_root)
    except Exception as e:
        logger.error(f"执行过程中发生错误: {str(e)}")
        sys.exit(1)

```
## 命令行调用处理
```
"C:\Program Files\Blender Foundation\Blender 4.3\blender.exe" --background --python "E:\blender2FBX\export_fbx_in_place.py" -- "D:\角色"
```
![alt text](./image-2.png)

## 从一个Blender文件批量导出多个文件
<https://github.com/mrtripie/Blender-Super-Batch-Export?tab=readme-ov-file>