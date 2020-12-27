var mySqrt = function(x) {
    let low = 1
    let high = x
    let mid 
    while(low <= high) {
        mid = Math.floor((low + high) / 2)
        let square = mid * mid
        let t = (mid + 1) * (mid + 1)
        console.log('mid', low, high, mid)
        if((x > square && x < t) || square === x) {
            return mid
        } else if(x > square) {
            low = mid + 1
        } else if(x < square) {
            high = mid - 1
        } 
    }
    return mid
}

let mid = mySqrt(50)
let obj = [
    {
        name: 4,
        age: 30
    },
    {
        name: 4,
        age: 20
    },
    {
        name: 4,
        age: 19
    },
    {
        name: 4,
        age: 22
    }
]

let res = obj.reduce((accu, current, index)=> {
    return accu + current.age
}, 0)

let arrList = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4]
]

let ar
ar = arrList[0].map((item1, index1) => {
    return arrList.map((item2, index2) => {
        return item2[index1]
    })
})

console.log(ar)
