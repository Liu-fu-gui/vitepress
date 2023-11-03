---
prev: 
  text: 'git使用'
  link: 'md/cloud-service/git-github.md'
next:
  text: '用dockerfile进行云部署'
  link: 'md/vitepress/docker.md'
---
## 脚本代码

```sh
#!/bin/bash

# 通过命令行参数获取项目名称
project_name=$1

# 步骤 1: 创建文件夹并打开
mkdir "$project_name"
cd "$project_name"

# 步骤 2: 初始化
yarn init -y

# 步骤 3: 安装 VitePress 和 Vue
yarn add --dev vitepress vue

# 步骤 4: 创建 index.md
mkdir -p docs
cd docs
touch index.md

# 步骤 5: 创建 .vitepress 目录和 config.js 文件
mkdir -p .vitepress
cd .vitepress
touch config.js

# 写入 config.js 的内容
cat << EOF > config.js
module.exports = {
    title: "标题",
    description: "Just playing around."
}
EOF

# 步骤 6: 在根目录下创建 package.json 文件
cd ../../
# 写入 package.json 的内容
cat << EOF > package.json
{
  "name": "$project_name",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  "devDependencies": {
    "vitepress": "^1.0.0-beta.1",
    "vue": "^3.3.4"
  }
}
EOF

# 步骤 7: 创建 index.md 文件的内容
cat << EOF > docs/index.md
---
layout: home
 
hero:
  name: 名称
  text: 文本
  tagline: 标语
  actions:
    - theme: brand
      text: 开始
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
 
features:
  - icon: "⚡️"
    title: "Vite, The DX that can't be beat"
    details: "Lorem ipsum..."
  - icon: "🖖"
    title: "Power of Vue meets Markdown"
    details: "Lorem ipsum..."
  - icon: "🛠️"
    title: "Simple and minimal, always"
    details: "Lorem ipsum..."
---

<style>
    :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>
EOF

# 步骤 8: 启动文档站点
yarn docs:dev

```
