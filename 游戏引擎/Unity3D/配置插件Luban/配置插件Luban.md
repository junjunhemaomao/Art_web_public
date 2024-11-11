# 配置插件Luban

## 资源地址  
- [Github地址](https://github.com/focus-creative-games/luban)   
- [文档介绍](https://luban.doc.code-philosophy.com/docs/intro)   

## 说明

luban是一个强大、易用、优雅、稳定的游戏配置解决方案。它设计目标为满足从小型到超大型游戏项目的简单到复杂的游戏配置工作流需求。

luban可以处理丰富的文件类型，支持主流的语言，可以生成多种导出格式，支持丰富的数据检验功能，具有良好的跨平台能力，并且生成极快。 luban有清晰优雅的生成管线设计，支持良好的模块化和插件化，方便开发者进行二次开发。开发者很容易就能将luban适配到自己的配置格式，定制出满足项目要求的强大的配置工具。

luban标准化了游戏配置开发工作流，可以极大提升策划和程序的工作效率。

## 必要准备
### 下载
1. 安装[dotnet sdk 8.0](https://dotnet.microsoft.com/en-us/download)  或更高版本sdk    
2. 下载[luban_examples](https://github.com/focus-creative-games/luban_examples)项目。该项目中包含测试配置以及大量的示例项目。 
3. 下载[luban_unity](https://github.com/focus-creative-games/luban_unity) 
### 安装
1. 创建untiy工程后，复制luban_unity到packages文件夹内，在package manager里可以查看是否安装上  
![alt text](./image.png)
2. 在Project Settings里开启**Unsafe模式**   
![alt text](./image-1.png)
3. Unity工程目录下创建Config文件夹存放导表工具，将MiniTemplate内的文件复制拷贝进去。
4. 复制luban_examples-main\Tools\Luban到Config文件夹下
## 数据生成
- 先梳理需要用到的数据
- baen表里存储数据
- 

## 处理数据
- 编辑批处理文件gen.bat，生成代码和json

## 搭建UI Canvas和Plane
