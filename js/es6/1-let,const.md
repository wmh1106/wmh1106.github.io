## `var`声明及变量提升机制

在函数、全局作用域通过关键字`var`声明的变量，无论在哪里声明，都会被当成在当前作用域顶部声明的变量，这就是我们常说的提升机制。

## 块级声明：亦称`词法作用域`、`块级作用域`

### 一、存在于：

1. 函数内部
2. 块：指的是`{}`之间的区域
3. 全局`(个人感觉应该算一个)`

### 二、`let`声明

用法与`var`相同，声明的时候要将`let`声明语句放到块的顶部，否则由于`“临时死区”`而不能访问。
用`let`代替`var`就可以把变量的作用域限制在当前代码块中了。

```javascript
function getValue(condition) {
  if (condition) {
    let value = "blue";
    return value;
  } else {
    // 此处value，不存在。所以报错
    console.log("1", value);
    return null;
  }

  // 此处value，不存在
  console.log("2", value);
}

getValue(1);
```

在同一个作用域，禁止重复声明

```
var count = 30;
let count = 20;// Uncaught SyntaxError: Identifier 'count' has already been declared
```

### 三、`const`声明

关键字`const`，是用来声明`常量`的，并且声明之后，值不能改变。
通过`const`声明的常量，必须初始化。
且在同一个作用域，禁止重复声明。

```
const myName = 'wmh';
const myAge;// 浏览器报：Missing initializer in const declaration
```

**注：`const`声明的对象，修改对象属性的值是可以的**

```javascript
const person = {
  name: "wmh"
};
// 修改属性的值不报错
person.name = "ly";

// 修改person的引用就会报错
person = {
  // 浏览器报：Assignment to constant variable.
  name: "xz"
};
```

### 四、const、let 共同点（下面代码 let 换成 const 也是成立）

#### 1. 有块级作用域

#### 2. 禁止重复声明

```js
let count = 0;
let count = 'number';	// 浏览器报： Identifier 'count' has already been declared
```

```js
var count = 0;
let count = 'number';	// 浏览器报： Identifier 'count' has already been declared
```

如果变量名字相同，但是不在同一个块级作用域，就不会报错

```js
    var count = 30;
    if(true){
    	// 不会报错
    	let count = 'number'
    }
```

#### 3. 临时死区：Temporal Dead Zone 简称：TDZ

因为使用`const`、`let`声明的变量不会被提升到作用域顶部，所以在声明之前调用的话，报错

```js
console.log(count); // count is not defined
let count = 30;
```

在以前 js 中，可以用 typeof 访问未声明的变量，但是在这里也不行了

```js
typeof count// count is not defined
let count = 30;
```

#### 4. 循环

##### `for`循环

```js
var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(function() {
    console.log(i);
  });
}
// 此处不可以访问i，且循环中，使用let，效果跟IIFE(立即调用函数表达式)一样。

arr.forEach(ele => {
  ele();
});
```

用了 let 后，`i`变成块级域（也就是花括号中的块，每进入一次花括号就生成了一个块级域）,所以`10`个内部函数指向了不同的`i`。

```js
// let、for-in
var arr = [];
var obj = {
  a: true,
  b: true,
  c: false
};

for (let key in obj) {
  arr.push(function() {
    console.log(key);
  });
}

arr.forEach(ele => {
  ele(); // 输出 a, b, c
});
```

跟`for`循环表现行为一致，每次循环创建一个新的`key`，因此每个函数都有一个变量`key`的副本，于是每个函数都输出不同的值。如果使用`var`，则这些函数都会输出`c`

```js
// const
var arr = [];
for (const i = 0; i < 10; i++) {
  // i++报错： Assignment to constant variable
  arr.push(function() {
    console.log(i);
  });
}
arr.forEach(ele => {
  ele();
});
```

    这里，`i`是常量，循环之后`i++`要修改常量`i`，而常量不能修改，所以报错

##### `for-in`和`for-of`循环中使用`const`时的行为与使用`let`一致

```js
// const
var arr = [];
var obj = {
  a: true,
  b: true,
  c: false
};

for (const key in obj) {
  arr.push(function() {
    console.log(key);
  });
}

arr.forEach(ele => {
  ele(); // 输出 a, b, c
});
```

与`let`使用时一样。不会报错，因为每次迭代不会修改`key`的值，而是会创建一个新绑定

## 全局块作用域绑定

```javascript
var RegExp = "hello";
console.log(window.RegExp); // hello
```

当`var`在全局声明变量的时候，他会挂载到`window`下，并且可以覆盖掉 js 原生已有的全局变量

```javascript
let RegExp = "hello";
console.log(RegExp); // hello
console.log(window.RegExp === RegExp); // false
```

使用`let、const`声明变量，不能覆盖掉全局变量，只是遮蔽它

## 块级绑定最佳实践的进化

默认使用`const`,只有确实需要改变变量的值的时候，使用`let`。
因为大部分变量的值在初始化后不应该改变，而预料外的变量值的改变是很多

---

## 总结：

使用 let 声明的变量可以重新赋值，但是不能在同一作用域内重新声明。
使用 const 声明的变量必须赋初始值，但是不能在同一作用域内重新声明，也无法重新赋值。

最大的问题是何时应该使用 let 和 const？一般法则如下：

1.  当你打算为变量重新赋值时，使用 let，以及
2.  当你不打算为变量重新赋值时，使用 const。

因为 const 是声明变量最严格的方式，我们建议始终使用 const 声明变量，因为这样代码更容易读懂，你知道标识符在程序的整个生命周期内都不会改变。如果你发现你需要更新变量或更改变量，则回去将其从 const 切换成 let。
