# this、作用域链、闭包

## 作用域链

- 函数在执行的过程中，先从自己内部找变量
- 如果找不到，再从创建当前函数所在的作用域去找, 以此往上

## 闭包

```js
function bindName(){
  var name = arguments[0]
  function fn(action){
    console.log(`${name} is ${action}ing`)
  }
  return fn
}
var doing = bindName('jirengu')
```

1. 因为 doing 在全局作用域永远无法被释放，
2. 导致 bindName 里声明的fn 和 name 一直存在
3. 执行 doing 时会从创建 fn 所在的作用域获取 name