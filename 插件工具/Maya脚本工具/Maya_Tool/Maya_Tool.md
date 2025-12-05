# Maya脚本工具说明  
## Python版本说明 
Maya 2017-2022 (Python 2)   
>Starting Maya 2022 there’re both of Python 2 and Python 3. By default Maya uses Python 3.    
However you can 
switch into 2 for backward compatibility (most of scripts still not compatible with Python 3)    

Maya 2022 (Python 3) 
## Modeling Tool
### 模型清理
- **[Cleanup Useless Faces](https://tamaraorlova.gumroad.com/l/CleanUpUselessFaces)**       
`2019`
- **[(Maya) Batch Exporter 1.1](https://www.artstation.com/marketplace/p/R1Jm/maya-batch-exporter-1-1)**       
Export multiple selected meshes into its own "FBX" or "OBJ" files.    
`2019`
- **[Smart Harden/Soften edge python script for Maya](https://www.artstation.com/marketplace/p/YBz6y/smart-harden-soften-edge-python-script-for-maya-angle-and-uv-border-supported)**       
此脚本由荷兰布雷达应用科学大学（BUAS）游戏开发专业一年级视觉艺术方向学生 Pavel Kotorov 编写    
点击第 1/3 个按钮：当相邻面的夹角小于输入值时，对应边将被软化；若夹角大于或等于输入值，则保持或变为硬边。  
点击第 2 个按钮：可将 UV 壳外部边界（即 UV 接缝）的所有边强制设为硬边。   
第 3 个按钮：自动执行前两个按钮的组合操作    
` 2019`, ` 2023`   
- **[Smart Harden Edges By UV](https://www.artstation.com/marketplace/p/MwP6/smart-harden-edges-by-uv-maya-script)**       
核心优势   
可选择性忽略同一 UV 壳内的 UV 边界边    
允许设置角度阈值，仅对大于该角度的 UV 边界边进行硬化处理    
当角度设为 0 时，效果等同于标准工具    
` 2019`, ` 2023` 

### 特殊建模
- **[Braid and Spiral](https://www.highend3d.com/maya/script/braid-and-spiral-pyside2-for-maya)**     
发辫建模  
`Maya 2017+`
- **[QuickCollider for Maya v.1.1](https://www.highend3d.com/maya/script/quickcollider-for-maya)**  
快速碰撞体  。需要升级，有更新  
`2019`,`2023`
- **[Envit](https://wzx.gumroad.com/l/envit2)**   
撒点的脚本   

- **[Cable Script v2.5](https://wzx.gumroad.com/l/Cable)**   
样条线做电线   
`v1.0 for Maya 2016 / 2017`
- **[Mirror Tool - v2.0](https://klaudio2u.gumroad.com/l/FrKTc)**       
`2019`,`2023` 
- **[SHAPESBrush](https://github.com/IngoClemens/SHAPESBrush)**       
Tool for modifying and smoothing of meshes in Autodesk Maya.    
正确安装后，Maya 主菜单栏的 “Modify” 菜单会出现 “SHAPES Brush Tool” 菜单项。  
激活该工具后，点击网格。若网格未被选中，工具会自动进行选择。   
`2019`,`2023` 
- **[speedBend for Maya v1.07](https://im3djoe.gumroad.com/l/speedBend?layout=profile)**       
`2019`,`2023` 
- **[speedCut for Maya v1.69](https://im3djoe.gumroad.com/l/speedCut)**       
`2019`,`2023` 

- **[Circulator 1.0.4](https://www.highend3d.com/maya/script/circulator-for-maya)**     
核心作用是解决 Maya 中 “将多边形组件快速调整为圆形” 的需求。它通过计算选择组件的几何特征（如边界框、法线方向等），自动将顶点重新定位，形成规则圆形      
`2019` 
- **[Animation to Curve](https://cra3d.gumroad.com/l/OZuvE?layout=profile)**    
Create curves from objects' animations (positions)   
可以生成动画的轨迹曲线。可以用来生成武器的轨迹         
`2019`，`2023`
- **[Free Create Curve on Path 0.0.2 for Maya ](https://www.highend3d.com/maya/script/free-create-curve-on-path-for-maya)**    
Create a curve along a moving object or vertex  
可以生成动画的轨迹曲线。更简洁的用户界面        
`2019`，`2023`

### 硬表面建模
- **[GS Toolbox 1.2](https://gs-toolbox.readthedocs.io/en/latest/)**    
`Maya 2017-2025`
- **[Modit_3.0](https://wzx.gumroad.com/l/ModIt3)**  
ModIt is a script for Maya that will be your companion during your HardSurface Modeling in Maya!    
ModIt will support and speed up your HardSurface Workflow with the automating of simple and repetitive task like Primitives creation, Duplicate, Complex Selection, Bevels, etc...    
`Maya 2022 to Maya 2026`   
- **[rapidPlace for Maya v2.75](http://im3djoe.com)**  
表面吸附建模   
`2019`,`2023`   
- **[CreasePlus_2-8-20](https://waywo.gumroad.com/l/CreasePlus)**    
`2019`  
- **[DcBoolManager](https://eltarbos.gumroad.com/l/LMlq)**    
`2019` 
- **[HardMesh_2.37](https://www.hard-mesh.com/)**    
`2019` 
- **[instCut v1.1](https://im3djoe.gumroad.com/l/instCut)**    
`2023` 

### 拓扑
- **[QuadRemesher_1.0.1](https://exoside.com/)**   
自动拓扑  
安装路径：C:\ProgramData\Autodesk\ApplicationPlugins   
`2019`,`2023`
- **[ziRail 0.9.7](https://vertexture.org/)**    
手动拓扑  
`2019`,`2023`
- **[jQuadCloth 0.20](https://jacopos.gumroad.com/l/Qeoz)**    
服饰雕刻自动拓扑  
安装路径：e.g: C:\Program Files\Autodesk\Maya20##\bin\plug-ins    
`Maya 2016 - 2024`
- **[Quad Patcher for Maya](https://3dartistdad.gumroad.com/l/SmYAp)**   
用于快速用四边形修补 3D 模型孔洞，    
或对 Marvelous Designer 导出的网格进行拓扑重建，支持边界边、面、挤出三种模式    
这个插件的办法很好控制，且容易理解   
`2019`,`2023`
- **[EdgeLoopEven for Maya v1.04](https://im3djoe.gumroad.com/l/edgeLoopEven)**  
https://im3djoe.gumroad.com/    
搭配上面拓扑操作的必要工具。  
平均化点的插件      
`2019`,`2023`

### 光滑组
- **[AutoSmoothingGroups](https://gumroad.com/l/AutoSG)**    
自动光滑组。一键式解决方案为烘焙法线贴图提供了最佳的硬边/软边配置   
`2019`
- **[vrnNormalifique_v1.1](https://vrntech.ro/blog/WE9Y/maya-mel-script-vrnnormalifique)**    
此脚本基于加权顶点法线的理念，允许用户将法线“捕捉”到面，从而为低多边形硬表面对象创建更好看的平滑效果     
原始脚本分散为多个mel命令执行，早先我进行了一个整合，把命令用一个UI窗口来整合。   
但整体功能需要进一步验证和理解   
`2019`

### 排布及对齐
- **[AlignTool](https://gumroad.com/l/AutoSG)**    
`2019`
- **[Grid Organizer](https://cra3d.gumroad.com/l/ikio?layout=profile)**  
矩阵排列工具     
`2019`,`2023`


## Hair_Tool  
### 游戏   
- **[gs-curvetools v1-2-7](https://gs-curvetools.readthedocs.io/)**  
`2019`,`2023`
- **[Kami_v1](https://elasticmonkeys.com/kami/)**    
`2023`   
旨在为电子游戏角色创建卡通/动漫风格的毛发或毛发卡片。它设计得超级易用，能够轻松生成拥有正确 UV 和法线的超清晰网格，并拥有完全的艺术控制能力。 
### 影视 
- **[Peregrine Yeti 3.6.1](https://peregrinelabs.com/products/yeti)**  
`2019`
- **[Ahoge](https://ahoge.wiki.gd/installation)**   
<https://www.youtube.com/@ahoge-plugin>   
`2023`
- **Poly_To_Hair**  
`2019`,`2023`
- **[The Groomer's Tool v12.04](https://www.nobraintools.com/)**  
2023没安装成功.它是为 Maya 2024 编译的。不适用于其他版本。  
`2024`
- **[Braid Maker V1.0](https://unplugtools.gumroad.com/l/BraidMaker)**    
`2019` 

## Material_Tool  
- **[ViewportIt for Maya](https://wzx.gumroad.com/l/viewportIt)**   
`2023`   
AND Need at least Mtoa 2.0 to work!  
- **[From Substance Painter to Maya - 0.0.1 for Maya](https://www.highend3d.com/maya/script/from-substance-painter-to-maya-for-maya)**     
This tool is used to automatically connect Substance Painter textures to Maya.   
`2019`   
- **[Material Manager 5.2.0 for Maya](https://www.highend3d.com/maya/script/material-manager-for-maya)**     
The Material Manager is an all-in-one interface for quickly interacting with scene materials.    
`2019` 
- **[ShadeIt 2.0](https://wzx.gumroad.com/l/CTlFp)**   
`Maya 2018 to Maya 2026`


## UV Tool  
- **[UDIM Packer 1.6.1](https://formjune.gumroad.com/l/arrange_by_udims)**  
`2019`,`2023`
- **[UV_Toolkit v1.3](https://formjune.gumroad.com/l/arrange_by_udims)**  
`2019`
- **[Polyraven UV](https://www.rrcg.cn/thread-16764742-1-1.html)**    
硬表面几何形状解构脚本   
`Maya 2017 - 2020` 
- **[vrnAutoMap_V1.2](https://www.artstation.com/blogs/vrntech/n7n7/maya-mel-quick-uvs-script-vrnautomap)**    
硬表面自动分UV      
`Maya 2017 Update 4 或 2018` 
- **[Nightshade_UV](https://www.highend3d.com/maya/script/nightshade-uv-editor-for-maya)**    
一个比较老牌的UV工具集     
`Maya 2019` 
- **[Hotspot Texturing Plugin for Maya](https://nswift.gumroad.com/l/hotspot-texturing-maya?layout=profile)**    
一款旨在极大提升硬表面模型（如车辆、机械、建筑构件等）纹理绘制效率的免费Maya插件  
流程是先手动对位trim贴图的位置情况，遍历覆盖里面的可能性。生成一个Jason文件，后续用加载这个Jason文件，就可以快速用于其他的模型         
`Maya 2023` 

## Rigging Tool  
### 全家桶工具集
- **[MotionConversionAdv_v1.2.2](https://www.cgjoy.com/thread-239020-1-1.html)**    
3dsMax Bip 绑定 转 Maya 绑定  
`2019`
- **[Rigging Helpers](https://www.cgjoy.com/thread-239020-1-1.html)**    
一系列的绑定工具集   
`2019。很可能与 Maya 2022 + 版本存在兼容性问题`
- **[Rig Studio 2.4.0 for Maya](https://www.highend3d.com/maya/script/rig-studio-for-maya)**    
模块是这套绑定系统的核心与设计理念。它们可轻松添加到绑定中，并以任意组合方式进行连接。   
模块不仅包括手臂、脚部、尾巴等，还有许多这些部位的变体。   
RS 处处运用模板。模块乃至完整的绑定都可以保存为模板，之后一键就能创建  
`2019`
- **[mGear](https://www.mgear-framework.com/)**    
适用于 Autodesk Maya 和 Unreal Engine 的开源绑定和动画框架    
`2023`


### IK&FK系统 
- **[IKFK maya script](https://nachorigs.gumroad.com/l/lTFnK?layout=profile&recommended_by=search)**     
在任何关节链上创建可扩展、可拉伸的 IKFK 设置  
`2019`  
- **[Stretchy FK IK Spline maya rig script](https://nachorigs.gumroad.com/l/aqxit?layout=profile&recommended_by=more_like_this)**     
可在 Maya 中创建 FK（正向动力学）、IK（反向动力学）、IKFK 或混合 IKFK 绑定。  
该绑定具备可缩放、可拉伸、体积保持以及扭曲功能   
`2019` 
- **[LMrigger](https://luismiherrera.gumroad.com/l/LMrigger?layout=profile&recommended_by=products_for_you)**    
一个FK快速创建工具      
`2019`
- **[jh_proceduralRibbon](https://animprops.com/product/advance-ribbon-rig-tool/)**    
程序化飘带绑定   
`2019`
### 权重工具 
- **[Faces To Weight - Maya skinning tool](https://truongcgartist.gumroad.com/l/facestoweight)**  
将模型的面部选择转换为皮肤权重  
`2023`
### BS修型  
- **[rampWeights](https://github.com/IngoClemens/rampWeights)**  
blend shape 权重   
`2023`
- **[animPolish_BASIC_v1.24](https://friggingawesome.gumroad.com/l/animpolish-basic?layout=profile)**    
一款面向动画和模拟艺术家的 Maya deformation（变形）工具集，专注于突破绑定（rig）、布料 / 毛发模拟的限制，  
提供一系列专业级工具用于优化动画细节、修复模拟问题，提升镜头最终效果。      
`Maya 2016+，其中 2016-2021 版本经过全面测试，2022+ 版本支持主要功能（部分小工具可能存在问题）`
### SDK工具
- **[MirrorDrivenKey](https://github.com/cloudhuo/MirrorDrivenKey)**  
maya mirror set driven key tool    
[菜单项_使用说明](http://yunhaohuofiea.blogspot.com/2017/04/maya-mirror-driven-key-tool-guide.html)    
`2019`
- **[Copy Set Driven Key](https://github.com/nazmiprinter/ny_copySDK)**  
Maya tool to copy/paste driven keys      
 `2019`，`2023`
- **[Mirror Set Drive Key 1.0.0 for Maya](https://www.highend3d.com/maya/script/mirror-set-drive-key-for-maya)**      
 `2019` 


## Animation Tool   

### 综合工具集
- **[aTools](https://camiloalan.wixsite.com/atoolswebsite)**    
`2019`
- **[aTools_python3](https://github.com/MKlimenko/aTools_python3)**    
`2023`
- **[animBot](https://animbot.ca/home/)**    
是 Maya 动画师最酷、最强大的工具集，超过 90% 的全功能。 AAA 游戏工作室都在使用   
`2023`
- **[ml_tools](https://github.com/morganloomis/ml_tools)**    
Animation and Rigging tools for Autodesk Maya    
[详细说明](http://morganloomis.com/tools/)    
`2019`
- **[GETOOLS 1.6.1](https://geneugene.gumroad.com/l/getools?layout=profile)**    
Free Maya Tools for 3D Animators   
 包含创建定位器、空间切换、模拟次级动画、设置质心等多种工具      
[查看WIKI了解更多](https://github.com/GenEugene/GETools/wiki)    
[视频教程合集](https://www.youtube.com/playlist?list=PLhwndaM4LAxhbl95yz9WVie1iYflTFy6S)   
`2019`,`Maya 2020、2022、2023、2024、2025`

### 拾取器
- **[anim_picker](https://github.com/gbarlier)**     
`2019`
- **[AnimSchool Picker ](https://store.animschool.edu/animschool-picker/)**    
登录密码：510623Xie$   
key:https://store.animschool.edu/my-account/view-license-keys/   
0558-6534-5760-4746  （公司）  
3567-1329-3695-3806  （家里）  
 `2019`，`2023`
- **[Dreamwall Picker](https://camiloalan.wixsite.com/atoolswebsite)**   
一个替代AnimSchool Picker 的工具   
[教学视频](https://www.youtube.com/watch?v=yP8SKvDcgEE)   
`Maya 2017 +`
- **[prSelectionUi](https://pazrot.gumroad.com/l/prselectionui)**    
` 2019`
- **[FT Anim Picker (Maya)](https://munorr.gumroad.com/l/ft-anim-picker-maya)**    
一款强大的 Maya 动画拾取器工具   
还没买   
 `2019`，`2023`
- **[Save Selection Tool (Maya)](https://munorr.gumroad.com/l/save_selection_tool?layout=profile)**    
This is an animation tool that lets you save selection sets for objects   
感觉是不怎么好用       
`2023`

### 显示工具集
- **[Blue Pencil 2](https://zurbrigg.com/blue-pencil-2)**    
Advanced Grease Pencil for Maya   
`2019`
- **[ColorKey PySide2 2.0.0 for Maya ](https://www.highend3d.com/maya/script/colorkey-pyside2-for-maya)**    
可用于为时间轴上的关键帧标记（ ticks ）设置颜色。   
通过它能轻松对工作中使用的关键帧类型进行分类   
例如，可将所有黄金关键姿势设为一种颜色，过渡帧设为另一种颜色，保持帧设为第三种颜色；   
也可以按角色部位分类    
有一些错误，不能颜色切换，需要进一步改动   
`Maya 2017+ `  
- **[Quick_Isolate_v.1.04](https://khaledhussein.gumroad.com/l/falvt?layout=profile)**    
Isolate your controls to make your animation easier  
快速隔离    
该工具是 Maya 中用于控件管理的辅助工具，通过创建选择集、编辑元素、控制可见性，帮助用户在复杂场景中快速隔离特定控件，提升操作效率（例如动画师聚焦特定控制器、建模师隐藏无关控件等）     
`2019`,`2023`
- **[FCM Hider](https://francerchiara.gumroad.com/l/FCM_Hider)**    
Isolate your controls to make your animation easier   
This tool allows you to hide controls, meshes, groups and polys into sets with intuitives icons to focus in diferents part of the body while animating      
`Maya 2022`
- **[Making Proxy Rig Script (Python)](https://truongcgartist.gumroad.com/l/proxymaking?layout=profile)**    
一个快速制作代理模型的插件   
`2019`,`2023`


### 截屏及预览输出 
- **[DuBlast_2.1.0](https://rxlaboratorio.org/rx-tool/dublast-for-maya/)**    
一款为 Maya 打造的增强型播放预览（Playblast）工具   
没有安装成功   
`2019`
- **[Screenshot](https://jayantbhatt007.gumroad.com/l/TXQcZ)**     
已经自己重写了一个更完整的版本   
`2019`
- **[Keyframe PRO](https://zurbrigg.com/keyframe-pro)**    
Maya to Keyframe Pro 是 Maya 的 Python 脚本，允许用户通过 Maya 内部的紧凑 UI 控制 Keyframe Pro   
先要安装 Keyframe Pro    
没有链接成功   
`2019`,`2023`

### IK&FK 工具 
- **[IK/FK Switcher](https://petarpehchevski3d.gumroad.com/l/ikfkswitcher)**    
可在保留动画的前提下，在原始控制器之上构建临时的 IK（反向动力学）/FK（正向动力学）设置   
 `2019`，`2023`
 - **[IK - FK Match](https://khaledhussein.gumroad.com/l/pPYh?layout=profile&recommended_by=search)**    
还没钱买。看起来It also works with all Advanced Skeleton and RRM characters.  
`Maya from 2018 to 2025`
- **[Temp IK script](https://petarpehchevski3d.gumroad.com/l/ikfkswitcher)**    
在现有绑定的 FK 链上创建带定位器的临时 IK 链，实现 IK 模式的无缝切换与还原。  
适用于没有 IK/FK 切换器或 IK/FK 对齐系统的绑定，在游戏动画和影视动画制作中非常实用  
要钱没买   
 `2019`，`2023`
 - **[Universal IK FK Switch](https://www.highend3d.com/maya/script/universal-ik-fk-switch-and-match-tool-lite-for-autodesk-maya-for-maya)**    
该脚本用于在动画场景中实现 IK 与 FK 控制器的姿势切换和匹配，   
适用于无内置 IK/FK 匹配功能的绑定，且仅需标准 FK 控制器和 IK 极向量设置。   
其优势在于控制器定义一次后可存储于节点，便于在整个动画过程中重复使用   
`2019` 

### SpaceSwitching(空间转换)工作流 工具集 
- **[basic scripts for the OverRig animation method](https://pavelbarnev.gumroad.com/l/OverRigBasic)**    
`2019`,`2023`
- **[World-Space Conversion](https://camiloalan.wixsite.com/atoolswebsite)**    
`Maya 2017 (or higher)`
- **[Space Switcher](https://nikbartlett.gumroad.com/l/spaceswitcher?layout=profile)**   
 一款适用于 Maya 的空间切换工具，经更新后功能更优。   
 其核心作用是帮助用户创建和管理空间切换，提供了自动吸附、强制吸附、全帧设键、重命名属性信息、查找现有切换等实用功能。    
 对于经常制作空间切换动画，或需要快速为绑定创建驱动枚举的用户而言，能显著提升效率，节省时间。   
`Tested from Maya 2020 up to 2025.  both python 2 and python 3 included`

### 动画帧处理工具 
- **[Aaron Koressel_tool](https://aaronkoressel.com/index.php?nav=tools)**    
动画脚本工具集  
`2019`
- **[nb_KeyCopier](https://nikbartlett.gumroad.com/l/keycopier?layout=profile)**    
用于在 Maya 中复制关键帧，快速匹配循环   
Maya2023使用没有效果，要进一步排查，Maya2019中正常   
`2019`,`2023`
- **[Maya : Keyframe Reduction](https://robertjoosten.gumroad.com/l/maya-keyframe-reduction?layout=profile)**    
关键帧简化工具      
`2019`
- **[maya-tweener](https://github.com/monoteba/maya-tweener)**    
An in-between tool for animators     
`2019`
- **[NP_curveLocalScale 0.1.0 for Maya ](https://www.highend3d.com/maya/script/np_curvelocalscale-for-maya)**    
可实现对多条曲线进行缩放，且每条曲线都有独立的本地轴心点    
`2019`
- **[oaSmoothKeys 1.1.0 for Maya](https://www.highend3d.com/maya/script/oasmoothkeys-for-maya)**    
让动画曲线的极端毛刺平滑。“模糊”选定的关键点。非常适合动画清理和平滑抖动的mocap数据       
选择最少三个动画帧，执行脚本命令     
已经改成了python版本，不用额外输入执行命令了      
`2019`,`2023`
- **[Offset Keyframes](https://cra3d.gumroad.com/l/Kfmoi)**    
该工具可用于偏移关键帧的时间和数值，还能实现关键帧数值与时间的交错、循环和随机化处理   
`2019`,`2023`
- **[Overlapper v1.1.2](https://dkolpakov.gumroad.com/l/Overlapper)**    
Tool for creating animation of overlapping action   
`2019`,`2023`
- **[h_delFlatKeys](https://www.riganimator.com/wp-content/uploads/scripts/)**    
清除动画曲线上无意义的点   
`Maya 2019`
- **[tb Anim Tools](https://tb3d.gumroad.com/l/tbAnimTools)**    
一套专门用于图层动画的动画工具套件     
`Maya 2017+、Python2 和 3。仅限 Windows，目前不支持 macOS`
- **[ZV PARENT MASTER 1.3](https://www.paolodominici.com/products/zvparentmaster/)**    
可以帮助您轻松地为相互接触或交互的对象设置动画      
`Maya 2019`


***
动画工具的UI整合

***



## 特效
### 解算 
- **[Ragdoll Dynamics Unlimited](https://learn.ragdolldynamics.com/maya/home/)**    
Ragdoll 是Maya的实时物理解算器，类似于原生的nCloth和nHair解算器，不同之处在于它适用于变形而不是点，使得它可以更好地与现有的动画控件集成   
`Maya 2019-2024`
## Cloth
- **[qualoth-5.1-3](https://qualoth.com/)**  
`2023`
- **[Carbon](https://numerion-software.com/solutions/products/carbon-for-maya)**  
`2023`

## 渲染
### RenderMan
- [RenderMan](https://renderman.pixar.com/)
miaoxuan   510623Xie （公司）
3567-1329-3695-3806 （家里）

## 资产库管理  
- **[Maya - Module Manager](https://robertjoosten.gumroad.com/l/maya-module-manager?layout=profile&recommended_by=search)**    
在 Maya 中通过切换模块的开启或关闭来管理模块，可显示常规信息并便于访问模块文件和代码。  
还包含 Maya 模块安装程序，您可以使用此 MEL 脚本在 Maya 中轻松分发模块  
使用方法： 
1. 模块可通过切换复选框 激活 / 停用。用户还会看到关于模块的其他信息，包括版本、Maya 版本、平台和语言。
2. 默认情况下，管理器仅显示与当前运行的 Maya 版本兼容的模块；切换复选框后，可编辑与该文件关联的所有模块。
3. 点击文件夹图标可使用关联应用程序打开模块文件，必要时可手动编辑文件 。
4. 直接点击模块文件名旁的文件夹按钮  可管理文件本身，这将在关联应用程序中打开文件。
5. 点击文件夹按钮  可直接进入模块代码文件夹，这将在浏览器中打开模块内容的文件夹。
6. 此管理器会编辑磁盘上的模块文件，若用户无编辑权限，模块仍会显示，但控件将被禁用，无法编辑文件
没安装成功   
`2019`

- **[Studio Library](https://www.studiolibrary.com/)**    
`2019`,`2023`   