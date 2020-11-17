//1、forEach,  arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
//对数组每项执行一个函数，返回值永远为undifined，不会改变原数组。 在函数内用break不能跳出整个循环， return 只能跳出当前函数
//可选参数thisArg，当函数内用到this时，用thisArg

var methodTest = [1, 3, 4]

methodTest.forEach((val, index) => {
    if(val < 3) {
        console.log(val)
        return
    }
    val = val + 1
})
console.log('methodTest', methodTest)