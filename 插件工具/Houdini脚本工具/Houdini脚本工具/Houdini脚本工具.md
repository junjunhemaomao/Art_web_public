# Houdini 脚本工具  

## Aelib
为SideFX Houdini打造的数字资产、工具与脚本库。

![alt text](./image.png)   
Aelib 是一个大型的 Houdini 数字资产、预设和脚本的开源资产库。它包含 100 多个工具，是 SideFX 网站上一个特色的第三方库。   
<https://www.nicholas-taylor.com/opensource>    
开发者是 ManvsMachine 技术总监 Nick Taylor，他还开发了一系列其它的工具。  
<https://github.com/Aeoll/Aelib>  

### 核心资产
`/otls`文件夹包含约100个SOP级数字资产(HDA)，通过`aelib`选项卡子菜单访问，分类如下：

#### 功能分类
- ​**创建器**​  
  几何创建类SOP，通常无需输入几何体
- ​**变形器**​  
  修改几何体位置
- ​**修改器**​  
  涉及创建/删除点/面且需要输入几何体
- ​**曲线**​  
  作用于折线曲线的多样化工具
- ​**IO**​  
  磁盘文件读写操作
- ​**解算器**​  
  模拟与反馈循环系统
- ​**通用工具**​  
  多功能工具与杂项
- ​**扩展**​  
  在现有Houdini或第三方SOP基础上增强功能

### 附加组件
- 📁 包含宏和实用Python脚本的工具架
- 📄 多个新增功能的VEX头文件
- 📝 为节点编辑器提供预设的`VEXpressions.txt`
- 🐍 少量SOP节点所需的Python2.7库

### 使用说明
`/examples`目录包含演示用hip场景文件，节点均附带：
1. 帮助卡片（输入参数/功能说明）
2. 悬停参数提示
3. 内置预设参数

### Houdini包管理方式
1. 下载仓库并解压至任意目录（建议路径使用正斜杠，例：C:/Users/路径/aelib）
2. 在Houdini用户目录创建packages文件夹：
   - Windows: `~/Documents/houdini18.0/packages`
   - Linux/macOS: `~/houdini18.0/packages`
3. 将Aelib.json复制到packages目录
4. 编辑JSON文件中的路径变量：
```json
   {
     "env": [
       {"AELIB": "C:/your/path/to/aelib-parent-folder"}
     ]
   }
```

****
## 其他资源
- <https://www.orbolt.com/>   
- [Houdini最强HDA集合特效插件FFX Collection中字教程](https://item.taobao.com/item.htm?abbucket=3&id=873213369779&ns=1&pisk=gfm_Th6oV1f_-wOm-fvUdff04OEjXp-P1twxExINHlETM2MoG5JDSluQGXhQ6GJMSrFjslUm7SPaGoMmNpRy43kiIoq9aQ-r6N2rbujTHPC496e4cRK6YeJtIoqvG9Svz3MiwiOquC2Yppw43iQxMSCdvW2VWShY6yCLF8qYDFhqOkubFOXqslWYJ0DjSKqVjr1EOcV4nrPmxvuSOr2q7jyHvAljsOlZjyj3t8eYHNUA9Megn1EADGFLJ-ycXZQOX6KLt-EYMjEvdyHBwMwv58H6BhqpJiJ5SBPhDinQCyLEIWhxgKyg5-D_OQdjAg4_wAFCcQPHpWFbt0deRv0tWfynG3OQmX0xM-Gd9IziH2GQCfR5iSoiQmNZCFdZdkVsEWMBVac7fja-Xy6Aclq_tkwK2K7uTDNZMcapUga4v0z8X28H_rr_Fjni1tsxwvkrjymXN6Fm78qLUAx1AuHTHgW547MhDZ6QriwQap9CoZYcWQsj2VHvWPe3CQJBd1b0WJ2Qap9CsZ4TKRMedp1Go&priceTId=213e06fd17407345600071883e1abc&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%2218569cbc568f24201a2edd5c88abf3aa%22%7D&xxc=taobaoSearch)   
![alt text](./image-1.png)    
- [程序化建筑建模 Houdini Architecture Nodes - Pack #1](https://quaternioff.gumroad.com/l/han1?layout=profile)   
- [Houdi插件合集 FeELib for Houdini](https://item.taobao.com/item.htm?id=821575012106&ns=1&pisk=geezTtAPITBzy6qalRDegYeqMgD8Wv71UJgIxkqnV40oPkmnLr4C24ZhyyyEokF52X_JY3e47p95y_EHLvMh5N61CuK-pvbsEGgOHUns4eXIqvvmeDGRliTfCuE-J38hfSX68ABGb8On-yDmicnoKB0kZilmfDDHEXvkiE0xogDIEbhXn7ZSe49ItmH3CygBy6p8TZELOD9L2vdbL-rQVv_HZ9DUIuk7y6jl0mmEA3mHE0xmoc0D-DcoqEvmvDonqvmh0o0xxv03-XDC2J2y34llYDQSTU_hlB0TqqJHK8XKUVJKSmn73bGoSjDvKmwq4bug48_IWum0h-lsGH1KnlFbrmkNhQDg0W4asyC6MYr3Zyh4yZdqlS28x2cvxdZ4P-qi0oLkZckrzf2oiOs_2XV43YwlJCEb04cZhS1APXMzz53tZsQY8ou7-8lDzZgQ1owogPbX3yhU6kiUzTJuSg8eJmxAaJFy-BloDmu10izDE9AkI0gI_BdKiinq5GSw9BhoDmu1bGRp9j4t0VsNb&priceTId=2150468f17407360286781910e056b&spm=a21n57.1.similarHoverItem.14&utparam=%7B%22aplus_abtest%22%3A%22fc8d6ee3e2409d1d6d1f1ac0fac546d8%22%7D&xxc=taobaoSearch)    
![alt text](./image-2.png)