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

// 13、Tree Shaking
//只支持import 方式引入，去除无用的代码
//原理为: 检测一个模块的导入和导出，如果导出多于导入，就去除多余的部分。import 为静态导入，不需要执行完全部模块，所以能实现tree-shaking。

// 14、development 与 production 模式区别
// development
//sourceMap 代码全面
// 代码不需要压缩
// webpack-dev-server
// production
//sourceMap 简洁
// 代码需要压缩

// 15、code splitting 代码拆分，方便浏览器缓存，提升加载速度。
// splitChunksPlugin 插件能够实现同步和异步代码拆分，并且对大小等进行设置拆分

// 16、lazy loading 懒加载，异步加载(import() 试验语法)

// 17、加快页面加载速度，思路：①、代码拆分，减少js大小 ②、写法上采用异步模块加载。 ③、利用preloading， prefetching 优化加载

// 18、webpack 打包性能提升
// node 与 npm版本更新
// loader 排除node_modules
// plugin 尽可能精简并确保可靠
// 优化node_module 打包过程，缓存重复的node_module中的插件
// 多进程打包
// 合理使用sourceMap

// 19、编写一个loader： 实际loader是一个函数模块，参数为source，返回对source的处理。

// 20、 编写一个plugin:
// plugin实际是一个类，里面有个apply方法，参数compiler 为配置所有内容。
// 我们可以在compiler某个时刻的钩子函数里面做相应的工作，比如生成文件的时候，额外生成一个说明文件。
class CopyrighWebpackPlugin {
	constructor(options) {
		console.log('插件test')
	}
	// compiler 配置所有内容，打包内容
	apply(compiler) {
		compiler.hooks.emit.tapAsync('CopyrighWebpackPlugin', (compilation, cb) => {
			compilation.assets['copyright.txt'] = {
				source: function() {
					return 'copyright by dell lee'
				},
				size: function() {
					return 21
				}
			}
			cb()
		})
	}
}

// 21、webpack 基本原理
//先逐级递归识别依赖，构建依赖图谱
//将代码转化成AST抽象语法树
//在AST阶段中去处理代码
//把AST抽象语法树变成浏览器可以识别的代码， 然后输出

// 22、将JS转义为低版本（babel-loader）

// 23、webpack 用什么插件压缩css
//mini-css-extract-plugin

// 24、webpack 构建流程
// 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
// 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
// 确定入口：根据配置中的 entry 找出所有的入口文件。
// 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
// 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
// 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
// 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。
