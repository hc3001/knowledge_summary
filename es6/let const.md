//1、 let const 与var的区别
// let const 不存在变量提升
// let const 存在暂时性死区的现象（如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。）
// let const 不允许重复声明
// const 不得改变值（变量指向的那个内存地址所保存的数据不得改动）
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let a;
}

//2、 变量的解构赋值
let [a, b, c] = [1, 2, 3]  //数组解构（有顺序）
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }  //数组解构
const [a, b, c, d, e] = 'hello'  //字符串的解构

let [foo = true] = []   //解构默认值
var {x, y = 5} = {x: 1}

用途：输入模块的指定方法、函数参数的默认值、提取 JSON 数据、遍历 Map 结构

//3、 模板字符串、字符串新增方法 (includes、trimStart()、trimEnd())

//4、 函数的扩展
    函数参数的默认值
    rest 参数

//5、数组的扩展
    扩展运算符(复制数组、合并数组、转字符串为数组)
    Array.from() (把两类对象转为真正的对象，类数组对象、可遍历对象)
    数组实例方法：find() / findIndex() / fill() /keys() / entries() / values() / includes() / flat()

//6、对象的扩展
    for...in 循环对象
    Object.keys(obj) 获取keys


