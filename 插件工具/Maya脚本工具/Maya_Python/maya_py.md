# Maya_Python学习（一）
Maya.cmds本质上是对MEL（Maya Embedded Language）命令的Python封装。仍然需要按照命令行的思路来编写代码，有时候可能需要组合多个命令来实现复杂功能。

OpenMaya是由Autodesk官方开发的一个更为面向对象的Python API。OpenMaya允许开发人员直接访问和操作Maya的内部数据结构，从而更深入地控制和定制Maya的行为。它更贴近Python的编程风格，提供了更高级的抽象和更简洁的代码。

PyMEL（Python Maya Embedded Language）是由社区开发的工具，旨在为Maya提供更高级、更Pythonic的接口。是对OpenMaya进一步的包装，更面向实际使用。

```
import maya.cmds as cmds
sphereNodes = cmds.polySphere()
print(sphereNodes) 
```
可以将形状节点保存在另一个变量中
```
sphereShape = sphereNodes[1]
print(sphereShape)
```
获取节点的某个属性值,并利用
```
rad = cmds.polySphere(sphereShape,q=True,radius=True)
print('radius is:'+ str(rad))
cmds.polyCube(width=rad*2,height=rad*2,depth=rad*2)
```
并不是所有的节点都有此类命令，有时候并不是所有属性都有标志（命名）
```
print(cmds.help('spaceLocator'))
```
创建定位器，并把第一个节点保存在loc中
```
loc = cmds.spaceLocator()[0]
print (loc)
```
getAttr()可以获取任意节点的任意属性值。只需要将节点名称，句点和属性名称作为字符串传递即可
```
sx = cmds.getAttr(loc + '.scaleX')
print(sx)
sx*= 2
cmds.setAttr(loc+'.scaleX',sx)
```
有的属性不是一个单一值，可能是复合属性
```
print (cmds.xform(loc,q=True,translation=True))
cmds.xform(loc,translation=[0,10,0])
```
maya中转换数据的机制是连接属性。属性连接的基本要求是类型相同。
```
sphere = cmds.polySphere()[0]
cube = cmds.polyCube()[0]
cmds.connectAttr(cube+'.ry',sphere+'.ty')
cmds.select(cube)
```