1、登录流程
    客户端：
    wx.login() 获取code
    wx.request() 发送code 获取openId 与 session_key，存入storage
    服务端：
    传参code，appsecret，appId 登录凭证校验接口，返回openId 与 session_key

2、小程序的生命周期
    onload  页面加载时调用
    onRead  
    onShow  页面显示时调用
    onHide  页面隐藏
    onUnload 页面卸载


