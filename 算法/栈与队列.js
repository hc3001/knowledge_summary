//队列：先进先出，场景 js异步任务队列
//栈：后进先出，场景 history栈、执行上下文栈

//逆波兰表达式求值 leetcode 150
//思路：先定义好运算符对应的函数，循环遍历把item放入数组中，遇到运算符，pop二个值出来，计算结果push进数组，
let test = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
let opMap = {
    '+': (a, b) => {
        return Number(a) + Number(b)
    },
    '-': (a, b) => {
        return Number(a) - Number(b)
    },
    '*': (a, b) => {
        return Number(a) * Number(b)
    },
    '/': (a, b) => {
        return parseInt(Number(a) / Number(b), 10)
    },
}

let evalRPN = function (tokens) { 
    let res = []
    for (let i = 0; i < tokens.length; i++) {
        const item = tokens[i]
        const st = opMap[item]
        if(!st) {
            res.push(item)
        } else {
            let b = res.pop()
            let a = res.pop()
            let r = st(a, b)
            res.push(r)
        }
    }
    return res[0]
}

let res = evalRPN(test)
console.log('res', res)