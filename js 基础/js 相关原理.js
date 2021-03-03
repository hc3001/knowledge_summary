//一、js原型到原型链
// 用一张链表图表示即可

//二、this篇  https://juejin.cn/post/6844903488304971789
定义: this是在执行上下文创建时确定的一个在执行过程中不可更改的变量
四种情况
在全局环境或是普通函数中直接调用(严格模式, 指向undefine)
作为对象的方法
使用apply和call
作为构造函数(this指向实例)

// 箭头函数: 箭头函数会捕获其所在上下文的this值, 作为自己的this值
// 			不可以使用arguments对象，该对象在函数体内不存在

// 闭包以及作用
	//能够读取其他函数内部变量的函数。
	//可以读取函数内部的变量
	//隐藏变量，避免全局污染

//三、 http 发送请求代码
// 1、创建AJAX 对象
var ajax = new XMLHttpRequest()
// 2、给AJAX 设置事件
ajax.onreadystatechange = function() {
	// 3、获取响应
	if (ajax.readyState == 4 && ajax.status == 200) {
		var msg = ajax.responseText
	}
}
//发送前设置
ajax.open('get', url, true)
//发送数据
ajax.send(null)

//三、 发布订阅模式 和 观察者模式的区别
// 发布订阅模式增加了第三方'事件中心'，减少观察者和订阅者的耦合
// 定义发布者类
class Publisher {
	constructor() {
		this.observers = []
	}
	//增加订阅者
	add(observer) {
		this.observers.push(observer)
	}
	//移除订阅者
	remove(observer) {
		this.observers.forEach((item, i) => {
			if (observer === item) {
				this.observers.splice(i, 1)
			}
		})
	}
	//通知订阅者
	notify() {
		this.observers.forEach((item) => {
            item.update(this)
        })
	}
}


class Observer {
    constructor() {
        console.log('Observer created')
    }

    update() {
        console.log('Observer.update invoked')
    }
}

let A = new Observer()
let B = new Observer()
let C = new Observer()

let pub = new Publisher()
pub.add(A)
pub.add(B)
pub.add(C)

pub.notify()


// 4、垃圾回收机制（标记清除 与 引用计数）重点：垃圾回收器会按照固定的时间间隔周期性的执行回收操作
// http://obkoro1.com/web_accumulate/accumulate/tool/js%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.html#%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E6%9C%BA%E5%88%B6%E7%9A%84%E5%8E%9F%E7%90%86%EF%BC%9A
// 引用计数：垃圾回收器跟踪每个值被引用的次数，如果一个值引用的次数为0，就可以释放
// 标记清除：1、垃圾回收器会在运行的时候会给存储在内存中的值都加上标记 2、从根部出发将能触及到的当前对象的标记清除。3、那些还存在标记的变量被视为准备删除的变量。4、垃圾收集器会执行最后一步内存清除的工作

// 5、什么是内存泄漏？ 
// 无用的内存还在占用，得不到释放和归还。 场景1、 意外的全局变量 2、遗忘的定时器 3、被遗忘的事件监听器  4、被遗忘的闭包 5、脱离 DOM 的引用

// 6、JS静态作用域(词法作用域)，在函数定义的时候确定作用域
var value = 1
function foo() {
    console.log(value)
}
function bar() {
    var value = 2
    foo()
}

bar() //1

// 7、 JS函数执行过程
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
	// 1、checkscope 函数被创建，保存作用域链到内部属性[[scope]]
		checkscope.[[scope]] = {
			globalContext.VO
		}
	// 2、执行checkscope函数，创建JS执行上下文（一个对象）
		
	// 3、当执行一个函数的，就会创建一个执行上下文，checkscope 函数执行上下文被压入执行上下文栈
		ECStack = [
			checkscopeContext,
			globalContext
		];
		// ①、准备工作（会给活动对象添加形参、函数声明、变量声明等初始的属性值）
		checkscopeContext = {
			Scope: checkscope.[[scope]],
		}
		checkscopeContext = {
			AO: {
				arguments: {
					length: 0
				},
				scope2: undefined
			},
			Scope: [AO, [[Scope]]]
		}
		// ②、执行函数，修改 AO（活动对象） 的属性值
	// 4、当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出

// 8、函数的重载：函数名相同，函数的参数不同(包括参数个数和参数类型)，根据参数的不同去执行不同的操作，JS中没有函数重载。
// https://juejin.cn/post/6844903933480009741
// 模拟函数重载

// 9、尾调用与尾递归

// 10、Object.create(obj) 以参数为原型（__proto__）创建一个空对象


// 11、事件循环（宏任务、微任务）https://juejin.cn/post/6844903998747574286#heading-8   https://www.cnblogs.com/leiting/p/13174545.html
// JS 是单线程的语言。 
// 单线程，有同步阻塞问题，Event Loop是javascript的执行机制。
		// 代码任务分同步和异步任务，同步的进入主线程，异步的进入Event Table并注册函数
		// 当指定的事情完成时，Event Table会将这个函数移入异步队列。
		// 主线程内的任务执行完毕为空，会去异步队列读取对应的函数，进入主线程执行。
		// 上述过程会不断重复，也就是常说的Event Loop(事件循环)。
// 异步任务分微任务和宏任务。
		// 宏任务按顺序执行，且浏览器在每个宏任务之间渲染页面
		// 所有微任务也按顺序执行，且在以下场景会立即执行所有微任务
			// 每个回调之后且js执行栈中为空。
			// 每个宏任务结束后。

//13、 es5 与 es6的继承
// es5原型链继承
function Parent() {
	this.name = 'kevin'
}

Parent.prototype.sayName = function() {
	console.log('kk', this.name)
}

function Child() {

}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let n = new Child
n.sayName()

// 借用构造函数
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

// 原型式继承
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

// 寄生组合式继承
function Parent(name) {
	this.color = ['red', 'green', 'black']
	this.name = name
}
parent.prototype.sayName = function() {
	console.log(this.name)
}

function Child(age) {
	Parent.call(this)
	this.age = age
}
function F() {}
F.prototype = parent.prototype
Child.prototype = new F()

// 14、模拟new操作
function obsj() {
	let obj = Object.create(null)
	let Constructor = [].shift.call(arguments)
	obj.__proto__ = Constructor.prototype
	Constructor.apply(obj, arguments)
	return obj
}

function Test(name) {
	this.name = name
}

obsj(Test, 'hc')

// 15、模拟call 操作

Function.prototype.call1 = function() {
	let context = this
	let obj = arguments[0]
	var args = [...arguments].slice(1)
	obj.context = context
	let result = obj.context()
	delete obj.context(args)
	return result
}

let test1 = {
	name: 'hc'
}
let test2 = {
	sayName() {
		console.log(this.name)
	}
}

test2.sayName.call1(test1)

// 16、模拟Object.create() 函数实现

function createObj(o) {
	function F() {}
	F.prototype = o
	return new F()
}

// 17、实现instanceof
	function instanceof1(ins, cons) {
		let p = [].__proto__
		while(p) {
			if(p == cons) {
				return true
			}
			p = p.__proto__
		}
		return false
	}

instanceof1([], Array)

// 18、防抖（在事件被触发n秒后再执行，如果在这n秒内又被触发，则重新计时。主要用来限制频率）
    // 搜索框搜索输入。只需用户最后一次输入完，再发送请求
    // 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
function debounce(fn, wait) {
    let t = null
    return function() {
        const content = this
        const agus = arguments
        clearTimeout(t)
        t = setTimeout(()=> {
            fn.call(content, agus)
        }, wait)
    }
}

// 19、节流（在规定时间内连续执行只执行一次（可能第一次），本质上是降低频率）
    // 滚动加载发送ajax
    // 时间撮(第一次执行)
    function fdou(fn, wait) {
        let t = 0
        return function() {
            const content = this
            if(Date.now() - t > wait) {
                fn.call(content, [...arguments])
                t = Date.now()
            }
        }
    }
    // 定时器（wait 后执行）
    function dsdou(fn, wait) {
        let time = null
        return function() {
            let content = this
            if(!time) {
                time = setTimeout(()=> {
                    fn.call(content, [...arguments])
                    time = null
                }, wait)
            }
        }
    }

// 20、柯里化的实现
    // 实现fn(1)(2)(3) 返回6
    function curry(fn, agus) {
        let length = fn.length
        let agus = agus || [] //数组储存变量
        return function() {
            let content = this
            let fnAgus = [...arguments]
            agus.push(...fnAgus)
            if(agus.length < length) {
                curry(fn, agus)
            } else {
                return fn.call(content, [...agus])
            }
        }
    }

    //使用
    let fn = curry((a, b, c)=> {
        return a + b + c
    })
    let result = fn(1)(2)(3)

// 21、 generator 实现 async
function* testG() {
	// await被编译成了yield
	const data = yield getData()
	console.log('data: ', data);
	const data2 = yield getData()
	console.log('data2: ', data2);
	return data + '123'
  }

function generatorTest(gen) {
	return function() {
		let rs = gen.call(this, ...arguments)
		return new Promise((resolve, reject) => {
			function test(next, argu) {
				
			}
			test('next')
		})
	}
}
  
  // 调用方法
let rgen = generatorTest(testG)
rgen.then(result => {
	console.log(result)
})

