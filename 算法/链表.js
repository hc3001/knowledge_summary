// var a = { value: 'a' }
// var b = { value: 'b' }
// var c = { value: 'c' }
// var d = { value: 'd' }
// var e = { value: 'e' }

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// //添加链表
// var k = { value: 'k' }
// b.next = k
// k.next = c

// //删除链表(删除d链表)
// c.next = e

// //查找遍历链表
// let p = a
// while(p) {
//     console.log(p.value)
//     p = p.next
// }
// console.log(a)

//翻转链表
let test = function(a) {
    let p1 = a
    let p2 = null
    while(p1) {
        console.log(p1.value, p2 && p2.value)
        let temp = p1.next
        p1.next = p2
        p2 = p1
        p1 = temp
    }
    console.log(p2)
    return p2
}

console.log(test(a))