1、Storage/session/cookie的区别以及各自适用于哪种场景
session/cookie 都是用来跟踪用户状态的会话方式。
session 储存在服务端，大小没有限制，可以保存多个对象
cookie 保存再客户端只能是字符串，大小有限制4k，一般用于保存sessionId
storage 字符串，本地缓存，储存空间大，不会与服务端进行数据传输。


2、理解Vue和React区别
