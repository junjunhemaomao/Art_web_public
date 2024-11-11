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

