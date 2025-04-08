# Large Game Environment Creation - In-Depth Tutorial Course [UE5]  
## 概念及参考
![alt text](./image.png)   
![alt text](./image-1.png)   
分析拆解部件及元素   
![alt text](./Concept_Art_Planning.jpg)   
寻找参考。部件和材质等      
![alt text](./image-2.png)   
## Blockout 
Sweep Mesh的内置功能已经可以替代之前沿样条线建模的各种插件了。  
且可以用自定义模型或者自定义曲线进行放样  
![alt text](./image-3.png)   
![alt text](./image-4.png)   
创建基本模块   
![alt text](./image-5.png)    
![alt text](./image-6.png)    
创建样条线，打开网格吸附，看需要的精度情况修改网格密度   
感觉大可不必    
![alt text](./image-7.png)    
![alt text](./image-8.png)    
思路是用样条线进行放样  
![alt text](./image-9.png)   
![alt text](./image-10.png)   
这里的polymirror技巧用很少，关键是AXis方式修改下，就可以旋转镜像的那一半    
![alt text](./image-11.png)   
![alt text](./image-12.png)    
复制小技巧：shift复制一个之后，可以shift+D递增复制  
![alt text](./image-13.png)   
继续创建其它block  
![alt text](./image-14.png)   
这里的圆柱形结构，需要先正常创建后进行弯曲。可以输入值控制精确弯曲幅度   
![alt text](./image-15.png)   
![alt text](./image-16.png)   
## 设置虚幻引擎并导入blockout
设置轴心点，归位模型，注意朝向正面是Z  
![alt text](./image-17.png)
![alt text](./image-18.png)   
测试拼合，修改潜在问题，补缺部件  
![alt text](./image-19.png)   
![alt text](./image-20.png)   
进行深入拼合  
![alt text](./image-21.png)   
![alt text](./image-22.png)   
![alt text](./image-23.png)   
![alt text](./image-24.png)   
![alt text](./image-25.png)   
继续补全建筑部件   
![alt text](./image-26.png)   
调试及灯光朝向调整   
![alt text](./image-27.png)   
## 细化部件，及ZB高模
![alt text](./image-28.png)   
![alt text](./image-29.png)   
![alt text](./image-30.png)   
减面大师处理后导回Maya      
![alt text](./image-31.png)   
处理模型的错误，最后展开UV   
实际上引擎用就是用的建面后的模型   
![alt text](./image-32.png)   
导出ZB的高模，整理好之后进入八猴烘焙   
![alt text](./image-33.png)   
同名更新原始资源，引擎内是引用相应的会刷新  
![alt text](./image-34.png)  
导入法线     
如果是OpenGL模式烘焙的法线，需要翻转绿通道   
![alt text](./image-35.png)   
创建基本的白模母材质  
![alt text](./image-36.png)    
把实例材质给到对应的模型   
![alt text](./image-37.png)   
看具体情况，在场景中适当调整旋转等操作，让同类元素的重复感减弱   
![alt text](./image-38.png)   
设置模型的LOD   
![alt text](./image-39.png)   
设置LOD的变化幅度   
![alt text](./image-40.png)     
可以预览LOD的切换变化    
![alt text](./image-41.png)    
游戏显示窗口测试，可以看到LOD起作用了   
![alt text](./image-42.png)   
如果有需要，在每一级可以调整切换的阈值   
![alt text](./image-43.png)   
继续创建其它部件的中模   
![alt text](./image-44.png)   
![alt text](./image-45.png)   
ZB中进行雕刻   
![alt text](./image-46.png)    
![alt text](./image-47.png)   
减面后导回Maya进行摆放调整等   
拼合后导入ZB，雕刻其余相互影响的部分   
![alt text](./image-48.png)   
![alt text](./image-49.png)   
![alt text](./image-50.png)    
同样减面大师处理后，进入Maya分UV   
![alt text](./image-51.png)   
![alt text](./image-52.png)   
八猴中烘焙   
![alt text](./image-53.png)    
导出资源并刷新   
![alt text](./image-54.png)   
![alt text](./image-55.png)   
其它部件同理制作   
![alt text](./image-56.png)   
![alt text](./image-57.png)   
![alt text](./image-58.png)   
![alt text](./image-59.png)   
![alt text](./image-60.png)   
逐步深入  
![alt text](./image-61.png)    
![alt text](./image-62.png)     
至此基本完成白模搭建  
![alt text](./image-63.png)   
## 材质  
规划材质及种类   
![alt text](./image-64.png)   
### 创建沙子纹理  
因为是无缝贴图，需要用SD来做   
