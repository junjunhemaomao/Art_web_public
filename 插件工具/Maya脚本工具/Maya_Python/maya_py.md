# Maya_Python学习（一）

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