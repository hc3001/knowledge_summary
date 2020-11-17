// 1、什么是options预请求？
// 在发起复杂请求之前，浏览器会先发起OPTIONS请求到服务器，让服务器判断是否允许该实际请求。
// OPTIONS 请求头一般带有 Access-Control-Request-Method、Access-Control-Request-Headers、origin 服务器根据请求头判断是否允许该实际请求。
// OPTIONS 预请求用于复杂请求和跨域请求。

//2、是什么是跨域，跨域的几种方式？
