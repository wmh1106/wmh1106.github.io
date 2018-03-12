# 常用 `ES6` 的语法

##  声明变量：`let、const`

1. 无变量提升，暂存死区
2. 不能重复定义
3. 块作用域
4. `const`:声明的同时，还要初始化赋值

##  模板字符串：

模板字符串：嵌入式表达式不仅仅可以用来引用变量。**在嵌入式表达式中进行运算、调用函数**

1. 反引号
2. 插入变量`${}`

##  解构

数组解构：按顺序来解构

对象解构：按`key`值来解构，不按照顺序

字符串解构：字符串被转换成了一个类似数组的对象

函数参数解构


```
let {x,y,z} = {x:1,y:2,z:3}

let {x:a,y:b,z:c} = {x:1,y:2,z:3}

let [a, b, c, d, e] = 'hello';
let {length : len} = 'hello';

function add([x, y]){
  return x + y;
}
add([1, 2]);

```

## 循环：for...of

默认情况下，包含以下数据类型：String、Array、Map 和 Set，注意不包含 Object 数据类型（即 `{}`）。因为默认情况下，对象不可迭代。

数组的`forEach`不能提前退出

##  函数

### 箭头函数

普通函数可以是函数声明或函数表达式，但是箭头函数始终是表达式。

实际上，它们的全称是“箭头函数表达式”，因此仅在表达式有效时才能使用，包括：

    1. 存储在变量中
    2. 当做参数传递给函数（回调函数）
    3. 存储在对象的属性中

缺点：

    1. 箭头函数中的 `this` 关键字存在限制条件
    2. 箭头函数只是表达式，且没有箭头函数声明

注意点：

1. 没有 实参对象`arguments`
2. 不能当做构造函数来使用
3. `this`指向的问题
    - 普通函数，this 的值基于函数如何被调用。
    - 箭头函数，this 的值基于函数周围的上下文。换句话说，箭头函数内的，this 的值与函数外面的 this 的值一样。

### 写法：

```
var fn = (var1,var2)=>{
    return 
}
```

### 普通函数中this的指向

1. 新的对象：`new`出来的构造实例
2. 由`call、apply`指定的对象
3. 上下文对象：对象中的方法
4. 全局对象 或 `undefined`

### 参数

#### 1. 默认值 和 解构

```javascript
function fn(b=1, a) {
    console.log(a * b);
}
fn(1,10);
```

#### 2. `数组默认值`有时不如`对象默认值`方便

例如：配置项一般都是一个对象 option

#### 3. 剩余参数（...）



与展开运算符相反，它是把一堆东西捆到一起

剩余参数也用三个连续的点 ( `...` ) 表示，使你能够将不定数量的元素表示为数组。

1. 一种情况是将变量放在数组里

```javascript
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items); // 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```

2. 另一种情况是处理可变（或剩余）参数，跟`arguments`作用差不多

```
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

#### 4. 展开运算符（...）

展开运算符（用三个连续的点 ( `...` ) 表示）是 ES6 中的新概念，使你能够将字面量对象展开为多个元素；也可以说是把一个集合打散，变成一个一个的。

1. 在数组中
	- 类数组 => 数组
2. 在对象中
  - 对象，不用共用引用了

## 对象

简洁表示法

```
var obj = {
    a,
    fn(){}
}
```

##  Class类

类的优势：

1. 设置内容更少
	- 创建函数要编写的代码少多了
2. 清晰地定义了构造函数
	- 在类定义总，可以清晰地指定构造函数。
3. 全部都包含起来了
	- 类需要的所有代码都包含在类声明中。你可以同时设定一切内容，而不用在一个位置编写构造函数，然后向原型一个一个地添加方法，你可以同时做所有的事！

使用类时需要注意的事项

1. class 不是魔术
	- 关键字 class 带来了其它基于类的语言中的很多思想观念。它没有像变魔术一样向 JavaScript 类添加了此功能。
2. class 是原型继承的抽象形式
	- 我们已经多次提到，JavaScript 类实际上使用的就是原型继承。
3. 使用类需要用到 new
	- 在创建 JavaScript 类的新实例时，必须使用关键字 new

### 构造函数需要注意的事项：

1. 构造函数使用 new 关键字被调用
2. 按照惯例，构造函数名以大写字母开头
3. 构造函数控制将被创建的对象的数据的设置
4. “继承”的方法被放在构造函数的原型对象上

##  Symbols（标识符）

Symbol 是一种独特的且不可变的数据类型，经常用来标识对象属性。

创建：Symbol('描述')


##  可迭代协议

可迭代协议用来定义和自定义对象的迭代行为

迭代器方法（可通过常量 [Symbol.iterator] 获得）是一个无参数的函数，返回的是迭代器对象。迭代器对象是遵守迭代器协议的对象。


工作原理

当对象执行 .next() 方法时，就变成了迭代器。.next() 方法是无参数函数，返回具有两个属性的对象：

1. value：表示对象内值序列的下个值的数据
2. done：表示迭代器是否已循环访问完值序列的布尔值
	- 如果 done 为 true，则迭代器已到达值序列的末尾处。
	- 如果 done 为 false，则迭代器能够生成值序列中的另一个值。


```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
```

一个例子

```javascript
/*
 * Programming Quiz: Make An Iterable Object
 *
 * Turn the `james` object into an iterable object.
 *
 * Each call to iterator.next should log out an object with the following info:
 *   - key: the key from the `james` object
 *   - value: the value of the key from the `james` object
 *   - done: true or false if there are more keys/values
 *
 * For clarification, look at the example console.logs at the bottom of the code.
 *
 * Hints:
 *   - Use `Object.keys()` to store the object's properties in an array.
 *   - Each call to `iterator.next()` should use this array to know which property to return.
 *   - You can access the original object using `this`.
 *   - To access the values of the original object, use `this` and the key from the `Object.keys()` array.
 */

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]:function(){
        let properties = Object.keys(this)
        console.log(properties)
        let index = 0
        let contex = this
        return {
            next:function(){
                return {
                    "value":contex[properties[index]],
                    "key":properties[index],
                    "done":Boolean(index++ >= properties.length - 1)
                }
            }
        }
    }
};

const iterator = james[Symbol.iterator]();

console.log(iterator.next().value); // 'James'
console.log(iterator.next().value); // `5'10`
console.log(iterator.next().value); // 185

```

##  Set集合

与数组的最大区别：

1. Set 不基于索引，不能根据集合中的条目在集合中的位置引用这些条目
2. Set 中的条目不能单独被访问

如果你尝试向 `Set` 中 `.add()` 重复的条目，系统不会报错，但是该条目不会添加到 `Set` 中。此外，如果你尝试 `.delete()` `Set` 中不存在的条目，也不会报错，`Set` 保持不变。如果成功地添加或删除了条目，这两个方法都返回 `true`，反之返回 `false`。

循环

1. 你可以使用 Set 的默认迭代器循环访问 Set 中的每一项。
2. 你可以使用新的 for...of 循环来循环访问 Set 中的每一项。

##  WeakSet(弱集合)

与Set的区别

1. WeakSet 只能包含对象
2. WeakSet 无法迭代，意味着不能循环访问其中的对象
3. WeakSet 没有 `.clear()` 方法

如果你使用 `.set()` 向 `Map` 中添加键已存在的键值对，不会收到错误，但是该键值对将**覆盖** `Map` 中的现有键值对。此外，如果尝试使用 `.delete()` 删除 `Map` 中不存在的键值，不会收到错误，而 Map 会保持不变。

如果成功地删除了键值对，`.delete()` 方法会返回 `true`，失败则返回 `false`。`.set()` 如果成功执行，则返回 `Map` 对象本身。

循环
1. 使用 Map 的默认迭代器循环访问每个键或值
2. 使用新的 `for...of` 循环来循环访问每个键值对
3. 使用 Map 的 `.forEach()` 方法循环访问每个键值对

##  WeakMap

WeakMap 和普通 Map 很像，但是具有以下关键区别：

1. WeakMap 只能包含对象作为键，
2. WeakMap 无法迭代，意味着无法循环访问，并且
3. WeakMap 没有 .clear() 方法。

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

