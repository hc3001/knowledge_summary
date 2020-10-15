#### 1、Proxy ES6中为了操作对象提供的新的API 
proxy比defineProperty 更加强大，但是浏览器支持度不够，部分效果使用poilyfill来实现，提供13中对象操作拦截，常用有get/set/has/ownKeys/deleteProperty。<br>
defineProperty 是对key进行监听拦截，数组很多方法监听需要hack实现（vue实现）。Proxy直接对数组进行监听，想push方法可以直接监听到。<br>

```
//get/set 方法，监听arr的push 操作
let arr = [1, 3, 5]
var handlerArr = {
    get(target, key) {
        console.log('getsss', key)
        return target[key]
    },
    set(target, key, value) {
        console.log('setsss', target, key, value)
        target[key] = value
        return true
    },
}
let arrProxy = new Proxy(arr, handlerArr)
arrProxy.push(6)
```

```
//has方法监听in操作，返回布尔值，实现in操作隐藏‘_’下标
let target = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
}
let handler = {
    has(target, propKey) {
        console.log('target', target, propKey)
        let newTarget = Reflect.ownKeys(target).filter((item) => {
            return item[0] !== '_'
        })
        console.log('newTarget', newTarget)
        return propKey in newTarget
    }
}
let proxy = new Proxy(target, handler)
console.log('_prop' in proxy)
```
```
//ownKeys 监听Object.keys() 和 for...in 操作，返回一个数组，为Object.keys() 的返回值。
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
};

let handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }
};

let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}
// "baz"
```

#### 2、Reflect
ES6 为了操作对象而提供的新 API，作用：1、Object操作都变成函数行为，2、不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。<br>


