# Maya插件的加密和发布  
## 加密脚本准备 
脚本放置的目录结构示例
```makefile
D:\Tool_Maya_pyarmor
│
├─ scripts              # 源 Python 脚本（需要加密）
│     my_tool.py
│     tool_a.py
│
├─ scripts_done         # 加密后输出目录
```
## pyarmor安装  
使用Maya内置 Python环境加密最稳妥，避免编码问题。   
Maya2019：      
```
"C:\Program Files\Autodesk\Maya2019\bin\mayapy.exe" -m pip install --upgrade --force-reinstall "pyarmor<7.0"
```
Maya2023：
```
"C:\Program Files\Autodesk\Maya2023\bin\mayapy.exe" -m pip install --upgrade --force-reinstall "pyarmor<7.0"
```
## Python加密
在python3的环境驱动Maya自身环境的python来加密。  
可以一次性生成两个版本。   
```
# -*- coding: utf-8 -*-
import os
import subprocess
import sys

# ---------------- 配置 ----------------
# 待加密脚本目录
SCRIPT_DIR = r"D:\Tool_Maya_pyarmor\scripts"
# 输出根目录（每个 Maya 版本的结果会放到 DIST_ROOT\<MayaName>）
DIST_ROOT = r"D:\Tool_Maya_pyarmor\scripts_done"

# Maya 安装路径（mayapy.exe）
MAYA_PATHS = {
    "Maya2019": r"C:\Program Files\Autodesk\Maya2019\bin\mayapy.exe",
    "Maya2023": r"C:\Program Files\Autodesk\Maya2023\bin\mayapy.exe"
}

# ---------------- 辅助函数 ----------------
def ensure_init_files(root_dir):
    """
    在 root_dir 及其所有子目录下创建空的 __init__.py（如果不存在）。
    这样可以确保输出目录被 Python 作为 package 导入。
    """
    for dirpath, dirnames, filenames in os.walk(root_dir):
        init_path = os.path.join(dirpath, "__init__.py")
        if not os.path.exists(init_path):
            try:
                # 写入一个空文件（也可以写注释）
                with open(init_path, "w", encoding="utf-8") as f:
                    f.write("# package\n")
            except Exception as e:
                print("[WARN] 无法创建 __init__.py: {} ({})".format(init_path, e))

def obfuscate_for_maya(maya_version, mayapy_path):
    print("\n=== 处理 {} ===".format(maya_version))

    if not os.path.exists(mayapy_path):
        print("[ERROR] {} 的 mayapy.exe 不存在: {}".format(maya_version, mayapy_path))
        return False

    pyarmor_py = os.path.join(
        os.path.dirname(os.path.dirname(mayapy_path)),  # Maya 根目录
        "Python", "lib", "site-packages", "pyarmor", "pyarmor.py"
    )
    if not os.path.exists(pyarmor_py):
        print("[ERROR] {} 未找到 pyarmor.py: {}".format(maya_version, pyarmor_py))
        return False

    dist_dir = os.path.join(DIST_ROOT, maya_version)
    if not os.path.exists(dist_dir):
        os.makedirs(dist_dir)

    for filename in os.listdir(SCRIPT_DIR):
        if filename.endswith(".py"):
            src_file = os.path.join(SCRIPT_DIR, filename)
            print("正在加密 {} ...".format(src_file))

            cmd = [
                mayapy_path,
                pyarmor_py,
                "obfuscate",
                src_file,
                "--output", dist_dir
            ]
            # 处理 Windows 路径空格
            cmd = ['"{}"'.format(part) if ' ' in part else part for part in cmd]

            try:
                subprocess.check_call(' '.join(cmd), shell=True)
            except subprocess.CalledProcessError as e:
                print("[ERROR] {} 加密 {} 失败: {}".format(maya_version, src_file, e))
                return False

    # 加密完成后，确保输出目录中每个目录都有 __init__.py
    ensure_init_files(dist_dir)
    print("[INFO] ✅ {} 加密完成，输出目录: {}".format(maya_version, dist_dir))
    return True

# ---------------- 主流程 ----------------
if not os.path.exists(SCRIPT_DIR):
    raise FileNotFoundError("待加密目录不存在: {}".format(SCRIPT_DIR))

if not os.path.exists(DIST_ROOT):
    os.makedirs(DIST_ROOT)

for maya_ver, mayapy in MAYA_PATHS.items():
    obfuscate_for_maya(maya_ver, mayapy)

print("\n=======================================")
print("✅ 完成：已分别生成 Maya2019 和 Maya2023 加密版本（并在每个目录及子目录创建 __init__.py）")
print("示例导入：")
print("  # Maya2019")
print("  from scripts_done.Maya2019 import my_tool")
print("  # Maya2023")
print("  from scripts_done.Maya2023 import my_tool")
print("=======================================\n")
```

## 部署到 Maya
将 scripts_done 文件夹及里面的内容一起拷贝到 Maya scripts 目录，例如：
```
C:\Users\<用户名>\Documents\maya\2023\scripts\
```
Maya 中导入示例：
```
from scripts_done import my_tool
my_tool.create_cube()
```
有个必要前提，需要在文件夹内创建一个空的`__init__.py`文件。  
这样在一个文件夹里方便对该工具集的相关资产进行集中管理。   