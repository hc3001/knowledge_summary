//一、排序，冒泡排序
let arr = [5, 8, 3, 2, 1, 10]
let zSuffer = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let temp = arr[j + 1]
            if(temp < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = temp
            }        
        }
    }
}

zSuffer(arr)
console.log(arr)

let suffer = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const item = arr[i + 1]
        for (let j = i; j >= 0; j--) {
            let temp = arr[j + 1]
            if(temp < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = temp 
            }
        }
    }
}

suffer(arr)
console.log(arr)

//二、插入排序
