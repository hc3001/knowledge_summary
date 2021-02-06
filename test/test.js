// async function async1() {
// 	console.log('async1 start')
// 	await async2()
// 	console.log('async1 end')
// }
// async function async2() {
// 	console.log('async2')
// }
// async1()
// console.log('start')

// //顺序执行1， 2， 3
// let test = [ 1, 2, 3 ]

// test.reduce((pre, curValue) => {
// 	let p = pre.then(() => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
//                 resolve(console.log(x))
//             }, 1000)
// 		})
// 	})
// 	return p
// }, Promise.resolve())

// 实现Promise.all
// Promise.all 会同步执行数组里面的所有promise，只要有一个Promise执行reject，整体就reject
// Promise.all 返回一个Promise，处理的数据放在一个数组中

// let originTest = function(d) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
//             if(typeof d === 'string') {
//                 reject('wrong')
//             } else {
//                 resolve(d)
//             }
// 		}, 200)
// 	})
// }

// let arrOrigin = [ originTest(1), originTest('2'), originTest(3) ]
// console.log(arrOrigin)

// let promiseAll = function() {
// 	return new Promise((resolve, reject) => {
// 		let ar = []
// 		arrOrigin.forEach((item) => {
//             Promise.resolve(item)

// 			if (
// 				item.catch((rej) => {
// 					reject('wrong')
// 				})
// 			)
//             item.then((res) => {
//                 ar.push(res)
//                 if(ar.length === 3) {
//                     console.log('ar', ar)
//                     resolve(ar)
//                 }
//             })
// 		})
// 	})
// }
// promiseAll()

// let types = Object.prototype.toString.call('')

// types.replace

// let xhr = new XMLHttpRequest()

// xhr.onreadystatechange(() => {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText)
//     }
// })

// xhr.open('get', url, true)
// xhr.send(null)

// let cancelToken = axios.CancelToken//构造函数
// let source = cancelToken.source()//返回一个对象包含token(promise 对象)，cancel
// axios.get('/uer/1233', {
//     cancelToken: source.token // xhr.abort()
// }).catch(() => {

// })

// source.cancel('cancel')

// class Testdan {
//     constructor() {

// class Testdan {
//     constructor() {

//     }
//     static getDatalist() {
//         if(Testdan.isGetdata) {
//             return Testdan.isGetdata
//         } else {
//             Testdan.isGetdata = new Testdan()
//             return Testdan.isGetdata
//         }
//     }
// }

// let A = Testdan.getDatalist()
// let B = Testdan.getDatalist()
// console.log(A === B)

// let test = (function testDan1() {
//     let t = null
//     return function() {
//         if(!t) {
//             t = new Testdan()
//         }
//         return t
//     }
// })()
// let C = test()
// let D = test()
// console.log(C === D)

// Array.prototype.binds = function(obj, arg) {
//     let self = this
//     return function() {
//         return self.call(obj, arg)
//     }
// }

// //节流
// function jl(func, time) {
//     var content
//     var pre = 0
//     return function() {
//         let t = Date.now()
//         content = this
//         if(t - pre > time) {
//             func.call(content, arguments)
//             pre = t
//         }
//     }
// }

// //防抖
// function fd(func, time) {
//     let t
//     return function() {
//         clearTimeout(t)
//         let content = this
//         t = setTimeout(()=> {
//             func.call(content, arguments)
//         }, time)
//     }
// }

// let ts = 'aBAa'

// let transTs = ts.replace(/([a-z])|([A-Z])/g, (arg1, arg2, arg3) => {
//     if(arg2) {
//         return arg2.toUpperCase()
//     } else if(arg3){
//         return arg3.toLowerCase()
//     }
// })
// console.log('transTs', transTs)

// // 节流（一秒内只触发一次函数）
// let fotto = function(fun, limit) {
// 	let t = 0
// 	return function() {
//         let context = this
//         if(Date.now() - t >= limit) {
//             t = Date.now()
//             fun.call(contenxt, arguments)
//         }
//     }
// }

// // 防抖（间隔100毫秒内触发，从不触发）
// let jsl = function(fun, limit) {
//     let t = null
//     return function() {
//         const context = this
//         clearTimeout(t)
//         t = setTimeou(()=> {
//             fun.call(context, arguments)
//         }, limit)
//     }
// }

// // 找出最长不重复字符串长度
// let test = 'abdcaddefapsdakdf'
// function maxLenString(s) {
//     let res = 0
//     let win = []
//     let i = 0
//     while(i < s.length) {
//         let item = s[i]
//         let index = win.indexOf(item)
//         console.log('item', item, index)
//         if(!(index === -1)) {
//             win.splice(0, index + 1)
//         }
//         win.push(item)
//         res = Math.max(res, win.length)
//         i++
//     }
//     return res
// }
// console.log(maxLenString(test))
// let s = 3
// let nums = [1, 1]
// var minSubArrayLen = function(s, nums) {
//     if(nums.length === 0 || !nums.length) {
//         return 0
//     }
//     let left = 0
//     let right = 0
//     let res = +Infinity
//     let arr = []
//     function isLessthan(arr) {
//         let sum = arr.reduce((pre, curr) => {
//             return pre + curr
//         }, 0)
//         return sum - s >= 0
//     }
//     console.log(nums.length)
//     while(right < nums.length) {
//         let item = nums[right]
//         right++
//         //如果小于s加入arr，并跳出循环
//         arr.push(item)
//         if(!isLessthan(arr)) {
//             continue
//         }
//         while(left < right) {
//             console.log(arr, left, right, isLessthan(arr))
//             //满足条件left++ ，不满足直接跳出本次循环
//             if(isLessthan(arr)) {
//                 res = Math.min(res, right - left)
//                 left++
//                 arr = nums.slice(left, right)
//             } else {
//                 break
//             }
//         }
//     }
//     return res==+Infinity ? 0 : res
// };

// let t = minSubArrayLen(s, nums)
// console.log('t', t)

// var arr = [1, 3, 4, [2, 7], [4, 1, [10, 9]]]

// var flat = function(arr) {
//     let res = []
//     function ts(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             const item = arr[i]
//             if(!Array.isArray(item)) {
//                 res.push(item)
//             } else {
//                 ts(item)
//             }
//         }
//     }
//     ts(arr)
//     return res
// }

// var flat1 = function(arr) {
//     while(arr.find(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// console.log('arr', flat(arr), flat1(arr))

// let test = Object.create({a: 1})
// console.log('test', test, test.a)
// for(var item in test) {
//     if(test.hasOwnProperty(item)) {
//         console.log('item', item)
//     }
// }

// 冒泡排序
// let test = [2, 0, 1]

// function mpSort(origin) {
//     for (let i = 0; i < origin.length - 1; i++) {
//         const item = origin[i]
//         for (let j = i; j < origin.length - i - 1; j++) {
//             const temp = origin[j]
//             const n = origin[j + 1]
//             if(temp > n) {
//                 origin[j] = origin[j + 1]
//                 origin[j + 1] = temp
//             }
//         }
//     }
//     return origin
// }

// const res = mpSort(test)
// console.log('res', res)

// 快排时间复杂度o(n*logn)
// var sortColors = function(nums) {
//     if(nums.length <= 1) {
//         return nums
//     }
//     let left = []
//     let right = []
//     let mid = nums.splice(Math.floor(nums.length / 2), 1)[0]
//     console.log('mid', mid)
//     for(var i=0; i<nums.length; i++) {
//         if(mid > nums[i]) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }
//     console.log(left, right)
//     return [...sortColors(left), mid, ...sortColors(right)]
// };

// const res = sortColors(test)
// console.log('res', res)

// let promise = new Promise(function(resolve, reject) {
// 	console.log('Promise')
//     resolve(1)
//     console.log('Promise1')
// })
// promise.then((res) => {
//     console.log('res', res)
// })

// 插入排序
// 手写一个call
// Function.prototype.apply2 = function(...arr) {
//     let context = this
//     console.log('arr', arr)
//     let [ target, args ] = arr
//     target.fn = context
//     if(Array.isArray(arr)) {
//         target.fn(...args)
//     }
//     delete target.fn
// }

// let target = {
//     a: 1
// }
// let st = {
//     a: 2,
//     test: function(t, k) {
//         console.log('this', this.a, t, k)
//     }
// }

// st.test.apply2(target, [7, 3])

//手写一个bind
// Function.prototype.bind2 = function(...arr) {
//     let context = this
//     let [target, args] = arr
//     return function () {
//         return context.apply(target, args)
//     }
// }

// let target = {
//     a: 1
// }
// let st = {
//     a: 2,
//     test: function(t, k) {
//         console.log('this', this.a, t, k)
//     }
// }

// st.test.bind2(target, )


// function Parent() {
// 	this.name = 'kevin'
// }

// Parent.prototype.sayName = function() {
// 	console.log('kk', this.name)
// }

// function Child() {

// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// let n = new Child
// n.sayName()

// function Parent () {
//     console.log('this', this)
//     this.names = ['kevin', 'daisy'];
// }

// function Child () {
//     Parent.call(this);
// }

// var child1 = new Child();

// 广度优先遍历
// var tree = {
//     value: 'a',
//     children: [
//         {
//             value: 'b',
//             children: [
//                 {
//                     value: 'd',
//                     children: []
//                 },
//                 {
//                     value: 'e',
//                     children: []
//                 }
//             ]
//         },
//         {
//             value: 'c',
//             children: [
//                 {
//                     value: 'f',
//                     children: []
//                 },
//                 {
//                     value: 'g',
//                     children: []
//                 }
//             ]
//         }
//     ]
// }

// const  bfs = function(tree) {
//     let stack = [tree] 
//     while(stack.length) {
//         let p = stack.shift()
//         console.log(p.value)
//         let chidren = p.children
//         stack.push(...chidren)
//     }
// }

// console.log('bfs', bfs(tree))

//先序遍历
// const bt = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 4,
//             left: {
//                 val: 8,
//                 left: null,
//                 right: null,
//             },
//             right: {
//                 val: 9,
//                 left: null,
//                 right: null,
//             },
//         },
//         right: {
//             val: 5,
//             left: null,
//             right: null,
//         }
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null,
//         }
//     }
// }

// var preOrder = function(tree) {
//     if(!tree) return 
//     console.log(tree.val)
//     preOrder(tree.left)
//     preOrder(tree.right)
// }

// preOrder(bt)

// const bts = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 4,
//             left: {
//                 val: 8,
//                 left: null,
//                 right: null,
//             },
//             right: {
//                 val: 9,
//                 left: null,
//                 right: null,
//             },
//         },
//         right: {
//             val: 5,
//             left: null,
//             right: null,
//         }
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null,
//         }
//     }
// }

// var preOrder2 = function(tree) {
//     const line = [tree]
//     while(line.length) {
//         let p = line.pop()
//         console.log(p.val)
//         if(p.right) line.push(p.right)
//         if(p.left) line.push(p.left)
//     }
// }

// preOrder2(bts)

// 实现一个new（返回一个{}， 对象的__proto__ 指向构造函数的prototype, 执行构造函数）

// function Test(name) {
//     this.color = ['red', 'green']
//     this.name = name
// }

// function newReplace() {
//     const obj = Object.create(null)
//     const Constructor = Array.prototype.shift.call(arguments)
//     console.log(Constructor, arguments);
//     Constructor.call(obj, ...arguments)
//     obj.__proto__ = Constructor.prototype
//     return obj
// }

// console.log('tt', newReplace(Test, 'hc'))

const bts = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null,
            },
            right: {
                val: 9,
                left: null,
                right: null,
            },
        },
        right: {
            val: 5,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
}

//中序遍历
function centerOrder(tree) {
    let t = []
    let p = tree
    while(p || t.length) {
        while(p) {
            t.push(p)
            p = p.left
        }
        let l = t.pop()
        console.log('l', l.val)
        p = l.right
    }
}

centerOrder(bts)

// tree shaking 只能用import， 原理为: 检测一个模块的导入和导出，如果导出多于导入，就去除多余的部分。import 为静态导入，不需要执行完全部模块，所以能实现tree-shaking。

// development  
    //sourceMap 代码全面
    // 代码不需要压缩
    // webpack-dev-server
// production
    //sourceMap 简洁
    // 代码需要压缩

// code splitting 代码拆分，方便浏览器缓存，提升加载速度。