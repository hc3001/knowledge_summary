// 1、什么是options预请求？
// 在发起复杂请求之前，浏览器会先发起OPTIONS请求到服务器，让服务器判断是否允许该实际请求。
// OPTIONS 请求头一般带有 Access-Control-Request-Method、Access-Control-Request-Headers、origin 服务器根据请求头判断是否允许该实际请求。
// OPTIONS 预请求用于复杂请求和跨域请求。

//2、什么是跨域，解决跨域的几种方式？
// 在浏览器同源策略（同协议、host、端口）下，造成在一个域下的文本或脚本访问不到另一个域的资源。
//①、JSONP 跨域（太老，限制多，使用少）
//原理：script获取资源不跨域，可以利用这点script加载资源，前端window 定义一个函数，后端返回text/javascript文件带参数立即执行，前端获取参数。
//缺点：只能用get，后端需要配合
//②、cors 跨域，需要后端配合，允许cors跨域
//前端按正常请求，服务端设置Access-Control-Allow-Origin即可
//③、nginx 转发跨域，nginx 反向代理
// location / {
//     proxy_pass   http://www.domain2.com:8080;  #反向代理
//     proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
//     index  index.html index.htm;

//     # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
//     add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
//     add_header Access-Control-Allow-Credentials true;
// }

//④、WebSocket协议跨域
//⑤、node 中间件代理跨域，原理和nginx 类似

//3、请详细描述一下从输入URL到页面加载的全过程
//主干流程：DNS解析、TCP连接、浏览器构建http request请求、 网络传输、 服务器构建http response 返回数据、 网络传输、 浏览器渲染页面
//https://segmentfault.com/a/1190000006879700

//4、状态码
//200 表示请求成功
//404 请求的资源没有找到
//500 服务器内部错误
//304 Not Modified 浏览器端缓存资源有效
//202 已经接收，但是未处理
//403 服务器已经收到请求，但是拒绝执行它

//5、content-type/Accept，Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型，比如：Content-Type：text/html html、text/plain 纯文本;
//常见content-type
//application/x-www-form-urlencoded 原始表单提交，请求参数用key1=val1&key2=val2的方式进行组织，并放到请求实体里面，不支持文件，一般用于表单的提交。
//multipart/form-data  post数据请求方式，一般需要上传文件的表单则用该类型。
//application/json  JSON 是一种轻量级的数据格式，以“键-值”对的方式组织的数据，可以提交复杂数据，axios 默认就是application/json

//6、前端安全 XSS、CSRF 是什么？
//xss：跨站脚本攻击。（执行脚本）
// csrf：跨站伪装请求。（伪造用户）

//7、defer 和 async 的区别是什么？
//defer 相当于告诉浏览器立即下载，但延迟执行（在浏览器解析完整个页面后）。
//async 立即下载，不影响浏览器解析页面，下载完后立即停止 HTML 的 DOM 解析，立即脚本，所以不保证顺序执行。


//8、浏览器的渲染流程

//9、浏览器的缓存机制
//强缓存方案
//协商缓存方案

//10、本地储存方案

//11、Chrome 打开一个页面需要启动多少进程？分别有哪些进程？