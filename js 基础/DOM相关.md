1、获取一个 url 的 protocol、host
用 document.createElement 创建一个 a 标签，再用直接获取，a.host、a.protocol
http 请求代码
浏览器相关对象： navigator、 location、 history、 window、 document、screen
FormDate 对象
File 对象、FileList 对象、 FileReader 对象
原生拖拽 api(移动端：touchstart、touchmove、touchend，PC 端：mousedown、mousemove、mouseup)

2、防止自己的网站被 iframe 引用,https://ihongchao.com/post/578/

```
if (self !== window.top) {
    top.location.href = self.location.href
}
```

3、attribute 和 property 的区别是什么

4、elements attributes 是什么，有什么作用

5、二个不同的 iframe 怎么通讯
postMessage

6、IntersectionObserver 提供了一种异步观察目标元素与祖先元素或顶级文档 viewport 的交集中的变化的方法，主要用来检测某个元素是否出现在科室窗口(懒加载，加载动画等)

```
const io = new IntersectionObserver((entries => {
    console.log('ssss', entries)
}), options)   // callback 目标元素的可见性变化时，触发的回调函数， options设置相关root信息

io.observe(DOM) //需要监听的dom
```
