//一、字典存储唯一值的数据结构，用key-value表示，es6 map就是字典
let m = new Map()
m.set('a', 1)
let arr = [1, 3, 5]

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

