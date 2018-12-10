var http = require('http')
// 返回一个 Server 实例
var server = http.createServer()

server.on('request',function(request,response){
  console.log('收到客户端的请求')
  
  // -----------
  // response.write('hello')
  // response.end()
  response.end('hello')

  console.log(request.url)
  
  // -----------
  // 响应内容只能是二进制、字符串数据
  var pro = [1,2,3,4]
  res.end(JSON.stringify(pro))

  // -----------
  // 编码，设置请求头
  response.setHeader('Content-Type','text/plain; charset=utf-8');
  // response.setHeader('Content-Type','text/html; charset=utf-8');
  // response.setHeader('Content-Type','image/jpeg');
  // 发送的不是文件，而是文件内容；客户端（浏览器）收到之后，会根据 content-type进行解析处理
  // 还有通过设置 html 的 mate 标签声明当前文本的编码格式
  res.end('hello 你好')
})

server.listen(3000,function(){
  console.log('服务启动成功，可以通过 http://127.0.0.1:3000 访问')
})

