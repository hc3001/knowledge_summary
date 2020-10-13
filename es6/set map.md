#### 1、Set
Set 为构造函数，其成员值都是唯一的，没有重复，new Set() 可以接收一个数组。
```
  var test = new Set([1, 3, 5])
  //转为数组
  var arr = Array.from(test)
  var arr1 = [...test]
```
set 方法 has/add/delete，二个数组求差集和并集可以用到set
```
var a = [1, 3, 4, 9]
var b = [3, 6, 10, 1]

let subtraction = a.filter((res) => {
    let r = new Set(b)
    return r.has(res)
})

console.log(subtraction)
```
set 为构造函数可以模拟实现一个Set 数据结构 https://github.com/mqyqingfeng/Blog/issues/91；

#### 2、Map
Map 保存键值对，和Object的区别是key 可以是任意类型的值。
Map 方法 set/get/has/delete
Map 迭代方法 keys/values/entries/forEach
