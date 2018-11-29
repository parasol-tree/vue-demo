# vue-demo

> vue-demo

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
```
# webpack 已经配置 为 (如需修改请去 /build 或者 /config 内修改)
  已经设置 打包 不 生成 SourceMap
  打包之后文件 放在 根目录下 dist 目录内, [css, js, font, img] 放在 dist/static 内
  webpack 配置内 静态文件引用前缀 为 '/'

  代码 引用 别名 对应如下目录
  @ ----> src
  pages ----> src/pages
  static ----> src/static
  // img
  staticImg ----> src/static/img
  staticSvg ----> src/static/svg
  // css
  css ----> src/assets/css
  js ----> src/assets/js
  iconfont ----> src/assets/css/iconfont
  // js
  urlConstant ----> src/assets/js/constant/urlConstant
  directive ----> src/assets/js/directive
  filter ----> src/assets/js/filter
  mixin ----> src/assets/js/mixin
  pluginsJS ----> src/assets/js/pluginsJS

```
# 提交空文件夹到 远程仓库
```
  如果需要提交空文件夹到 远程仓库, 请建立 .gitkeep 文件
```

# 测试
```
  没有 写入 e2e 或者 nightwatch 的 代码, 但是 webpack 已经配置, 如需要 请自理
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
