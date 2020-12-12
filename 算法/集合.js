// 一、 集合元素唯一，且无序
//es6有集合，new Set()

//数组去重
let arr = [1, 3, 2, 1]
let arr2 = [...new Set(arr)]
let arr3 = Array.from(new Set(arr))

//判断元素是否在集合中
let arr4 = new Set([1, 3, 4, 2])
let has = arr4.has(2)

//求交集
let nSet = new Set([1, 3, 4])
let nSet1 = new Set([2, 5, 1])

function intersection() {
    return new Set([...nSet].filter(item => nSet1.has(item)))
}

console.log(intersection())

//Set 有的操作，new add delete has