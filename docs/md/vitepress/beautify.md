# vitepress趣玩系列——首页样式优化



讲一下我看到的比较有意思的vitepress玩法

我们经常可以看到vue官方出品的工具都会用上vitepress作为他们的官网，比如vitepress vueuse vitest

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/7.jpg" alt= "7">

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/8.jpg" alt= "8">

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/9.jpg" alt= "9">
但其实从官网的介绍中我们是很难发现这个样式是怎么设置的(对！说的就是你文档写得烂！！！) 接下来我从创建工程开始带大家也一起做一个好看的首页，有工程基础的可以跳过工程创建章节

## 本人工程环境

```
win11 vitepress 1.0.0-alpha.8
```

创建工程
本地创建一个文件夹，命名随你，我的叫vitepress-fun

用你喜欢的工具，初始化工程，我喜欢用pnpm，这时候就会有一个package.json文件，就表示工程初始化完成

```
npm init -y
yarn init -y
pnpm init -y
```

拓展，后面加-y表示全都yes，你也可以直接init，后面一路回车

安装vitepress

csharp
复制代码
pnpm add vitepress
拓展，安装vitepress的时候，如果你看到一个peerDependencies的WARN，官网有给出解决方法

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/10.jpg" alt= "10">

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/11.jpg" alt= "11">

在根目录下创建index.md，并随便输入内

```
Hello World
```

在package.json中加入执行脚本

json
复制代码

```
{
    ...
    "scripts": {
      "dev": "vitepress dev",
      "build": "vitepress build",
      "serve": "vitepress serve"
    },
}
```

执行命令pnpm dev，打开链接即可运行文档

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/12.jpg" alt= "12">

可以看到，这时候的md是一个文档模式，下面我们就开始进行首页设置，并且进行优化

## 布局模式

官网这章节有详细介绍vitepress中的三种布局模式，分别是

​    doc，文档模式
​    page，页面模式
​    home，首页模式
如果没有指定布局模式，默认使用doc文档模式

## doc 文档模式

文档模式就是，vitepress会帮助你解析md内容，并且使用自带的样式

我们修改index.md的内容

```
layout: doc
---

# 标题1

## 标题2

### 标题3

- 分点1
- 分点2
- 分点3

1. 分点1
2. 分点2
3. 分点3
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/13.jpg" alt= "13">

可以看到就是自带样式的md内容

## page 页面模式

页面模式就是，vitepress会帮助你解析md内容，但不会使用自带样式

我们把index.md的layout改一下



```
layout: page
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/14.jpg" alt= "14">

可以看到，内容已经被解析成html标签，但没有预设的文档样式，这个模式下可以进行自定义主题等处理

## home 首页模式

这是我们这篇文章的主要讲解模式，这个模式下会使用vitepress自带的组件来控制首页样式，官网这章节也详细介绍了这模式

我们先改下index.md的内容，直接复制官网内容(懒得写)

```
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:

   - theme: brand
     text: Get Started
     link: /guide/what-is-vitepress
        - theme: alt
          text: View on GitHub
          link: https://github.com/vuejs/vitepress
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/15.jpg" alt= "15">

可以看到，这时候已经是首页样式了

## 首页优化

接下来我们开始对首页进行优化

## 图标处理

我们先选择合适的图片作为图标，当然你也可以不用，把image属性去掉即可

在根目录下创建public目录，然后把选好的图片放到里面，再修改image属性即可

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/16.jpg" alt= "16">

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/17.jpg" alt= "17">

## 更改系统标题

这时候左上角的图标和tab栏的标题都还是默认的VitePress，我们需要改成我们自己的工程名

在根目录下创建.vitepress目录，然后创建config.ts文件，然后输入以下内容

```
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress-Fun',
  themeConfig: {
    logo: '/cat.png',
    siteTitle: 'VitePress-Fun'
  }
})
```

每次改配置都需要重启工程

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/18.jpg" alt= "18">

可以看到tab的标题，左上角标题都改成系统名了

## 添加社交链接

这里可加可不加，我一般会把工程的github链接带上

  在.vitepress/config.ts下加上配置socialLinks

```
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress-Fun',
  themeConfig: {
    logo: '/cat.png',
    siteTitle: 'VitePress-Fun',

​    socialLinks: [
​      { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
​    ]
  }
})
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/19.jpg" alt= "19">

可以看到右上角会出现一个github图标，点击就能进入预设的链接

官网介绍有以下这些模式可以使用

```
interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```

## 更改首页标题色调

默认首页展示的标题颜色是绿色，图标背景是白色，通过以下操作，可以获得跟官方官网一样的炫彩配色了

在.vitepress目录下创建theme目录，theme目录下创建index.ts，输入以下内容

```
import Theme from 'vitepress/theme'

export default {
  ...Theme
}
```

在theme目录下创建style目录，style目录下创建var.css

```
:root {
  --vp-home-hero-name-color: red;
}
```

在theme/index.ts下引入style/var.css

```
import Theme from 'vitepress/theme'
import './style/var.css'

export default {
  ...Theme
}
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/20.jpg" alt= "20">

可以看到标题颜色已经变成设定的红色了

我们可以加点渐变色来让整体效果好看点，渐变色可以从这个网站获取

```
:root {
  /* 标题 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);

  /* 图标背景 */
  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  --vp-home-hero-image-filter: blur(150px);
}
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/21.jpg" alt= "21">

## 添加Features

官网下边可以加点Features来分点介绍

修改根目录下的index.md，也就是作为首页的文件

```
layout: home

hero:
  name: VitePress-Fun
  text: VitePress趣玩系列
  tagline: Lorem ipsum...
  image:
    src: /cat.png
    alt: VitePress
  actions:

   - theme: brand
     text: Get Started
     link: /guide/what-is-vitepress
        - theme: alt
          text: View on GitHub
          link: https://github.com/vuejs/vitepress

features:

  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
```



---

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/22.jpg" alt= "22">

这样首页就能显得没那么空，也能加上小点为系统做更详细的描述

## 首页颜色源码解读

我们通过使用var.css文件，给根节点root添加了css变量，来改变首页的标题和图片的背景色， 那我们要怎么确认用什么属性就能修改我希望修改的元素呢

### 方法一：控制台

通过控制台我们就能直观的看出希望修改的样式有没有使用css变量，以图片背景做例子

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/23.jpg" alt= "23">

在控制台中，我们看到

```
.image-bg {
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
}
```

这两个变量就是我们通过root下注入的css变量，因为我们显式的修改了两个变量，所以系统优先使用我们设定的样式

## 方案二：看源码

我们拉取vitepress的源码，看到src/client/theme-default/Layout.vue，这个sfc就是文档的布局组件，三种layout模式都是使用的这个组件

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/24.jpg" alt= "24">

看到VPContent组件，这里会通过frontmatter.layout来切换使用的布局模式，所以通过这个文件我们可以看到，三种模式对应的组件名为

doc：VPDoc
page：VPPage
home：VPHome

我们主要看VPHome组件

拓展，vitepress使用的读取md头部信息所使用的插件是gray-matter，感兴趣的可以查阅下使用方法

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/25.jpg" alt= "25">

这里就是首页模式下的布局情况，可以看到组件名就是对应的我们在index.md中设置的hero和features

关于首页标题和图标的样式在VPHomeHero组件中

做个预告，可以看到下面有个Content组件，可以自定义首页下半部分的内容，将会是下篇文章讲的内容，敬请期待~

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/26.jpg" alt= "26">

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/27.jpg" alt= "27">

终于看到首页布局的真面目了！我们先看到标题的css属性

```
.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
```

可以明显看到这里使用的css变量，就是我们在var.css中设定的css变量

同理，我们看图片的css属性

```
.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  transform: translate(-50%, -50%);
}
```

也是我们在var.css中设定的css变量

所以，我们可以直接在VitePress源码中，找到我们希望更改样式的组件，观察他们的css样式是否使用css变量，然后我们在var.css中进行更改即可

我们根据这个方法，改一下首页的按钮样式

## 实践，更改首页按钮样式

首页的按钮通过hero下的actions属性控制，通过actions.theme控制样式，默认是brand，也就是绿色按钮，总共有三种模式：brand alt sponsor

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/28.jpg" alt= "28">

通过分析源码，可以看到button的样式控制，通过传入的theme，计算动态classes，然后传给组件

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/29.jpg" alt= "29">

这里就是brand模式下的button样式，可以看到使用了三个css变量，我们在var.css中对着三个样式进行改动

```
/* var.css */
:root {
  /* 标题 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);

  /* 图标背景 */
  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  --vp-home-hero-image-filter: blur(150px);

  /* brand按钮 */
  --vp-button-brand-border: #F6CEEC;
  --vp-button-brand-text: #F6CEEC;
  --vp-button-brand-bg: #D939CD;

  --vp-button-brand-hover-border: #F6CEEC;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #D939CD;

  --vp-button-brand-active-border: #F6CEEC;
}
```

<img src="https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/md/vitepress/30.jpg" alt= "30">

这样我们的首页样式优化就差不多啦