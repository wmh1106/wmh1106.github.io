# 仿 jQuery

```js
window.jQuery = function(nodeOrSelector) {
  let nodes = {}; // 定义一个对象
  if (typeof nodeOrSelector === "string") {
    // 参数是字符串说明是选择器
    let temp = document.querySelectorAll(nodeOrSelector); // 获取元素，这是个伪数组
    for (let i = 0; i < temp.length; i++) {
      // 循环把元素放进定义的对象里
      nodes[i] = temp[i];
    }
    nodes.length = temp.length; // 因为这个对象是伪数组，也给它加个length
  } else if (nodeOrSelector instanceof Node) {
    // 判断是否节点
    nodes = {
      // 为了配合上面 ,这里也做一个伪数组
      0: nodeOrSelector,
      length: 1
    };
  }
  nodes.addClass = function(classes) {
    // 接受一个或者多个 class
    classes.forEach(value => {
      // 遍历 classes 的 value，并作为参数进行下面的 for 循环
      for (let i = 0; i < nodes.length; i++) {
        // 遍历 nodes
        nodes[i].classList.add(value); // 给nodes里的每一元素都加上 class
      }
    });
  };
  nodes.setText = function(text) {
    // 接受一个 text
    for (let i = 0; i < nodes.length; i++) {
      // 遍历 nodes
      nodes[i].textContent = text; // 每一个的文本都赋值为 text
    }
  };
  return nodes; // 返回这个对象
};
```
