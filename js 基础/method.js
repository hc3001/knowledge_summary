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
