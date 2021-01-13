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

let types = Object.prototype.toString.call('')

types.replace


let xhr = new XMLHttpRequest()

xhr.onreadystatechange(() => {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText)
    }
})

xhr.open('get', url, true)
xhr.send(null)


let cancelToken = axios.CancelToken//构造函数
let source = cancelToken.source()//返回一个对象包含token(promise 对象)，cancel
axios.get('/uer/1233', {
    cancelToken: source.token // xhr.abort()
}).catch(() => {

})

source.cancel('cancel')

