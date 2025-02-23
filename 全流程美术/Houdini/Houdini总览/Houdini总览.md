# Houdini 常用节点和技术概述

Houdini 提供了多种节点和技术用于处理不同类型的模拟和操作，以下是对常用节点和技术的总结：

## 1. **SOP（Surface Operators）**
   - **作用**：操作几何体，用于创建、修改和处理3D物体的几何形状。
   - **应用**：建模、变形、切割、合并、布尔运算等。
   - **常见节点**：
     - `Transform SOP`
     - `PolyExtrude SOP`
     - `Subdivide SOP`

## 2. **POP（Particle Operators）**
   - **作用**：用于粒子系统的创建和控制，处理粒子的生命周期、行为、速度等。
   - **应用**：烟雾、火焰、尘土、雨水等效果的模拟。
   - **常见节点**：
     - `POP Source`
     - `POP Force`
     - `POP Wind`
     - `POP Drag`

## 3. **VEX（Vector Expression）**
   - **作用**：一种编程语言，用于编写自定义代码，控制几何体和模拟的行为。
   - **应用**：自定义着色器、粒子行为、变形等。
   - **常见用途**：
     - 自定义着色器（`Shader`）
     - 粒子运动（`POP`）
     - 变换（`Wrangle`）

## 4. **Vellum**
   - **作用**：用于柔体物理模拟，处理布料、弹性物体、软体、皮肤等。
   - **应用**：模拟布料、绳索、皮肤等柔性物体的动态行为。
   - **常见节点**：
     - `Vellum Cloth`
     - `Vellum Solver`
     - `Vellum Constraints`
     - `Vellum Pin`

## 5. **RBD（Rigid Body Dynamics）**
   - **作用**：用于刚体物理模拟，处理物体间的碰撞、破碎等交互。
   - **应用**：破碎物体（如玻璃、石块）、碰撞、堆叠等效果。
   - **常见节点**：
     - `RBD Object`
     - `RBD Glue`
     - `RBD Solver`
     - `RBD Configure`

## 6. **FLIP（Fluid Implicit Particle）**
   - **作用**：流体模拟技术，结合粒子和流体网格的优点，用于液体的模拟。
   - **应用**：模拟水、液体溅射、波浪等效果。
   - **常见节点**：
     - `Flip Fluid`
     - `Flip Solver`
     - `Particle Fluid`
     - `Flip Object`

## 7. **Pyro（Fire & Smoke）**
   - **作用**：用于火焰、烟雾、爆炸等气体模拟。
   - **应用**：模拟火焰、烟雾、爆炸、枪击火花等。
   - **常见节点**：
     - `Pyro Solver`
     - `Gas Field VOP`
     - `Smoke`
     - `Fire`
     - `Explosion`

---

## 总结
- **SOP**：几何操作。
- **POP**：粒子系统。
- **VEX**：自定义编程语言，提供高效定制。
- **Vellum**：柔性物体的模拟。
- **RBD**：刚体物理模拟。
- **FLIP**：液体模拟。
- **Pyro**：火焰、烟雾和爆炸等气体模拟。
