//一、axios 都有哪些基本功能？
// 1、在浏览器中使用XMLHttprequest 对象通讯
// 2、需要支持Promise API（发送XMLHttprequest 返回一个 new Promise()）
// 3、支持请求和响应的拦截器
// 4、支持请求数据和响应数据的转换
// 5、支持请求的取消

//二、axios拦截功能怎么实现的？
// 构建一个一个chain，用来储存resolve, reject 对象
// 把请求拦截器unshift 到chain中
// 把响应拦截器push 到chain中
// while循环，promise.resolve() 链式调用
//  while (chain.length) {
//     const { resolved, rejected } = chain.shift()
//     promise = promise.then(resolved, rejected)
//  }

//三、axios 取消发送怎么用，基本原理是什么？
// 通过传递config配置cancelToken的形式，来取消的。判断有传cancelToken，在promise链式调用的dispatchRequest抛出错误，在adapter中request.abort()取消请求，使promise走向rejected，被用户捕获取消信息

//四、为什么 axios 既可以当函数调用，也可以当对象使用？
// axios 本身为一个函数，函数上挂载一些方法，可以直接调用，最终还是调用的Axios.prototype.request

//五、简述 axios 调用流程？
// 实际是调用的Axios.prototype.request方法，最终返回的是promise链式调用，底层调用的xhr函数

//默认配置实现

//creat 创建另一个实例

// xsrfCookieName、xsrfHeaderName 配置