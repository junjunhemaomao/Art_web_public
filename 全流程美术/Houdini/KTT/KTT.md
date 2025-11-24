# KTT 
![alt text](./image-2.png)   
KTT(Kruger Terrain Tools) 是适用于 Houdini 20.5 + 的地形生成工具集，革新了 Houdini 地形制作流程，兼具软件灵活性与高度场建模创新功能，支持多系统且提供永久授权。   
[KTT for Houdini](https://samk9632.gumroad.com/l/KTTforHoudini)   
### 核心功能
1. 含50+自定义地形处理节点，覆盖从初始形状搭建、细节优化、纹理制作到可视化与导出的全流程。
2. 具备GPU加速侵蚀模拟、全流程精准控制、分辨率无关模拟（实时调整分辨率不改变外观）。
3. 高效处理高分辨率地形（最高支持16k×16k及以上），支持Windows、Linux、MacOS系统。
4. 每个节点均配备文档和示例，提供永久授权，无需续费或付费更新。

---

### 常见问题要点
- 无需Houdini使用经验，手册可引导新手入门；与Houdini原生高度场工具兼容，可接入现有项目。
- 非商业版导出分辨率限制源于Houdini Apprentice，KTT本身不限制；KTT授权无法解除Houdini自身的授权限制。
- 低级别授权升级至高等级时，Gumroad会自动折扣，避免重复付费；非商业版HDA会使Houdini临时切换为Apprentice功能。
- 持有商业级及以上授权可售卖用KTT制作的资产，但不可重新分发修改后的KTT工具。

---

### 安装与入门
- 需Houdini 20.5及以上版本（建议20.5.641+）拷贝所有文件到C:\Users\xjw\Documents\houdini21.0\packages下（无此文件夹可新建）。
- 入门步骤：新建Geometry节点并进入，在节点编辑器右键找到“Kruger Terrain Tools”子菜单，添加“KTT Handbook”节点，按手册“入门”和“工作流”章节操作即可制作首个地形。
![alt text](./image.png)   
---

## Houdini 21.0 许可激活操作总结
### 一、核心说明
本文档为Houdini 21.0软件许可激活破解的操作指南，包含基础激活步骤、旧许可处理、故障排除及进阶操作技巧，适用于需要手动配置软件许可的场景。

### 二、前置准备与注意事项
- 旧密钥处理：可手动删除C:\Windows\keys文件夹内所有文件，或至少删除“licenses”文件/清空其中密钥；也可选择保留旧密钥。
- 许可服务器：不建议跳过许可服务器更新（若已安装旧版Houdini），但无论是否更新，均需替换sesinetd.exe文件。
- 权限要求：涉及文件替换、脚本运行的操作，需以管理员身份执行。

### 三、基础激活步骤
1. 安装软件：手动或通过Houdini Launcher安装Houdini 21.0，同时安装对应版本的许可服务器（License Server）。
2. 停止服务：安装完成后，打开许可管理员（License Administrator）→ 进入“服务（Services）”，停止Sesinetd服务，保持窗口开启。
3. 替换文件：打开破解文件夹，替换C:\Program Files\Side Effects Software\License Server路径下的sesinetd.exe文件。
4. 记录信息：在许可管理员“诊断（Diagnostics）”选项卡中，记录“服务器名称（Server Name）”和“服务器代码（Server Code）”。
5. 生成密钥：打开keygen文件夹，运行Houdini_21_0_KG.exe，输入服务器名称和代码，将过期日期（Exp. Date）设为2030年或更晚，生成许可密钥。
6. 导入密钥：打开scripts文件夹，右键点击EnterKeys.bat→“以管理员身份运行”，逐行粘贴生成的许可密钥。
7. 重启服务：在许可管理员窗口启动Sesinetd服务，重启许可管理员完成激活。

### 四、故障排除
- 密钥显示红色：重新进入许可管理员→文件→许可工具服务（License Tools Services），重启Sesinetd服务后，再次重启许可管理员。
- 密钥丢失/激活失败：运行ResetLicense.bat自动清空所有密钥，再通过EnterLicense.bat重新手动导入密钥（需管理员权限）。
- 误装许可服务器：停止Sesinetd服务，重新替换sesinetd.exe文件后启动服务，恢复密钥配置。

### 五、进阶操作（适用于高级用户）
- 快速导入密钥：创建空文件命名为“licenses”，粘贴生成的所有密钥，将文件移动至C:\Windows\keys（覆盖旧文件会删除原有密钥）。
- 保留旧密钥：在原有“licenses”文件中换行添加新密钥，或直接使用EnterKeys.bat脚本导入。
- 手动控制服务：停止服务可在任务管理器结束sesinetd.exe进程；启动服务直接运行C:\Program Files\Side Effects Software\License Server路径下的sesinetd.exe。

### 六、后续更新防护
- 取消许可服务器安装选项，避免后续Houdini更新时丢失密钥。

