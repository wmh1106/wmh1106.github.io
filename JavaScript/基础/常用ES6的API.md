

##  Symbols（标识符）

Symbol 是一种独特的且不可变的数据类型，经常用来标识对象属性。

创建：Symbol('描述')




##  Promise 构造函数 

##  Proxy 代理

因此 proxy 对象的某些功能可能看起来类似于现有的 ES5 getter/setter 方法，但是对于 proxy，在初始化对象时，不需要针对每个属性使用 getter/setter 初始化对象。


##  generator（生成器）函数

```
function* udacity() {
    yield 'Richard';
    yield 'James'
}

const ud = udacity()
ud.next()
ud.next()
ud.next()
```

生成器是强大的新型函数，能够暂停执行代码，同时保持自己的状态。

生成器适用于一次一个地循环访问列表项，以便单独处理每项，然后再转到下一项。
可以使用迭代器来处理嵌套回调。例如，假设某个函数需要获得所有仓库的列表和被加星标的次数。
在获得每个仓库的星标数量之前，需要获得用户的信息。获得用户的个人资料后，代码可以利用该信息查找所有的仓库。


---

## 常用新增方法

```
// 拷贝对象：用户合并对象，将源对象的所有可枚举属性，复制到目标对象
Object.assign({t:1},{k:2})

map()、filter()、reduce()、every()、some()
```



---


ES6 提供了 spread 和 rest 来出里数据的合并与读取问题, 这是一个很大的便利.


展开的语法是: ... ,  没错, 就是英文的三个小点.
展开, 是为了把自己的数据, 展开给别人.

1. 把一个数组展开到另外一个数组里

let arr1 = [1,2]
let arr2 = ['a','b','c']
console.log([...arr1,...arr2,9,0])

2. 把一个对象展开到另外一个对象里,要注意后面的属性会把前面的属性覆盖

let names = {
    p1:'sal',
    p2:'bob'
}

let out = {
    ...names,
    p3:'moli'
}
console.log(out)

3. 在函数参数列表里展开

let arr = [1,2,3,4]
function logs(a,b){
    console.log(a,b)
}

logs(...arr)

---

rest, 剩余就是代表剩余的数据. 让你拿到处理某些东西以外, 剩余的东西.

它的语法也是 ...

1. 解构数组时, 拿到剩余的元素.rest 必须要写在数组末尾

let arr = [1,2,3,4]
let [a,...rest] = arr

console.log(a)//1
console.log(rest)// [2,3,4]

2. 解构对象时, 拿到剩余的属性

let obj = {
    a:1,
    b:2,
    c:3
}

let {b,...rest} = obj
console.log(b)//2
console.log(rest)// {a:1,c:3}

3. 剩余就是在函数参数里面:参数列表里面, rest 是剩余传过来的参数所组成的一个数组.

function logs(a,b,...rest){
    console.log(a,b)
    console.log(rest)
}

函数定义的`...`：剩余
函数执行的`...`：展开

---


类是某个实例的抽象, 比如 人, 就可以当成一个类. 而每一个具体的人, 就是人这个类的一个实例.

在 ES6 之前, 如果我们响应使用 new 操作得到一个对象, 那么我们需要先 声明一个函数, 然后去 new 它, 我们也把这个函数叫做构造函数. 我们可能还会在原型链上挂载些其他的东西.

function People(name){
    this.name = name
}

People.prototype.sing = function(){
    console.log(`${this.name}在唱歌` )
}

let mask = new People('Mask')
mask.sing()

---
相对 ES5, 现在我们很明确的知道, People 是一个类, constructor() 是它的构造函数 sing() 是这个类的方法.所有的方法都写在类的花括号内, 清晰明了.只是类需要掌握的基本语法

class People{
    constructor (name){
        this.name=name
    }
    sing(){
        console.log(`${this.name}在唱歌` )
    }
}

let mask = new People('Mask')
mask.sing()

继承:在 ES5 里面, 我们的继承需要通过对原型链进行操作. 在 ES6 里面, 类之间的继承只需要一个非常简洁的语法: extend:

注：当继承了另外一个类之后, 如果你写了 constructor(), 那么你必须先 调用 super();

class StrongMan extends People{
    constructor(name,eyesNum){
        // 调用父级构造函数
        // 可以传递参数
        super(name)
        this.eyes = eyesNum
    }
}

let men = new StrongMan('jack',6)
men.name
men.eyes
men.sing()
men.fly()


![](https://ws1.sinaimg.cn/large/006tKfTcgy1fpygfhi4l7j30lm0nwdgp.jpg)

