# Less

## 好处

* 嵌套：反应层级和关系
* 变量和计算：减少重复代码
* Extend 和 Mixin：代码片段
* 循环：适用于复杂且有规律的样式
* import CSS 文件模块化

## 嵌套

`&`符号的使用

## 注释

`//`

## 变量

`@name:value`

块作用域的变量

## 混合 minxin

* 基础：定义的 class1,在 class2 中引入 class1.
* 带参数的：.class(@name,@width)
* 带默认参数：.class(@name,@width)
* 匹配模式

## 扩展 extend

class:extend(minxin)

## 循环

```less
// less 中没有循环，是用递归模拟

// 1. 给个条件，防止死循环
.minxin(@n) when (@n > 0 ){
    // 2. 调用自己
    .minxin(@n - 1);
    .class-@{n}{
        width: 1000px/12*@n;
    }
}

.minxin(12)
```

## 其他

* Math 函数
* 命名空间
* 引入其他 less 文件：`import 'url'`
* 不编译：`~()`
* 雪碧图：`background-size`
