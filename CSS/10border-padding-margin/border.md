# 边框：border

border:width style color

边框没有样式，它就不必存在。也就是说有 width、color 都没用。

边框颜色：默认与元素文本颜色相同；如果元素没有设置颜色，那就使用父级的，因为 color 可以继承；

边框绘制在“元素的背景之上”

width 值：绝对长度

对行内元素：
1. 不论 border-top-width,border-bottom-width 设置多少，都不会影响行内元素的行高
2. border-right-width,border-left-width，这个是占位的


