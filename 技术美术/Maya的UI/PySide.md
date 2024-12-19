# Maya的自定义用户UI
Autodesk Maya 已经逐步淘汰了 PyQt4 和 PyQt2，转而在较新的版本中广泛采用 PySide (也就是 Qt for Python)。

### 原因
- 兼容性问题: PyQt4 和 PyQt2 都已经过时，无法支持最新的 Qt 版本和 Python 3。随着 Maya 转向 Python 3，这些旧的工具包无法满足需求。
- 授权限制: PyQt 使用的是 GPL 或商业许可证，而 PySide 则采用更宽松的 LGPL 许可，更适合商业应用。
- 维护问题: PyQt4 和 PyQt2 维护工作已停止，无法获得新功能或安全更新。
- 官方支持: PySide 是由 Qt 官方开发的绑定库，与 Qt 的更新保持同步。
- Python 3 支持: PySide 支持 Python 3，能够更好地与 Maya 的现代环境兼容。

### Maya 的当前状态
- 从 Maya 2017 开始，Autodesk 引入了 PySide（初代，基于 Qt 4）。
- 从 Maya 2020 开始，Autodesk 切换到了 PySide2（基于 Qt 5），以更好地支持现代化的 UI 和 Python 3。
- 更近期的 Maya 版本可能正在计划迁移到 PySide6（基于 Qt 6），以继续跟随 Qt 的最新版本

| **绑定库**     | **Qt 版本** | **Python 版本**     | **Maya 版本**          | **状态**                  |
|-----------------|-------------|----------------------|-------------------------|---------------------------|
| PyQt2          | Qt 3.x      | Python 2.4 ~ 2.6    | Maya 2009 及更早版本    | 已淘汰                   |
| PyQt4          | Qt 4.x      | Python 2.7          | Maya 2010 ~ 2016        | 已淘汰                   |
| PySide         | Qt 4.x      | Python 2.7          | Maya 2017 ~ 2019        | 被 PySide2 替代          |
| PySide2        | Qt 5.x      | Python 3.x          | Maya 2020 ~ 至今        | 当前主流版本             |
| PySide6        | Qt 6.x      | Python 3.9+         | 未来 Maya 版本（可能）  | 潜在趋势，逐步采纳中     |


### Maya 2019 后期更新   
Autodesk 对 Maya 的一些补丁或更新可能引入了 PySide2 支持（与 Qt 5 一起）。  
如果安装了更新的 Service Pack 或 Extension，Maya 的 Python 环境可能已经包含 PySide2。  
官方并未明确声明对 PySide2 的完全支持。

## 开发
在 Maya 安装后，PySide 相关模块可以直接在 Maya 的 Python 环境中导入使用，无需单独安装。

验证 PySide2 的安装来源：
```
import PySide2
print(PySide2.__file__)

# 结果：C:\Program Files\Autodesk\Maya2019\Python\lib\site-packages\PySide2\__init__.pyc
```
如果路径显示的是类似于 C:\Program Files\Autodesk\Maya2019\...，则表示是 Maya 内置的版本；如果路径是 site-packages，则表示是用户安装的。

### 版本验证 
```
try:
    from PySide2 import __version__ as pyside2_version
    print("PySide2 version:", pyside2_version)
except ImportError:
    print("PySide2 is not installed.")
```
Maya 2019 开始放弃对 PySide 初代的支持，仅包含 PySide2 的早期版本PySide2 (2.0.0~alpha0)。由于内置的 PySide2 是 Alpha 版本，但功能并不完整。  
Maya 2019 使用的是 Qt 5.6.1    
核心模块（如 QtCore, QtWidgets, QtGui）通常可靠，但高级模块（如 QtMultimedia, QtNetwork）可能需要额外验证。

### 流程 
![alt text](./image.png)   
**designer.exe**路径：C:\Program Files\Autodesk\Maya2019\bin\designer.exe