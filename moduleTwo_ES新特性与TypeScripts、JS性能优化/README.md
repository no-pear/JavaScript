## ECMAScript

#### ES2015 

+ let 和 作用域

  - 块级作用域
  - 没有变量提升

+ const 常量

+ 数组的解构

+ 对象的解构

+ 模板字符串

+ 字符串的扩展方法

  - includes()
  - startsWith()
  - endsWith()

+ 参数默认值

+ 剩余参数

+ 展开数组

+ 箭头函数

  ```箭头函数不会改变this指向```

+ 对象字面量增强

+ Object.assign()

+ Object.is() 判断相等

+ Proxy vs Object.defineProperty

  - 监听对象属性的删除
  - 对数组对象的监视（重写数组的操作方法）
  - 非侵入式

+ Reflect 静态类（不能new, 与Math相似)

+ Promise

+ class

  - extends

+ Set(数据结构)    唯一      内部成员不允许重复

+ Map(数据结构) 任意数据类型作为键

  + .set() 设置值

  ```js
  const m = new Map();
  const tom = {name:'tom'};
  m.set(tom, 90);
  m.set('a','1')
  console.log(m); //Map { { name: 'tom' } => 90, 'a' => '1' }
  ```

  

  + .get() 取值
  + .has() 判断某个键是否存在
  + .delete() 删除某个键
  + .clear() 清空所有键值

+ Symbol(全新的原始数据类型)

  - 为对象添加独一无二的属性名
  - 无法通过 for in 或者 Object.keys 拿到Symbol类型的属性名
  - JSON.stringfly(obj)也会忽略掉Symbol属性
  - 适合作为对象的私有属性
  - 可通过 Object.getOwnPropretySymbol(obj) 获取到Symbol类型属性名

  ```js
  const s = Symbol();
  console.log(typeof s) // symbol
  console.log(
      Symbol() === Symbol() // false
      // Symbol('foo') === Symbol('foo') // false
  )
  
  const s1 = Symbol.for('foo');
  const s2 = Symbol.for('foo');
  console.log(s1, s2); // Symbol(foo) Symbol(foo)
  console.log(s1 === s2); // true
  ```

  

+ BigInt(全新的原始数据类型)

+ for 适合遍历普通数组

+ for ... in 适合遍历键值对

+ for ... of 遍历所有数据结构的统一方式

  + 实现Iterable接口是 for...of 的前提

+ generator

+ ES Module

#### ES2016

+ Arrary.prototype.includes
+ 指数运算符

```js
console.log(2 ** 10) // 1024
```

#### ES2017

+ Object.values  返回对象所有值组成的一个数组
+ Object.entries 以数组形式返回所有键
+ Object.getOwnPropertyDescriptors 获取对象属性的详细描述信息
+ String.prototype.padStart
+ String.proto.padEnd
+ 在函数中添加尾逗号
+ async/await



## TypeScript

#### 类型系统

+ 强类型与弱类型 （类型安全）
+ 静态类型与动态类型（类型检查）

#### ts基本使用

```
1. 全局或者本地安装 typescript
2. 使用tsc命令将ts文件编译成js
```

#### 配置文件

+ target   编译后ECMA标准，默认es3
+ module   模块化标准
+ sourceMap
+ outDir   输出目录
+ rootDir  要编译的ts文件目录
+ lib  指定标准库（标准库就是内置对象所对应的声明文件）

```json
//es2015指定ecma标准， DOM包含dom和bom操作（如console对象）
"lib": ["ES2015", "DOM"], 
```



#### 原始类型

+ string
+ number(NaN Infinity)
+ boolean
+ void
+ undefined
+ null

#### ts中文错误消息

+ npx tsc --locale zh-CN

#### 作用域

```
同一文件夹下的ts文件如果变量重名会报错，可在文件最后添加 export {}
```

#### Object 类型

```
除了原始类型意外的其他类型
```

#### 数组类型

```js
const arr1: Array<number> = [1, 2, 3]
const arr2: number[] = [1, 2, 3]
```

#### 元祖类型

```js
const tuple: [number, string] = [1, 'hello']
```

#### 枚举类型

1、枚举

```js
enum PostStatus {
    Draft = 0,
    Unpublished = 1,
    Published = 2,
}
```



2、默认从0开始

```js
enum PostStatus {
    Draft, // 0
    Unpublished, // 1
    Published, // 2
}
```



3、从6开始

```js
enum PostStatus2 {
    Draft = 6,
    Unpublished, // 7
    Published,  // 8
}
```



#### 函数类型

#### 任意类型

+ any 动态类型

#### 隐式类型推断

![image-20200916163956140](D:\lagou\lg_phase_one\partOne_js\moduleTwo\imgs\image-20200916163956140.png)

![image-20200916164107893](D:\lagou\lg_phase_one\partOne_js\moduleTwo\imgs\image-20200916164107893.png)

#### 类型断言

```js
const nums = [1, 2, 3, 4];

const res  = nums.find(item => item>0)  // 1

const num1 = res as number // 1
const num2 = <number>res // 1   // JSX 下不能使用

```



#### 接口

+ 用来约束一个对象的结构
+ 可选成员
+ 只读成员
+ 动态成员

```js
interface Post {
    title: string,  // 这里结束符用',' ';'都可以
    content: string;
    // subtitle?: string, // 可选
    readonly summary: string // 只读
    [prop: string]: string // 动态
}

const hello: Post = {
    title: 'hello, ts',   // 这里必须是','
    content: 'sdfasfsaf',
    summary: 'js',
}

// hello.summary = 'other' // 不可修改
hello.a = 'value1'
hello.b = 'value2'
console.log(hello) 
// {
//     title: 'hello, ts',
//     content: 'sdfasfsaf',
//     summary: 'js',
//     a: 'value1',
//     b: 'value2'
//   }
```



#### 类

+ 用来描述一类具体事物的抽象特征
+ 基础使用

+ 访问修饰符
  + public 公有的
  + private  私有的   只允许在类内访问
  + protected 受保护的   只允许在类内或子类访问
+ 只读属性

```js
class Person {
    public name: string; // ='init name'  // 默认public
    private age: number; // pvivate 私有
    protected gender: boolean; // protected 受保护的

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }

    say (msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}

class Student extends Person {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s---',this, this.gender) // Student { name: 'tom', age: 18, gender: true } true
    }
}

class Student2 extends Student {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s2---',this, this.gender) 
    }
}

class Student3 extends Student2 {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s3---',this, this.gender) 
    }
}

const hans = new Person('hans', 19)
console.log(hans.name); // hans
// console.log(hans.age)  // 无法访问
// console.log(hans.gender) // 无法访问

// const s = new Student('tom', 18)
// const s2 = new Student2('pony', 15)
const s3 = new Student3('lily', 20)
```



#### 类与接口

#### 抽象类

+ 只能被继承来实现
+ 抽象类中的抽象方法子类必须实现

```js
abstract class Animal {
    abstract run (distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        // throw new Error("Method not implemented.");
        console.log('四脚爬行', distance)
    }

}

const d = new Dog();
d.run(100)
```

#### 泛型

```js
let createArr = <T>(length: number, value: T): T[] =>{
    const arr = Array<T>(length).fill(value);
    return arr
}


// function createArr<T> (length: number, value: T): T[] {
//     const arr = Array<T>(length).fill(value);
//     return arr
// }

let res = createArr(5, 'hello')
console.log("res", res)
let res2 = createArr(3, 6)
console.log("res2", res2)
```



#### 类型声明

```js
import {camelCase} from 'lodash'

declare function camlCase(input: string): string 

const res = camelCase('hello typed')
console.log("res", res)
```

## 性能优化

### JavaScript 语言的优化

#### 内存管理

+ 内存：由可读写单元组成，表示一片可操作空间
+ 管理：人为的去操作一片空间的申请、使用和释放
+ 内存管理：开发者主动申请空间、使用空间、释放空间
+ 管理流程：申请-使用-释放

#### 可达对象

+ 可以访问到的对象
+ 从根出发是否能够被找到
+ js中的根就可以理解为是全局变量对象

#### GC算法

+ GC是一种机制，垃圾回收器完成具体的工作
+ 工作 的内容就是查找垃圾释放空间、回收空间
+ 算法就是工作时查找和回收所遵循的规则

#### 常见GC算法

+ 引用计数
  + 优点
    + 发现垃圾时立即回收
    + 最大限度减少程序暂停（减少程序卡顿时间）
  + 缺点
    + 无法回收循环引用的对象
    + 时间开销大（资源开销大）
+ 标记清除
  + 优点
    + 可以回收循环引用的对象（相对于引用计数）
  + 缺点
    + 空间碎片化（释放空间地址不连续），浪费空间
    + 不会立即回收垃圾对象
+ 标记整理
  + 标记清除的增强（清除之前整理）
  + 优点
    + 减少碎片化空间
  + 缺点
    + 不会立即回收垃圾对象
+ 分代回收

#### 认识V8

+ V8是一款主流的JavaScript执行引擎
+ V8采用即时编译
+ V8内存设限

#### V8垃圾回收策略（1.5G | 800M)

+ 采用分代回收的思想
+ 内存分为新生代（32M | 16M)、老生代（1.4G | 700M)
+ 针对不同对象采用不同算法
+ V8中常用GC算法
  + 分代回收
  + 空间复制
  + 标记清除
  + 标记整理
  + 标记增量

#### V8如何回收新生代对象（32M | 16M)

+ 实现：采用复制算法 + 标记整理
+ 新生代内存分为二个等大小空间
+ 使用空间From，空闲空间为To
+ 活动对象存储于From空间
+ 标记整理后将活动对象拷贝至To
+ From 与 To 交换空间完成释放

#### 回收细节说明

+ 拷贝过程中可能出现晋升
+ 晋升就是将新生代对象移动至老生代
+ 一轮GC还存活的新生代需要晋升
+ To空间的使用率超过25%

#### V8如何回收老生代对象（1.4G | 700M)

+ 老生代对象说明
  + 老生代对象存放在右侧老生代区域
  + 64位操作系统1.4G，32位操作系统700M
  + 老生代对象就是指存活时间较长的对象
+ 实现：主要采用标记清除、标记整理、增量标记算法

#### V8垃圾回收总结

+ V8是一款主流的JS执行引擎
+ V8内存设置上限
+ V8采用基于分代回收思想实现垃圾回收
+ V8内存分为新生代和老生代
+ V8垃圾回收常见的GC算法

#### Performance 工具

+ 使用步骤
  + 打开Chrome输入目标网址
  + 进入开发人员工具面板，选择性能
  + 开启录制功能，访问具体界面
  + 执行用户行为，一段时间后停止录制
  + 分析界面中记录的内存信息

#### 监控内存的方式

+ 浏览器任务管理器（shift + esc)
+ Timeliness时序图记录
+ 堆快照查找分离DOM
+ 判断是否存在频繁的垃圾回收

#### 代码优化

#### 慎用全局变量

+ 全局变量定义在全局执行上下文，是所有作用域的顶端
+ 全局执行上下文一直存在于上下文执行栈，直到程序退出
+ 如果某个局部作用域出现了同名变量则会遮蔽或污染全局

#### 缓存全局变量

`将使用中无法避免的全局变量缓存到局部`

#### 闭包特点

+ 外部具有指向内部的作用
+ 在 “外” 部作用域访问 “内” 部作用域的数据

```js
function foo() {
    var name = 'lg'
    function fn() {
        console.log(name)
    }
    return fn
}

var a = foo();
a()
```

+ 闭包使用不当很容易出现**内存泄漏**

#### 避开闭包陷阱

#### JSBench

+ [jsbench](jsbench.me)

#### 堆栈中的JS执行过程

#### 减少判断层级

#### 减少作用域链查找层级

#### 减少数据读取次数

#### 字面量与构造式

#### 减少循环体活动

#### 减少声明及语句数

#### 采用事件委托





