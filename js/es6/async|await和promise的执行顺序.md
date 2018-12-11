# async/await 和 promise 的执行顺序

```js
async function async1() {
    console.log('2. async1 start')
    await async2()
    console.log('7. async1 end')
}
async function async2() {
    console.log('3. async2')
}
console.log('1. script start')
setTimeout(function () {
    console.log('8. setTimeout')
}, 0)
async1();
new Promise(function (resolve) {
    console.log('4. promise1')
    resolve();
}).then(function () {
    console.log('6. promise2')
})
console.log('5. script end')
```