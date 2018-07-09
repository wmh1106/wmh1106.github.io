# React 笔记

引入css`import './index.css';`

引入图片`import logo from './logo.svg';`

## render函数返回值：

- 只能有一个元素
- 占位标签：`<Fragment></Fragment>`，DOM里不显示

## react中的数据

- 使用ES6语法的类，数据在构造函数 constructor中，`this.state = {}`
- 概念：`immutable`。state 不允许我们做任何改变，理解成不能直接通过 state 修改
- 修改state 的数据，要通过方法`this.setState`方法
- `this.setState((prevState)=>{},()=>{})`是一个异步函数，第一个是操作数据，第二个是回调函数

## 循环数据渲染时：必须加个 key 值，这个 key 值是唯一的 ID

这样在用 diff 算法对比虚拟 dom 的时候，就方便了。

## 传递数据

- 父传子：
  - 通过属性传值
  - 通过属性传方法：方法要用 bind 绑定到父组件上
- 子传父：
  - 通过调用父组件传递过来的方法，传递参数

## react 里的一些概念

- 声明式开发、组件化、单向数据流、视图层框架、函数式编程
- 可以与其他框架共存

## props

```js
import PropTypes from 'prop-types'
// 定义组件 TodoItem 里的content、deleteItem、index的属性是什么类型的数据
TodoItem.propTypes = {
  // PropTypes.string 字符串类型，isRequired必传
  content : PropTypes.string.isRequired,
  deleteItem : PropTypes.func,
  index:PropTypes.number
}
// 组件TodoItem 里的test属性的默认值
TodoItem.defaultProps = {
  test:'hello world'
}
```

react 中，数据（包括：state、props）发生变化，视图就改变，是因为数据发生变化，render 函数就会执行，render 一执行，视图就更新。
当父组件的render函数被运行时，它的子组件的 render 都将重新运行

## ref的使用

事件对象 event.target 获取 dom 节点，在 react 中，还可以通过 ref 来获取 dom 节点，

在JSX的标签中`ref = {(element)=>{this.element = element}}`，

这样事件函数中，用`this.element`就可以代替`event.target`了

## UI 组件与容器组件

UI 组件负责渲染
容器组件负责页面逻辑

## 样式

使用 js 文件

```js
// 全局
import {injectGlobal} from 'styled-components'
injectGlobal`
  body{
    height:56px;
    background:green;
  }
`
// 单独使用
import {styled} from 'styled-components'
// 引入图片
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  height:56px;
  background:${logoPic};
`
```