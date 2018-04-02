## ES6模块化的使用和编译环境

#### 1. 基本语法

```javascript
// util1.js : 默认1个
export default {
  a:100
}

// util2.js : 多个
export function fn1(){
  alert('fn1')
}
export function fn2(){
  alert('fn2')
}

// index.js
import util1 from './util1.js'
import {fn1,fn2} from './util2.js'

console.log(util1)
fn1()
fn2()
```

#### 2. 开发环境

- 开发环境 - babel
  - node 环境，运行 npm init
  - npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
  - 创建 .babelrc 文件
  - npm install --global babel-cli
  - babel —version
  - 创建 index.js
  - 内容：[1, 2, 3].map(item => item + 1);
  - 运行 babel index.js
- 开发环境 - webpack
  - npm install webpack babel-loader --save-dev
  - 配置 webpack.config.js
  - 配置 package.json 中的 scripts
  - 运行 npm start 

## Class 与 JS 构造函数的区别

## Promise 的用法

## ES6其他常用功能

