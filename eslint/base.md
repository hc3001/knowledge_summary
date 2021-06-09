1、项目需要安装的插件
eslint
eslint-plugin-vue
eslint-plugin-node
eslint-plugin-import
eslint-plugin-promise
@vue/eslint-config-standard

2、选择相应模板（airbnb/pretter/standard）

3、vscode 需要安装的插件
vetur
eslint

4、vscode setting 需要的相关配置
vue 文件格式化按 dbaeumer.vscode-eslint，这样 template 会按照 @vue/eslint-config-standard 进行格式化，用 octref.vetur 插件会按 vetur 插件格式化 vue 文件所有包括 js，这样有时候会与 js 格式化冲突
js 文件格式化用 dbaeumer.vscode-eslint， 按@vue/eslint-config-standard
设置保存自动格式化

5、.eslintrc.js 需要的配置
extends 一般为数组，配置后面规则覆盖前面
rule 规则配置
overrides 覆盖部分规则

6、项目中途加入 eslint，检查与修复 eslint 报错
"eslint --ext .js,.vue src"
"eslint --fix --ext .js,.vue src"

7、husky 插件触发 git 钩子做相应 eslint 检查和规范动作
