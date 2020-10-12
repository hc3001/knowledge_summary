# react_knowledge_summary
1、className 基本语法，iconfont使用，css相关插件使用；

2、JSX 基本语法；

3、无状态组件、UI组件、容器组件；

3、props 与 state，propTypes校验；

4、事件处理；

5、生命周期；

6、ref 与高阶组件使用；

6、redux 流程及方法；

7、redux 中间件redux-thunk使用，axios异步请求；<br>
①、redux-thunk 是作为redux的中间件来使用，其主要作用是对redux store.dispatch方法做一个升级，不用redux-thunk store.dispatch只能接收对象参数，redux-thunk能让dispatch接收异步函数。<br>
②、

8、redux immutable api使用；

9、react-router-dom 路由使用；<br>
①、Route 使用规则，Path匹配路径， exact精准匹配，component path匹配时对应的页面组件。<br>
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
⑥、BrowserRouter 和 hashiRouter router的二种设计方式（使用history api和hash实现），这个和vue中mode：history/hash 一致。
⑥、withRouter 用法withRouter(MyComponent) withRouter是高阶组件，可以获取到MyComponent 的路由信息。

10、antd 使用；
