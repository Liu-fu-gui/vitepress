---
prev: 
  text:  '阶段回顾与综合架构准备'
  link: 'md/cloud-service/architecture.md'
next:
  text: 'docker快速搭建一个静态网站'
  link: 'md/cloud-service/static.md'
---
# 1-阶段回顾与综合架构准备

# 1. 运维基操之修仙之路

- 筑基期: 文件,目录,vi/vim快捷键,linux快捷键
- 金丹期: 压缩包,用户,权限
- 出窍期: 磁盘,软件包,进程,服务,定时任务,网络
- 渡劫期: 四剑客与正则,去重,排序

## 1.1 筑基期:文件,目录

```sh
#增加
1. 对于文件的创建(touch,vi)
2. 对于目录的创建(多级目录) (mkdir)
#修改
3. 对于文件内容的修改(vim/vi)
4. 重命名(移动)目录/文件(mv)
#查看
5. 查看文件内容(cat)  cat/vim/head/tail/less/more/....
6. 查看目录内容(ls/tree)
#删除
7. 删除文件/目录(rm)  
#其他
8. 进入目录(cd)
9. 复制文件/目录(cp)
```

## 1.2 金丹期: 压缩包,用户,权限

### 1) 压缩包(三剑客)

```sh
1. 创建tar.gz格式的压缩包(tar zcf)
2. 解压压缩包tar.gz
3. 解压压缩包到指定目录tar.gz
4. 查看压缩包内容 tar.gz
5. 解压.zip格式的压缩包(unzip)
6. 解压.zip格式的压缩包到指定目录 (unzip  -d) 7. 临时注释配置文件比如: /etc/yum.repos.d/CentOS-CR.repo (gzip)
```

### 2) 用户

```sh
1. 给文件增加x权限 (chmod )
2. 给文件的权限设置为755 (chmod)
3. 把文件的所有者修改为root.root (chown)
```

## 1.3 出窍期: 磁盘,软件包,进程,服务,定时任务,网络

### 1) 磁盘管理

```sh
#增加
1. 对磁盘进行分区(fdisk/parted/gdisk)
2. 对光盘的挂载(mount)
3. 对磁盘格式化,挂载(mkfs,mount)
4. 增加系统的swap(dd,mkswap,swapon)
#查看
5. 查看磁盘使用情况(df -h) 
6. 查看磁盘inode使用情况(df -i) 
7. 检查某个目录所占空间(du -sh) 
8. 检查系统挂载情况(df -h)
```

### 2) 软件包管理

```sh
#增加
1. 安装软件tree,...(yum isntall)
2. 安装xxxx.rpm包(rpm -ivh) #查看
3. 检查软件是否安装成功(rpm -qa )
4. 检查软件包内容(rpm -ql) 
5. 检查系统源是否有某个软件包 (yum list|grep tree)
6. 查询某个命令/文件,属于哪个软件包 (pstree   yumprovides pstress)
#删除
7. 删除软件(rpm -e )
#升级
8. 升级软件(rpm -Uvh/yum install)
#额外(熟悉) 9. 安装rpm包发现有依赖.(yum localinstall xxx.rpm)
10. 检查系统yum源 (yum repolist)
```

### 3) 进程管理

```sh
1. 检查某个进程是否存在(ps -ef )
2. 查看某个进程详细信息(cpu,mem) (ps aux)
3. 动态查看系统负载信息,cpu使用情况(top)
4. 哪些进程在进行读写(iotop)
```

### 4) 服务管理

```sh
1. 检查服务是否正在运行(systemctl status)
2. 检查服务是否开机自启动(systemctl status)
3. 开启服务,开启服务开机自启动(systemctl start crond  ;systemctl enable crond)
```

### 5) 定时任务

```sh
1. 查看定时任务 #cat /var/spool/cron/用户名
crontab -l
2. 编辑定时任务 #vi /var/spool/cron/用户名
crontab -e
3.书写定时任务完成定时备份,时间同步
```

### 6) 网络管理命令

```sh
1. 下载软件(wget) https://nginx.org/download/nginx-1.21.6.tar.gz
2. 检查端口(ss,nmap,telnet)
3. 检查流量(速度) (iftop,nethogs)
4. 检查DNS解析(dig)
5. 路径追踪(tracert)
6. 访问某个网站(curl)
7. 显示ip地址(ip a)
```

## 1.4 渡劫期: 四剑客与正则,去重,排序

### 1) 排序去重

```sh
1. 取出access.log中ip地址去重并统计次数取前10
(awk,sort,uniq,sort,head)
2. 取出当前系统的连接状态去重并统计次数取(ss -ant,awk,sort,uniq,sort)
[root@oldboy-lidao ~]# ss -ant |awk 'NR>1{print $1}'
LISTEN
LISTEN
LISTEN
ESTAB
TIME-WAIT
TIME-WAIT
ESTAB
ESTAB
LISTEN
LISTEN
[root@oldboy-lidao ~]$ ss -ant |awk 'NR>1{print $1}' |sort
[root@oldboy-lidao ~]$ ss -ant |awk 'NR>1{print $1}' |sort
ESTAB
ESTAB
ESTAB
LISTEN
LISTEN
LISTEN
LISTEN
LISTEN
TIME-WAIT
TIME-WAIT
[root@oldboy-lidao ~]$ ss -ant |awk 'NR>1{print $1}' |sort |uniq -c
   3 ESTAB
   5 LISTEN
   3 TIME-WAIT
```

### 2) 四剑客-find

```sh
1. 根据扩展名找出对应文件(.conf)
2. 根据大小找出对应文件
3. 根据修改时间找出文件(7天之前) 
4. 找出/etc/以.conf结尾文件显示文件的详细信息 (find+其他命令配合) 3种方法
#熟悉
5. 找出/etc/以.conf结尾文件打包压缩/backup/ .
6. 找出/etc/以.conf结尾文件复制/tmp/下面
```

### 3) 四剑客-sed,grep,awk

```sh
1. 过滤出文件内容(正则) (grep)
2. 取行第2行到第5行(sed)
3. 取列/etc/passwd $3 ,$5 (awk -F) 
4. 统计/etc/passwd 文件中可以登录系统的用户数量(wc -l) #熟悉
5. awk过滤出某一列中包含xxxx内容
```

## 1.5 命令汇总

- 筑基期: 文件,目录,vi/vim快捷键,linux快捷键
- 金丹期: 压缩包,用户,权限
- 出窍期: 磁盘,软件包,进程,服务,定时任务,网络
- 渡劫期: 四剑客与正则,去重,排序

# 2. 运维心法之内功心法

```sh
内功心法: 1. 命令格式(选项,参数) 
2. 常见Linux发行版本
3. Linux核心目录,文件
4. ls -lhi每一列含义
5. 软连接与硬链接区别,特点
6. 什么是yum源(仓库) 
7. 什么是负载,什么时候负载高? 
8. 书写定时任务流程/规范
9. OSI7层模型(必会)
10. 三次握手,四次挥手(必会)
11. 11种状态(掌握核心5个  
CLOSED,LISTEN,ESTABLISHED,TIME_WAIT,CLOSE_WAIT)
12. DNS解析流程
13. 用户访问网站流程:(必会)

故障案例:(预防走火入魔) 
1. 命令行-bash-4.x$ 原因,解决. (用户管理讲解) 
2. permission denied 含义,原因.(权限部分讲解的) 
3. 磁盘空间不足案例(模拟,常见原因,分析排查,解决) 
4. 系统负载高,原因,排查
5. 定时任务没有定向到空/追加到文件(大量小文件,邮件) 
6. 定时任务运行脚本失败(命令路径问题)
现象: 手动运行脚本没问题.通过定时任务运行失败
```

# 3. 综合架构环境准备

- 为什么要配置模板机？
  - 后面我们需要创建很多新的虚拟机，配置好一个模板机之后，在模板机上把基础的配置做好，当需要新环境的时候，直接快速克隆即可

> 系统基础配置(模板机)
>
> 
>
> > 网卡:eth0 2块网卡(内网,公网)
> >
> > 防火墙,selinux.
> >
> > 配置yum源: 阿里云,base,epel
> >
> > 安装常用工具:
> >
> > 连接速度优化:远程连接.
> >
> > 配置定时时间同步:
> >
> > 配置命令行颜色.
> >
> > 写个快速修改主机名和ip的脚本.
> >
> > 关闭不用服务NetworkManager 
> >
> > hosts解析
>
> 虚拟机克隆

## 3.1 创建虚拟机

### 1) 创建虚拟机(2块网卡)

- 设置虚拟机默认安装位置

![image-20221121095702524](http://img.jicext.cn/imgimage-20221121095702524.png)

![image-20221121095652381](http://img.jicext.cn/imgimage-20221121095652381.png)

![image-20221121095645254](http://img.jicext.cn/imgimage-20221121095645254.png)

> 自定义硬件
>
> nat模式(不用动)
>
> 添加网卡nat模式(然后修改)

![image-20221121095603002](http://img.jicext.cn/imgimage-20221121095603002.png)

![image-20221121095557112](http://img.jicext.cn/imgimage-20221121095557112.png)

**添加lan区段**

![image-20221121095720812](http://img.jicext.cn/imgimage-20221121095720812.png)

![image-20221121095748887](http://img.jicext.cn/imgimage-20221121095748887.png)

**选择lan区段**

![image-20221121095822724](http://img.jicext.cn/imgimage-20221121095822724.png)

![image-20221121095828147](http://img.jicext.cn/imgimage-20221121095828147.png)

### 2) 修改网卡名字

- 未安装系统前修改

> **`net.ifnames=0 biosdevname=0`** #如果没有出现下方页面，则登录系统后再修改

![image-20221121095852065](http://img.jicext.cn/imgimage-20221121095852065.png)

- 安装完成后修改

```sh
```

### 3) Linux网卡配置

> 如果安装的时候没有配置，也可在安装完成后配置

#### eth0网卡配置

- 配置ONBOOT

![image-20221121095858585](http://img.jicext.cn/imgimage-20221121095858585.png)

- 这是配置eth0 ip地址,子网掩码,网关,dns

![image-20221121100619557](http://img.jicext.cn/imgimage-20221121100619557.png)

- eth0网卡配置 结果

![image-20221121095951165](http://img.jicext.cn/imgimage-20221121095951165.png)



#### eth1网卡配置

- 配置ONBOOT

![image-20221121100000614](http://img.jicext.cn/imgimage-20221121100000614.png)



- 配置IP地址和子网掩码

![image-20221121100007608](http://img.jicext.cn/imgimage-20221121100007608.png)

- eth1网卡配置结果

![image-20221121100022240](http://img.jicext.cn/imgimage-20221121100022240.png)

### 4) 其他配置

**<font color='red' >最小化安装</font>**

![image-20221121100132569](http://img.jicext.cn/imgimage-20221121100132569.png)

**配置时间和时区**

![image-20221121100146869](http://img.jicext.cn/imgimage-20221121100146869.png)

**配置root密码和添加普通用户**

![image-20221121100159906](http://img.jicext.cn/imgimage-20221121100159906.png)

### 5) 安装完成后如何配置

[为什么修改ens为eth](https://blog.csdn.net/qq_46480020/article/details/112790707)

- 修改**<font color='blue' >/boot/grub2/grub.cfg</font>**配置

  ```sh
  第1步: 修改/boot/grub2/grub.cfg配置linux16的行结尾加上
  net.ifnames=0  biosdevname=0
  #修改之后检查内容
  [root@localhost ~]$ grep -n linux16 /boot/grub2/grub.cfg
  100:	linux16 /vmlinuz-3.10.0-1160.el7.x86_64 root=UUID=8e6d017f-0fef-4067-915d-0429e1db1b33 ro crashkernel=auto rhgb quiet LANG=en_US.UTF-8 net.ifnames=0  biosdevname=0
  114:	linux16 /vmlinuz-0-rescue-6b92eb0e2fc8497b8b0296f5060c3ec4 root=UUID=8e6d017f-0fef-4067-915d-0429e1db1b33 ro crashkernel=auto rhgb quiet  net.ifnames=0  biosdevname=0
  
  ```

  

  ![image-20221121100215071](http://img.jicext.cn/imgimage-20221121100215071.png)

  > vim打开文件后，可以使用/搜索关键字，并使用n去向下检查

  ![image-20221121100220654](http://img.jicext.cn/imgimage-20221121100220654.png)

  

  ```sh
  第2步: 修改网卡配置文件. 
  1)网卡配置文件名字改为eth0 
  mv 修改
  [root@localhost ~]$ mv  /etc/sysconfig/network-scripts/ifcfg-ens33 /etc/sysconfig/network-scripts/ifcfg-eth0
  [root@localhost ~]$ mv  /etc/sysconfig/network-scripts/ifcfg-ens34 /etc/sysconfig/network-scripts/ifcfg-eth1
  
  2)修改网卡配置文件中NAME和DEVICE两个部分
  vim修改
  [root@localhost ~]$ cat  /etc/sysconfig/network-scripts/ifcfg-eth0
  TYPE=Ethernet
  PROXY_METHOD=none
  BROWSER_ONLY=no
  BOOTPROTO=none
  DEFROUTE=yes
  IPV4_FAILURE_FATAL=no
  IPV6INIT=yes
  IPV6_AUTOCONF=yes
  IPV6_DEFROUTE=yes
  IPV6_FAILURE_FATAL=no
  IPV6_ADDR_GEN_MODE=stable-privacy
  NAME=eth0    #改成eth0
  UUID=263c470e-faae-4106-9c16-91239c0d2ae0
  DEVICE=eth0
  ONBOOT=yes   #改成eth0
  IPADDR=10.0.0.210
  PREFIX=24
  GATEWAY=10.0.0.2
  DNS1=223.5.5.5
  IPV6_PRIVACY=no
  
  [root@localhost ~]$ cat  /etc/sysconfig/network-scripts/ifcfg-eth1
  TYPE=Ethernet
  PROXY_METHOD=none
  BROWSER_ONLY=no
  BOOTPROTO=none    #网络配置参数：static是静态ip（固定ip)、dhcp是动态的（可能重启虚拟机，ip就会变）none是不指定
  DEFROUTE=yes
  IPV4_FAILURE_FATAL=no
  IPV6INIT=yes
  IPV6_AUTOCONF=yes
  IPV6_DEFROUTE=yes
  IPV6_FAILURE_FATAL=no
  IPV6_ADDR_GEN_MODE=stable-privacy
  NAME=eth1
  UUID=b564cf90-6a12-485b-840d-f18c3634e720
  DEVICE=eth1
  ONBOOT=yes
  IPADDR=172.16.1.210
  PREFIX=24
  IPV6_PRIVACY=no
  
  
  修改后结果:
  
  [root@localhost ~]$  grep -n eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
  12:NAME=eth0
  14:DEVICE=eth0
  
  [root@localhost ~]$  grep -n eth1 /etc/sysconfig/network-scripts/ifcfg-eth1
  12:NAME=eth1
  BOOTPROTO=none
  14:DEVICE=eth1
  #重启网卡
  [root@localhost ~]$ systemctl restart network   
  
  ```
  
  > 当上面操作没有问题，重启网卡失败，可直接重启该虚拟机

## 3.2 模板机系统软件配置

![image-20221121100229087](http://img.jicext.cn/imgimage-20221121100229087.png)

### 1) 关闭防火墙和selinux

```sh
关闭防火墙
[root@localhost ~]$ systemctl stop firewalld
永久关闭防火墙
[root@localhost ~]$ systemctl disable firewalld
[root@localhost ~]$ setenforce 0
禁用selinux
[root@localhost ~]$ sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config
```

\#检查防火墙

\#检查selinux

```sh
[root@localhost ~]$ systemctl status firewalld
```

![image-20221121100236504](http://img.jicext.cn/imgimage-20221121100236504.png)

### 2) yum源

> 把源修改为阿里云或其他国内的源，会加快源下载速度

```sh
#修改base源 为阿里云
[root@localhost ~]$ curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
#增加epel源
[root@localhost ~]$ curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
```

### 3) 安装常用工具

```sh
这就是我们一次下载多个常用的工具，就像给windows系统安装多个软件一样

[root@localhost ~]$ yum install -y vim tree wget bash-completion bash-completion-extras lsof lrzsz net-tools sysstat iotop iftophtop unzip nc nmap telnet bc psmisc httpd-tools bind-utils nethogs expect ntpdate
[root@localhost ~]$ mkdir -p /app/tools  /app/code
```

### 4) 优化ssh连接速度

```sh
[root@localhost ~]$ sed -i '/^GSSAPIAuthentication/s@^@#@g' /etc/ssh/sshd_config
[root@localhost ~]$ 
cat >>/etc/ssh/sshd_config<<EOF
UseDNS no
GSSAPIAuthentication no
EOF
[root@localhost ~]$ systemctl restart sshd
#检查
[root@localhost ~]$ egrep '^(GSSAPIAuthentication|UseDNS)' /etc/ssh/sshd_config
```

### 5) 时间同步

```sh
[root@localhost ~]$ cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
cp: overwrite ‘/etc/localtime’? y   #overwrite覆盖，确认覆盖？ y代表yes
[root@localhost ~]$ yum install -y ntpdate

#设置定时任务
[root@localhost ~]$ crontab -e
#1. sync time lidao996
*/2 * * * * /sbin/ntpdate ntp1.aliyun.com &>/dev/null

#查看定时任务
[root@localhost ~]$ crontab -l
```

### 6) 命令行颜色

详解地址：https://blog.csdn.net/qq_36733838/article/details/126750710

```sh
把下面内容
export PS1='[\[\e[34;1m\]\u@\[\e[0m\]\[\e[32;1m\]\H\[\e[0m\]\[\e[31;1m\] \w\[\e[0m\]]\$ '
写入到/etc/profile中即可
[root@localhost ~]$ echo export PS1="'[\[\e[34;1m\]\u@\[\e[0m\]\[\e[32;1m\]\h\[\e[0m\]\[\e[31;1m\] \w\[\e[0m\]]\$ '">> /etc/profile 
[root@localhost ~]$ source /etc/profile
```

### 7) 书写修改ip和主机名的脚本

- **克隆完成虚拟机,修改主机名和ip**

> 当我们通过主机克隆出新机器之后，新的机器的主机名和ip都和模板机一样，所以需要一个脚本可以快速修改

- 为什么需要使用变量？

```sh
脚本用法
[root@localhost ~]$ mkdir -p /server/scripts
[root@localhost ~]$ cat > /server/scripts/change.sh << 'EOF'
#!/bin/bash
#author: 作者
#desc:  描述
#version: v6.0 final
#模板机ip地址
ip=`hostname -I |awk '{print $1}'|sed 's#.*\.##g'`
#新的ip
ip_new=`echo $2 |sed 's#^.*\.##g'`
#新的主机名
hostname=$1
#修改ip,可以查看sed的替换
sed -i "s#10.0.0.$ip#10.0.0.$ip_new#g" /etc/sysconfig/network-scripts/ifcfg-eth0
sed -i "s#172.16.1.$ip#172.16.1.$ip_new#g" /etc/sysconfig/network-scripts/ifcfg-eth1
#重启网卡
systemctl restart network
#修改主机名
hostnamectl set-hostname $hostname
EOF


拆分命令
#查看当前主机ip
[root@localhost ~]$ hostname -I
10.0.0.210 172.16.1.210 
#查看当前主机ip,把结果的第二列出取出
[root@localhost ~]$ hostname -I awk '{print $1}'
10.0.0.210
#查看当前主机ip,把结果的第二列出取出，然后sed把10.0.0替换为空
[root@localhost ~]$ hostname -I |awk '{print $1}'|sed 's#.*\.##g'
210
#运行脚本的格式为:sh  脚本   参数1  参数2（运行脚本的时候，并且给这个脚本几个参数）
#下面代码的解释：执行change.sh脚本的时候，并且把 主机名和ip发给脚本了，这样脚本就可以通过
[root@localhost ~]$ sh  /server/scripts/change.sh 主机名 10.0.0.7
```

![image-20221121100249150](http://img.jicext.cn/imgimage-20221121100249150.png)

![image-20221121100255545](http://img.jicext.cn/imgimage-20221121100255545.png)

### 8) NetworkManager 关闭

```sh
如果没有影响远程连接.
systemctl stop NetworkManager
systemctl disable NetworkManager
systemctl restart network
```

### 9) hosts解析

> 可以不用解析

```sh
cat >>/etc/hosts <<EOF
172.16.1.5 lb01
172.16.1.6 lb02
172.16.1.7 web01
172.16.1.8 web02
172.16.1.9 web03
172.16.1.31 nfs01
172.16.1.41 backup
172.16.1.51 db01
172.16.1.61 m01
EOF
```

## 3.3 克隆

- **<font  size='4'>快速复制虚拟机的环境</font>**

![image-20221121100304144](http://img.jicext.cn/imgimage-20221121100304144.png)

![image-20221121100309127](http://img.jicext.cn/imgimage-20221121100309127.png)



# 4. 云服务器

## 4.1 概述

- 把物理服务器,通过虚拟化工具(vmware,kvm,openstack),创建多个相互独立的虚拟机(云服务器).
- 优点:
  - 按需分配.
  - 配置调整方便.

| **运营商** |                                     |
| ---------- | ----------------------------------- |
| 国内       | 阿里云,腾讯,华为云 ucloud           |
| 国外       | aws(亚马逊云),GCP谷歌云,Azure微软云 |

## 4.2 阿里云

- 云服务器
- 域名,解析
- 备案

![image-20221121100315811](http://img.jicext.cn/imgimage-20221121100315811.png)

![image-20221121100320265](http://img.jicext.cn/imgimage-20221121100320265.png)

![image-20221121100324099](http://img.jicext.cn/imgimage-20221121100324099.png)

> ⭐ ⭐ ⭐ ⭐ ⭐ 
>
> 地域:不同地区(城市). 不同地区的ecs内网不通.
>
> 可用区:同一个地区的不同机房. 内网是通的

![image-20221121100330247](http://img.jicext.cn/imgimage-20221121100330247.png)

## 4.3 基础操作

### 0) 远程连接

### 1) 重置密码(root)

> ⚠ 关机状态下,重置密码.
>
> ==重置实例密码==

![image-20221121100344709](http://img.jicext.cn/imgimage-20221121100344709.png)

### 2) 更换系统(重置系统)

> 重新安装系统⚠ **<font color='blue' >备份数据</font>** 关机

![image-20221121100349532](http://img.jicext.cn/imgimage-20221121100349532.png)

### 3) 快照

![image-20221121100355197](http://img.jicext.cn/imgimage-20221121100355197.png)

![image-20221121100402492](http://img.jicext.cn/imgimage-20221121100402492.png)

> 快照包年包月

![image-20221121100406994](http://img.jicext.cn/imgimage-20221121100406994.png)

![image-20221121100414413](http://img.jicext.cn/imgimage-20221121100414413.png)

> 恢复快照

![image-20221121100419172](http://img.jicext.cn/imgimage-20221121100419172.png)

![image-20221121100423720](http://img.jicext.cn/imgimage-20221121100423720.png)

### 4) 添加普通用户(sudo)权限

# 5. 云服务器搭建网站全流程

> :one: **<font color='blue' >需要有个云服务器</font> ⭕** 
>
> :two: **<font color='blue' >需要有一个域名</font> ⭕** 
>
> **:three: <font color='blue' >需要搭建网站</font>(nginx)** 
>
> **:four: <font color='blue' >配置DNS解析</font>⭕** 
>
> **:five: <font color='blue' >网站备案.</font>**

## 5.1 DNS解析

> 域名---->ip地址

```sh
game.oldboylinux.com  --- >  47.110.237.40
root@lidao-ecs:~# ping game.oldboylinux.com
ping: game.oldboylinux.com: Name or service not known
```

![image-20221121100432885](http://img.jicext.cn/imgimage-20221121100432885.png)

> 添加DNS记录. 
>
> A记录 域名 --->ip地址

![image-20221121100438648](http://img.jicext.cn/imgimage-20221121100438648.png)

> 配置dns解析后,就可以访问与连接

## 5.2 部署nginx搭建网站

```sh
1. 部署 nginx
yum install -y nginx
2. 启动
systemctl start nginx
systemctl enable nginx
3. 访问
4. 配置(代码)
```

![image-20221121100446307](http://img.jicext.cn/imgimage-20221121100446307.png)

```sh
wget -O /usr/share/nginx/html/index.html   www.baidu.com
```

> /usr/share/nginx/html/ 下面存放什么就可以用ip或域名访问day001.mp4 域名 game.oldboylinux.cn/day001.mp4访问 . 

## 5.3 备案

>  服务器在大陆.要通过域名访问.就要进行备案
