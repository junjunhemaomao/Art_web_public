# Unreal Engine Ultimate Survival Horror Course 
## 设置 Setting Up 
新建第三人称项目，创建后处理体积，设置曝光恒定，并勾选无限范围   
![alt text](./image.png)    
### 游戏实例
gameinstance蓝图。  
游戏开始时生成，游戏结束时被删除   
是跨越关卡间的，不会被重置    
存储全局数据            
命名为`HG_GameInstance`     
![alt text](./image-1.png)    
设置里设置游戏实例    
![alt text](./image-2.png)     
### 游戏模式 Game Mode     
game mode存储关卡信息    
例如pawn controller,game state,HUD class     
当一个关卡被打开时，游戏模式game mode会被生成    
当一个关卡被关闭时，游戏模式game mode会被移除     
多人游戏时，只有服务器可以访问游戏模式。单人模式则不然   
单人游戏，大部分信息可以保存在游戏模式game mode中      
![alt text](./image-3.png)     
命名为`L1_GameMode`    
需要把这个分配给关卡     
![alt text](./image-4.png)    
下面是游戏模式更具体的内容   
![alt text](./image-5.png)    
每个关卡都需要附加一个游戏模式   
如果为none则用默认的gamemode    
![alt text](./image-6.png)    
### 游戏状态 Game states
不同于游戏模式，游戏状态是服务器和客户端都可以访问   
包含关卡信息，如世界时间或者关卡当前目标   
创建 Game states base    
![alt text](./image-7.png)     
命名`L1_GameState`   
双击`L1_GameMode` 指定 `L1_GameState`       
![alt text](./image-8.png)
### 玩家状态 Player states    
一个关卡有一个游戏状态，但每个玩家都有一个玩家状态    
用于储存玩家名称，得分，血条等    
![alt text](./image-9.png)    
命名`L1_PlayerState`    
![alt text](./image-10.png)    
同样添加到游戏模式Game Mode中     
![alt text](./image-11.png)     
HUD已经被淘汰，更多用于调试。    
现在用UMG    
![alt text](./image-12.png)     
命名`L1_HUD`，并分配给GameMode        
### 玩家控制器 Player Controller 
每个关卡都有相同的控制器，在关卡目录外创建玩家控制器       
![alt text](./image-13.png)    
命名`HG_PlayerController`    
添加进关卡gameMode里    
![alt text](./image-14.png)     
添加了玩家角色后，还需要这里进行一些设置    
创建角色类    
![alt text](./image-15.png)    
命名`L1_Character`    
![alt text](./image-16.png)    
进入内部创建摄像机    
![alt text](./image-17.png)     
调整摄像机到第一人称头部位置    
![alt text](./image-18.png)     
添加到游戏模式 Game Mode    
![alt text](./image-19.png)    
## 角色控制 Character Controller   
