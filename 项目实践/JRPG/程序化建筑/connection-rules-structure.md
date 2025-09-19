# 拼合规则表结构设计

## Sheet 1: 组件属性表(ComponentProperties)
| 列名 | 类型 | 说明 |
|------|------|------|
| ComponentID | string | 组件唯一标识符(如S01, R01) |
| ComponentName | string | 组件命名(如S_F, R_N) |
| HasNorthWall | boolean | 是否有北墙(0/1) |
| HasEastWall | boolean | 是否有东墙(0/1) |
| HasSouthWall | boolean | 是否有南墙(0/1) |
| HasWestWall | boolean | 是否有西墙(0/1) |
| Size | string | 尺寸类型(S/R) |
| CenterPointX | float | 中心点X坐标 |
| CenterPointY | float | 中心点Y坐标 |

## Sheet 2: 拼合规则矩阵(ConnectionMatrix)
| 列名 | 类型 | 说明 |
|------|------|------|
| SourceID | string | 源组件ID |
| TargetID | string | 目标组件ID |
| Direction | string | 连接方向(N/E/S/W) |
| IsValid | boolean | 是否可以连接(0/1) |
| OffsetX | float | X轴偏移量 |
| OffsetY | float | Y轴偏移量 |
| Priority | int | 拼合优先级(1-5) |

## Sheet 3: 连接点数据(ConnectionPoints)
| 列名 | 类型 | 说明 |
|------|------|------|
| ComponentID | string | 组件ID |
| Direction | string | 方向 |
| PointX | float | 连接点X坐标 |
| PointY | float | 连接点Y坐标 |
| Type | string | 连接点类型(Wall/Floor) |

## Sheet 4: 组件组合规则(CombinationRules)
| 列名 | 类型 | 说明 |
|------|------|------|
| RuleID | string | 规则ID |
| Component1 | string | 组件1 ID |
| Component2 | string | 组件2 ID |
| Direction | string | 连接方向 |
| IsValid | boolean | 是否允许(0/1) |
| Notes | string | 规则说明 |

## 使用说明
1. 组件属性表(ComponentProperties)
   - 记录每个基本组件的基础属性
   - 用于快速查询组件特征

2. 拼合规则矩阵(ConnectionMatrix)
   - 定义所有可能的组件组合
   - 包含具体的位置偏移信息

3. 连接点数据(ConnectionPoints)
   - 记录每个组件的具体连接点位置
   - 用于精确定位拼合位置

4. 组件组合规则(CombinationRules)
   - 定义特殊的组合规则
   - 包含组合的限制条件

## 数据示例
```
// ComponentProperties示例
S01, S_F, 0, 0, 0, 0, S, 0.5, 0.5
S02, S_N, 1, 0, 0, 0, S, 0.5, 0.5

// ConnectionMatrix示例
S01, S02, N, 1, 0, 1.0, 1
S02, S03, E, 1, 1.0, 0, 2
```
