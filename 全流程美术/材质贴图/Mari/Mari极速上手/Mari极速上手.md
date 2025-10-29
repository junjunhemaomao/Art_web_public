# Mari 4.7 影视级贴图绘制软件极速上手   
![alt text](./image.png)    
## 原理介绍   
项目文件的默认保存位置。也可以更改   
![alt text](./image-1.png)   
和Maya一样，也是项目制的。不是文件制   
Archive打包项目   
投射模式修改。可以改为手动。     
![alt text](./image-2.png)   
手动模式下，按B键才会投射。CTRL+shift+c清理掉投射屏上的内容    
![alt text](./image-3.png)    
### UDIM
![alt text](./image-4.png)    
命名规则和顺序   
![alt text](./image-5.png)  
### 名词和概念   
mari有自己概念的命名方式，明确一下： 
> shader着色器（材质） channal通道（一组贴图）——patches纹理片（贴图）
## 视图导航  
可以设置数位板笔的快捷按钮   
![alt text](./image-6.png)   
### 显示设置  
视图显示的整体设置    
![alt text](./image-7.png)
## 项目创建  
### 偏好设置   
如果笔刷边缘有干扰视觉，可以把透明度调低   
![alt text](./image-8.png)    
插件预设的路径   
![alt text](./image-9.png)   
## 界面
可以把node节点变为nuke模式。看个人习惯        
![alt text](./image-10.png)   
可以对模型的不同版本进行替换   
是目前无损替换支持性最好的     
![alt text](./image-11.png)   
## 选择相关 
S 快捷键   
不同的选择层级       
![alt text](./image-12.png)     
可以对选择做选择集      
![alt text](./image-13.png)   
## 灯光和shader   
可以设置HDRI相关的   
![alt text](./image-14.png)     
选择当前灯光，点击摄像机按钮，可以把灯光移动到当前摄像机   
![alt text](./image-15.png)     
shader相关是一个过滤显示为主的功能   
![alt text](./image-16.png)   
但常用的是快捷键F1，F2，F3   
![alt text](./image-17.png)    
## channels创建  
导出channel贴图   
![alt text](./image-18.png)   
两种添加channel的方法   
置换贴图需要把Raw Data勾选上    
Scalar Data 勾选上就是黑白贴图    
![alt text](./image-19.png)    
## 笔刷和投射类工具  
### 绘画工具  
P,U,E 键 切换常用绘画工具     
有时候投射画不上，可能是在非颜色图层上    
可以把透视完后的贴图，再重新抬到paintbuffer上    
![alt text](./image-20.png)    
R键 笔刷缩放大小。O键，透明度缩放    
Q键调整笔刷压扁，然后按W键可以旋转笔刷         
![alt text](./image-21.png)   
ctrl+shift 左键。缩放paintbuffer   
Ctrl + Shift + C   
按repeat 可以重复绘制   
![alt text](./image-22.png)   
可以导入PS的笔刷   
![alt text](./image-23.png)    
### 其他绘画工具 
模糊   
![alt text](./image-24.png)    
渐变    
![alt text](./image-25.png)   
一般来说是投射整个物体   
快捷键`   
勾选穿透物体  
![alt text](./image-26.png)    
克隆笔刷    
类似PS仿制图章工具    
ctrl+绘制  
![alt text](./image-27.png)   
## 变形类工具  
变形工具，加点减点  
快捷键：上下键   
shift+r 旋转   
![alt text](./image-28.png)   
液化工具   
![alt text](./image-29.png)   
打点变形   
上下键控制拉伸变形衰减的强度   
![alt text](./image-30.png)    
修补工具    
![alt text](./image-31.png)    
## painbuffer 编辑类工具   
选择相关工具及其相关操作   
主要是对选择的painbuffer进行操作        
![alt text](./image-32.png)  
选区的羽化值    
![alt text](./image-33.png)    
## 投射相关设置 
对painbuffer图进行调整。但很少这样做   
![alt text](./image-34.png)   
clamp 限制值在0-1    
![alt text](./image-35.png)    
可以修改投射的穿透和投射的物体     
![alt text](./image-36.png)   
edge mask 用比较多，可以对边缘做遮罩，不给变形的部分做绘制。防止边缘投射的变形    
![alt text](./image-37.png)  
channel mask 可以用其他通道的图做遮罩   
AO mask 现在更多倍objects下的GO节点代替  
depth mask 深度遮罩   
### projecters 外部绘画   
类似一个快照，可以导出快照到PS之类绘制，然后再导入回来   
![alt text](./image-38.png)   
## 物体属性和烘焙
贴图烘焙的通道   
也可以任意贴图放这里，可以传递图层信息   
![alt text](./image-39.png)    
烘焙相关   
![alt text](./image-40.png)   
在烘焙出来的贴图节点上按1,可以显示这个烘焙效果   
![alt text](./image-41.png)    
## 图层相关
遮罩图层嵌套   
![alt text](./image-42.png)   
调整图层   
![alt text](./image-43.png)    
滤镜   
需要加在普通图层上。调整图层是没有效果的    
![alt text](./image-44.png)   
程序化纹理    
![alt text](./image-45.png)    
多层通道图层。模仿SD   
![alt text](./image-46.png)    
## 节点相关 
节点和层逻辑是一样的，只是表现形式不一样   
![alt text](./image-47.png)    
在节点上按1,可以显示这个节点单独的效果   
有10个暂存的数字通道   
### 节点整理
快速整理：L键
backdrop 节点，组织管理  
可以选中节点后，tap键呼出面板，创建backdrop 节点      
![alt text](./image-48.png)   
还可以对选择的节点打组 CTRL+G   
ctrl + Enter 可以进入打组的节点内    
![alt text](./image-49.png)    
在连线上点ctrl键，可以加点，对线进行整理   
![alt text](./image-50.png)    
### 常用节点   
P 键 绘画节点    
![alt text](./image-51.png)   
编辑节点相关   
![alt text](./image-52.png)    
Back point    
![alt text](./image-53.png)   
对于确定效果不再改的部分，可以烘焙塌陷数据，让运行数据更小   
![alt text](./image-54.png)    
## 程序化材质    
总体是模仿SP   
![alt text](./image-55.png)   
custom procedural 可以自定义一组节点集，打包成特定功能。但要选择三类中的一种   
![alt text](./image-56.png)    
可以把内部是某些参数暴露在最外的打包节点   
![alt text](./image-57.png)    
![alt text](./image-58.png)    
也可以在最外部去选择暴露的参数   
![alt text](./image-59.png)    
可以链接某几个值，一起调，做成一个新的参数   
![alt text](./image-60.png)   
可以选择自定义节点的缩略图，并输出成一个自定义的节点工具   
![alt text](./image-61.png)    
如果合成多个材质，导致很卡，可以多材质烘焙   
![alt text](./image-62.png)     
一般自定义节点工具，用geo-channel里烘焙的贴图数据   
![alt text](./image-63.png)    
mari也提供了一些预设的基础程序节点数据   
![alt text](./image-64.png)   
## 机械类案例

## 金龟案例