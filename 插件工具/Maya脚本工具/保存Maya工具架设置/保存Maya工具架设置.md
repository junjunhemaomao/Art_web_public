# 保存Maya工具架设置,并在多台机器上同步 
维护一个健壮稳定且可迭代进化的工具架，也是生产力的复利体现。     
工具架设置又关联一系列脚本，需要整体看待。  
长期来看，主要使用Maya2019.2和Maya2023。策略是兼顾Python2.7及Python3的各种工具
## 全局配置和特定版本配置
> 电脑往往不止一个Maya版本，插件所适用的版本范围不同  
#### 全局配置
C:\Users\<用户名>\Documents\maya\ 下的文件（如 scripts、modules、plug-ins 等）是全局设置，可能会被多个 Maya 版本共享
#### 版本特定配置
C:\Users\<用户名>\Documents\maya\<版本号>\ 下的文件是针对特定版本的配置，只会影响该版本的 Maya。    
例如，prefs、scripts 和 plug-ins 文件夹中存储的是针对该版本的用户设置。
#### 加载优先级
- 当 Maya 启动时，它会首先查看版本特定的文件夹（如 maya\2019\ 或 maya\2023\），如果文件夹内存在设置，Maya 会加载这些版本特定的设置。
- 如果版本特定文件夹中没有设置，Maya 会回退到全局配置文件夹中的设置。  
#### 问题和优化
- 零散的第三方插件往往默认电脑只有一个版本的Maya，推荐的路径极有可能是全局设置
- 确保全局 scripts 文件夹中的脚本与 Maya 版本兼容。若脚本依赖于某些特定版本的功能或 API，可能会导致错误。
- 只将兼容的文件存放在全局文件夹中
## 保存自定义工具架和脚本
工具架文件位置 Maya 的工具架文件是以 .mel 格式存储的，位置通常在以下路径：
> Windows: C:\Users\<用户名>\Documents\maya\<版本号>\prefs\shelves\
> macOS: ~/Library/Preferences/Autodesk/maya/<版本号>/prefs/shelves/

脚本文件保存 自定义脚本一般存储在 Maya 的脚本目录下：
> Windows: C:\Users\<你的用户名>\Documents\maya\<版本号>\scripts\ 
> macOS: ~/Library/Preferences/Autodesk/maya/<版本号>/scripts/

userSetup.mel 和 userSetup.py 是用于用户自定义设置的文件，路径：
> C:\Users\<用户名>\Documents\maya\<版本号>\scripts\   
  
如果 userSetup.py 存在，Maya 会优先加载 Python 版本的 userSetup.py，如果没有，则会加载 userSetup.mel 文件。

## 恢复自定义工具架和脚本
1. 安装完Maya后，使用Git同步文件到C:\Users\<用户名>\Documents\maya\
4. 启动 Maya 后，工具架应会自动加载。   
![alt text](./image.png)
## 额外的maya导出工具架设置脚本
```python
# -*- coding: utf-8 -*-
import os
import shutil
import maya.cmds as cmds

def backup_shelves(custom_backup_path):
    """
    备份 Maya 自定义工具架的设置文件到指定路径。
    
    Args:
        custom_backup_path (str): 自定义备份路径。
    """
    # Maya prefs 工具架文件的默认路径
    maya_version = cmds.about(version=True)
    maya_prefs_path = os.path.join(os.path.expanduser("~"), "maya", maya_version, "prefs", "shelves")
    
    if not os.path.exists(maya_prefs_path):
        cmds.warning("Maya 工具架目录不存在: {}".format(maya_prefs_path))
        return
    
    # 确保自定义备份路径存在
    if not os.path.exists(custom_backup_path):
        os.makedirs(custom_backup_path)
    
    # 复制工具架文件到自定义路径
    for filename in os.listdir(maya_prefs_path):
        if filename.startswith("shelf_") and filename.endswith(".mel"):
            src_file = os.path.join(maya_prefs_path, filename)
            dest_file = os.path.join(custom_backup_path, filename)
            
            try:
                shutil.copy2(src_file, dest_file)
                print("已备份工具架文件: {} -> {}".format(filename, custom_backup_path))
            except Exception as e:
                cmds.warning("无法备份文件 {}: {}".format(filename, e))
    
    print("所有工具架文件已备份到: {}".format(custom_backup_path))

# 在 Maya 中运行脚本
# 设置自定义备份路径
backup_directory = os.path.expanduser(r"D:/MyMayaBackups/shelves")
backup_shelves(backup_directory)
```