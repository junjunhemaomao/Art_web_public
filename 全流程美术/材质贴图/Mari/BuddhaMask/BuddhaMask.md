# Photo-Realistic Texturing in Mari Buddha Mask Full Course  

![alt text](./image.png)   
雕刻    
![alt text](./image-1.png)   
进一步添加细节   
![alt text](./image-2.png)    
低模分UV   
![alt text](./image-3.png)    
UDIM   
![alt text](./image-4.png)    
Mari中设置一个平铺纹理   
![alt text](./image-5.png)    
作者的做法是预先分析出哪些平铺纹理，先一层层合并组合好      
![alt text](./image-6.png)     
![alt text](./image-7.png)     
再单独组织mask节点，使用插件包的radio transmitter节点   
![alt text](./image-8.png)    
使用SP生成mask     
![alt text](./image-9.png)    
导入mari并在节点中创建radio node进行mask的关联    
![alt text](./image-10.png)     
关联transmitter节点     
![alt text](./image-11.png)    
![alt text](./image-12.png)     
连接后可以看到产生变化    
![alt text](./image-13.png)    
继续生成红色部分的遮罩    
![alt text](./image-14.png)     
可以视情况添加遮罩，本质是paint节点开始   
![alt text](./image-15.png)    
实际就是把mask单独组织管理，避免和主节点混合太庞大混乱    
mask组本身也可以进一步合成编辑    
![alt text](./image-16.png)     
可以在paint节点上，使用黑白纹理图用paint buffer来绘制遮罩    
![alt text](./image-17.png)     
遮罩节点本身也是可以应用其他遮罩的    
![alt text](./image-18.png)    
在混合模式上也可以根据情况进行修改，本质同理图层叠加的模式    
![alt text](./image-19.png)     
可以引入纹理化的黑白图做遮罩绘制   
![alt text](./image-20.png)    
对照细节，进行细致调整    
![alt text](./image-21.png)    
更多的时候就是在绘制遮罩，对过渡和细节进行调整    
![alt text](./image-22.png)    
![alt text](./image-23.png)     
![alt text](./image-24.png)    
![alt text](./image-25.png)      
基本完成   
![alt text](./image-26.png)    
可以复制某个节点,在其他组里继续使用      
![alt text](./image-27.png)  
在创建的bump节点组里粘贴使用这个复制节点    
![alt text](./image-28.png)    
添加值节点，可以不改变原节点的情况下继承并修改    
![alt text](./image-29.png)    
需要思路清晰，对节点进行合理组织和调整，做出其他通道的贴图    
![alt text](./image-30.png)    
Maya中设置材质   
![alt text](./image-31.png)     
渲染   
![alt text](./image-32.png)     
![alt text](./image-33.png)    