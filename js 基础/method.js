//1、forEach,  arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
//对数组每项执行一个函数，返回值永远为undifined，不会改变原数组。除了抛出异常以外，在函数内用break不能跳出整个循环， return 只能跳出当前函数
//可选参数thisArg，当函数内用到this时，用thisArg

var methodTest = [ 1, 3, 4 ]

methodTest.forEach((val, index) => {
	if (val < 3) {
		console.log(val)
		return
	}
	val = val + 1
})
console.log('methodTest', methodTest)

//2、reduce方法，对数组中每个元素执行reduce函数，将其结果汇总为单个返回值。
//reduce函数接收4个参数，Accumulator (acc) (累计器)，Current Value (cur) (当前值)，Current Index (idx) (当前索引),Source Array (src) (源数组), initialValue 可选参数，作为第一次调用callback函数的第一个参数值
//reduce对象累加一定要有初始值
var initialValue = 0
var sum = [ { x: 1 }, { x: 2 }, { x: 3 } ].reduce((accumulator, currentValue) => {
	return accumulator + currentValue.x
}, initialValue)
console.log(sum)

//去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)

//3、replace方法，二个参数，
// 第一个参数可以为存字符串或正则表达式
// 第二个参数可以为字符串或函数

// 第一个参数为字符串的时候，简单替换一个字符串
let atr = 'dadcka'
let res1 = atr.replace('a', 'd') //只能匹配到第一个，如匹配不到，原样返回
console.log('res1', res1)

// 第一个参数为正则表达式的时候
let res2 = atr.replace(/a/g, 'd')
console.log('res1', res2)

// 第一个参数为正则表达式的时候，第二个参数，替换字符串，可以插入特殊变量名 '$&' 代表插入匹配的子串/ '$n' 代表第n个括号匹配的字符串
let atr1 = "I am hainan hainan"
console.log( atr1.replace(/(hainan)/,"*$1*") )//I am *hainan* hainan 

// 第一个参数为正则表达式，第二个参数为函数，函数参数为（正则匹配的子串，分组匹配的文本(多个)，匹配文本字符串的匹配下标位置）
let atr2 = "这是一段文字3c$怎么去整体替换4c$"
let res3 = atr2.replace(/([0-9])([a-z](\W))/g, function() {
	//匹配到多个，函数执行多次
	console.log([...arguments])
})

// 实现一个函数
function template(tem, obj) {
	let r = tem.replace(/\{\{([^\}]+)\}\}/g, function(arg1, arg2) {
		console.log('arg1', arg1, arg2)
		return obj[arg2] || arg1
	})
	return r
}

let resFun = template('我是名字叫{{name}}，我的工作事{{work}}，我爱好我的{{work}}工作', {
	name: 'kobi',
	work: 'webdev'
})
console.log('res', resFun)

// 4、正则相关问题

