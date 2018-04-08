
##  Set集合

与数组的最大区别：

1. Set 不基于索引，不能根据集合中的条目在集合中的位置引用这些条目
2. Set 中的条目不能单独被访问

如果你尝试向 `Set` 中 `.add()` 重复的条目，系统不会报错，但是该条目不会添加到 `Set` 中。此外，如果你尝试 `.delete()` `Set` 中不存在的条目，也不会报错，`Set` 保持不变。如果成功地添加或删除了条目，这两个方法都返回 `true`，反之返回 `false`。

循环

1. 你可以使用 Set 的默认迭代器循环访问 Set 中的每一项。
2. 你可以使用新的 for...of 循环来循环访问 Set 中的每一项。


`set`类似于数组，它的值都是唯一的，没有重复的

`set`是构造函数，配合`new`关键字，生成`set`数据结构

`set`结构，没有键名，只有键值（或者说键名，键值相同）

### `set`接受的参数：

1. 数组

```
const set = new Set([1, 2, 3, 4, 4]);
[...set] // [1, 2, 3, 4]
```
**`数组去重的方法之一`**

在`set`中内部，认为`NaN`是相等的

```
const set = new Set([4,3,5,NaN,1,NaN]);
console.log([...set])// [ 4, 3, 5, NaN, 1 ]
```

在`set`中，两个对象引用值不同，那他们是不等的

```
const 	mySet = new Set(),
	  	  obj1 = {},
		    obj2 = {};

mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size) // 2
```
```
const 	mySet = new Set(),
	  	  obj1 = {},
		    obj2 = obj1;

mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size) // 1
```
### `set`属性

Set.prototype.constructor：构造函数，默认就是Set函数。

Set.prototype.size：返回Set实例的成员总数。


### `set`方法：

操作方法：

- add(value)：添加某个值，返回Set结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。

遍历方法：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器(以数组的形式)
- forEach()：使用回调函数遍历每个成员

```
const mySet = new Set(['red','green','pink']);

for(let item of mySet.keys()){
	console.log(item);
}

console.error('------------')

for(let item of mySet.values()){
	console.log(item);
}

console.error('------------')

for(let item of mySet.entries()){
	console.log(item);
}
```

```
// forEach:用于对每个成员执行某种操作，没有返回值

const mySet = new Set([1,2,4,5]);
// 参数： 键值、键名、集合本身
mySet.forEach((val,key,set)=>{
	key = key * 3;
	console.log(val,key,set)
});
console.log(mySet) // Set { 1, 2, 4, 5 } , 不改变自身
```




判断是否包含某个键时，`Object`和`Set`写法有何不同

```
const obj = {
	'widht' : 1,
	'height': 1
}
console.log(obj['someName'])

const obj2 = new Set();
obj2.add('width');
obj2.add('height');
console.log(obj2.has('someName'))
```

将`Set`转为`Array`，使用`Array.from()`

```
const mySet = new Set([1,3,4,5,67,8,9]);
const myArr = Array.from(new Set(mySet));
console.log(myArr)
```

数组去重另一方法：

```
function dedupe(arr){
	return Array.from(new Set(arr));
}
// 返回：[ 33, 22, 1, undefined, 3, 4, 5 ]
console.log(dedupe([33,22,22,1,1,,3,4,5,5,5,5,5,5]))
```


遍历应用：

- 扩展运算符 `[...set]`
- 数组map方法

```
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
```

- 数组filter方法

```
let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
```


在遍历过程中，同步改变原来的`Set`结构，目前没有直接方法，变通的方法：

1. 利用原来的set结构映射出一个新的结构，然后在赋值给原来的set
2. 利用Array.from方法 


##  WeakSet(弱集合)

与Set的区别

1. WeakSet 只能包含对象
2. WeakSet 无法迭代，意味着不能循环访问其中的对象
3. WeakSet 没有 `.clear()` 方法

如果你使用 `.set()` 向 `Map` 中添加键已存在的键值对，不会收到错误，但是该键值对将**覆盖** `Map` 中的现有键值对。此外，如果尝试使用 `.delete()` 删除 `Map` 中不存在的键值，不会收到错误，而 Map 会保持不变。

如果成功地删除了键值对，`.delete()` 方法会返回 `true`，失败则返回 `false`。`.set()` 如果成功执行，则返回 `Map` 对象本身。

循环
1. 使用 Map 的默认迭代器循环访问每个键或值
2. 使用新的 `for...of` 循环来循环访问每个键值对
3. 使用 Map 的 `.forEach()` 方法循环访问每个键值对


##  WeakMap

WeakMap 和普通 Map 很像，但是具有以下关键区别：

1. WeakMap 只能包含对象作为键，
2. WeakMap 无法迭代，意味着无法循环访问，并且
3. WeakMap 没有 .clear() 方法。

