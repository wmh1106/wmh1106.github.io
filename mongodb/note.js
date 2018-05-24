
// 创建 id 
var id = ObjectId() // ObjectId("5b064ea44aa7a7b02296dd03")
id.getTimestamp() // ISODate("2018-05-24T05:33:24Z")
new Date(id.getTimestamp())// ISODate("2018-05-24T05:33:24Z")

// 这个 id 有个特性，可以比较大小
