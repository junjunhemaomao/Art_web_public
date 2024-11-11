# Maya插件自动配置   
为了在不同的电脑上一键安装所有插件和脚本，可以使用Maya的"UserSetup.py"文件来自动执行自定义设置。   
这个文件位于Maya用户文档目录下的“scripts”文件夹中。   
可以在这个文件中编写Python代码，以在Maya启动时自动运行特定的脚本或加载插件。
***
### 以下是一些步骤来实现目标：
1. 将脚本保存到Maya脚本目录中。   
    >C:\Users\<用户名>\Documents\maya\<版本>\scripts或/Users/<用户名>/Library/Preferences/Autodesk/maya/<版本>/scripts
        
2. 在Maya中创建自定义按钮并将其关联到脚本。

3.  编写一个"UserSetup.py"文件，将其保存在Maya用户文档目录下的“scripts”文件夹中。在这个文件中，可以使用Python代码来自动加载插件和运行脚本。
    >导航到Maya用户文档目录。   
     Windows上，通常位于C:\Users\<用户名>\Documents\maya\<版本>\scripts。 
     (C:\Users\xiejinwu\Documents\maya\2019\scripts）  
     macOS上，通常位于/Users/<用户名>/Library/Preferences/Autodesk/maya/<版本>/

   ![](./userSetup1.jpg)
   
### 示例配置
```python
# -*- coding: utf-8 -*-
import maya.cmds as cmds

# 使用端口，连接PyCharm
if not cmds.commandPort(':4434', query=True):
    cmds.commandPort(name=':4434')

# 加载插件
def load_plugin(plugin_name):
    if not cmds.pluginInfo(plugin_name, q=True, loaded=True):
        cmds.loadPlugin(plugin_name)

# 运行自定义脚本
def run_custom_script(script_path):
    if cmds.file(script_path, q=True, exists=True):
        cmds.file(script_path, execute=True)

# 一键加载插件和运行脚本
load_plugin("jammOrientJoint")  # 替换为你的插件名称
run_custom_script(r"C:\Users\xiejinwu\Documents\maya\2019\scripts\jammOrientJoint.py")  # 替换为你的脚本路径

