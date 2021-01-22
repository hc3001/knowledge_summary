// //一、排序，冒泡排序
// let arr = [5, 8, 3, 2, 1, 10]
// let zSuffer = function(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             let temp = arr[j + 1]
//             if(temp < arr[j]) {
//                 arr[j + 1] = arr[j]
//                 arr[j] = temp
//             }        
//         }
//     }
// }

// zSuffer(arr)
// console.log(arr)

// let suffer = function(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         const item = arr[i + 1]
//         for (let j = i; j >= 0; j--) {
//             let temp = arr[j + 1]
//             if(temp < arr[j]) {
//                 arr[j + 1] = arr[j]
//                 arr[j] = temp 
//             }
//         }
//     }
// }

// suffer(arr)
// console.log(arr)

// //二、插入排序
// let arr = [8, 3, 1, 4, 5, 10]

// let insertSort = function(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let item = arr[i]
//         let j = i - 1
//         while(item < arr[j] && j >= 0) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = item
//     }
// }

// insertSort(arr)
// console.log(arr)

// // 三、选择排序
// let arr = [8, 3, 1, 4, 5, 2]

// let selectSort = function(arr) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         let f = j
//         for (let i = j + 1; i < arr.length; i++) {
//             if(arr[i] < arr[f]) {
//                 f = i
//             }
//         }
//         let temp = arr[f]
//         arr[f] = arr[j]
//         arr[j] = temp
//     }
// }

// selectSort(arr)
// console.log(arr)

// //三、快速排序
// let arr = [5, 8, 3, 2, 1, 10]

// let quickSort = function(arr) {
//     const dsc = function(arr) {
//         //有可能arr为空
//         if(arr.length <= 1) {
//             return arr
//         }
//          //取第一个值可能存在最坏情况（排序好的情况），解决方式取中间的值
//         const mid = arr[0]
//         const left = []
//         const right = []
//         for (let i = 1; i < arr.length; i++) {
//             const item = arr[i]
//             if(item < mid) {
//                 left.push(item)
//             } else {
//                 right.push(item)
//             }
//         }
//         return [...dsc(left), mid, ...dsc(right)]
//     }
//     return dsc(arr)
// }

// let newArr = quickSort(arr)
// console.log(newArr)

//搜索、二分搜索(必须是个有序数组)
let arr = [1, 2, 4, 8, 10, 17]

let dicSearch = function(arr, target) {
    let low = 0
    let high = arr.length
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] > target) {
            high = mid - 1
        } else if(arr[mid] < target) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

let res = dicSearch(arr, 2)
console.log('res', res)