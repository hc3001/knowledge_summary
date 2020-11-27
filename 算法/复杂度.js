// //o1, ㏒2n, o(n), o(n^2)
// //二个时间复杂度先后排列，相当于相加，取时间复杂度高的为结果。
// // o(1) + o(n) = o(n)
// let i = 0
// i += 1
// for (let index = 0; index < 4; index++) {
// 	console.log('t')
// }

// //循环套循环，时间复杂度相乘
// //o(n) * o(n) = o(n^2)
// for (let s = 0; s < 2; s++) {
// 	for (let t = 0; t < 2; t++) {
// 		console.log('t')
// 	}
// }

// //o(logN), 复杂度规则，log2N、log3N等都表示logN
// let j = 0
// let n = 10
// while (j < n) {
// 	console.log('t')
// 	j *= 2
// }

// //栈：后进先出，可以用arr，push 再pop
// let stack = []
// stack.push(1)
// stack.push(2)
// const itme1 = stack.pop()
// const itme2 = stack.pop()
//使用场景判断是否为有效括号，遇到左括号入栈，遇到右括号出栈，当数组为空时，则为合法

let isBracketsValid = function(brackets) {
    let arrStack = []
    if(brackets.length % 2 === 1) { 
        return false
    }
	for (let i = 0; i < brackets.length; i++) {
		const bra = brackets[i]
		let previous = arrStack.slice(-1)[0]
		if (bra) {
			if (bra === '(' || bra === '[' || bra === '{') {
				arrStack.push(bra)
			} else if (
				(bra === ')' && previous === '(') ||
				(bra === ']' && previous === '[') ||
				(bra === '}' && previous === '{')
			) {
				arrStack.pop()
			} else {
				return false
			}
		}
	}
	return arrStack.length === 0
}

console.log('test', isBracketsValid('((()))'))
console.log('test', isBracketsValid(')()[]'))
console.log('test', isBracketsValid(')'))
console.log('test', isBracketsValid('([)]'))

//函数调用堆栈，也就是执行上下文堆栈
