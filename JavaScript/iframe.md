```html
<!-- iframe.html -->
<h2 id="h2">iframe.html</h2>
```

```html
<h2>parent.html</h2>
<iframe src="./iframe.html" id="myIframe" frameborder="0"></iframe>

<script>
  var myIframe = document.getElementById("myIframe").contentWindow
  // myIframe -> 如果获取正确的话，它相当于 window 对象
  console.log(myIframe)
  var h2 = myIframe.document.getElementById("h2")
  console.log(h2) // null

  window.onload = function () {
    var h2 = myIframe.document.getElementById("h2")
    console.log(h2) // 获取到了
  }
</script>
```