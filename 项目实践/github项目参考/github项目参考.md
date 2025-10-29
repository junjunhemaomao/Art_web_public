# GitHub 项目参考

## 塞尔达风格游戏项目

### Zelda

- [Zelda style game made with Pygame](https://github.com/GuillaumeLeBerreBIT/Zelda)  
  这个仓库是一个基于 Python 和 Pygame 库开发的类《塞尔达传说》风格的游戏项目，融合了一些《黑暗之魂》的元素。
- [教程链接：Creating a Zelda style game in Python [with some Dark Souls elements]](https://www.youtube.com/watch?v=QU1pPzEGrqw&list=PLH3CJ3zIUwuVAPJQJM56p3TzK2inMwhBh&index=4&t=1s)

### 素材链接

- [Itchio Page](https://pixel-boy.itch.io/)
- [Pack Page](https://pixel-boy.itch.io/ninja-adventure-asset-pack)

### 项目背景

- 这是 Clear Code 提供的教程项目，旨在介绍如何使用 Pygame（特别是面向对象编程思想）创建类《塞尔达传说》风格的游戏
- [相关教程视频链接](https://www.youtube.com/watch?v=QU1pPzEGrqw&list=PLH3CJ3zIUwuVAPJQJM56p3TzK2inMwhBh&index=4&t=1s)

### 核心文件结构

- **主程序文件**：`main.py` 是程序入口，包含游戏主循环和基础设置
- **游戏逻辑核心**：`level.py` 负责管理游戏中的所有精灵（玩家、敌人、障碍物等）及其交互
- **实体类**：`player.py`（玩家）、`enemy.py`（敌人）、`tile.py`（地图瓦片）等定义了游戏中的各种实体
- **游戏元素**：`weapon.py`（武器）、`magic.py`（魔法）、`particles.py`（粒子效果）等实现了游戏的战斗和特效系统
- **UI 相关**：`ui.py`（用户界面）、`upgrade.py`（升级菜单）负责游戏的界面展示
- **配置文件**：`settings.py` 包含游戏的各种参数设置（窗口大小、颜色、属性值等）
- **工具函数**：`support.py` 提供了一些辅助功能（如导入文件夹中的图片）
- **地图数据**：`map/` 目录下的 CSV 文件存储了地图布局信息
- **资源文件**：`graphics/`（图像）、`audio/`（音频）、`NinjaAdventure/`（素材资源）等目录包含游戏所需的各种资源

### 游戏主要功能

#### 玩家系统

- 玩家可以移动、攻击、使用魔法
- 拥有生命值、能量值、经验值等属性
- 可以切换武器和魔法类型
- 可以通过升级菜单提升自身属性

#### 战斗系统

- 包含多种武器（剑、lance、斧等），各有不同的冷却时间和伤害值
- 包含魔法系统（火焰、治疗等）
- 敌人具有不同的生命值、伤害值和行为模式

#### 地图系统

- 通过 CSV 文件定义地图布局
- 包含边界、草地、物体等不同类型的地图元素
- 实现了碰撞检测

#### UI 界面

- 显示生命值、能量值、经验值
- 显示当前使用的武器和魔法
- 提供升级菜单供玩家提升属性

### 技术要点

- 采用面向对象编程思想组织代码
- 使用 Pygame 库进行图形渲染、音频处理和用户输入处理
- 通过精灵组（Sprite Group）管理游戏中的实体
- 实现了相机跟随功能（YSortCameraGroup）
- 使用粒子系统实现各种特效（攻击、治疗、死亡等）
- 通过 CSV 文件存储地图数据，实现数据与逻辑分离

该项目适合学习 Pygame 游戏开发，尤其是对动作角色扮演游戏（ARPG）感兴趣的开发者参考。

- [Files for the Zelda in python tutorial](https://github.com/clear-code-projects/Zelda)

## 勇者斗恶龙与最终幻想风格项目

### Python 项目

#### 🎮 pyDragonWarrior

- **仓库地址**: [https://github.com/justinbeetle/pyDragonWarrior](https://github.com/justinbeetle/pyDragonWarrior)
- **描述**: 用 Python 编写的《Dragon Warrior》（勇者斗恶龙）克隆项目
- **特点**: 经典 JRPG 回合制战斗、地图移动、简单剧情系统
- **语言**: Python
- **许可证**: MIT

#### 🧙‍♂️ pyquest

- **仓库地址**: [https://github.com/Simon-Charest/pyquest](https://github.com/Simon-Charest/pyquest)
- **描述**: Python 编写的像素风 RPG，致敬早期《勇者斗恶龙》系列
- **特点**: 复古 8-bit 风格、随机战斗、基础任务系统
- **语言**: Python
- **许可证**: GPL-3.0

#### 🐉 PyRPG

- **仓库地址**: [https://github.com/fogleman/PyRPG](https://github.com/fogleman/PyRPG)
- **描述**: 一个早期的 Python RPG 引擎原型，支持地图、战斗和剧情
- **特点**: 简洁易改、结构清晰、可自定义角色和敌人
- **语言**: Python
- **许可证**: MIT

### Unity（C#）项目

#### ⚔️ Unity3D-Turn_Based_RPG

- **仓库地址**: [https://github.com/i-Jiro/Unity3D-Turn_Based_RPG](https://github.com/i-Jiro/Unity3D-Turn_Based_RPG)
- **描述**: 模仿《最终幻想》风格的 Unity 回合制 RPG
- **特点**: 菜单式战斗系统、角色状态、敌人 AI
- **语言**: C#（Unity）
- **许可证**: MIT

#### 🌌 Phantasia

- **仓库地址**: [https://github.com/CharlesAverill/Phantasia](https://github.com/CharlesAverill/Phantasia)
- **描述**: Unity 实现的《Final Fantasy I》风格 JRPG
- **特点**: 回合制战斗、像素图形、世界地图与城镇场景
- **语言**: C#（Unity）
- **许可证**: MIT

#### 🧭 Brackeys-RPG-Tutorial

- **仓库地址**: [https://github.com/Brackeys/2D-RPG](https://github.com/Brackeys/2D-RPG)
- **描述**: Brackeys 教程项目，一个轻量级 Unity RPG 框架
- **特点**: 地图、NPC、任务、战斗系统，适合学习和扩展
- **语言**: C#（Unity）
- **许可证**: MIT

> 若想打造自己的"勇者斗恶龙风格"游戏，可以用 AnyRPGCore 作为基础框架，再结合 Phantasia 的战斗逻辑

---

## RPG 游戏开发学习路径

### 阶段 ①：理解 RPG 基本结构（Python 入门）

#### 🎯 目标

学习 RPG 游戏的核心逻辑结构（地图、角色、战斗、状态、剧情）。

#### 📘 推荐仓库

1. **pyquest**  
   [https://github.com/Simon-Charest/pyquest](https://github.com/Simon-Charest/pyquest)  
   → 学习地图与事件系统（经典勇者斗恶龙风格）

2. **pyDragonWarrior**  
   [https://github.com/justinbeetle/pyDragonWarrior](https://github.com/justinbeetle/pyDragonWarrior)  
   → 了解回合制战斗机制与敌人逻辑

#### 🧩 建议练习

- 修改主角属性、增加一个新技能
- 添加简单的"随机遇敌"或"任务触发"系统

### 阶段 ②：设计 RPG 系统模块（Python 进阶）

#### 🎯 目标

理解 RPG 的模块化设计（任务、角色成长、战斗引擎）。

#### 📘 推荐仓库

3. **PyRPG**  
   [https://github.com/fogleman/PyRPG](https://github.com/fogleman/PyRPG)  
   → 学习如何将角色、战斗、地图分离成独立模块

#### 🧩 建议练习

- 实现"升级经验系统"
- 为战斗系统添加"状态效果（中毒、麻痹等）"

### 阶段 ③：转向可视化引擎开发（Unity 初级）

#### 🎯 目标

将已有 RPG 逻辑迁移到 Unity，引入可视化界面与 UI 操作。

#### 📘 推荐仓库

4. **Brackeys 2D RPG**  
   [https://github.com/Brackeys/2D-RPG](https://github.com/Brackeys/2D-RPG)  
   → Unity 轻量级 RPG 框架，适合初学者

#### 🧩 建议练习

- 修改场景地图
- 在 Inspector 中添加 NPC 对话与任务触发
- 尝试整合像素风素材（Itch.io 上可找免费 JRPG 素材）

### 阶段 ④：深入回合制系统（Unity 进阶）

#### 🎯 目标

掌握 Final Fantasy 式战斗系统（菜单、技能、敌人回合）。

#### 📘 推荐仓库

5. **Unity3D-Turn_Based_RPG**  
   [https://github.com/i-Jiro/Unity3D-Turn_Based_RPG](https://github.com/i-Jiro/Unity3D-Turn_Based_RPG)  
   → 模仿《最终幻想》风格的回合制系统

6. **Phantasia**  
   [https://github.com/CharlesAverill/Phantasia](https://github.com/CharlesAverill/Phantasia)  
   → 完整 JRPG 战斗、地图与 UI 整合范例

#### 🧩 建议练习

- 添加"技能动画"或"魔法特效"
- 让敌人具备不同 AI 模式（防御型、攻击型）
- 实现"Boss 战"场景

### 阶段 ⑤：构建完整 JRPG（Unity 高级）

#### 🎯 目标

开发一个具备剧情、战斗、成长系统的完整 JRPG。

#### 📘 推荐仓库

7. **AnyRPGCore**  
   [https://github.com/AnyRPG/AnyRPGCore](https://github.com/AnyRPG/AnyRPGCore)  
   → 完整 Unity RPG 框架，支持任务系统、职业系统、装备、存档等

#### 🧩 建议练习

- 设计自己的地图和任务链
- 自定义技能树、装备系统
- 添加存档/读档功能

### 🧠 最终项目建议：自制 JRPG Demo

#### 🎮 项目名：Dragon of Dawn（黎明勇者传）

- **开发引擎**：Unity + AnyRPGCore
- **灵感来源**：《勇者斗恶龙》《最终幻想》《幻想水浒传》
- **核心系统**：
  - 回合制战斗（参考 Unity3D-Turn_Based_RPG）
  - 自定义技能/魔法
  - NPC 对话与任务链
  - 世界地图 + 城镇 + 地下城

### 📦 补充资源推荐

#### 🎨 素材网站

- [itch.io → JRPG Assets](https://itch.io/game-assets/tag-jrpg)
- [OpenGameArt](https://opengameart.org)