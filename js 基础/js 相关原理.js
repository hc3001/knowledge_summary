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
// 引用计数：跟踪每个值被引用的次数，如果一个值引用的次数为0，就可以释放
// 标记清除：1、垃圾收集器会在运行的时候会给存储在内存中的所有变量都加上标记 2、从根部出发将能触及到的当前对象的标记清除。3、那些还存在标记的变量被视为准备删除的变量。4、垃圾收集器会执行最后一步内存清除的工作

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

// 7、 JS执行过程
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
		// ①、准备工作（会给变量对象添加形参、函数声明、变量声明等初始的属性值）
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

// 8、函数的重载：函数名相同，函数的参数不同(包括参数个数和参数类型)，根据参数的不同去执行不同的操作， JS中没有函数重载。
// https://juejin.cn/post/6844903933480009741
// 模拟函数重载

// 9、尾调用与尾递归