var http = require('http')
var fs = require('fs')
var template = require('art-template')
// 返回一个 Server 实例
var server = http.createServer()

server.on('request', function (req, res) {

  if (res.url === '/') {
    fs.readFile('./text.txt', (error, data) => {
      if (error) {
        console.log('文件读取失败')
        res.end(' 404 not fount')
      } else {

        // fs.readdir() 返回目录列表中的文件名和目录名
        // -----------
        // 默认读取到的 data 是二进制数据
        // 而模板引擎的 render 方法需要接收的是字符串
        // 所以我们在这里需要把 data 二进制数据转为 字符串 才可以给模板引擎使用
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        var ret = template.render(data.toString(), {
          name: 'Jack',
          age: 18,
          province: '北京市',
          hobbies: [
            '写代码',
            '唱歌',
            '打游戏'
          ],
          title: '个人信息'
        })
      
        console.log(ret)
        res.end(ret)
      }
    })
  }
  var pro = [1, 2, 3, 4]
  res.end(JSON.stringify(pro))



})

server.listen(3000, function () {
  console.log('服务启动成功，可以通过 http://127.0.0.1:3000 访问')
})