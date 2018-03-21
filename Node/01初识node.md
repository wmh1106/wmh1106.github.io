概念：共享状态的并发
    
    Node 中，你需要对回调函数如何修改当前内存的变量（状态）特别小心

Node 采用一个长期运行的进程

阻塞和非阻塞

Node 使用了事件轮询，因此 setTimeout 等函数，他们是非阻塞的

采用事件轮询：

    Node 会先注册事件，随后不停地询问内核这些事件是否已经分发。
    当事件分发时，对应的回调函数会被触发，然后继续执行
    如果没有事件触发，则继续执行其他代码，直到有新事件时，再去执行对应的回调函数


Node 是单线程的，所以当一个函数执行时，同一时间不可能有第二个函数在执行

调用堆栈（或称执行堆栈）：

错误处理
    
    Node 应用依托在一个拥有大量共享状态的大进程中，所以一个地方错误，程序就挂了。

    要捕获一个未来才会执行的函数所抛出的错误是不可能的


---

global 对象：全局对象
process：所有全局执行上下文中的内容都在 process 对象中

---

模块：

require
module
exports

绝对模块：node_modules 或 node 内置的
相对模块：写相对路径

暴露 API： 依靠 module、 exports 这两个变量

    每个模块（其实就是每个 js 文件），默认都会暴露一个空对象。
        1. 如果想在这个空对象添加属性，使用module.exports即可。
        2. 要是添加属性无法满足需求，可以重写 module.exports

---

事件


---

异步流控制模式：串行执行


---

express

use((req,res,next)=>{})

use((err,req,res,next)=>{})

注册：use(mw1,mw2,mw3)

![](https://ws4.sinaimg.cn/large/006tNc79gy1fnim6cun5lj315s0k8aft.jpg)