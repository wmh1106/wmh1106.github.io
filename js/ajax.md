# AJAX => 异步、javascript、and、xml

* 全称：`Asynchronous JavaScript and XML`
  * 异步的 js 和 xml
* 作用：使页面更新内容并且不刷新
* 核心：`XMLHttpRequest`

```js
var xhr = new XMLHttpRequest();

xhr.timeout = 10000
xhr.responseType = "text"
xhr.open("POST", "/server", true)
xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
xhr.send(body)
xhr.onreadystatechange = () => {
  if(xhr.status === 200 && xhr.readyState === 4){
    xhr.responseText
    xhr.responseXML
  }else{
    xhr.status
  }
}
```

xhr.responseXML

xhr.getAllResponseHeader()
xhr.getResponseHeader()

## 一个完整的 HTTP 请求过程，通常是下面 7 步骤

* 建立 TCP 连接
* web 浏览器向 web 服务器发送请求命令
* web 浏览器发送请求头信息
* web 服务器应答
* web 服务器发送应答头信息
* web 服务器向浏览器发送数据
* web 服务器关闭 TCP 连接

## 一个 HTTP `请求`一般由以下四部分组成

* HTTP 请求的方法或动作
* 正在请求的 URL
* 请求头
* 请求体

**`请求头与请求体之间有个空行！`**

## 一个 HTTP `响应`一般由以下三部分组成

* 一个数字和文字组成的状态码，用来显示成功还是失败
* 响应头
* 响应体

**`响应头与响应体之间有个空行！`**

## HTTP 状态码

* 2xx
* 3xx
* 4xx
* 5xx

## JSON

### 数据格式：名称/值对，且要求用双引号

### 值的类型

* 数字
* 字符串
* 逻辑值（布尔值）
* 数组
* 对象
* null

## 跨域：浏览器的同源策略

**`协议|子域名|主域名|端口 ： 任意一个不同时，就是不同域，就算跨域`**

使用`JSONP`可以解决`get`类型的跨域请求
