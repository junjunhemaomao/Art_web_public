# CGMA Rigging for Games
![alt text](./image-1.png)
## leg
创建脚骨骼，注意朝向   
![alt text](./image-2.png)   
![alt text](./image-3.png)   
创建极向量约束   
![alt text](./image-4.png)    
辅助控制骨骼和3个IK结合的方案   
![alt text](./image-5.png)   
![alt text](./image-6.png)   
添加脚旋转控制属性，关联控制器   
案例是新创建一个物体来控制，不是很集中。   
![alt text](./image-7.png)    
最后会把控制骨骼隐藏   
![alt text](./image-8.png)   
腿部无翻转IK
有插件处理   
![alt text](./image-9.png)   
另一种腿绑定
在IK解算器方面，同样脚部两个ik 是但链IK
也是脚部IK作为辅助控制骨的子物体    
![alt text](./image-10.png)    
创建辅助骨骼，并给上IK   
![alt text](./image-11.png)   
![alt text](./image-12.png)    
吸附到对应骨骼   
![alt text](./image-13.png)   
旋转骨骼再旋转辅助骨骼的IK，进行极向量约束，方向如果不对吗，IK解算器的Twistr的值可以180   
![alt text](./image-14.png)   
可以添加两个控制器，控制翻转脚的点，可以控制骨骼的长短进行微调   
![alt text](./image-15.png)    
层级结构上，作为骨骼的子物体     
![alt text](./image-16.png)    
使用驱动关键帧来关联，控制曲线是驱动物体，骨骼是被驱动物体   
![alt text](./image-17.png)    
这里需要多次进行驱动关键帧的计算，很考验理解和操作，可以多实践下   
![alt text](./image-18.png)   

# Arms
![alt text](./image-19.png)   
创建FK   
controller可以传入场景内虚拟体的字符串名字，执行脚本可以替换
controller = “cube”  
![alt text](./image-20.png)

![alt text](./image-21.png)

   
IK，FK的切换

![alt text](./image-22.png)

肩膀

### 手

![alt text](./image-23.png)

创建后执行脚本，创建FK控制   
   

![alt text](./image-24.png)

手控制器约束
用绑定骨骼父子约束一个空组，轴心点在手腕。
手的控制器作为空组的子物体。这样FK和IK都可以控制手的控制器整体移动旋转