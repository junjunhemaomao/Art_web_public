# HDA 安装指南

通常需要导入 HDA（Houdini Digital Asset，Houdini 数字资产）的情况主要有以下几种：
### 1. 获得第三方 HDA，没有原始 .hip 文件    
- 如果你从他人或第三方市场（如 Orbolt）获取了 HDA，通常只有 .hda 或 .otl 文件，而没有完整的 .hip 场景文件。   
- 这种情况下，你需要手动导入 HDA 并在自己的 Houdini 场景中使用它。
### 2. 团队协作或共享工具
- 在团队或工作室中，可能会有专门的 TD（技术美术）或 FX 负责人制作了一些 HDA，并提供给团队成员使用。
- 每位用户都需要在自己的 Houdini 设置中导入这些 HDA，以便在不同的项目中使用。
### 3. 使用自定义工具库
- 如果你自己开发了一些有用的 HDA，希望在多个项目中重复使用，可以将它们存放在一个固定的目录（如 C:\DATA\ASSETS\houdini\otls），然后配置 houdini.env 让 Houdini 识别这些 HDA。
### 4. 升级或替换现有 HDA 版本
- 有时候，某个 HDA 可能会有新的更新或改进版本。你可以手动导入新版本的 HDA，并选择是否在当前场景中更新旧节点。


## 安装步骤

1. **创建目录**
   在磁盘上创建一个目录，用于存放自定义 HDA 及其他 Houdini 自定义内容（如果尚未创建）。例如：
   ```
   C:\DATA\ASSETS\houdini
   ```

2. **配置 `houdini.env`**
   在 `C:\Users\<user>\Documents\houdiniX.Y\houdini.env`（其中 `X.Y` 是 Houdini 的主版本和次版本号，例如 `houdini19.5`）中添加如下配置：
   ```
   # & 代表此变量的默认值
   HOUDINI_PATH="&"
   
   # 添加自定义 Houdini 根目录
   PERSONAL_ROOT="C:\DATA\ASSETS\houdini"
   HOUDINI_PATH="${PERSONAL_ROOT};${HOUDINI_PATH}"
   ```

3. **创建 `otls` 目录**
   在上述自定义 Houdini 目录下创建 `otls` 目录（Houdini 依赖特定目录结构，因此必须命名为 `otls`）。例如：
   ```
   C:\DATA\ASSETS\houdini\otls
   ```

4. **复制 HDA 文件**
   将 HDA 文件放入 `otls` 目录。

5. **启动 Houdini 并验证**
   - 打开 Houdini。
   - 在 **网络编辑器** (Network Editor) 中使用 **Tab 菜单** 查找自定义 HDA。
   - 确保处于正确的上下文中。例如，如果安装的是 SOP 类型的 HDA，需要在 **几何 (Geometry) 节点** 中进行测试。

## 重要提示
- **Indie 版本的 HDA 兼容性**
  - 由 Indie 版本 Houdini 创建的 HDA（例如 Quaternioff 工具），无法在商业版本中使用。
  - 若需要商业版本的工具，可前往 [Orbolt](https://www.orbolt.com) 查找对应的版本。

- **管理不同版本的 HDA**
  - 更新 HDA 可能会导致行为变化或不同的输出结果。
  - 为避免影响现有场景，可选择继续使用旧版本，或仅在新项目中使用更新后的 HDA。
  - Houdini 提供了 **数字资产版本管理 UI**。
    - 在 **参数面板 (Parameters Pane)** 的 **资产栏 (Asset Bar)** 可查看当前节点使用的 HDA 版本和路径。
    - 该资产栏可在 **资产管理器 (Asset Manager) > 配置 (Configuration) > Asset Bar: Display Menu of All Definitions** 中启用。