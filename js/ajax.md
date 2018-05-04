# AJAX => 异步、javascript、and、xml

* 全称：`Asynchronous JavaScript and XML`
  * 异步的 js 和 xml
* 作用：使页面更新内容并且不刷新
* 核心：`XMLHttpRequest`

```js
var xhr = new XMLHttpRequest();

xhr.timeout = 10000;
xhr.responseType = "text";
xhr.open("POST", "/server", true);
xhr.send();
xhr.onreadystatechange = () => {
  xhr.status === 200 && xhr.readyState === 4;
};
```
