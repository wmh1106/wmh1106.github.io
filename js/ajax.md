# AJAX => Asynchronous JavaScript and XML

- 全称：`Asynchronous JavaScript and XML`
  - 异步的 js 和 xml
- 作用：使页面更新内容并且不刷新
- 核心：`XMLHttpRequest`对象

```js
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  // 通信成功时，状态值为4
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // xhr.response
      // xhr.responseType
      // xhr.responseURL
      // xhr.statusText
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function(e) {
  console.error(xhr.statusText);
};
xhr.ontimeout = function() {
  console.error("The request for " + url + " timed out.");
};
// 默认就是 true
xhr.open("GET", "/endpoint", true);
// setRequestHeader 是 open 之后 send 之前
xhr.setRequestHeader("Content-Type", "application/json");
// 指定 10 秒钟超时
xhr.timeout = 10 * 1000;
xhr.send(null);
```

```js
JS 可以设置任意请求 header 吗
第一部分 request.open('get', '/xxx')
第二部分 request.setHeader('content-type','x-www-form-urlencoded')
第四部分 request.send('a=1&b=2')
JS 可以获取任意响应 header 吗？
第一部分 request.status / request.statusText
第二部分 request.getResponseHeader() / request.getAllResponseHeaders()
第四部分 request.responseText
```

## 一个完整的 HTTP 请求过程，通常是下面 7 步骤

- 建立 TCP 连接
- web 浏览器向 web 服务器发送请求命令
- web 浏览器发送请求头信息
- web 服务器应答
- web 服务器发送应答头信息
- web 服务器向浏览器发送数据
- web 服务器关闭 TCP 连接

## 一个 HTTP `请求`一般由以下四部分组成

- HTTP 请求的方法或动作
- 正在请求的 URL
- 请求头
- 请求体

**`请求头与请求体之间有个空行！`**

## 一个 HTTP `响应`一般由以下三部分组成

- 一个数字和文字组成的状态码，用来显示成功还是失败
- 响应头
- 响应体

**`响应头与响应体之间有个空行！`**

## HTTP 状态码

- 2xx
- 3xx
- 4xx
- 5xx

## JSON

### 数据格式：名称/值对，且要求用双引号

### 值的类型

- 数字
- 字符串
- 逻辑值（布尔值）
- 数组
- 对象
- null

## 跨域：浏览器的同源策略

只有 **`协议+域名+端口`** 一模一样才允许发 AJAX 请求，任意一个不同时，就是不同域，就算跨域

1. 使用`JSONP`可以解决`get`类型的跨域请求
2. CORS 跨域（Cross-Origin Resource Sharing）

```js
// 后端设置，这样2个不同的网址，就能互相通信了
response.setHeader('Access-Control-Allow-Origin','url')
```

## 封装AJAX

```js
window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){
  let request = new XMLHttpRequest()
  request.open(method, url) // 配置request
  for(let key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined, request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}
```

## `Promise`形式的AJAX

return new Promise((resolve,reject)=>{})