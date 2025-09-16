# Maya插件的加密和发布   
Maya2019 内置 Python 2.7    
Python2.7 已过期，PyArmor 在此环境下加密容易报错。Anaconda单独做环境。  
Python 2.7.11 for Windows 64 位（amd64）   
🔗 直接下载地址：   
<https://www.python.org/ftp/python/2.7.11/python-2.7.11.amd64.msi>      
```
conda create -n py27 python=2.7
conda activate py27
```
安装 PyArmor 6.7.4：
```
安装 PyArmor 6.7.4：
```
pycharm中配置Anaconda的python2.7的环境

***
## 以下方法适用于python3的环境   
最稳妥的方式：使用 Python3 + PyArmor 环境加密脚本，再部署到 Maya   

## 目录结构示例
```makefile
D:\Tool_Maya_pyarmor
│
├─ scripts              # 源 Python 脚本（需要加密）
│     my_tool.py
│     tool_a.py
│
├─ scripts_done         # 加密后输出目录
```
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