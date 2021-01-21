//1、获取一个url的protocol、host
// 用document.createElement创建一个a标签，再用直接获取，a.host、a.protocol
// http 请求代码
// 浏览器相关对象： navigator、 location、 history、 window、 document、screen
// FormDate 对象
// File 对象、FileList 对象、 FileReader 对象
// 原生拖拽api(移动端：touchstart、touchmove、touchend，PC端：mousedown、mousemove、mouseup)

//1、防止自己的网站被iframe引用,https://ihongchao.com/post/578/
// if (self !== window.top) {
//     top.location.href = self.location.href
// }