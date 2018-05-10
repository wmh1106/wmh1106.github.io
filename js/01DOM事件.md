# DOM

## 1. 基本概念：DOM 事件的级别

* HTML 事件处理程序：行内事件（耦合非常严重）
* DOM0级事件处理程序: element.onclick = function(){}
* DOM1级事件处理程序: 跟事件相关的没有
* DOM2级事件处理程序: element.addEventListener('click',function(){},false),removeEventListener()
  * 第三个参数：false->冒泡，true->捕获
* DOM3级事件处理程序: element.addEventListener('keyup',function(){},false)
  * DOM3 就是增加了事件类型

## 2. DOM 事件模型

* 捕获
* 冒泡

## 3. DOM 事件流:描述的是从页面中接受事件的顺序



---

* 捕获
* 目标阶段
* 冒泡

描述的是从页面中接收事件的顺序,也可理解为事件在页面中传播的顺序。

## 4. 描述 DOM 事件捕获的具体流程

* 事件冒泡流：最具体的元素，逐级到 window
* 事件捕获流：window，逐级到最具体的元素

`window->document->html->body->...->targetElement`

html在 js 中用`document.documentElement`表示

## 5. Event 对象的常见应用

```js
event.preventDefault() // 阻止默认事件
event.stopPropagation() // 阻止事件冒泡
event.stopImmediatePropagation() // 执行当前元素click事件，阻止其他click事件
event.currentTarget // 当前绑定的事件
event.target

// 另外一些常见的
event.type
event.keyCode
```

## 6. 自定义事件

方式 1：

```javascript
var btn = document.querySelector("button");
// 定义自定义事件
var wmh = new Event("wmh");
// 绑定自定义事件
btn.addEventListener(
  "wmh",
  function(ev) {
    console.log(ev.target);
  },
  false
);
// 触发自定义事件
btn.dispatchEvent(wmh);
```

方式 2：

```javascript
var btn = document.querySelector("button");
// 定义自定义事件
var cat = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true,
    hhhhh: true
  }
});
// 绑定自定义事件
btn.addEventListener("cat", function(event) {
  // 事件对象会多一个 detail 的属性，它可以是任意类型。
  console.log(event.detail);
});
// 触发自定义事件
btn.dispatchEvent(cat);
```
