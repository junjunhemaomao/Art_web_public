# High Precision Female Portrait Making Workflow  
![alt text](./Thumbnail.jpg)    
## 模型制作  
因为是对着照片做，maya中对齐参考图，并软选择调整大型    
![alt text](./image.png)     
![alt text](./image-1.png)    
![alt text](./image-2.png)   
![alt text](./image-3.png)   
进入ZB细化   
很丑。开始制作   
![alt text](./image-4.png)   
![alt text](./image-5.png)   
![alt text](./image-6.png)   
添加眼球牙齿等，继续深入调整  
![alt text](./image-7.png)   
![alt text](./image-8.png)   
耳朵深入   
![alt text](./image-9.png)   
继续   
![alt text](./image-10.png)   
导出低模，在Maya中调整一些有可能走型的地方   
![alt text](./image-11.png)   
调整完后导出同名替换，再从ZB中导入  
![alt text](./image-12.png)    
继续深入  
![alt text](./image-13.png)   
眼睛深入   
![alt text](./image-14.png)   
继续调整  
![alt text](./image-15.png)   
![alt text](./image-16.png)    
![alt text](./image-17.png)   
![alt text](./image-18.png)   
看必要性，再把低模到Maya中调整下  
![alt text](./image-19.png)    
继续   
![alt text](./image-20.png)   
添加头发体块  
![alt text](./image-21.png)   
结合Maya添加体块  
![alt text](./image-22.png)   
![alt text](./image-23.png)    
低模导出拆UV  
![alt text](./image-24.png)    
分好UV的低模导回ZB。可以检查uv   
![alt text](./image-25.png)    
可以在mudbox里绘制转折点,用来定位贴图   
绘制完成导出为PSD      
![alt text](./image-26.png)    
![alt text](./image-27.png)    
PS中导入XYZt贴图，开始定位   
![alt text](./image-28.png)    
使用PS的操控变形    
![alt text](./image-29.png)    
添加定位点并拖动调整  
![alt text](./image-30.png)    
![alt text](./image-31.png)    
最后把操控变形的滤镜拖给其他XYZ图层，就同步了操作效果   
![alt text](./image-32.png)   
局部再用液化工具进行微调。同样完成后可以把效果用在其他图层上  
![alt text](./image-33.png)     
![alt text](./image-34.png)    
如果闭眼贴图有睫毛，需要修掉，用修补工具   
![alt text](./image-35.png)    
耳发的毛发也需要修掉   
![alt text](./image-36.png)   
![alt text](./image-37.png)   
置换图的毛发也需要修掉   
![alt text](./image-38.png)    
置换贴图的三层通道代表细节层次的不同，需要单独输出到ZB中   
需要把每个通道的内容先复制，再粘贴进图层里，才能正确保存出独立的三个通道效果   
![alt text](./image-39.png)    
导入置换贴图，并上下翻转   
![alt text](./image-40.png)  
![alt text](./image-41.png)    
![alt text](./image-42.png)    
根据效果， 在PS中再修整下置换贴图   
回到ZB，可以使用Morph笔刷，在置换强弱上再进行一些修整    
![alt text](./image-43.png)   
用一些通用置换纹理添补一些必要的部分   
![alt text](./image-44.png)    
![alt text](./image-45.png)   
一些特殊小区域需要特定的Alpha去添补   
![alt text](./image-46.png)  
基本完成了      
![alt text](./image-47.png)   
可以设置渲染看看效果   
![alt text](./image-48.png)    
### 眼球制作   
![alt text](./image-49.png)    
![alt text](./image-50.png)   
同样对虹膜等进行置换和颜色贴图制作   
![alt text](./image-51.png)    
ZB中的效果    
![alt text](./image-52.png)    
![alt text](./image-53.png)    
Maya中的渲染测试  
![alt text](./image-54.png)    
![alt text](./image-55.png)    
随着深入还会在每个阶段发现模型需要调整的细节   
耐心调整   
## 材质贴图  
视项目具体情况，如果最终模型是不对称的。可以保留一个对称的模型  
因为拓扑结构是一样的，可以用BS，在有需要的时候切换会对称的模型   
做贴图时候比较方便   
![alt text](./image-56.png)    
mudbox中投射绘制    
![alt text](./image-57.png)     
![alt text](./image-58.png)    
![alt text](./image-59.png)    
![alt text](./image-60.png)    
初步完成后渲染测试  
![alt text](./image-61.png)    
绘制高光图，在比较湿润的地方绘制白色  
![alt text](./image-62.png)   
根据参考图分析，高光还存在细微的毛孔肌理细节    
![alt text](./image-63.png)   
需要更加XYZ的一张来进行调整叠加  
![alt text](./image-64.png)    
![alt text](./image-65.png)   
### 眼睛贴图
![alt text](./image-66.png)   
![alt text](./image-67.png)   
![alt text](./image-68.png)   
![alt text](./image-69.png)   
![alt text](./image-70.png)   
![alt text](./image-71.png)  
![alt text](./image-72.png)    
### 口腔牙齿    
![alt text](./image-73.png)   
ZB中雕刻   
![alt text](./image-74.png)   
mudbox中投射   
![alt text](./image-75.png)   
![alt text](./image-76.png)    
渲染测试  
![alt text](./image-77.png)    
mari中进行精修    
![alt text](./image-78.png)    
![alt text](./image-79.png)    
![alt text](./image-80.png)   
### 泪腺   
![alt text](./image-81.png)   
![alt text](./image-82.png)   
![alt text](./image-83.png)   
![alt text](./image-86.png)   
前后的差别     
![alt text](./image-84.png)   
![alt text](./image-85.png)   
## 毛发渲染   
   