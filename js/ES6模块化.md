## ES6模块化的使用和编译环境

### 1. 基本语法

```javascript
// util1.js : export default 表示 默认输出一个对象
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

### 2. 开发环境

- 开发环境 - babel
  1. 电脑已安装node，当前文件夹运行 npm init
  2. 安装插件：npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
  3. 创建 .babelrc 文件，并配置 bable
  4. 安装插件：npm install --global babel-cli
  5. 查看版本：babel —version
  6. 创建 index.js
  7. 添加内容：[1, 2, 3].map(item => item + 1);
  8. 运行 babel index.js
- 开发环境 - webpack
  1. npm install webpack babel-loader --save-dev
  2. 创建webpack.config.js，并写配置
  3. 配置 package.json 中的 scripts
  4. 运行 npm start 
- 开发环境 - rollup

### 3. 总结

- 没有模块化
- AMD 成为标准，require.js
- 前端打包工具，nodejs 模块化可以被使用
- ES6出现，想统一现在所有模块化标准
- nodejs 积极支持，浏览器尚未统一

---

语法：import、export（注意有没有default）
环境：babel 编译 ES6，模块化用 webpack 核rollup
扩展：说一下对模块化标准统一的期待啊什么的

## Class 与 JS 构造函数的区别

## Promise 的用法

## ES6其他常用功能

