// 1、什么是options预请求？
// 在发起复杂请求之前，浏览器会先发起OPTIONS请求到服务器，让服务器判断是否允许该实际请求。
// OPTIONS 请求头一般带有 Access-Control-Request-Method、Access-Control-Request-Headers、origin 服务器根据请求头判断是否允许该实际请求。
// OPTIONS 预请求用于复杂请求和跨域请求。

//2、什么是跨域，解决跨域的几种方式？
// 在浏览器同源策略（同协议、host、端口）下，造成在一个域下的文本或脚本访问不到另一个域的资源，这里要注意，跨域请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了 。
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
//https://www.xuecaijie.com/it/157.html#1Q64p5DeC8dKFF

//4、状态码
//1** 响应信息，服务器接收到请求，正在处理中
//2** 成功响应请求
//3** 重定向，表示完成请求，需要进一步操作
//4** 客户端请求错误
//5** 服务器错误

//常用状态码
//200 表示请求成功
//404 请求的资源没有找到
//500 服务器内部错误
//304 Not Modified 浏览器端缓存资源有效
//301 该资源已经被永久改变了位置，一般会返回location重定向新的地址
//202 已经接收，但是未处理
//403 服务器已经收到请求，但是拒绝执行它


//5、content-type/Accept，Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型，比如：Content-Type：text/html html、text/plain 纯文本;
//常见content-type
//application/x-www-form-urlencoded 原始表单提交，请求参数用key1=val1&key2=val2的方式进行组织，并放到请求实体里面，不支持文件，一般用于表单的提交。
//multipart/form-data  post数据请求方式，一般需要上传文件的表单则用该类型。
//application/json  JSON 是一种轻量级的数据格式，以“键-值”对的方式组织的数据，可以提交复杂数据，axios 默认就是application/json

//6、前端安全 XSS、CSRF 是什么？
//xss：跨站脚本攻击。（执行脚本）
// https://tech.meituan.com/2018/09/27/fe-security.html
// 什么是 xss， xss即跨站脚本攻击
// xss本质，恶意代码和正常代码混在一起，浏览器无法区分，导致恶意代码被执行
// 注入恶意代码的方法：1、用户的 UGC 信息， 2、来自第三方的链接 3、url参数 4、post参数
// xss分类，存储型：存储型 XSS 的恶意代码存在数据库里，类似论坛发帖、用户私信。 反射型：攻击者构造出特殊的 URL，恶意代码存在 URL 里。 DOM型，前端执行特殊的url。
// 防护策略：输入过滤，转义 HTML

// csrf：跨站伪装请求。（伪造用户）
// https://tech.meituan.com/2018/10/11/fe-security-csrf.html
// 什么是csrf， csrf即跨站伪造请求
// csrf 典型攻击流程，1、登录a.com,并保留了cookie 凭证 2、诱导受害者访问b.com 3、b.com 发送请求到a.com，浏览器默认带上cookie 4、a.com服务端误认为是a.com 发送的请求，并执行。 5、攻击完成
// csrf 分类，get 类型的csrf， post 类型的csrf，链接类型的csrf
// 防护策略 1、阻止不明外域的访问（同源检测，Samesite Cookie） 2、csrf token 验证

//7、defer、 async、 preload、 prefetch 的区别是什么？
//defer 立即下载，同时页面解析，页面解析后延迟执行。
//async 立即下载，同时页面解析，下载完后停止页面解析，立即执行脚本，所以不保证顺序执行。
//defer、async 只能直接加在script上，preload、 prefetch用link rel中可以加载任何资源。
//preload 立即下载，同时页面解析，需要用到下载的脚本时执行。如果没有下载完，等待下载。
//prefetch 页面解析,等到浏览器空闲时，再下载资源。


//8、浏览器的渲染流程
//https://github.com/LuckyWinty/blog/blob/master/markdown/Q%26A/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E5%8E%9F%E7%90%86%E8%AF%A6%E7%BB%86%E6%80%BB%E7%BB%93%E4%BA%8C(%E9%9D%A2%E8%AF%95%E9%A2%98).md
//解析HTML生成DOM树。
// 解析CSS生成CSSOM规则树。
// 将DOM树与CSSOM规则树合并在一起生成渲染树。
// 遍历渲染树开始布局，计算每个节点的位置大小信息。
// 将渲染树每个节点绘制到屏幕。


//9、浏览器的缓存机制
//强缓存方案
//浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK
//Expires (过期时间) 和 cache-control 缓存设置
//协商缓存方案
//向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源
//Etag/If-None-Match Last-Modifed/If-Modified-Since    header字段
//https://www.jianshu.com/p/54cc04190252
//https://juejin.cn/post/6844904115428917255#heading-26

//10、本地存储方案
//cookie http协议的一种扩展，cookie数据会自动在浏览器和web服务器之间传输，用于储存token登录状态，优点兼容性好，缺点储存量小4k。
//localStorage 简单明了的操作、储存量大、永不过期、同源。localStorage.setItem("name", "Srtian")
//seesionStorage 关掉页面就删除seestionStorage

//11、Chrome 打开一个页面需要启动多少进程？分别有哪些进程？
//最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。
//https://juejin.im/post/6844903962216824839#heading-0


//12、http 和 https区别？
//HTTP + ssl加密 + 认证 + 完整性保护 = HTTPS
//默认端口http 80， https 443
// https://juejin.cn/post/6844903504046211079

//13、如何理解回流和重绘？
//https://github.com/LuckyWinty/blog/blob/master/markdown/Q%26A/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E5%8E%9F%E7%90%86%E8%AF%A6%E7%BB%86%E6%80%BB%E7%BB%93%E4%BA%8C(%E9%9D%A2%E8%AF%95%E9%A2%98).md
//https://juejin.cn/post/6844904202670456840
//回流改变主体，重绘改变外观

//14、http报文结构？
//https://www.cnblogs.com/unclekeith/p/8242012.html
//https://www.jianshu.com/p/a2c4ede32d11
//https://www.cnblogs.com/unclekeith/p/8242012.html

//15、cookie
//https://www.jianshu.com/p/6fc9cea6daa2
//什么是cookie以及作用
//cookie 就是一小段文本信息（key-value格式），用来记录用户状态。
//cookie 机制
//浏览器第一次请求 》》》》 服务端设置头部set-cookie 》》》》第二次请求带上上次的cookie 》》》》 服务端根据cookie返回相对应的资源
//cookie 四个属性（name=value， Expires， domain， path）
//expires cookie的有效时间，单位为秒，设置为0立即清除，设置为负数为临时cookie，设置为正为多少秒个失效。
//修改删除cookie，document.cookie 直接设置， 可用写一个方法来读取cookie
//cookie风险，存在csrf 跨站伪造请求风险，一般用token来识别身份。

