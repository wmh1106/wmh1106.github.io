# virtual dom

vdom 是 vue、react 的核心，先讲哪个都绕不开它 

- 背景：
  1. DOM操作是“昂贵”的，js 运行效率高
  2. 尽量减少 DOM 操作，而不是“推倒重来”
  3. 项目越复杂，影响越严重
- virtual dom 即可解决以上问题

## 什么是 vdom，为何用用 vdom

- 用 JS 模拟 DOM 结构
- DOM 变化的对比，放在 JS 层来做（图灵完备语言）
  - 目的：提高重绘性能

- virtual dom 是相对于真实 DOM 简化很多的，它里面没有那么多属性

## vdom 如何使用，核心函数有哪些

- 介绍：snabbdom
- 核心函数
  - h('标签名',{属性},[子元素])
  - h('标签名',{属性},'')
  - patch(真实DOM,vnode)
  - patch(vnode,newVnode)

## 了解 diff 算法吗？

- 因为操作 DOM 是昂贵的，因此尽量减少 DOM 操作
- 找出本次 DOM 必须更新的节点来更新，其他的不更新
- 这个“找出”的过程，就需要 diff 算法

---

- patch(container,vnode)
- patch(vnode,newVnode)

