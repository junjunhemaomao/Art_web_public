# Naninovel
![alt text](./image.png)   
## 脚本命令 API 参考  
~~删除线~~表示无名参数
### 动画
| ID        | 类型           | 描述 |
| ------------- |:-------------:| -----:|
| ~~ActorIds~~  | List | 要制作动画的演员的 ID |
| loop      | Boolean     |   是否循环播放动画；wait启用循环时请确保设置为 false，否则脚本播放将无限循环。 |
| appearance | String      |    为动画演员设置的出场表演 |   
| transition     | String |动画外观改变时使用的过渡效果类型（默认使用交叉淡入淡出） |  
| visibility     | String | 为动画演员设置的可见性状态 |
| posX      | String      |  为动画演员设置的 X 轴位置值（范围为 0 到 100，以距离屏幕左边界的百分比表示） |
| posY | String     |   为动画演员设置的 Y 轴位置值（范围为 0 到 100，以距离屏幕下边框的百分比表示） |   
| posZ     | String | 为动画演员设置 Z 轴（在世界空间中）上的位置值；在正交模式下，只能用于排序。 |
| rotation      | String      |  为动画演员设置的旋转值（沿 Z 轴） |
| scale | String      |    为动画演员设置比例值（统一） |   
| tint      | String      |   为动画演员设置的色调颜色。   以 开头的字符串#将按以下方式解析为十六进制：（#RGB变为 RRGGBB），，#RRGGBB（#RGBA变为 RRGGBBAA），；#RRGGBBAA当未指定 alpha 时，将默认为 FF。   不以 开头的字符串#将被解析为文字颜色，支持以下颜色：红色、青色、蓝色、深蓝色、浅蓝色、紫色、黄色、黄绿色、紫红色、白色、银色、灰色、黑色、橙色、棕色、栗色、绿色、橄榄色、海军蓝、青绿色、浅绿色、洋红色。 |
| easing      | String      |  用于动画的缓动函数的名称。   可用选项：Linear、SmoothStep、Spring、EaseInQuad、EaseOutQuad、EaseInOutQuad、EaseInCubic、EaseOutCubic、EaseInOutCubic、EaseInQuart、EaseOutQuart、EaseInOutQuart、EaseInQuint、EaseOutQuint、EaseInOutQuint、EaseInSine、EaseOutSine、EaseInOutSine、EaseInExpo、EaseOutExpo、EaseInOutExpo、EaseInCirc、EaseOutCirc、EaseInOutCirc、EaseInBounce、EaseOutBounce、EaseInOutBounce、EaseInBack、EaseOutBack、EaseInOutBack、EaseInElastic、EaseOutElastic、EaseInOutElastic。    如果未指定，将使用在参与者管理器配置设置中设置的默认缓动函数。 |
| time      | String      |   每个键的动画持续时间（以秒为单位）。当缺少键值时，将使用前一个键的值。当未分配时，将对所有键使用 0.35 秒的持续时间。 |   
### 例子
```
; 在三个动画步骤（关键帧）中为 `Kohaku` 角色执行动画，
; 改变位置：第一步需要 1 秒，第二步 0.5 秒，第三步 3 秒。
@animate Kohaku posX:50|0|85 time:1|0.5|3

; 启动 `Yuko` 和 `Kohaku` 角色的循环动画；注意，可以跳过
; 某些参数的关键值，表示在动画步骤中该参数不变。
@animate Kohaku,Yuko loop:true appearance:Surprise|Sad|Default|Angry transition:DropFade|Ripple|Pixelate posX:15|85|50 posY:0|-25|-85 scale:1|1.25|1.85 tint:#25f1f8|lightblue|#ffffff|olive easing:EaseInBounce|EaseInQuad time:3|2|1|0.5 wait:false
...
; 停止动画。
@animate Yuko,Kohaku loop:false

; 为 `Kohaku` 开始一个长时间的背景动画。
@animate Kohaku posX:90|0|90 scale:1|2|1 time:10 wait:false
; 动画运行时做一些其他事情。
...
; 这里我们将为角色设置一个具体的位置，
; 但动画可能还在后台运行，因此首先重置动画。
@animate Kohaku
; 现在可以安全地修改之前动画化的属性。
@char Kohaku pos:50 scale:1
```
### 总结
通过关键帧为具有指定ID的角色（Actors）设置动画，关键帧的参数用 | 分隔。
例如：posX:50|0|85 表示在动画的不同时间点，角色的 posX 属性将按顺序设置为 50、0 和 85。
#### 注意事项
##### 1.演员ID冲突问题：
该命令会在所有的Actor管理器中搜索具有指定ID的角色。如果有多个具有相同ID的角色（例如一个角色和一个文本打印机都有相同的ID），该命令只会影响第一个找到的角色。
这意味着你必须确保每个Actor的ID是唯一的，或者注意到命令只会影响第一个匹配的角色。
##### 2.并行执行问题：
如果动画命令是并行执行的（wait 设置为 false），角色的状态可能会出现不可预测的变化。
例如，如果有多个动画或命令同时影响角色的属性（如位置、外观、颜色等），可能会导致不可预期的结果，特别是在执行撤销操作（rollback）或其他影响角色状态的命令时。
##### 3.重置角色属性：
当动画命令完成后，应该重置角色的属性（例如位置、颜色、外观等），以避免角色状态的异常。
你可以使用 @animate CharacterId（不带任何参数）来提前停止动画，从而将角色状态恢复为动画前的状态。

### 附加
| ID        | 类型           | 描述 |
| ------------- |:-------------:| -----:|
| ~~Text~~      | String | 要追加的文本。 |
| printer  | String | 要使用的文本打印机的ID。如果未提供，将使用默认打印机。 |
| author   | String |  与追加文本关联的角色ID。 |
### 例子
```
; 像往常一样逐步显示句子的第一部分，
; 然后一次性追加句子的结尾部分。
Lorem ipsum
@append " dolor sit amet."
```
@append 命令用于将文本直接追加到文本打印机，而不会逐字显示。
如果没有指定 printer 参数，则使用默认的打印机。
此命令非常适合在需要立即显示某段文本而不需要动画效果时使用。整个文本会立即被追加，而不会触发任何显示效果（如逐字显示）或其他副作用。


### 附加
| ID        | 类型           | 描述 |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    脚本播放器是否应等待异步命令执行完毕后再执行下一个命令。当命令立即执行时无影响。 |


### 附加
| ID        | 类型           | 描述 |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    脚本播放器是否应等待异步命令执行完毕后再执行下一个命令。当命令立即执行时无影响。 |