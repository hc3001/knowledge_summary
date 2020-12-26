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

#### 9、 父组件可以监听到子组件的生命周期吗？
```
    this.$once('hook:beforeDestroy', function() {

    })
```
#### 10、Vue 组件间通信有哪几种方式？

#### 11、Vue 是如何实现数据双向绑定的？

#### 12、 Vue router 相关
导航守卫
编程式导航
组件懒加载






