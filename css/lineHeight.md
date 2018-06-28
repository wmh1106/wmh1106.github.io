# line-height

- normal：取决于用户代理。桌面浏览器（包括火狐浏览器）使用默认值，约为1.2，这取决于元素的 font-family。
- number：该属性的应用值是这个无单位数字`number`乘以该元素的字体大小。计算值与指定值相同。大多数情况下，使用这种方法设置line-height是首选方法，在继承情况下不会有异常的值。
- length：指定`length`  用于计算 line box 的高度。查看`length` 获取可能的单位。以em为单位的值可能会产生非预期的结果
- percentage：与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。

---

- 数字 * `font-size`
- 百分比 * `font-size`

链接：[效果链接](http://js.jirengu.com/fexututatu/1/edit)

```html
fz：font-size ， lh：line-height
<div>fz:16px;lh:200%; lh=16*200%</div>
<p>没有设置lh，找父级body的lh，body 的fz:32px;lh:200%; lh=32*200%</p> 
<header>设置fz，没有设置lh，找父级body的lh，body 的fz:32px;lh:200%; lh=32*200%</header>
<footer>设置lh, fz 继承父级 body的，fz:32px;lh:200%; lh=16*200%</footer>
```

```css
*{
  border:1px solid;margin:20px;
}

body{
  line-height:200%;font-size:32px;border:none;
}

div{
  font-size:16px;line-height:200%;
}

header{
  font-size:16px;
}

footer{
  line-height:200%;
}
```