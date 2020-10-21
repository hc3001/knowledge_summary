# react_knowledge_summary
1、className 基本语法，iconfont使用，css相关插件使用；

2、JSX 基本语法；

3、无状态组件、UI组件、容器组件；

3、props 与 state，propTypes校验；
①、state 更新，用setState函数更新state数据，由于setState是一个异步函数，要想setState 参数全部按照预期执行，最好传一个函数作为回调。
```
incrementCount() {
  this.setState((state) => {
    // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    return {count: state.count + 1}
  })
}
```
4、事件处理；

5、生命周期；
①、componentDidUpdate/componentDidMount/componentWillUnmount。<br>
②、componentDidUpdate componentDidUpdate(preProps,preState,spanshot) props 和 state变化都会触发，可用于监听props变化执行某个异步函数。 相当于vue 中watch监听<br>

6、ref 与高阶组件使用；

6、redux 流程及方法；

7、redux 中间件redux-thunk使用，axios异步请求；<br>
①、redux-thunk 是作为redux的中间件来使用，其主要作用是对redux store.dispatch方法做一个升级，不用redux-thunk store.dispatch只能接收对象参数，redux-thunk能让dispatch接收异步函数。<br>
②、

8、redux immutable api使用；

9、react-router-dom 路由使用；<br>
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

10、antd 使用；
