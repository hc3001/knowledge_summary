一、resolve 函数可以赋值到外面
```
let res = null
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    setTimeout(() => {
        res = resolve
    }, 5000)
})

promise.then(function() {
	console.log('resolved.')
})

console.log('Hi!')

setTimeout(() => {
	res()
}, 6000)

```

二、Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续多次调用 .then 或者 .catch 都会直接拿到该值。
then return一个非promise 相当于包装一层promise
https://juejin.cn/post/6844904077537574919#heading-19

三、Promise.all()   Promise.race()

四、红绿灯问题

五、限制异步操作的并发个数并尽可能快的完成全部
```
function limitLoad(urls, handler, limit) {
  let sequence = [].concat(urls); // 复制urls
  // 这一步是为了初始化 promises 这个"容器"
  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      // 返回下标是为了知道数组中是哪一项最先完成
      return index;
    });
  });
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
  return sequence
    .reduce((pCollect, url) => {
      return pCollect
        .then(() => {
          return Promise.race(promises); // 返回已经完成的下标
        })
        .then(fastestIndex => { // 获取到已经完成的下标
        	// 将"容器"内已经完成的那一项替换
          promises[fastestIndex] = handler(url).then(
            () => {
              return fastestIndex; // 要继续将这个下标返回，以便下一次变量
            }
          );
        })
        .catch(err => {
          console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
    .then(() => { // 最后三个用.all来调用
      return Promise.all(promises);
    });
}

function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });

limitLoad(urls, loadImg, 3)
  .then(res => {
    console.log("图片全部加载完毕");
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
```


