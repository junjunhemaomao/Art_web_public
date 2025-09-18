#  Octane Render 2022.1 for MAYA 
![alt text](./image.png)    
## Octane Render 2022.1 for MAYA 安装说明及问题解决

1.  **运行主安装程序**
    打开安装包中的 `Files` 文件夹，右键单击 `setup.exe`，选择"以管理员身份运行"，按照提示完成安装。

2.  **复制 cudnn 文件夹**
    将安装包中的 `cudnn_8_0_4` 文件夹复制到以下路径：
    `C:\Users\[你的用户名]\AppData\Local\OctaneRender\thirdparty\`

3.  **复制许可证文件**
    将安装包中的 `micense` 和 `mtoy_credentials` 两个文件复制到以下路径：
    `C:\Users\[你的用户名]\AppData\Roaming\OctaneRender\`

4.  **配置 YellowStar.exe 开机启动**
    - 按下 `Win + R`，输入 `shell:common startup` 回车打开启动文件夹
    - 将安装包中的 `YellowStar.exe` 复制到此文件夹并双击运行
    - 检查任务管理器 (`Ctrl+Shift+Esc`) 确认进程正在运行
    > 如被安全软件拦截，请添加到信任列表后重新运行

5.  **复制 MAYA 插件文件**
    打开安装包中的 `MAYA Plugins` 文件夹，根据你的 MAYA 版本复制对应文件：
    - Maya 2019: `C:\Program Files\OctaneRender VR for Maya\2019\plug-ins\`
    - Maya 2023: `C:\Program Files\OctaneRender VR for Maya\2023\plug-ins\`
    > 其他版本请选择对应版本的 plug-ins 文件夹

6.  **复制 lib 文件**
    打开安装包中的 `lib` 文件夹，将其中的所有文件复制到：
    `C:\Program Files\OctaneRender VR for Maya\lib\`

7.  **复制 MayaYellowStar.dll**
    将安装包中的 `MayaYellowStar.dll` 文件复制到 Maya 的 bin 目录：
    `C:\Program Files\Autodesk\Maya[版本号]\bin`
    > 请将 [版本号] 替换为你的 Maya 版本（如 Maya2019）

8.  **完成安装**
    完成以上所有步骤后，启动 Maya 软件即可使用 Octane Render 插件。

## 注意事项
- 请确保以管理员身份运行安装程序
- 所有路径中的 [你的用户名] 需要替换为实际用户名
- 如遇安全软件拦截，请将相关文件添加到信任列表
- 插件版本必须与 Maya 版本完全匹配