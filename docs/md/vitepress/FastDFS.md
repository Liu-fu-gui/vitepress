# linux下安装FastDFS

## 简介

[FastDFS](https://so.csdn.net/so/search?q=FastDFS&spm=1001.2101.3001.7020)是一个开源的轻量级[分布式文件系统](https://baike.baidu.com/item/分布式文件系统/1250388)，它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和[负载均衡](https://baike.baidu.com/item/负载均衡/932451)的问题。特别适合以文件为载体的在线服务，如相册网站、视频网站等等。

FastDFS为互联网量身定制，充分考虑了冗余备份、负载均衡、线性扩容等机制，并注重高可用、高性能等指标，使用FastDFS很容易搭建一套高性能的文件服务器集群提供文件上传、下载等服务。

```
 libfatscommon：FastDFS分离出的一些公用函数包
 FastDFS：FastDFS本体
 nginx：nginx
 fastdfs-nginx-module：FastDFS和nginx的关联模块
```

```
快速查杀进程pid
netstat -tulnp
```

![image-20230801142002564](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801142002564.png)

```
本地文件路径
"E:\云计算\FastDFS_5.08_software.zip"
```

## 常用命令

```
fdfs_trackerd /etc/fdfs/tracker.conf start
fdfs_storaged /etc/fdfs/storage.conf start
/usr/local/nginx/sbin/nginx -s reload
验证扩容
fdfs_monitor /etc/fdfs/storage.conf 下的total_storage , free_storage
```

安装依赖

```xml
yum -y install gcc-c++
yum -y install libevent
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel
```

## 二、安装libfastcommon

1、进入/usr/local/FastDFS路径下解压安装包

```xml
tar -zxvf libfastcommon.tar.gz
```

2、进入解压的目录下

```xml
./make.sh            //编译
./make.sh install    //安装
```

3、由于fastdfs把创建的libfastcommon.so放到了lib64目录下面，但是系统扫描是去lib目录下面，所以把文件cp到lib目录下

```xml
进入src目录
cp ./libfastcommon.so /usr/lib
```

## 三、安装FastDFS

1、进入/usr/local/FastDFS路径下解压安装包

```xml
tar -zxvf fastdfs_.6.06.tar.gz
```

2、进入解压的目录下

```xml
./make.sh            //编译
./make.sh install    //安装
```

3、把解压目录下的conf目录下的文件全部cp到/etc/fdfs里面

```xml
cd conf
cp * /etc/fdfs
```

4、进入/etc/fdfs目录，修改tracker.conf文件

```xml
vim tracker.conf

找到base_path
base_path=这里是存储路径自己自定义  我的是/usr/local/FastDFS/fastdfs.6.06/tracker

Esc :wq   退出保存
```

5、启动tracker跟踪器

```xml
/usr/bin/fdfs_tracker /etc/fdfs/tracker.conf
```

6、进入/etc/fdfs目录，修改storage.conf文件

```xml
vim storage.conf

找到base_path
base_path=这里是存储路径自己自定义  我的是/usr/local/FastDFS/fastdfs.6.06/storage
找到base_path0
store_path0=这里是默认的存储路径自己自定义  我的是/usr/local/FastDFS/fastdfs.6.06/storage
找到tracker_server
tracker_server=你的服务器的ip:22122

Esc :wq   退出保存
```

7、启动storage存储器

```xml
/usr/bin/fdfs_storage /etc/fdfs/storage.conf
```

8、将/usr/local/FastDFS/fastdfs_.6.06/client 里面的libfdfsclient.so 拷贝到/usr/lib 中

```xml
cd /usr/local/FastDFS/fastdfs_.6.06/client
cp libfdfsclient.so /etc/lib
```

9、进入/etc/fdfs目录，修改client.conf文件

```xml
vim client.conf

找到base_path
base_path=这里是存储路径自己自定义  我的是/usr/local/FastDFS/fastdfs.6.06/client
找到tracker_server
tracker_server=你的服务器的ip:22122

Esc :wq   退出保存
```

## 四、测试(注意如果是云服务器要放开23000端口)

1、测试(测试建议把防火墙关闭)

```xml
/usr/bin/fdfs_test /etc/fdfs/client.conf upload 要上传的文件路径

上传成功会返回你上传文件的访问路径
比如：http://IP地址/group1/M00/00/00/L2zTumGJ2NCACeEoAABDqqUN9OQ701_big.gif

这时候地址还不能直接访问，需要连nginx
```

## 五、安装fastdfs-nginx-module插件

1、进入/usr/local/FastDFS路径下解压安装包

```xml
tar -zxvf fastdfs-nginx-module.tar.gz
```

2、进入解压的目录下

```xml
cd fastdfs-nginx-module
```

3、修改fastdfs-nginx-module/src/config文件，把内容里面的local去掉

```xml
vim config
把内容里面的local路径都去掉

Esc :wq  保存退出
```

4、把fastdfs-nginx-module/src/mod_dastdfs.conf文件复制到/etc/fdfs目录下

```xml
cp mod_dastdfs.conf /etc/fdfs
```

5、在/etc/fdfs目录下修改mod_dastdfs.conf文件

```xml
vim mod_dastdfs.conf

找到tracker_server
tracker_server=你的IP:22122
找到url_have_group_name
url_have_group_name:true
找到store_path0
store_path0=去哪里找你存储的东西   我的是:/usr/local/FastDFS/fastdfs.6.06/storage

Esc :wq  保存退出
```

## 六、安装配置nginx

1、已经安装了nginx的方法

```xml
找到已安装的nginx源码包，进入文件夹

配置了ssl的配置方法:./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=/usr/local/fastdfs/fastdfs-nginx-module-1.22/src(后面路径是你的插件安装地址)

没有配置ssl的配置方法：./configure --add-module=/usr/local/fastdfs/fastdfs-nginx-module-1.22/src(后面路径是你的插件安装地址)

make //编译
cp ./objs/nginx /usr/local/nginx/sbin     把编译后的nginx替换你安装的nginx
```

2、未安装nginx的方法

```xml
①.进入/usr/local/FastDFS路径下解压安装包
②.执行已安装nginx的步骤
③.make && make install
④.安装好的nginx目录应该在/usr/local目录下面
1234
```

3、配置nginx.conf文件

```xml
有ssl 的在 ssl的server里面添加
	location ~/group[0-9]/M00/ {
	    ngx_fastdfs_module;
	}
	
没有ssl 的在 80的server里面添加
    location ~/group[0-9]/M00/ {
    	ngx_fastdfs_module;
    }
```

4、启动测试访问图片

```xml
进入nginx/sbin目录下启动nginx
./nginx
```

5、浏览器访问上传文件返回的访问路径(注意建议关闭防火墙)



## 扩容



1 新增磁盘挂载点，在新磁盘新建文件存储目录

2 修改/etc/fdfs/Storage.conf配置，

```
vim /etc/fdfs/storage.conf
store_path_count = 2
store_path0=/data/push/fastdfs      现存
store_path1=/newdata/push/fastdfs   新增磁盘存
```



3 查看/etc/fdfs/tracker.conf配置的store_path是否等于2，应该采用负载均衡策略，令新文件存储在新磁盘下。

```
vim /etc/fdfs/tracker.conf
store_path=2
```

4 修改/etc/fdfs/mod_fastdfs.conf配置， store_path_count = 2，store_path0=/data/push/fastdfs，store_path1=/newdata/push/fastdfs

```
vim /etc/fdfs/mod_fastdfs.conf
store_path_count = 2
store_path0=/data/push/fastdfs
store_path1=/newdata/push/fastdfs
```

5 修改/usr/local/nginx/conf/nginx.conf

 ![image-20230801145942262](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801145942262.png)

6 重启tracker，storage，Nginx服务

```
fdfs_trackerd /etc/fdfs/tracker.conf start
fdfs_storaged /etc/fdfs/storage.conf start
/usr/local/nginx/sbin/nginx -s reload
```

![image-20230801145958653](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801145958653.png)





