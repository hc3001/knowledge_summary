一、resolve 函数可以赋值到外面
```
let res = null
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    setTimeout(() => {
        res = resolve
    }, 5000)
})

promise.then(function() {
	console.log('resolved.')
})

console.log('Hi!')

setTimeout(() => {
	res()
}, 6000)

```

二、Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续多次调用 .then 或者 .catch 都会直接拿到该值。
https://juejin.cn/post/6844904077537574919#heading-19

三、Promise.all()   Promise.race()


