# 结合 CSS 和 XHTML

## 1. 外部样式表：link 元素
```
<link rel="stylesheet" href="./style/index.css" media="all">
```
`rel`代表关系

`href`路径：可以相对路径、可以绝对路径

`media`：媒体类型

## 2. 文档样式表（或嵌套样式表）：style 元素

- 位置：一般写在 head 标签中

## 3. @import 指令：
    
`@import url(“./style/index.css”)`

`**必须放到 CSS 开头引用**`

## 4. 内联样式：元素的属性 `style="***"`

属性`style`除了body 外部出现的元素（如：head、title），可以与HTML 任何元素关联

