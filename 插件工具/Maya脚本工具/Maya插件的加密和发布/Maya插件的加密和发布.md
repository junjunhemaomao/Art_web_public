# Maya插件的加密和发布   
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
## python2.7的情况  
Maya2019 内置 Python 2.7    
但需要单独做Python2.7.11的环境。  
Python 2.7.11 for Windows 64 位（amd64）   
🔗 直接下载地址：   
<https://www.python.org/ftp/python/2.7.11/python-2.7.11.amd64.msi>    
安装过程中不用添加环境变量，2.7是很特殊的版本，会把已有的python版本优先级给覆盖掉   

最好新建工程，在PyCharm中配置python-2.7.11的虚拟环境     
1️⃣ 升级 pip、setuptools、wheel    
```
python -m pip install --upgrade pip setuptools wheel
```
2️⃣ 再试安装 pyarmor
```
pip install "pyarmor<7.0"
```
3️⃣ 这时候大概率成功了！验证版本号：
```
pyarmor --version
```
遇到一个问题，就是用外部python2.7编码有问题，Maya读不进去。  
最后还是用python调用Maya自身的python来进行编码  
Python2.7 脚本 batch_encrypt.py  
```python
# -*- coding: utf-8 -*-
from __future__ import print_function
import os
import subprocess
import sys

# ---------------- 配置路径 ----------------
SCRIPT_DIR = r"D:\Tool_Maya_pyarmor\scripts"        # 待加密脚本目录（全英文路径更安全）
DIST_DIR = r"D:\Tool_Maya_pyarmor\scripts_done"     # 加密输出目录

# Maya 自带 Python 路径
MAYA_PYTHON = r"C:\Program Files\Autodesk\Maya2019\bin\mayapy.exe"

# pyarmor.py 文件路径（在 Maya Python site-packages 下）
PYARMOR_PY = r"C:\Program Files\Autodesk\Maya2019\Python\lib\site-packages\pyarmor\pyarmor.py"

# ---------------- 创建输出目录 ----------------
if not os.path.exists(DIST_DIR):
    os.makedirs(DIST_DIR)

# ---------------- 批量加密 ----------------
for filename in os.listdir(SCRIPT_DIR):
    if filename.endswith(".py"):
        src_file = os.path.join(SCRIPT_DIR, filename)
        print("正在加密 {} ...".format(src_file))

        # 构造命令
        cmd = [
            MAYA_PYTHON,
            PYARMOR_PY,
            "obfuscate",
            src_file,
            "--output", DIST_DIR
        ]

        # 处理路径空格问题
        cmd = ['"{}"'.format(part) if ' ' in part else part for part in cmd]

        # 调用 mayapy 执行 pyarmor.py
        try:
            subprocess.check_call(' '.join(cmd), shell=True)
        except subprocess.CalledProcessError as e:
            print("[ERROR] 加密 {} 失败：{}".format(src_file, e))
            sys.exit(1)

# ---------------- 完成提示 ----------------
print("\n=======================================")
print("✅ 完成：已批量加密脚本到 {}".format(DIST_DIR))
print("可在 Maya 中直接导入使用，例如：")
print("from scripts_done import my_tool")
print("=======================================")
```

***
## python3的情况   
最稳妥的方式：使用 Python3 + PyArmor 环境加密脚本，再部署到 Maya   


## 步骤 1：准备 Python3 环境
推荐 3.10 或 3.11。使用 pip 安装 PyArmor：
```bash
python -m pip install pyarmor==6.7.4
```

## 步骤 2：批量加密 Python 脚本   
Python3 脚本 batch_encrypt.py：
```python
import os
import subprocess
import sys

# 配置路径
SCRIPT_DIR = r"D:\Tool_Maya_pyarmor\scripts"
DIST_DIR = r"D:\Tool_Maya_pyarmor\scripts_done"
PYARMOR_CMD = "pyarmor"  # 如果 pyarmor 在环境变量中

# 创建输出目录
os.makedirs(DIST_DIR, exist_ok=True)

# 批量加密
for filename in os.listdir(SCRIPT_DIR):
    if filename.endswith(".py"):
        src_file = os.path.join(SCRIPT_DIR, filename)
        print(f"正在加密 {src_file} ...")
        try:
            subprocess.check_call([
                PYARMOR_CMD,
                "obfuscate",
                src_file,
                "--output",
                DIST_DIR
            ])
        except subprocess.CalledProcessError as e:
            print(f"[ERROR] 加密 {src_file} 失败：{e}")
            sys.exit(1)

print("\n=======================================")
print(f"✅ 完成：已批量加密脚本到 {DIST_DIR}")
print("可在 Maya 中直接导入使用，例如：")
print("from scripts_done import my_tool")
print("=======================================")
```
可在pycharm里运行   
自动加密 **scripts** 下所有.py文件     
输出到 scripts_done    
加密后的文件包含 pytransform 运行时库，Maya2023 中可运行    

## 步骤 3：部署到 Maya
将 scripts_done 文件夹及里面的内容一起拷贝到 Maya scripts 目录，例如：  
```
C:\Users\<用户名>\Documents\maya\2023\scripts\
```
Maya 中导入示例：
```
from scripts_done import my_tool
my_tool.create_cube()
```
这里有个必要前提，需要在文件夹内创建一个空的`__init__.py`文件   
这样在一个文件夹里方便对该工具集的相关资产进行集中管理  

最后又改进了一次。在python3的工程里调用Maya自身的python，可以最大适配编码问题，也可以省掉环境问题   
```
# -*- coding: utf-8 -*-
import os
import subprocess
import sys

# ---------------- 配置 ----------------
# 待加密脚本目录
SCRIPT_DIR = r"D:\Tool_Maya_pyarmor\scripts"
# 加密输出目录
DIST_DIR = r"D:\Tool_Maya_pyarmor\scripts_done"

# Maya 安装路径列表，可以选择 Maya 2019 或 Maya 2023
MAYA_PATHS = {
    "Maya2019": r"C:\Program Files\Autodesk\Maya2019\bin\mayapy.exe",
    "Maya2023": r"C:\Program Files\Autodesk\Maya2023\bin\mayapy.exe"
}

# 选择 Maya 版本
MAYA_VERSION = "Maya2019"  # 改成 "Maya2023" 可切换
MAYA_PYTHON = MAYA_PATHS[MAYA_VERSION]

# pyarmor.py 文件路径（Maya Python site-packages 下）
PYARMOR_PY = os.path.join(
    os.path.dirname(os.path.dirname(MAYA_PYTHON)),  # Maya root
    "Python", "lib", "site-packages", "pyarmor", "pyarmor.py"
)

# ---------------- 检查路径 ----------------
if not os.path.exists(SCRIPT_DIR):
    raise FileNotFoundError(f"待加密目录不存在: {SCRIPT_DIR}")

if not os.path.exists(DIST_DIR):
    os.makedirs(DIST_DIR)

if not os.path.exists(MAYA_PYTHON):
    raise FileNotFoundError(f"Maya Python 不存在: {MAYA_PYTHON}")

if not os.path.exists(PYARMOR_PY):
    raise FileNotFoundError(f"pyarmor.py 不存在: {PYARMOR_PY}")

# ---------------- 批量加密 ----------------
for filename in os.listdir(SCRIPT_DIR):
    if filename.endswith(".py"):
        src_file = os.path.join(SCRIPT_DIR, filename)
        print(f"正在加密 {src_file} ...")

        # 构造命令
        cmd = [
            MAYA_PYTHON,
            PYARMOR_PY,
            "obfuscate",
            src_file,
            "--output", DIST_DIR
        ]

        # 处理 Windows 路径空格
        cmd = ['"{}"'.format(part) if ' ' in part else part for part in cmd]

        try:
            subprocess.check_call(' '.join(cmd), shell=True)
        except subprocess.CalledProcessError as e:
            print(f"[ERROR] 加密 {src_file} 失败: {e}")
            sys.exit(1)

# ---------------- 完成提示 ----------------
print("\n=======================================")
print(f"✅ 完成：已批量加密脚本到 {DIST_DIR}")
print("可在 Maya 中直接导入使用，例如：")
print("from scripts_done import my_tool")
print("=======================================")
```