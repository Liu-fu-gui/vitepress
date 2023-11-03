---
prev: 
  text:  'vitepress页面美化'
  link: 'md/errcloud-service/static.md'
next:
  text: 'sd-api'
  link: 'md/sd/sd-api.md'
---


# 解决git push时出现Failed to connect to github.com port 443: Timed out

最近，在将本地分支推送到远程github仓库时

```
git push origin master
```

抛出错误

```
fatal: unable to access 'https://github.com/[username]/[repo name].git/': Failed to connect to github.com port 443: Timed out
（username和repo name分别代表用户名和仓库名）
```

在网上找了很多解决方案，大部分是取消代理设置，但不适用于我的情况。
折腾了半天，后来在[Git的错误error: Failed connect to github.com:443;解决办法](https://blog.csdn.net/lyc_stronger/article/details/51954852)中找到了解决方案。
整理如下：

1. 找到hosts文件
   window下的目录为C:\Windows\System32\drivers\etc
   hosts文件可以直接使用记事本打开
2. 修改hosts文件
   将github.com对应的行屏蔽即可

```
#github
#192.30.253.112 github.com
#151.101.185.194 github.global.ssl.fastly.net
```

1. 重新push，成功

文末附一下之前提到的取消代理的方法。

1. 查询是否使用代理

```
git config --global http.proxy
git config --global https.proxy
或者
env|grep -I proxy
```

如果查询时二者均无返回信息，则说明此方法不适用。

1. 取消代理设置

方法一：

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

方法二：

```
 export http_proxy=""
 export https_proxy=""
 export HTTP_PROXY=""
 export HTTPS_PROXY=""
```

方法三：

```
$ unset http_proxy
$ unset ftp_proxy
$ unset all_proxy
$ unset https_proxy
$ unset no_proxy
```