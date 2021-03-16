#### 1、vue 图片字体文件引用问题。
静态资源图片失效分几种情况。
1、确定线上环境是否在根路径上，配置资源根目录，vue-cli2 和 vue-cli3 字段不一致（assetsPublicPath 和 publicPath ），如果项目是根路径上，用'/'，'./'都行，如果是在'/hc'这个路径上，用'./' 相对路径（需history模式），也可以用'/hc/'。 在'/hc'路径上，如果需要本地和线上保持一致，可以用环境做判断设置不同的publicPath值。
2、确定静态文件放置的位置。
①、如果放在public/static，不经过webpack打包， 放在public 又分使用绝对路径和相对路径。
②、如果放在assets， 经过webpack打包， 使用的是相对路径
3、路径是否是动态的，如果是动态，需要用require() 引入。

https://blog.csdn.net/qq_31126175/article/details/99550889
https://athena0304.gitbooks.io/vue-template-webpack-cn/content/static.html

#### 2、keep-alive 有关的生命周期。
1、activated  被 keep-alive 缓存的组件激活时调用。
2、deactivated 被 keep-alive 缓存的组件停用时调用。

#### 3、v-for 中key的作用。
1、key 不是必须的，省略key DOM也可以渲染。
2、key值主要是为了更高效的更新虚拟DOM， 当页面的数据发生变化时，Diff算法只会比较同一层级的节点：这时候可以通过key值找到之前的节点，进而节点属性或者数据的更新。

#### 4、vue中重置data为初始状态。
Object.assign(this.$data, this.$options.data())

#### 5、Vue.observable的作用。
让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。相当于轻量级的vuex。
```
import Vue from 'vue';

export let store =Vue.observable({count:0,name:'李四'});
export let mutations={
    setCount(count){
        store.count=count;
    },
    changeName(name){
        store.name=name;
    }
}
```

#### 6、style加scoped属性的用途和原理
用途：防止全局同名CSS污染
原理：在标签加上v-data-something属性，再在选择器时加上对应[v-data-something]，即CSS带属性选择器，以此完成类似作用域的选择方式

#### 7、说说你对 SPA 单页面的理解，它的优缺点分别是什么？
https://juejin.cn/post/6844903918753808398

#### 8、怎样理解 Vue 的单向数据流？

#### 9、父组件可以监听到子组件的生命周期吗？
```
    this.$once('hook:beforeDestroy', function() {

    })

    <Child @hook:mounted="doSomething" ></Child>
```
#### 10、Vue 组件间通信有哪几种方式？


#### 12、 Vue router 相关
导航守卫
编程式导航
组件懒加载

#### 13、 Vuex
State
Getter
Mutation
Action

#### 14、封装组件在组件上使用v-model
1、v-model 相当于v-bind 和 v-on 合体
2、组件上使用v-model，默认会绑定value值，定义input事件（不同于input里面的input事件）
3、想改变默认绑定和事件，用model重新定义新的v-model绑定值{prop: 'checked', event: 'change'}，再在子组件中触发changed改变checked值

#### 15、vue 生命周期应用场景概述
1、created：数据初始化，异步数据的请求适合在created 的钩子中使用（ssr服务端渲染可以用）
2、beforeMounted： 虚拟Dom已经创建完成，但是还没挂载到页面
3、mounted： 真实的Dom挂载完毕，数据完成双向绑定，可以进行一些dom操作函数
4、updated： 最好不要在此期间更改数据，因为这可能会导致无限循环的更新
5、beforeDestroy： 清除计时器
6、destroyed： 事件监听器被移除
keep-alive
1、activated：在组件缓存激活事触发的事件
使用场景：前进刷新，后退缓存用户浏览数据（也可以用嵌套路由解决）https://juejin.cn/post/6844903624099758094
2、deactivated：在组件缓存激活事触发的事件

#### 16、Vue 的父组件和子组件生命周期钩子函数执行顺序

加载渲染过程
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
子组件更新过程
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
父组件更新过程
父 beforeUpdate -> 父 updated
销毁过程
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

#### 17、vue2 与 vue3的区别

#### 18、Vue 性能优化

事件代理
keep-alive
拆分组件
key 保证唯一性
路由懒加载、异步组件
防抖节流
Vue 加载性能优化
第三方模块按需导入（ babel-plugin-component ）
图片懒加载

#### 19、v-for 与 v-if 的优先级
v-for 比 v-if 具有更高的优先级
就算我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表

#### 20、首页优化方案
图片压缩
使用CDN
懒加载
异步组件加载
资源压缩
模块按需加载

#### 21、白屏优化方案
预渲染
骨架屏

### 22、props 传参注意事项
组件中v-bind用短横线命名，props接收到的值可以为驼峰，也可以为短横线。








