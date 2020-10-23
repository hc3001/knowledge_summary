# react_knowledge_summary
#### 1、className 基本语法，iconfont使用，css相关插件使用；
①、在react 标签中使用class 需用className，如果是使用style可以如下使用
```
const label = {
  display: "none",
  color:"red"
}
<div style={label}>此标签是否隐藏</div>
```

#### 2、JSX 基本语法；
①、dangerouslySetInnerHTML={{__html：item}} 可以使输入的内容不被转义，直接显示，类似于vue中的v-html。<br>
②、在label上加for属性，可以扩大光标范围，在react中需要替换成htmlFor写法。<br>
③、render中return 中所有表达式都需要放在{}中。<br>
④、判断用if，循环用map，条件判断中如果值为null，不进行任何渲染  {null}。<br>
⑤、当state或者props发生变化时，render 函数会重新执行。但是当根props变化时，这样会有性能问题，可以用shouldComponentUpdate 生命周期返回false来解决，也可以用Purecomponent(bug待定)， vue框架内部有优化，没这个性能问题。<br>
⑥、react生成dom基本流程 JSX + state => createElemnt => JS对象（virtual DOM） => diff算法 => 真实的DOM， vue生成dom基本流程 template模板（包含data） => AST语法书 => 渲染函数（createElement）=> JS对象（virtual DOM） => diff算法（path） => 真实的DOM， 如果vue模板用jsx语法，流程和react一致。


#### 3、无状态组件、UI组件、容器组件；
①、全部数组开头字母必须用大写。<br>
②、render函数return返回必须只能有一个标签包裹，这个和vue，template模板中只能有一个标签一致，如果不想显示根标签可以用Fragment代替，最终Fragment不会显示在dom。<br>
③、父组件给子组件传值是：通过自定义属性的方法；子组件通过this.props来接收。子组件给父组件传值是 ：父组件通过自定义属性的方法给子组件传递一个自定义事件，然后子组件通过this.props.方法（父组件）来触发此函数，类似于vue中实例方法 vm.$emit('change', data)

#### 4、props 与 state，propTypes校验；
①、state 更新，用setState函数更新state数据，由于setState是一个异步函数，要想setState 参数全部按照预期执行，最好传一个函数作为回调。
②、ref使用 ref={(input)=>{this.input=input}} 获取当前dom 元素，和vue中ref作用一致，在setState中使用ref，可能出现获取不到dom的情况，可以放在setState的第二个回调函数中获取。 vue 有同样的问题，可用this.$nextTick(()=> {}) 获取。
③、react 单项数据流，不允许改变父组件传过来的数据。vue子组件可以改变父组件传过来的对象，父组件对象数据也会改变，这是因为指向的是同一个对象，但不建议这么做。
```
incrementCount() {
  this.setState((state) => {
    // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    return {count: state.count + 1}
  })
}
```
③、对prop进行校验，常用的校验，规定特定类型、规定是否必须、规定默认值，和vue中type，default, required类似。
```
import 'propTypes' from 'prop-types'
MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string,
  content: PropTypes.object,
}
MyComponent.defaultProps = {
  content: {},
  name: 'li'
}
```

#### 5、事件处理；
①、事件名必须是驼峰命名，比如onClick。<br>
②、事件如果要传参需要改变this，onClick='this.handlerSubmit.bind(this, 'hellow')'

#### 6、生命周期；
①、componentDidUpdate/componentDidMount/componentWillUnmount。<br>
②、componentDidUpdate componentDidUpdate(preProps,preState,spanshot) props 和 state变化都会触发，可用于监听props变化执行某个异步函数。 相当于vue 中watch监听<br>

#### 7、高阶组件使用；

#### 8、redux 流程及方法；

#### 9、redux 中间件redux-thunk使用，axios异步请求；<br>
①、redux-thunk 是作为redux的中间件来使用，其主要作用是对redux store.dispatch方法做一个升级，不用redux-thunk store.dispatch只能接收对象参数，redux-thunk能让dispatch接收异步函数。<br>
②、

8、redux immutable api使用；

#### 10、react-router-dom 路由使用；<br>
①、Route 使用规则，Path匹配路径， exact精准匹配，component path匹配时对应的页面组件，用render代替component可以做一些加载组件判断或传递参数用。<br>
   ``` 
   <Route
       key={item.path}
       path={item.path}
       exact={item.exact}
       render={props =>
           !auth ? (
               <item.component {...props} />
           ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
               <item.component {...props} />
           ) : (
               // 这里也可以跳转到 403 页面
               <Redirect to='/404' {...props} />
           )
       }>
   </Route>
  ```
②、Switch 只找到第一个被location匹配到的<Route>就立即停止继续匹配。<br>
③、Link 组件用于代替a标签，不用载入新的页面。 to做为目标 <Link to='/'>Home</Link>。<br>
③、Redirect 组件用于重定向，当匹配不到任何路径时用。<br>
   ``` 
  <Switch>
      <Route path={routePaths.INDEX} exact component={Index} />
      <Route path={routePaths.CARD} component={Card} />
      <Redirect to="/" />
  </Switch>
  ```
⑥、BrowserRouter 和 hashRouter router的二种设计方式（使用history api和hash实现），这个和vue中mode：history/hash 一致。<br>
⑥、withRouter 用法withRouter(MyComponent) withRouter是高阶组件，可以获取到MyComponent 的路由信息。<br>
⑦、在方法中页面跳转的几种方式：
   登录成功用跳转：this.props.history.push('/') <br>

#### 11、antd 使用；
