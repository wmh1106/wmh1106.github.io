
# VUE 核心点

脚手架：模板工程(不用每次自己去配置很多共同的东西)

## Vue要学的内容

1. 声明式的渲染（Declarative Rendering）
2. 组件系统（Components System）
3. 客户端路由器（vue-router）
4. 大规模的状态管理(vuex)
5. 构建工具（vue-cli）
6. 数据交互 (axios)

---

## 核心：数据绑定和组件

### 1. 响应式的数据绑定

当数据发生改变  -> 视图自动更新
忘记操作DOM这回事，而是专注于操作数据

Object.definedProperty中的 setter/getter 代理数据，监控数据的操作

### 2. 可组合的视图组件

把视图按照功能，切分若干基本单元
组件可以一级一级组合成整个应用，形成了倒置的组件树
使用组件的好处：可维护、可重用、可测试

---

## 虚拟 DOM

---

## MVVM 模式

---

## Vue 实例：

### 全局的构造函数

`new Vue(option)`

### 选项对象 `option`

#### 1. el：告诉Vue管理的模板范围

#### 2. data：数据对象，会被实例代理，转成getter/setter形式

- 模板、视图
- 数据添加到模板中
- 把数据与模板进行关联：模板语法（插值表达式）
- 插值表达式：
	1. 使用双大括号（“Mustache”语法）做文本插值
	2. 可以写任意表达式
	3. 属性名、条件运算符、数据方法调用

#### 3. methods:

vue 代理 data 数据是响应的，新添加的属性不具备响应功能，改变后不会更新视图

vue 实例自身属性和方法：vm.$el、vm.$data

---

## 声明式渲染

- 区别：命令式渲染
- vue 是声明式渲染


## vue 的指令

指令：是以标签属性存在的。所以也就是说，它是**在 html 中使用的**

指令：可以接收表达式
---

## 计算属性

## 模板

    1. html 模板：插值
    2. template属性:
        模板将会替换挂载的元素，挂载元素的内容都将被替换掉
        跟节点只能有一个
        将 html结构写在 script 标签中，设置“`type="x-template"`”
    3. render

变异方法

深层监控

通过hash，过滤数据


组件：
    定义组件：全局|局部
    传输数据：
        子->父：定义自定义属性
        父->子：定义自定义事件
    单向数据流

计算属性依赖于 data 属性里的 key


# 启动应用和选项对象

![启动应用和选项对象](https://ws3.sinaimg.cn/large/006tNc79ly1fnlvqx0xfwj31c80oqths.jpg)

![指令](https://ws4.sinaimg.cn/large/006tNc79gy1fnlvs5xw1mj31be0q2dnf.jpg)

![计算属性](https://ws1.sinaimg.cn/large/006tNc79gy1fnlvuq917bj31bg0sgn3v.jpg)

![组件](https://ws4.sinaimg.cn/large/006tNc79gy1fnlvx2bqksj311k0syn6a.jpg)

![vue-cli](https://ws2.sinaimg.cn/large/006tNc79gy1fnlxyn97xvj30p80pc0ux.jpg)

使用组件3部：引入组件、注册组件、使用组件

![vuex](https://ws4.sinaimg.cn/large/006tNc79gy1fnlyqqreh1j31bw0sidob.jpg)

![vuex 使用](https://ws1.sinaimg.cn/large/006tNc79gy1fnlywnwgnyj30vm0ui41n.jpg)

![vuex 核心点](https://ws3.sinaimg.cn/large/006tNc79ly1fnlz38qbn1j31aw0patip.jpg)

![vuex 原则](https://ws1.sinaimg.cn/large/006tNc79gy1fnlzzqlyfqj30zc0kkae8.jpg)

---
# axios

![axios](https://ws2.sinaimg.cn/large/006tNc79gy1fnm0d794iij319g0sute0.jpg)

mock数据：
http://easy-mock.com

![axios api](https://ws4.sinaimg.cn/large/006tNc79gy1fnm0g6scz9j30ww0xs0z9.jpg)

![](https://ws3.sinaimg.cn/large/006tNc79gy1fnm0u2a0vwj316o0xi0yt.jpg)

![](https://ws1.sinaimg.cn/large/006tNc79gy1fnm1ojsq00j30xo0se79b.jpg)

![](https://ws2.sinaimg.cn/large/006tNc79gy1fnm1ryt2gxj30rg0f6wfx.jpg)

![](https://ws1.sinaimg.cn/large/006tNc79gy1fnm1vc8d6jj318y0toaft.jpg)

![](https://ws3.sinaimg.cn/large/006tNc79gy1fnm20tnit8j30so0oymzx.jpg)

---

# router

![](https://ws1.sinaimg.cn/large/006tNc79gy1fnm286rdrdj31cm0ykjvn.jpg)

![](https://ws2.sinaimg.cn/large/006tNc79gy1fnm2bjgiowj31bk0awgno.jpg)

![](https://ws3.sinaimg.cn/large/006tNc79gy1fnm2db6ojfj310g0y00z3.jpg)

![](https://ws1.sinaimg.cn/large/006tNc79gy1fnm2ph4gpqj31ge0rutb8.jpg)


---

Vue 实例

所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象

注意：响应式的数据，必须是在初始化vue 实例的时候，就存在于 data 属性里。所以如果预知后面会用到的变量，可以先设置初始值

Vue实例暴露出来的属性和方法名字前都带有$

---

生命周期

生命周期钩子的 this 上下文指向调用它的 Vue 实例

---

可以把vue 实例中的数据（data）绑定到 DOM 的文本、特性（属性）、结构上。
文本 -> 模板{{}}
特性 -> v-bind
结构 -> v-if

v-for
v-on： 调用 vue 实例中 methods 对象里的方法
v-model:

---

模板语法
插值：`{{}}`,绑定一次：v-once
HTML: v-html
text: v-text
特性：“Mustache”语法 (双大括号) 不能用在特性上，要使用 v-bind
以上值：可以使用 JavaScript 表达式，模板表达式，不能访问用户定义的全局变量

---

指令：`v-`
事件修饰符：如`v-on:submit.prevent`
缩写：`v-bind:`=> `:` 、 `v-on:`=>`@`

---

计算属性：computed

可以像绑定普通属性一样在模板中绑定计算属性

可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。

计算属性的 setter

侦听属性：watch
当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的

---

Class 

对象语法
```
v-bind:class="{ active: isActive }"
data: {
  isActive: true
}
```

```
<div v-bind:class="classObject"></div>
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

```javascript
<div v-bind:class="classObject"></div>
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
数组语法：
```
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

在组件上
	
当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。
这个元素上已经存在的类不会被覆盖，相当于是添加的意思

---

Style

CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名

对象语法:同样的，对象语法常常结合返回对象的计算属性使用。
```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```

```
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

数组语法
v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：`<div v-bind:style="[baseStyles, overridingStyles]"></div>`

自动添加前缀

多重值
`<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`

---
条件渲染
因为 v-if 是一个指令，所以必须将它添加到一个元素上

控制单个元素
```
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

控制多个元素
```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
用 key 管理可复用的元素
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

v-show:带有 v-show 的元素始终会被渲染并保留在 DOM 中
v-show 不支持 <template> 元素，也不支持 v-else。

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。


---

列表渲染

v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。

在 v-for 块中，我们拥有对父作用域属性的完全访问权限。v-for 还支持一个可选的第二个参数为当前项的索引。

可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法：

在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

v-for 带 v-key，理想的 key 值是每项都有的且唯一的 id。

vm.items.push()等等
push()
pop()
shift()
unshift()
splice()
sort()
reverse()


由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

1. 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
	2. 解决：Vue.set(vm.items, indexOfItem, newValue)
	3. vm.items.splice(indexOfItem, 1, newValue)
2. 当你修改数组的长度时，例如：vm.items.length = newLength
	3. 解决：vm.items.splice(newLength)

由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：

```
var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})

// 单个
Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)
// 多个
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

---

事件：

传参：fn($event)
event 事件对象

---

表单

v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。

对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。

如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。


---

组件

注册：
全局：Vue.component('name',option)
局部：new Vue({components:{'name':option}}
	
DOM 模板解析注意事项:
特定 DOM 元素，结构是固定的。比如 ul>span 是错误的
这时使用 is 特性：
```
<table>
  <tr is="my-row"></tr>
</table>
```

data:必须是函数


组件通信：
prop 向下传递（父传子），事件向上传递（子传父）

如果你想把一个对象的所有属性作为 prop 进行传递，可以使用不带任何参数的 v-bind (即用 v-bind 而不是 v-bind:prop-name)。

字面量语法 vs 动态语法
some-prop="1" 	=> 字符串1
:some-prop="1"	=> 数字1

不应该在子组件内部改变 prop：想修改，可以通过下面方式，达到一样的效果
1. 定义一个局部变量，并用 prop 的值初始化它：
2. 定义一个计算属性，处理 prop 的值并返回：

props 验证：
注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。
```
{
	type: String,
    required: true,
    // default:100
    default:function(){},
    validator:function(){}
}
```

自定义事件

使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件


![Alt text](./1519899200780.png)

给组件绑定原生事件 v-on:click.native = "fnName"


使用插槽分发内容
父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
单个插槽：`<slot>`

具名插槽:
	子组件：`<slot name="header"></slot>`
	父组件：``
作用域插槽







---

.sync 修饰符

使用自定义事件的表单输入组件
























