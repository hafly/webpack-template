## webpack开发模板

用于快速初始化项目

[使用指南](https://webpack.docschina.org/guides/code-splitting/)

* 安装
* 初始化配置
* 资源管理
* 输出管理
* 开发模式
* 模块热替换
* tree shaking：去掉未引用代码
* 生产环境和开发环境配置分离
* [代码分离](https://webpack.docschina.org/guides/code-splitting/)：防止切片中代码重复，详细查看[SplitChunks插件](https://webpack.docschina.org/plugins/split-chunks-plugin/)
* 代码分离-动态导入
* 懒加载
* shim 预置依赖-shim 预置全局变量
* 添加less支持：cnpm install -D babel-loader @babel/core @babel/preset-env

### 代码运行
```
# 安装依赖
yarn install

# 启动
npm start

# 编译
npm run build
```