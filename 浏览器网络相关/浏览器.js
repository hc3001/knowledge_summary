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
//node 中间件代理跨域，原理和nginx 类似

//3、请详细描述一下从输入URL到页面加载的全过程
//主干流程：DNS解析、TCP连接、浏览器构建http request请求、 网络传输、 服务器构建http response 返回数据、 网络传输、 浏览器渲染页面
//https://segmentfault.com/a/1190000006879700

//4、状态码

