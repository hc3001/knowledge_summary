//接口是对行为的抽象，和type关键字相似，但也有不同。
//注意：interface 和 type 不仅仅可以是类型（number，string），也可以是固定的字符串type Name = 'name'，用的时候值一定要是name。

// 都可以用来描述对象和函数类型
interface Users {
    name: string
}
interface Functest1 {
    (name: string, length: number): string
}

type User = {
    name: string
}
type Functest = (name: string, length: number) => string

// 不同
//1、interface 只能用来描述对象包括对象、数组(索引类型)、函数、类
interface descript {
    attribute?: false,
    readonly x: number,
    [propName: string]: any, //第三个属性为任意的属性
    times: Date,
}
interface func1 {
    (name: string, length: number): string
}
interface arr {
    [index: number]: string
}
//类实现接口

//2、 type可以定义原始类型
type num = number
type Name = string // 基本类型
type arr1 = [number, string] //元组

//3、继承方式不同interface 用extends继承， type 用运算符&扩展
interface Pointdirect {
    name: string
}

interface React extends Pointdirect {
    height: number,
    width: number
}
let newReact: React = { height: 3, width: 4, name: 'point' }

type Shape = {
    area(): number
}
type Perimeter = {
    perimiter(): number
}
//& 实现继承
type combine = Shape & Perimeter
let combineNum: combine = {
    area: function (): number {
        return 1
    },
    perimiter: function (): number {
        return 2
    }
}

//4、interface 可以定义多次，结果相当于合并所有定义, type 不支持。
interface aa {
    x: number
}
interface aa {
    y: number
}
let testAa: aa = {
    x: 1,
    y: 1,
}

//5、type 可以用in关键字生成映射类型
type keys = 'firstname' | 'surname'
type DudeType = {
    [key in keys]: string
}
const testKeys: DudeType = {
    firstname: "Pawel",
    surname: "Grzybek"
}

//接口的合并，接口名称相同时，属性会合并到一起。
interface Alarm {
    price: number
}
interface Alarm {
    weight: number
} //能够合并


interface Lever {
    size: number
}
interface Lever {
    size: string  //属性类型的冲突
}