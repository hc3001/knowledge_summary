//类的用法包含（public/private/protected）

//public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public
class Animal {
    public name: string
    public constructor(name: string) {
        this.name = name
    }
}

let at = new Animal('kk')
console.log(at.name)

//private 私有的属性或方法，只有内部能使用，之类中不能使用

class Animal1 {
    private name: string
    private constructor(name: string) {
        this.name = name
        console.log(this.name)
    }
}

// let at1 = new Animal1('kk')  constructor 私有，不能实例化或继承
// console.log(at1.name) name属性私有，不能取到


//protected 和private类似，但是可以再之类中使用

class Animal2 {
    protected name: string
    public constructor(name: string) {
        this.name = name
    }
}

class Cat extends Animal2 {
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
}
let cat1 = new Cat('ss')
// cat1.name

//修饰符可以放在构造函数参数中，相当于定义属性并且赋值
class Teacher {
    constructor(public type: string) {
        this.type = type
    }
}


//修复符和readonly同时使用, 修饰符放在前面
class Plant {
    private readonly name: string
    constructor(material: string) {
        this.name = material
    }
}

//抽象类，abstract用于定义抽象类和抽象方法，抽象类不能被实例化
abstract class Anifun {
    constructor(public name: string) {
        this.name = name
    }
}
// let ani = new Anifun('sx')
//抽象方法只能，放在抽象类中，并且必须在之类中实现
abstract class Abs {
    public name: string
    public constructor(name: string) {
        this.name = name
    }
    public abstract say(): void
}

class ChildrenAbs extends Abs {
    public say() {
        console.log('say hello')
    }
}

let child = new ChildrenAbs('le')
child.say()

// 可以给类加类型
class Animals {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`
    }
  }
  
let ast: Animals = new Animals('never')

//typescript 有个实现（implements）的概念，就是可以类‘实现’接口
interface Alarm {
    alert(): void
}

class SecurityCar implements Alarm {
    alert() {
        console.log('i am SecurityCar')
    }
}

class Door implements Alarm {
    alert() {
        console.log('i am door')
    }
}

var secu = new SecurityCar()
secu.alert()
new Door()

//一个类可以‘实现’多个接口
interface Alert {
    alert(): void
}

interface stopAlert {
    stopAlert(): void
}

class HomeDoor implements Alert, stopAlert {
    alert() {
        console.log('i am homeDoor')
    }
    stopAlert() {
        console.log('please stop alert')
    }
}

//接口可以继承类，类既可以当做类来使用，也可以当做类型来使用
//实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）
//因为是实例的类型所以创建的类型构造函数是不包含的，静态属性或静态方法也是不包含的
class Point {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

interface PointAll extends Point {
    z: number
}

let newPointAll: PointAll = {x: 1, y: 3, z: 4}

