# Unity API
## Start()和Awake()的区别
在 Unity 中，Awake() 和 Start() 是生命周期方法，它们的执行时机不同，作用也略有区别。以下是对两者的详细解释：

### 1. Awake()
执行时机：Awake() 是在对象实例化后立即调用的（即该脚本所依附的对象被创建或加载到场景中时）。   
执行顺序：无论脚本是否启用，Awake() 都会在场景中所有对象的 Awake() 方法依次调用完之后，再进入下一步的游戏流程。因此，Awake() 更适合做初始化操作，确保其他对象已经被实例化。  
#### 典型用途：
用于初始化变量和依赖性设置。
用于加载资源或引用其他对象组件。
比如，创建自定义的输入系统，加载外部数据，或获取组件的引用。
### 2. Start()
执行时机：Start() 在对象的 Awake() 之后、第一次 Update() 调用之前执行。Start() 只会在脚本启用的情况下执行。如果脚本在场景中是禁用的，Start() 不会被调用，直到该脚本启用。  
执行顺序：所有对象的 Awake() 方法执行完毕后，Start() 才会开始执行。因此，Start() 可以依赖 Awake() 完成的初始化工作。
#### 典型用途：
用于需要在场景中所有对象初始化完成后执行的操作。
比如，设置玩家位置、启动协程、开启物理操作或与其他已初始化的对象交互。
#### 简单总结：
Awake() 是初始化阶段的第一步，适合做早期的初始化，如获取引用。
Start() 在 Awake() 后运行，适合在确保所有对象初始化完成后执行的逻辑。
示例：
```csharp
void Awake()
{
    Debug.Log("Awake: 初始化控制器");
    playerControls = new PlayerControls();  // 在Awake中创建输入控制对象
}

void Start()
{
    Debug.Log("Start: 获取组件引用并初始化");
    rb = GetComponent<Rigidbody>();  // 在Start中获取其他组件的引用
}
```
### 总结： 
使用 Awake() 来处理早期初始化任务（如设置数据结构或加载资源），而 Start() 用于处理在对象完全初始化后进行的任务（如与其他对象交互）。

##  [SerializeField]
[SerializeField] 是 Unity 中的一个特殊属性（Attribute），用于让私有或受保护的变量能够在 Unity 编辑器的检视面板（Inspector）中显示并可编辑，即使它们的访问修饰符是 private 或 protected。

### 具体作用：
显示私有变量：通常情况下，private 变量不会出现在 Unity 的 Inspector 面板中。但通过给这些变量添加 [SerializeField] 属性，可以让它们显示在面板中，这样可以通过编辑器直接修改它们的值。

保持封装性：使用 [SerializeField] 的一个好处是，依然可以保持变量的封装性（private），即其他类无法直接访问这个变量，同时又能在编辑器中进行调整。这使得开发者能够更好地控制代码的结构和设计，同时保持灵活性。

与 public 的区别：public 变量默认是可以在 Inspector 中显示并编辑的，但使用 public 会使得变量可以被其他脚本直接访问，而 [SerializeField] 保持了变量的私有性，因此推荐使用 [SerializeField] 来代替 public，以避免不必要的外部访问。

### 示例：
```csharp
public class PlayerController : MonoBehaviour
{
    [SerializeField] private int speed;            // 速度，虽然是private，但可以在Inspector中编辑
    [SerializeField] private Animator anim;        // 动画组件
    [SerializeField] private SpriteRenderer playerSprite; // 角色的SpriteRenderer组件
}
```
什么时候使用 [SerializeField]：
当你想要将变量的值通过 Unity 编辑器调整，但又希望保持它的私有性时。
避免使用 public 暴露过多的类成员，保持良好的封装性和代码安全性。  
注意：
只有 序列化 的类型才能使用 [SerializeField]，这意味着基本数据类型（如 int、float、bool）和 Unity 常见的数据类型（如 Vector3、GameObject 等）可以被序列化。自定义类要想被序列化，必须标记为 Serializable。  
### 总结：
[SerializeField] 是一种在 Unity 开发中保持变量封装性、提高编辑器调整灵活性的好方法。
##  [AssetDatabase]
总结及常用功能说明：
### 导入资源 (AssetDatabase.ImportAsset)：

ImportAsset 方法允许你通过脚本自动导入文件到 Unity 项目。例如，你可以从外部文件系统中导入图片、模型等资源到 Unity 的 Assets 文件夹。
使用场景：你可以通过编写脚本自动导入资源文件，而不必手动拖拽，尤其适合大批量资源的导入。
### 加载资源 (AssetDatabase.LoadAssetAtPath)：

LoadAssetAtPath 用于从 Assets 文件夹中加载指定路径下的资源。
使用场景：需要在编辑器模式下加载某个资源（例如，图片、模型、材质等）来做进一步操作。
### 文件操作：
- (AssetDatabase.CreateAsset)：通过脚本创建新的 Unity 资源（如材质、脚本等）。
- 重命名资源 (AssetDatabase.RenameAsset)：可以使用此方法重命名现有资源。
- 移动资源 (AssetDatabase.MoveAsset)：将某个资源从一个文件夹移动到另一个文件夹。
- 删除资源 (AssetDatabase.DeleteAsset)：用于从项目中删除某个资源。
- 复制资源 (AssetDatabase.CopyAsset)：复制现有资源到新路径下。
- 创建文件夹 (AssetDatabase.CreateFolder)：用于在 Assets 文件夹下创建新的子文件夹。
- 移动到垃圾桶 (AssetDatabase.MoveAssetToTrash)：将某个资源移到垃圾桶（更类似于删除操作，但资源仍可以恢复）。
### 刷新资源数据库 (AssetDatabase.Refresh)：

任何对文件系统进行的更改后，应该调用 AssetDatabase.Refresh 方法。该方法会强制 Unity 刷新资源数据库，以确保所有更改立即生效。
使用场景：在脚本中进行资源操作（如创建、删除文件）后调用它，确保 Unity 了解这些变化。
### 使用示例：
假设你需要通过脚本从外部目录导入一张图片到 Assets/Textures 文件夹并将其加载为纹理：
```csharp
using UnityEditor;
using UnityEngine;

public class ImportAndLoadExample
{
    [MenuItem("AssetDatabase/Import and Load Example")]
    static void ImportAndLoadAsset()
    {
        // 导入一张图片到项目的指定路径
        string assetPath = "Assets/Textures/texture.jpg";
        AssetDatabase.ImportAsset(assetPath, ImportAssetOptions.Default);

        // 确保导入后刷新数据库
        AssetDatabase.Refresh();

        // 加载这张图片作为 Texture2D
        Texture2D texture = AssetDatabase.LoadAssetAtPath<Texture2D>(assetPath);

        if (texture != null)
        {
            Debug.Log("Texture loaded successfully!");
        }
        else
        {
            Debug.LogError("Failed to load texture.");
        }
    }
}
```
### 现实开发场景中的应用：
1. 自动化资源管理：
在大型项目中，通过编写脚本自动管理资源的导入、重命名、组织、或删除，是提高工作效率的有效手段。例如，定期自动从指定文件夹导入新资源。
2. 批量处理资源：
当你有一系列资源需要批量处理时（例如，批量重命名文件、改变资源路径或更新材质），使用 AssetDatabase 的 API 可以帮助你快速完成这些操作，而不是手动执行。
3. 工具开发：
AssetDatabase API 适合用于开发编辑器扩展工具。例如，一个自定义资源管理器工具，能够通过脚本管理项目中的所有资源，或执行特定的自动化任务。  
重要提示：
这些 API 主要在 编辑器模式 下使用，不适合在游戏运行时使用。如果你需要在运行时加载资源，应使用 Resources.Load 或 AssetBundles。