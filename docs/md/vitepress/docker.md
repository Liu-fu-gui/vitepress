npm run build:docs  本地构建

1. 在VitePress项目的根目录中创建一个名为 `Dockerfile` 的文件。
2. 打开 `Dockerfile` 文件并添加以下内容：

```
# 基于Node.js的Docker镜像
FROM node:14

# 创建一个工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件到工作目录中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将VitePress项目的文件复制到工作目录中
COPY . .

# 修改文件权限和所有者
RUN chmod +x ./node_modules/.bin/vitepress && \
    chown -R node:node .

# 切换用户到node
USER node

# 构建VitePress项目
RUN npm run build:docs

# 暴露默认的VitePress端口
EXPOSE 3000

# 运行VitePress服务器
CMD ["npm", "run", "docs:serve"]

```

1. 保存并关闭 `Dockerfile` 文件。
2. 在项目根目录下，打开终端或命令提示符窗口，并执行以下命令来构建Docker镜像：

```
bashCopy code
docker build -t vitepress-v0.2 .
```

这将根据Dockerfile构建一个名为 "vitepress-v0.2" 的Docker镜像。

1. 构建完成后，执行以下命令将Docker镜像推送到Docker Hub或私有的Docker镜像仓库（如果需要）：

```
bashCopy code
docker push vitepress-v0.2:latest
```

1. 在Linux CentOS 7.9的服务器上，使用以下命令来拉取Docker镜像：

```
bashCopy code
docker pull vitepress-v0.2:latest
```

1. 完成拉取后，创建一个Docker容器并运行VitePress项目：

```
bashCopy code
docker run -d -p 3000:3000 --name vitepress-container vitepress-v0.2:latest
```

这将在后台运行一个名为 "vitepress-container" 的Docker容器，并将宿主机的端口3000映射到容器的端口3000。

默认映射是4173时

```
docker run -d -p 3000:4173 --name vitepress-container vitepress-v0.2:latest
```
