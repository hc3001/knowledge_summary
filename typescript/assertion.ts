//断言as，手动指定一个值的类型
interface Cats {
    name: string
    run(): void
}

interface Dogs {
    name: string
    swim(): void
}

function animals (animal: Cats | Dogs) {
    return (animal as Cats).run() //指定animal为cats，但是当animal传dogs时运行时还是会报错
}
function animals1 (animal: Cats | Dogs) {
    if(typeof (animal as Cats).run === 'function') {
        return true
    }
}

animals1({name: 'tt', swim: function() {

}})

//有时候用instanceof 比as更加合适
class NumberObj {
    count: number = 0
}

type numObj = object | NumberObj

function addSecond(first: numObj) {
    if(first instanceof NumberObj) {
        return first.count
    }
    return null
}

console.log(addSecond(new NumberObj()));

//用来给window添加foo
(window as any).foo = 1

