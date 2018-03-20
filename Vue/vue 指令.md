# 指令

- v-text、v-html、v-pre、v-once、v-cloak
- v-bind、v-model
- v-for、v-show、v-if、v-else、v-else-if
- v-on

## v-pre: 不解析 vue 的语法
```
// html
<div v-pre>例如：{{content}}</div>
data:{
  content:"hhhhh"
}
```

## 指令缩写

```
v-on -> @
v-bind -> :
```

# 指令参数：指令名称之后，以冒号表示

- v-bind:属性名称
- v-on:事件名称

## 绑定事件`v-on:`

#### 1. 事件对象：在 vue 实例`methods`属性中，
  - 事件的绑定函数 中默认第一个参数就是事件对象，在模板中，事件的绑定函数不带括号
  - 事件的绑定函数 在模板中带括号，这时候要用事件对象，就要显示传入，传入`$event`
  - 事件的绑定函数 需要传入参数，这时候要用事件对象，就要显示传入，传入`$event`

```javascript
// html中
v-on:click="fn"
// methods 属性
fn(ev){}

// html中
v-on:click="fn($event)"
// methods 属性
fn(ev){}

// html中
v-on:click="fn(123,$event)"
// methods 属性
fn(num,ev){}

```

#### 2. 指令修饰符

- 原生 js 的写法
  - 阻止默认行为： `event.preventDefault()`
  - 阻止冒泡：`event.stopPropagation()`
- Vue的写法
  - @click.prevent
  - @click.stop


上下文菜单事件：`contextmenu`

