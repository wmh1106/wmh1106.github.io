# React 笔记

## UI 组件与容器组件

UI 组件负责渲染
容器组件负责页面逻辑

## 样式（个人不喜欢下面这种方式，还是喜欢在 css 文件里写样式）

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