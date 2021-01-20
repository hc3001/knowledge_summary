//一、字典存储唯一值的数据结构，用key-value表示，es6 map就是字典
let m = new Map()
m.set('a', 1)
let arr = [1, 3, 5]

// 最小覆盖子串 leetcode 76
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0
    let r = 0
    let need = new Map()
    for (let i = 0; i < t.length; i++) {
        let n = t[i]
        need.set(n, need.has(n) ? (need.get(n) + 1) : 1)        
    }
    let needLen = need.size
    let res = ''
    while(r < s.length) {
        let k = s[r]
        if(need.has(k)) {
            need.set(k, need.get(k) - 1)
            if(need.get(k) === 0) {
                needLen--
            }
        }
        while(needLen === 0) {
            console.log(s.substring(l, r + 1))
            if(!res || res.length > s.substring(l, r + 1).length) {
                res = s.substring(l, r + 1)
            }
            let t = s[l]
            if(need.has(t)) {
                need.set(t, need.get(t) + 1)
                if(need.get(t) === 1) {
                    needLen++
                }
            }
            l += 1
        }
        r += 1
    }
    return res
};

console.log(minWindow("ADOBECODEBANC", "ABC"))

// 无重复的最长子串（滑动窗口法）leetcode 3
let test = 'abdcaddefapsdakdf'
function maxLenString(s) {
    let res = 0
    let win = []
    let i = 0
    while(i < s.length) {
        let item = s[i]
        let index = win.indexOf(item)
        console.log('item', item, index)
        if(!(index === -1)) {
            win.splice(0, index + 1)
        }
        win.push(item)
        res = Math.max(res, win.length)
        i++
    }
    return res
}
console.log(maxLenString(test))

// 找到字符串中所有字母异位词(滑动窗口法) leetcode 438
// 思路：定义一个left 和 right，循环right一直右移动，当right-left > length 时，左left移动，异位词的判断可以用一个valid变量保存判断


// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。 leetcode 239
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3

// 此解法复杂度较高
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0 || !nums.length) {
        return []
    }
    let left = 0
    let right = k
    let res = [findMax(left, right)]
    while(right < nums.length) {
        left++
        right++
        res.push(findMax(left, right))
    }
    function findMax(left, right) {
        let max = -Infinity
        for(let i=left; i<right; i++) {
            if(nums[i] > max) {
                max = Math.max(max, nums[i])
            }
        }
        return max
    }
    return res
};


//长度最小的子数组 leetcode 209

let s = 3
let nums = [1, 1]
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0 || !nums.length) {
        return 0
    }
    let left = 0
    let right = 0
    let res = +Infinity
    let arr = []
    function isLessthan(arr) {
        let sum = arr.reduce((pre, curr) => {
            return pre + curr
        }, 0)
        return sum - s >= 0
    }
    console.log(nums.length)
    while(right < nums.length) {
        let item = nums[right]
        right++
        //如果小于s加入arr，并跳出循环
        arr.push(item)
        if(!isLessthan(arr)) {
            continue
        }
        while(left < right) {
            console.log(arr, left, right, isLessthan(arr))
            //满足条件left++ ，不满足直接跳出本次循环
            if(isLessthan(arr)) {
                res = Math.min(res, right - left)
                left++
                arr = nums.slice(left, right)
            } else {
                break
            }
        }
    }
    return res==+Infinity ? 0 : res
};

// 解法二
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (s, nums) {
    let n = nums.length
    // 定义[i,...j]滑动窗口 取这个窗口里的和
    let i = 0
    let j = -1
  
    let sum = 0
    let res = Infinity
  
    while (i < n) {
      if (sum < s) {
        sum += nums[++j]
      } else {
        sum -= nums[i]
        i++
      }
  
      if (sum >= s) {
        res = Math.min(res, j - i + 1)
      }
    }
    return res === Infinity ? 0 : res
  }