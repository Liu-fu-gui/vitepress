需要的环境
node 18.18.0     npm 10.2.2

更新为淘宝镜像
'''npm config set registry http://registry.npmmirror.com'''


快速上手
本节将帮助你从头开始搭建一个简单的 VitePress 文档站点。如果你已经有了一个存在的项目并且向在项目中维护文档，你可以从步骤 3 开始。

步骤 1: 创建并进入一个目录

$ mkdir vitepress-starter && cd vitepress-starter
步骤 2: 初始化

$ yarn init
步骤 3: 本地安装 VitePress

$ yarn add --dev vitepress
步骤 4: 创建你第一篇文档

$ mkdir docs && echo '# Hello VitePress' > docs/index.md
步骤 5: 在 package.json.添加一些script

{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
步骤 6: 在本地服务器上启动文档站点

$ yarn docs:dev
VitePress 会在 http://localhost:3000启动一个热重载的开发服务器。

现在，你应该有了一个基本的单功能强大的 VitePress 文档站点了。

当你的文档站点逐渐成型时，请务必阅读部署指南.


拉下来之后配置环境
 yarn init
yarn add --dev vitepress vue
启动
yarn docs:dev
![image](https://github.com/Liu-wei-tao/vitepress/assets/95990251/fa57cfca-b11b-4237-a180-6ee45dff8b71)
