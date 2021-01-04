//一、js原型到原型链
// 用一张链表图表示即可

//二、this篇
定义: this是在执行上下文创建时确定的一个在执行过程中不可更改的变量
四种情况
在全局环境或是普通函数中直接调用(严格模式, 指向undefine)
作为对象的方法
使用apply和call
作为构造函数(this指向实例)

箭头函数: 箭头函数会捕获其所在上下文的this值, 作为自己的this值

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
// 标记清除：1、垃圾收集器会在运行的时候会给存储在内存中的所有变量都加上标记 2、从根部出发将能触及到的当前对象的标记使用。3、那些还存在标记的变量被视为准备删除的变量。4、垃圾收集器会执行最后一步内存清除的工作