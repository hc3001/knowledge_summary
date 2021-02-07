// 1、webpack 是什么？
// webpack 是一个模块打包工具。

// 2、webpack-cli 的作用？
// 让webpack 命令可以顺利运行

// 3、打包多个文件，entry用数组或对象： ['./index1.js', './index2.js']

// 4、loader 是什么？ loader 是一个打包方案，相当于一个转换器

// 5、图片打包(file-loader)
    // 不变更图片名(用占位符)： options: {name: [name].[ext]}
    // 打包到固定文件，outputPath: 'images/'

// 6、url-loader 把文件转为base64 URIs。(一般用于图片打包)

// 7、css-loader 
    // options: {importLoaders: 2}， 处理css 的时候如果有引入scss 文件，需要重新走postcss-loader sass-loader
    // module: true 可以把css 打包成模块

// 8、多个loader的调用顺序
    // 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行    

// 9、plugin 在webpack运行到某个时刻的时候，帮你做的一些事情  

// 10、html-webpack-plugin 自动生成html，并引入打包生产的js  clean-webpack-plugin 清除打包文件

// 11、sourceMap sourceMap是一个映射关系，能够把打包的代码映射到源代码
    // inline 已dataUrl形式放在打包文件中， cheap 没有列映射提升性能， eval执行提升效率
    // development 一般用'cheap-module-eval-source-map'
    // production  一般用'cheap-module-source-map'

// 12、webpack-dev-server 用于开发环境，做的事情：监听文件改变，启动浏览器，打包的dist目录放入内存中。

// 13、Tree Shaking 只支持import 方式引入，去除无用的代码

//webpack 怎么打包成多个文件。 fineName: '[name].js'  chunkFilename: '[name].js'