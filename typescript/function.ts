//ts中函数声明
function testFunc(x: string, y: string): string {
    return x + y
}

//ts中函数表达式
let testFunc1 = function(x: string, y: string): string {
    return x + y
}
//函数表达式中的另一种写法，对等号左边也进行类型定义
let testFunc2: (x: string, y: string) => string = function(x: string, y: string): string {
    return x + y
}

//注意点参数多输入或少输入都不行

//用接口定义函数的形状
interface SearchFunc {
    (x: number, y: number): number 
}

let testFunc3: SearchFunc = function(x: number, y: number): number {
    return x + y
}

//参数可选，用?表示，必须在必传的后面
function testFunc4(x: number, y: number, z?: number): number {
    return x + y + z
}

//参数的默认值
function testFunc5(x: number, y: number, z: number = 0): number {
    return x + y + z
}

//es6剩余参数
function testFunc6(x: any[], ...items: any[]) {
    items.forEach(item => {
        Array.push(item)
    })
}

//谓词is 的类型保护
function isString(test: any): test is string{
    return typeof test === "string";
}
function example(foo: any){
    if(isString(foo)){
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world")

