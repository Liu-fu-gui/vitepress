
# vitepress趣玩系列——首页样式优化

2022年08月18日 18:44 **·  阅读 2119**

![vitepress趣玩系列——首页样式优化](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87a5348af36f43e9b4e3aeac2455fefc~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?)

> 尝试开一个vitepress趣玩系列，讲一下我看到的比较有意思的vitepress玩法

我们经常可以看到vue官方出品的工具都会用上vitepress作为他们的官网，比如 `vitepress` `vueuse` `vitest`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0b85cfaf43e498e98bcb6ac34953e4e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aeb7b289bae7462da4aa9bdc3a4275e5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83ce8e179a0b4824a013020272c3cc99~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

但其实从官网的介绍中我们是很难发现这个样式是怎么设置的(对！说的就是你文档写得烂！！！) 接下来我从创建工程开始带大家也一起做一个好看的首页，有工程基础的可以跳过工程创建章节

## 本人工程环境

`win11` `vitepress 1.0.0-alpha.8`

## 创建工程

* 本地创建一个文件夹，命名随你，我的叫 `vitepress-fun`
* 用你喜欢的工具，初始化工程，我喜欢用 `pnpm`，这时候就会有一个 `package.json`文件，就表示工程初始化完成

  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">csharp</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-csharp copyable code-block-extension-codeShowNum" lang="csharp"><span class="code-block-extension-codeLine" data-line-num="1">npm init -y</span>
  <span class="code-block-extension-codeLine" data-line-num="2">yarn init -y</span>
  <span class="code-block-extension-codeLine" data-line-num="3">pnpm init -y</span>
  </code></pre>

  拓展，后面加-y表示全都yes，你也可以直接init，后面一路回车
* 安装vitepress

  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">csharp</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-csharp copyable code-block-extension-codeShowNum" lang="csharp"><span class="code-block-extension-codeLine" data-line-num="1">pnpm add vitepress</span>
  </code></pre>

  拓展，安装vitepress的时候，如果你看到一个peerDependencies的WARN，官网有给出解决方法

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50d6c26b3b094ee6a3fb325b4dfa20da~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61b50861fd7644a7b9ba5944a0490910~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

* 在根目录下创建 `index.md`，并随便输入内容
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1"># Hello World</span>
  </code></pre>
* 在 `package.json`中加入执行脚本
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">json</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-json copyable code-block-extension-codeShowNum" lang="json"><span class="code-block-extension-codeLine" data-line-num="1">{</span>
  <span class="code-block-extension-codeLine" data-line-num="2">    ...</span>
  <span class="code-block-extension-codeLine" data-line-num="3">    "scripts": {</span>
  <span class="code-block-extension-codeLine" data-line-num="4">      "dev": "vitepress dev",</span>
  <span class="code-block-extension-codeLine" data-line-num="5">      "build": "vitepress build",</span>
  <span class="code-block-extension-codeLine" data-line-num="6">      "serve": "vitepress serve"</span>
  <span class="code-block-extension-codeLine" data-line-num="7">    },</span>
  <span class="code-block-extension-codeLine" data-line-num="8">}</span>
  </code></pre>
* 执行命令 `pnpm dev`，打开链接即可运行文档

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27930ffbf7be480bb7951c7b5a93dd00~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到，这时候的md是一个文档模式，下面我们就开始进行首页设置，并且进行优化

## 布局模式

[官网这章节](https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.vuejs.org%2Fguide%2Ftheme-layout "https://vitepress.vuejs.org/guide/theme-layout")有详细介绍vitepress中的三种布局模式，分别是

* doc，文档模式
* page，页面模式
* home，首页模式

如果没有指定布局模式，默认使用doc文档模式

### doc 文档模式

文档模式就是，vitepress会帮助你解析md内容，并且使用自带的样式

我们修改 `index.md`的内容

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: doc</span>
<span class="code-block-extension-codeLine" data-line-num="3">---</span>
<span class="code-block-extension-codeLine" data-line-num="4"></span>
<span class="code-block-extension-codeLine" data-line-num="5"># 标题1</span>
<span class="code-block-extension-codeLine" data-line-num="6"></span>
<span class="code-block-extension-codeLine" data-line-num="7">## 标题2</span>
<span class="code-block-extension-codeLine" data-line-num="8"></span>
<span class="code-block-extension-codeLine" data-line-num="9">### 标题3</span>
<span class="code-block-extension-codeLine" data-line-num="10"></span>
<span class="code-block-extension-codeLine" data-line-num="11">- 分点1</span>
<span class="code-block-extension-codeLine" data-line-num="12">- 分点2</span>
<span class="code-block-extension-codeLine" data-line-num="13">- 分点3</span>
<span class="code-block-extension-codeLine" data-line-num="14"></span>
<span class="code-block-extension-codeLine" data-line-num="15">1. 分点1</span>
<span class="code-block-extension-codeLine" data-line-num="16">2. 分点2</span>
<span class="code-block-extension-codeLine" data-line-num="17">3. 分点3</span>
</code></pre>

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99deee798d094a36a2441d2f8055f94c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到就是自带样式的md内容

### page 页面模式

页面模式就是，vitepress会帮助你解析md内容，但不会使用自带样式

我们把 `index.md`的layout改一下

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: page</span>
<span class="code-block-extension-codeLine" data-line-num="3">---</span>
</code></pre>

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b87f02ea0214023b57cdb3e827063ab~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到，内容已经被解析成html标签，但没有预设的文档样式，这个模式下可以进行自定义主题等处理

### home 首页模式

这是我们这篇文章的主要讲解模式，这个模式下会使用vitepress自带的组件来控制首页样式，[官网这章节](https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.vuejs.org%2Fguide%2Ftheme-home-page "https://vitepress.vuejs.org/guide/theme-home-page")也详细介绍了这模式

我们先改下 `index.md`的内容，直接复制官网内容(懒得写)

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: home</span>
<span class="code-block-extension-codeLine" data-line-num="3"></span>
<span class="code-block-extension-codeLine" data-line-num="4">hero:</span>
<span class="code-block-extension-codeLine" data-line-num="5">  name: VitePress</span>
<span class="code-block-extension-codeLine" data-line-num="6">  text: Vite & Vue powered static site generator.</span>
<span class="code-block-extension-codeLine" data-line-num="7">  tagline: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="8">  image:</span>
<span class="code-block-extension-codeLine" data-line-num="9">    src: /logo.png</span>
<span class="code-block-extension-codeLine" data-line-num="10">    alt: VitePress</span>
<span class="code-block-extension-codeLine" data-line-num="11">  actions:</span>
<span class="code-block-extension-codeLine" data-line-num="12">    - theme: brand</span>
<span class="code-block-extension-codeLine" data-line-num="13">      text: Get Started</span>
<span class="code-block-extension-codeLine" data-line-num="14">      link: /guide/what-is-vitepress</span>
<span class="code-block-extension-codeLine" data-line-num="15">    - theme: alt</span>
<span class="code-block-extension-codeLine" data-line-num="16">      text: View on GitHub</span>
<span class="code-block-extension-codeLine" data-line-num="17">      link: https://github.com/vuejs/vitepress</span>
<span class="code-block-extension-codeLine" data-line-num="18">---</span>
<span class="code-block-extension-codeLine" data-line-num="19"></span>
</code></pre>

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/357befff629f4cc1bc9ab5234896768b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到，这时候已经是首页样式了

## 首页优化

接下来我们开始对首页进行优化

### 图标处理

我们先选择合适的图片作为图标，当然你也可以不用，把image属性去掉即可

在根目录下创建 `public`目录，然后把选好的图片放到里面，再修改image属性即可

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f303b70d39944af2935c00358e00faea~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1037c84ab2694f289f66bd88071eeca0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### 更改系统标题

这时候左上角的图标和tab栏的标题都还是默认的VitePress，我们需要改成我们自己的工程名

* 在根目录下创建 `.vitepress`目录，然后创建 `config.ts`文件，然后输入以下内容
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import { defineConfig } from 'vitepress'</span>
  <span class="code-block-extension-codeLine" data-line-num="2"></span>
  <span class="code-block-extension-codeLine" data-line-num="3">export default defineConfig({</span>
  <span class="code-block-extension-codeLine" data-line-num="4">  title: 'VitePress-Fun',</span>
  <span class="code-block-extension-codeLine" data-line-num="5">  themeConfig: {</span>
  <span class="code-block-extension-codeLine" data-line-num="6">    logo: '/cat.png',</span>
  <span class="code-block-extension-codeLine" data-line-num="7">    siteTitle: 'VitePress-Fun'</span>
  <span class="code-block-extension-codeLine" data-line-num="8">  }</span>
  <span class="code-block-extension-codeLine" data-line-num="9">})</span>
  </code></pre>
* 每次改配置都需要重启工程

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a5687c9d16843f5bab34236f1572014~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到tab的标题，左上角标题都改成系统名了

### 添加社交链接

这里可加可不加，我一般会把工程的github链接带上

* 在 `.vitepress/config.ts`下加上配置 `socialLinks`

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import { defineConfig } from 'vitepress'</span>
<span class="code-block-extension-codeLine" data-line-num="2"></span>
<span class="code-block-extension-codeLine" data-line-num="3">export default defineConfig({</span>
<span class="code-block-extension-codeLine" data-line-num="4">  title: 'VitePress-Fun',</span>
<span class="code-block-extension-codeLine" data-line-num="5">  themeConfig: {</span>
<span class="code-block-extension-codeLine" data-line-num="6">    logo: '/cat.png',</span>
<span class="code-block-extension-codeLine" data-line-num="7">    siteTitle: 'VitePress-Fun',</span>
<span class="code-block-extension-codeLine" data-line-num="8"></span>
<span class="code-block-extension-codeLine" data-line-num="9">    socialLinks: [</span>
<span class="code-block-extension-codeLine" data-line-num="10">      { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }</span>
<span class="code-block-extension-codeLine" data-line-num="11">    ]</span>
<span class="code-block-extension-codeLine" data-line-num="12">  }</span>
<span class="code-block-extension-codeLine" data-line-num="13">})</span>
</code></pre>

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33c5cc9e5a114b9da13a482ca657474d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到右上角会出现一个github图标，点击就能进入预设的链接

官网介绍有以下这些模式可以使用

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">interface SocialLink {</span>
<span class="code-block-extension-codeLine" data-line-num="2">  icon: SocialLinkIcon</span>
<span class="code-block-extension-codeLine" data-line-num="3">  link: string</span>
<span class="code-block-extension-codeLine" data-line-num="4">}</span>
<span class="code-block-extension-codeLine" data-line-num="5"></span>
<span class="code-block-extension-codeLine" data-line-num="6">type SocialLinkIcon =</span>
<span class="code-block-extension-codeLine" data-line-num="7">  | 'discord'</span>
<span class="code-block-extension-codeLine" data-line-num="8">  | 'facebook'</span>
<span class="code-block-extension-codeLine" data-line-num="9">  | 'github'</span>
<span class="code-block-extension-codeLine" data-line-num="10">  | 'instagram'</span>
<span class="code-block-extension-codeLine" data-line-num="11">  | 'linkedin'</span>
<span class="code-block-extension-codeLine" data-line-num="12">  | 'slack'</span>
<span class="code-block-extension-codeLine" data-line-num="13">  | 'twitter'</span>
<span class="code-block-extension-codeLine" data-line-num="14">  | 'youtube'</span>
<span class="code-block-extension-codeLine" data-line-num="15">  | { svg: string }</span>
<span class="code-block-extension-codeLine" data-line-num="16"></span>
</code></pre>

### 更改首页标题色调

默认首页展示的标题颜色是绿色，图标背景是白色，通过以下操作，可以获得跟官方官网一样的炫彩配色了

* 在 `.vitepress`目录下创建 `theme`目录，`theme`目录下创建 `index.ts`，输入以下内容
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import Theme from 'vitepress/theme'</span>
  <span class="code-block-extension-codeLine" data-line-num="2"></span>
  <span class="code-block-extension-codeLine" data-line-num="3">export default {</span>
  <span class="code-block-extension-codeLine" data-line-num="4">  ...Theme</span>
  <span class="code-block-extension-codeLine" data-line-num="5">}</span>
  </code></pre>
* 在 `theme`目录下创建 `style`目录，`style`目录下创建 `var.css`
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">css</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-css copyable code-block-extension-codeShowNum" lang="css"><span class="code-block-extension-codeLine" data-line-num="1">:root {</span>
  <span class="code-block-extension-codeLine" data-line-num="2">  --vp-home-hero-name-color: red;</span>
  <span class="code-block-extension-codeLine" data-line-num="3">}</span>
  </code></pre>
* 在 `theme/index.ts`下引入 `style/var.css`
  <pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import Theme from 'vitepress/theme'</span>
  <span class="code-block-extension-codeLine" data-line-num="2">import './style/var.css'</span>
  <span class="code-block-extension-codeLine" data-line-num="3"></span>
  <span class="code-block-extension-codeLine" data-line-num="4">export default {</span>
  <span class="code-block-extension-codeLine" data-line-num="5">  ...Theme</span>
  <span class="code-block-extension-codeLine" data-line-num="6">}</span>
  </code></pre>

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e70d669d2214374a2e9123164079ddd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以看到标题颜色已经变成设定的红色了

我们可以加点渐变色来让整体效果好看点，渐变色可以从[这个网站](https://link.juejin.cn/?target=https%3A%2F%2Fwebkul.github.io%2Fcoolhue%2F "https://webkul.github.io/coolhue/")获取

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">css</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-css copyable code-block-extension-codeShowNum" lang="css"><span class="code-block-extension-codeLine" data-line-num="1">:root {</span>
<span class="code-block-extension-codeLine" data-line-num="2">  /* 标题 */</span>
<span class="code-block-extension-codeLine" data-line-num="3">  --vp-home-hero-name-color: transparent;</span>
<span class="code-block-extension-codeLine" data-line-num="4">  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);</span>
<span class="code-block-extension-codeLine" data-line-num="5"></span>
<span class="code-block-extension-codeLine" data-line-num="6">  /* 图标背景 */</span>
<span class="code-block-extension-codeLine" data-line-num="7">  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);</span>
<span class="code-block-extension-codeLine" data-line-num="8">  --vp-home-hero-image-filter: blur(150px);</span>
<span class="code-block-extension-codeLine" data-line-num="9">}</span>
</code></pre>

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f8cf54d0a1940d8ae0f76b1406c81fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### 添加Features

官网下边可以加点Features来分点介绍

* 修改根目录下的 `index.md`，也就是作为首页的文件

<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: home</span>
<span class="code-block-extension-codeLine" data-line-num="3"></span>
<span class="code-block-extension-codeLine" data-line-num="4">hero:</span>
<span class="code-block-extension-codeLine" data-line-num="5">  name: VitePress-Fun</span>
<span class="code-block-extension-codeLine" data-line-num="6">  text: VitePress趣玩系列</span>
<span class="code-block-extension-codeLine" data-line-num="7">  tagline: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="8">  image:</span>
<span class="code-block-extension-codeLine" data-line-num="9">    src: /cat.png</span>
<span class="code-block-extension-codeLine" data-line-num="10">    alt: VitePress</span>
<span class="code-block-extension-codeLine" data-line-num="11">  actions:</span>
<span class="code-block-extension-codeLine" data-line-num="12">    - theme: brand</span>
<span class="code-block-extension-codeLine" data-line-num="13">      text: Get Started</span>
<span class="code-block-extension-codeLine" data-line-num="14">      link: /guide/what-is-vitepress</span>
<span class="code-block-extension-codeLine" data-line-num="15">    - theme: alt</span>
<span class="code-block-extension-codeLine" data-line-num="16">      text: View on GitHub</span>
<span class="code-block-extension-codeLine" data-line-num="17">      link: https://github.com/vuejs/vitepress</span>
<span class="code-block-extension-codeLine" data-line-num="18"></span>
<span class="code-block-extension-codeLine" data-line-num="19">features:</span>
<span class="code-block-extension-codeLine" data-line-num="20">  - icon: ⚡️</span>
<span class="code-block-extension-codeLine" data-line-num="21">    title: Vite, The DX that can't be beat</span>
<span class="code-block-extension-codeLine" data-line-num="22">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="23">  - icon: 🖖</span>
<span class="code-block-extension-codeLine" data-line-num="24">    title: Power of Vue meets Markdown</span>
<span class="code-block-extension-codeLine" data-line-num="25">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="26">  - icon: 🛠️</span>
<span class="code-block-extension-codeLine" data-line-num="27">    title: Simple and minimal, always</span>
<span class="code-block-extension-codeLine" data-line-num="28">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="29">---</span>
<span class="code-block-extension-codeLine" data-line-num="30"></span>
</code></pre>

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35a27f9e275242bca4ec7d82a4bb2c4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

这样首页就能显得没那么空，也能加上小点为系统做更详细的描述
