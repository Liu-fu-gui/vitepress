---
prev: 
  text:  '阶段回顾与综合架构准备'
  link: 'md/cloud-service/architecture.md'
next:
  text: 'FastDfs分布式文件系统'
  link: 'md/cloud-service/FastDFS.md'
---

# 2.docker快速搭建一个静态网站

## 1.创建一个文件夹，mkdir mytext 里面放脚本和源代码

## 2. 创建myfiles文件，用来存放源代码，mkdir myfiles


## 3.  dockerfile是一个文件，touch Dockerfile


## 4. 进入myfiles 执行 git clone github链接

 <img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/image-20230521121846431.png" alt="我的图片">

## 5.进入到mytext 文件夹中

## 6.开始构建自定义的nginx镜像

docker build -t mynginx .

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/image-20230521122641055.png" alt="2">


## 7.构建完成后，执行以下命令运行基于自定义镜像的nginx容器

docker run -d -p 82:80 mynginx

这个命令将在后台运行一个基于 `mynginx`镜像的容器，并将容器的80端口映射到主机的82端口。

## 8.访问链接

修改docker容器里的文件

docker exec -it f96475b74743 /bin/bash
