# 指令

- v-text、v-html、v-pre、v-once、v-cloak
- v-bind、v-model
- v-for、v-show、v-if、v-else、v-else-if
- v-on

## v-text : 文本

## v-html : html

在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 [CSS Modules](https://vue-loader.vuejs.org/en/features/css-modules.html)或用一个额外的全局 `<style>` 元素手动设置类似 BEM 的作用域策略。

## v-pre: 不需要表达式，不解析 vue 的语法

## v-once : 不需要表达式，只渲染一次

## v-cloak 与 CSS 规则一起使用：跟 v-text 表现差不多

## v-model：语法糖

对于需要使用输入法 (如中文) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。

如果 v-model 表达式的初始值未能匹配任何选项，`<select>`元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

修饰符

- lazy
- number
- trim

## 指令缩写

    v-on -> @
    v-bind -> :

## 指令参数：指令名称之后，以冒号区分开

不同的指令有不同的参数，具体作用由定义的指令来决定

- v-bind:属性名称.修饰符
- v-on:事件名称.修饰符

## 绑定事件`v-on:`

### 1. 事件对象：在 vue 实例`methods`属性中，

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

### 2. 指令修饰符：是以半角句号`.`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

不同的指令有不同的修饰符，具体作用由定义的指令来决定

- 原生 js 的写法
  - 阻止默认  行为： `event.preventDefault()`
  - 阻止  冒泡：`event.stopPropagation()`
- Vue 的写法
  - @click.prevent
  - @click.stop

上下文菜单事件：`contextmenu`

## 自定义指令

- 自定义指令，都写在实例的`directives`属性中
- 自定义指令名，就是`directives`属性的`key`值，创建的时候指令的名称不需要`v-`，使用时加`v-`
- 自定义指令也是一个对象，先确定这个指令需要在哪个时间起作用。一共有 5 个钩子函数，跟`Vue`生命周期函数性质一样。[文档](https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0)
  - bind
  - inserted
  - update
  - componentUpdated
  - unbind
- 在钩子函数里写逻辑代码
  - 钩子函数的参数，除了 el 之外，其它参数都应该是只读的，切勿进行修改
  - 既然`binding`是只读的，我就存个变量里。保证引用地址不同，然后就修改这个新定义的变量就好了。binding 对象里的属性值不变。
  - 钩子函数在指定过程会接收到一些参数
    - el : 当前指令绑定的元素（原生）
    - binding: 对象
      - name: 指令名称
      - rawName: 包含 v-的名称
      - value: 指令的值，表达式值，被 vue 解析过
      - oldValue
      - expression: 指令的值（字符串值）
      - arg
      - modifiers

```javascript
<template>
  <div id="app" v-demo="message"></div>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello!'
    }
  },
  directives: {
    demo: {
      bind: function (el, binding, vnode,oldVnode) {
        var str = binding.value

        if (typeof str !== 'string') return

        el.innerHTML = str.toUpperCase()
      }
    }
  }
}
```

修饰符：是通过钩子函数的第二个参数 binding.modifiers 获取，它是一个对象，如果你获取了，binding.modifiers.a === true 说明，在模板中使用了。如：v-demo:foo.a
然后我就通过判断：binding.modifiers.a 是不是等于 true
来写逻辑代码

```javascript
<template>
  <div id="app" v-demo:foo.a="message"></div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello!'
    }
  },
  directives: {
    demo: {
      bind: function (el, binding, vnode) {
        var str = binding.value
        // 修饰符 a：我定义 -> 让字符串每个字符要被空格分隔开
        var isA = binding.modifiers.a

        if (typeof str !== 'string') return

        if (isA) {
          el.innerHTML = str.split('').join(' ').toUpperCase()
        } else {
          el.innerHTML = str.toUpperCase()
        }
      }
    }
  }
}
```

字符串形式的指令表达式 binding.expression，等号后面的 : 1+1 ，json 对象

传给指令的参数 binding.arg 冒号后面的 : 就是参数。number,string,object，读取了，能用啥就用啥

指令的绑定值 binding.value : 它，会把 **字符串形式的指令表达式** 运行一下，如：1+1=2, 字符串形式 json 数据会解析成 json
