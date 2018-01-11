# eastown

> A Vue.js project

###目录结构

	├── build                          #webpack打包相关文件目录             
	├── config                         #环境及打包配置文件目录
	├── dist                           #打包文件目录（需要npm run build打包项目之后才会生成）
	├── static                         #静态文件目录
	├── src                            #前端文件目录(开发项目的目录)
	│   ├── base                          #基础页面
	│   ├── assets                        #资源文件目录
	│   ├── gloable                       #全局模块文件（全局引用）
	│   ├── modules                       #公共模块文件（公共组件，按需引用）
	│   ├── page                          #项目所有页面存放的目录(先研究这个)
	│   ├── store                         #vuex文件目录
	│   ├── router.js                     #项目路由配置文件(先研究这个)
	│   ├── main.js                       #前端入口文件
	├── .babelrc                       #babel配置文件
	├── .editorconfig                  #编码规范文件
	├── .eslintignore                  #忽略代码检查目录文件
	├── .eslintrc.js                   #代码检查配置文件
	├── .gitignore                     #忽略提交到git目录文件
	├── .postcssrc.js                  #postcss配置文件
	├── index.html                     #html文件
	├── package.json                   #项目依赖包及配置信息文件
	├── README.md                      #项目描述文件	

## Build Setup

``` bash
# install dependencies
npm install（cnpm install 建议安装淘宝镜像源 然后用cnpm install安装项目所依赖的包）

# serve with hot reload at localhost:8080 运行项目，默认打开8080端口，如果端口被占用，可在config/index.js中更改端口号（更改配置文件后需要重启项目才能生效）
npm run dev

# build for production with minification 需要部署上线时打包项目，会生成dist文件
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
