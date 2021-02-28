// box-sizing 有二个值：content-box（width 不包含border和padding） 和 border-box（width 包含border 和 padding）
// flex 父元素上的值： flex-direaction （定义主轴方向） flex-wrap(是否换行) justify-content (定义子元素主轴上的对齐方式) align-item(定义交叉轴上的对齐方式) align-content（定义多根轴线的对齐方式）
// flex 子元素上的值： flex（flex-grow/flex-shrink/flex-basis） align-self
// css 动画（transform、transition、animation）
//transform 元素的旋转（rotate）、移动（translate）、缩放（scale）
//transition 指定一个元素属性值发生变化时执行的transiton效果
// 伪元素与伪类 
    //伪元素：::before, ::after
    //伪类(很多)： ::not ::first-child  ::hover
// css 1px像素适配：伪元素 + tansform: scale(1, 0.5) 
    // https://juejin.cn/post/6844903877947424782#heading-9 
// overflow 适用于块级元素，内部包一层div（div含多个span），需要设置内层div white-space:nowarp，不然不会出现滑动
// css选择器权重
// JS 给dom元素添加一个类 classlist.add('test1') setAttribute("class","test1")
// position: fixed 相对于视窗位置定位，失效情况：祖先元素或父元素transform 不为none
    //原因：transform创建了一个新的堆叠上下文（类似z轴），其子元素都会受其堆叠上下文影响。
// dpr 概念以及应用 https://trekerz.github.io/2017/12/03/dpr-devicePixelRatio-%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%BA%94%E7%94%A8/
// css px小数问题， https://segmentfault.com/q/1010000003053873
// getBoundingClientRect 方法
// BFC
    