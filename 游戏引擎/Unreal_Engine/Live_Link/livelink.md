# UE和Maya互通动画数据  
<https://www.youtube.com/watch?v=Gj4QoDp3R34>   
## UE内启用live link
貌似不用单独下载了，在引擎内就可以启用   
![alt text](./image.png)    
重启生效   
![alt text](./image-1.png)   
## Maya安装plug-ins   
从如下路径找到插件文件   
C:\Program Files\Epic Games\UE_4.25\Engine\Plugins\Marketplace\MayaLiveLink   
拷贝插件文件到Maya安装路径下：   
C:\Program Files\Autodesk\Maya2019\bin\plug-ins   
在Maya内启动插件      
![alt text](./image-2.png)    
## 连接通信  
在UE内启动live link，可以看到已经识别出了Maya link   
![alt text](./image-3.png)    
点击后   
![alt text](./image-4.png)   
maya内启动插件，可以看到已经显示连接  
![alt text](./image-5.png)   
## 资产数据同步 
Maya内添加同步的根骨骼   
![alt text](./image-7.png)   
UE内导入纯绑定骨骼和模型（不带控制器和辅助节点）  
![alt text](./image-6.png)   
测试同步。目前只是成功在预览器中同步   
![alt text](./image-8.png)   
现在在关卡中设置同步。需要创建一个蓝图资源ABP_LiveLink   
![alt text](./image-9.png)   
![alt text](./image-10.png)   
编译并保存   
![alt text](./image-11.png)    
再添加一个暂停打断的节点。最后编译保存   
![alt text](./image-12.png)   
把ABP_LiveLink放入关卡。运行模式下可以看见动画已经同步了      
![alt text](./image-13.png)