//1、泛型的应用， 规定长度和值的类型，返回含固定类型的数组。
const creatArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let index = 0; index < length; index++) {
        result.push(value)
    }
    return result
}

console.log(creatArray<string>(3, 'success'))
console.log(creatArray(3, 'success')) //可以不传入类型，让类型推断自动推算出来。

//2、泛型定义多个类型，相当于传类型多个
const conversion = function <T, U>(name: T, age: U): [T, U] {
    return [name, age]
}

console.log(conversion<string, number>('hc', 29)) //调用的时候类型传参string, number

//3、未知类型，不能使用其属性，比如length属性
const lengthTest = function <T>(query: T) {
    let len = query.length //T未知类型
}

lengthTest <string>('my')
