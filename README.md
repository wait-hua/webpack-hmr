# 测试webpack hmr

## Build Setup
``` bash
#install dependencies
npm install

#serve with hot reload at localhost:3002
npm run dev
```

打开浏览器看控制台的log 及network

## 说明
- node 结合 webpack-dev-middleware 及webpack-hot-middleware 实现热更新

- 更改index.scss可以达到热更新，因为style-loader支持了热更新，在使用style-loader热更新时不能用ExtractTextPlugin 抽取css。

- 更改sub.js时可以达到热更新。在入口index.js里面加入了module.hot.appect()代码，使用的是原生的js，热更新的代码webpack_module 直接push进去页面里执行了，各个框架要根据自己渲染页面的原理写热加载的工具达到热更新。可以参考style-loader 及vue-loader里的vue-hot-reload-api.