import{_ as e,o as n,c as a,O as s}from"./chunks/framework.62020867.js";const k=JSON.parse('{"title":"vitepress趣玩系列——首页样式优化","description":"","frontmatter":{},"headers":[],"relativePath":"md/vitepress页面优化.md","filePath":"md/vitepress页面优化.md"}'),o={name:"md/vitepress页面优化.md"},c=s(`<h1 id="vitepress趣玩系列——首页样式优化" tabindex="-1">vitepress趣玩系列——首页样式优化 <a class="header-anchor" href="#vitepress趣玩系列——首页样式优化" aria-label="Permalink to &quot;vitepress趣玩系列——首页样式优化&quot;">​</a></h1><p>2022年08月18日 18:44 <strong>· 阅读 2119</strong></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87a5348af36f43e9b4e3aeac2455fefc~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?" alt="vitepress趣玩系列——首页样式优化"></p><blockquote><p>尝试开一个vitepress趣玩系列，讲一下我看到的比较有意思的vitepress玩法</p></blockquote><p>我们经常可以看到vue官方出品的工具都会用上vitepress作为他们的官网，比如 <code>vitepress</code> <code>vueuse</code> <code>vitest</code></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0b85cfaf43e498e98bcb6ac34953e4e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aeb7b289bae7462da4aa9bdc3a4275e5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83ce8e179a0b4824a013020272c3cc99~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>但其实从官网的介绍中我们是很难发现这个样式是怎么设置的(对！说的就是你文档写得烂！！！) 接下来我从创建工程开始带大家也一起做一个好看的首页，有工程基础的可以跳过工程创建章节</p><h2 id="本人工程环境" tabindex="-1">本人工程环境 <a class="header-anchor" href="#本人工程环境" aria-label="Permalink to &quot;本人工程环境&quot;">​</a></h2><p><code>win11</code> <code>vitepress 1.0.0-alpha.8</code></p><h2 id="创建工程" tabindex="-1">创建工程 <a class="header-anchor" href="#创建工程" aria-label="Permalink to &quot;创建工程&quot;">​</a></h2><ul><li><p>本地创建一个文件夹，命名随你，我的叫 <code>vitepress-fun</code></p></li><li><p>用你喜欢的工具，初始化工程，我喜欢用 <code>pnpm</code>，这时候就会有一个 <code>package.json</code>文件，就表示工程初始化完成</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">csharp</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-csharp copyable code-block-extension-codeShowNum" lang="csharp"><span class="code-block-extension-codeLine" data-line-num="1">npm init -y</span>
<span class="code-block-extension-codeLine" data-line-num="2">yarn init -y</span>
<span class="code-block-extension-codeLine" data-line-num="3">pnpm init -y</span>
</code></pre><p>拓展，后面加-y表示全都yes，你也可以直接init，后面一路回车</p></li><li><p>安装vitepress</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">csharp</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-csharp copyable code-block-extension-codeShowNum" lang="csharp"><span class="code-block-extension-codeLine" data-line-num="1">pnpm add vitepress</span>
</code></pre><p>拓展，安装vitepress的时候，如果你看到一个peerDependencies的WARN，官网有给出解决方法</p></li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50d6c26b3b094ee6a3fb325b4dfa20da~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61b50861fd7644a7b9ba5944a0490910~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><ul><li>在根目录下创建 <code>index.md</code>，并随便输入内容<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1"># Hello World</span>
</code></pre></li><li>在 <code>package.json</code>中加入执行脚本<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">json</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-json copyable code-block-extension-codeShowNum" lang="json"><span class="code-block-extension-codeLine" data-line-num="1">{</span>
<span class="code-block-extension-codeLine" data-line-num="2">    ...</span>
<span class="code-block-extension-codeLine" data-line-num="3">    &quot;scripts&quot;: {</span>
<span class="code-block-extension-codeLine" data-line-num="4">      &quot;dev&quot;: &quot;vitepress dev&quot;,</span>
<span class="code-block-extension-codeLine" data-line-num="5">      &quot;build&quot;: &quot;vitepress build&quot;,</span>
<span class="code-block-extension-codeLine" data-line-num="6">      &quot;serve&quot;: &quot;vitepress serve&quot;</span>
<span class="code-block-extension-codeLine" data-line-num="7">    },</span>
<span class="code-block-extension-codeLine" data-line-num="8">}</span>
</code></pre></li><li>执行命令 <code>pnpm dev</code>，打开链接即可运行文档</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27930ffbf7be480bb7951c7b5a93dd00~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到，这时候的md是一个文档模式，下面我们就开始进行首页设置，并且进行优化</p><h2 id="布局模式" tabindex="-1">布局模式 <a class="header-anchor" href="#布局模式" aria-label="Permalink to &quot;布局模式&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.vuejs.org%2Fguide%2Ftheme-layout" title="https://vitepress.vuejs.org/guide/theme-layout" target="_blank" rel="noreferrer">官网这章节</a>有详细介绍vitepress中的三种布局模式，分别是</p><ul><li>doc，文档模式</li><li>page，页面模式</li><li>home，首页模式</li></ul><p>如果没有指定布局模式，默认使用doc文档模式</p><h3 id="doc-文档模式" tabindex="-1">doc 文档模式 <a class="header-anchor" href="#doc-文档模式" aria-label="Permalink to &quot;doc 文档模式&quot;">​</a></h3><p>文档模式就是，vitepress会帮助你解析md内容，并且使用自带的样式</p><p>我们修改 <code>index.md</code>的内容</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
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
</code></pre><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99deee798d094a36a2441d2f8055f94c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到就是自带样式的md内容</p><h3 id="page-页面模式" tabindex="-1">page 页面模式 <a class="header-anchor" href="#page-页面模式" aria-label="Permalink to &quot;page 页面模式&quot;">​</a></h3><p>页面模式就是，vitepress会帮助你解析md内容，但不会使用自带样式</p><p>我们把 <code>index.md</code>的layout改一下</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: page</span>
<span class="code-block-extension-codeLine" data-line-num="3">---</span>
</code></pre><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b87f02ea0214023b57cdb3e827063ab~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到，内容已经被解析成html标签，但没有预设的文档样式，这个模式下可以进行自定义主题等处理</p><h3 id="home-首页模式" tabindex="-1">home 首页模式 <a class="header-anchor" href="#home-首页模式" aria-label="Permalink to &quot;home 首页模式&quot;">​</a></h3><p>这是我们这篇文章的主要讲解模式，这个模式下会使用vitepress自带的组件来控制首页样式，<a href="https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.vuejs.org%2Fguide%2Ftheme-home-page" title="https://vitepress.vuejs.org/guide/theme-home-page" target="_blank" rel="noreferrer">官网这章节</a>也详细介绍了这模式</p><p>我们先改下 <code>index.md</code>的内容，直接复制官网内容(懒得写)</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
<span class="code-block-extension-codeLine" data-line-num="2">layout: home</span>
<span class="code-block-extension-codeLine" data-line-num="3"></span>
<span class="code-block-extension-codeLine" data-line-num="4">hero:</span>
<span class="code-block-extension-codeLine" data-line-num="5">  name: VitePress</span>
<span class="code-block-extension-codeLine" data-line-num="6">  text: Vite &amp; Vue powered static site generator.</span>
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
</code></pre><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/357befff629f4cc1bc9ab5234896768b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到，这时候已经是首页样式了</p><h2 id="首页优化" tabindex="-1">首页优化 <a class="header-anchor" href="#首页优化" aria-label="Permalink to &quot;首页优化&quot;">​</a></h2><p>接下来我们开始对首页进行优化</p><h3 id="图标处理" tabindex="-1">图标处理 <a class="header-anchor" href="#图标处理" aria-label="Permalink to &quot;图标处理&quot;">​</a></h3><p>我们先选择合适的图片作为图标，当然你也可以不用，把image属性去掉即可</p><p>在根目录下创建 <code>public</code>目录，然后把选好的图片放到里面，再修改image属性即可</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f303b70d39944af2935c00358e00faea~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1037c84ab2694f289f66bd88071eeca0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><h3 id="更改系统标题" tabindex="-1">更改系统标题 <a class="header-anchor" href="#更改系统标题" aria-label="Permalink to &quot;更改系统标题&quot;">​</a></h3><p>这时候左上角的图标和tab栏的标题都还是默认的VitePress，我们需要改成我们自己的工程名</p><ul><li>在根目录下创建 <code>.vitepress</code>目录，然后创建 <code>config.ts</code>文件，然后输入以下内容<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import { defineConfig } from &#39;vitepress&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="2"></span>
<span class="code-block-extension-codeLine" data-line-num="3">export default defineConfig({</span>
<span class="code-block-extension-codeLine" data-line-num="4">  title: &#39;VitePress-Fun&#39;,</span>
<span class="code-block-extension-codeLine" data-line-num="5">  themeConfig: {</span>
<span class="code-block-extension-codeLine" data-line-num="6">    logo: &#39;/cat.png&#39;,</span>
<span class="code-block-extension-codeLine" data-line-num="7">    siteTitle: &#39;VitePress-Fun&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="8">  }</span>
<span class="code-block-extension-codeLine" data-line-num="9">})</span>
</code></pre></li><li>每次改配置都需要重启工程</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a5687c9d16843f5bab34236f1572014~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到tab的标题，左上角标题都改成系统名了</p><h3 id="添加社交链接" tabindex="-1">添加社交链接 <a class="header-anchor" href="#添加社交链接" aria-label="Permalink to &quot;添加社交链接&quot;">​</a></h3><p>这里可加可不加，我一般会把工程的github链接带上</p><ul><li>在 <code>.vitepress/config.ts</code>下加上配置 <code>socialLinks</code></li></ul><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import { defineConfig } from &#39;vitepress&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="2"></span>
<span class="code-block-extension-codeLine" data-line-num="3">export default defineConfig({</span>
<span class="code-block-extension-codeLine" data-line-num="4">  title: &#39;VitePress-Fun&#39;,</span>
<span class="code-block-extension-codeLine" data-line-num="5">  themeConfig: {</span>
<span class="code-block-extension-codeLine" data-line-num="6">    logo: &#39;/cat.png&#39;,</span>
<span class="code-block-extension-codeLine" data-line-num="7">    siteTitle: &#39;VitePress-Fun&#39;,</span>
<span class="code-block-extension-codeLine" data-line-num="8"></span>
<span class="code-block-extension-codeLine" data-line-num="9">    socialLinks: [</span>
<span class="code-block-extension-codeLine" data-line-num="10">      { icon: &#39;github&#39;, link: &#39;https://github.com/gumingWu/vitepress-fun&#39; }</span>
<span class="code-block-extension-codeLine" data-line-num="11">    ]</span>
<span class="code-block-extension-codeLine" data-line-num="12">  }</span>
<span class="code-block-extension-codeLine" data-line-num="13">})</span>
</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33c5cc9e5a114b9da13a482ca657474d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到右上角会出现一个github图标，点击就能进入预设的链接</p><p>官网介绍有以下这些模式可以使用</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">interface SocialLink {</span>
<span class="code-block-extension-codeLine" data-line-num="2">  icon: SocialLinkIcon</span>
<span class="code-block-extension-codeLine" data-line-num="3">  link: string</span>
<span class="code-block-extension-codeLine" data-line-num="4">}</span>
<span class="code-block-extension-codeLine" data-line-num="5"></span>
<span class="code-block-extension-codeLine" data-line-num="6">type SocialLinkIcon =</span>
<span class="code-block-extension-codeLine" data-line-num="7">  | &#39;discord&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="8">  | &#39;facebook&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="9">  | &#39;github&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="10">  | &#39;instagram&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="11">  | &#39;linkedin&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="12">  | &#39;slack&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="13">  | &#39;twitter&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="14">  | &#39;youtube&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="15">  | { svg: string }</span>
<span class="code-block-extension-codeLine" data-line-num="16"></span>
</code></pre><h3 id="更改首页标题色调" tabindex="-1">更改首页标题色调 <a class="header-anchor" href="#更改首页标题色调" aria-label="Permalink to &quot;更改首页标题色调&quot;">​</a></h3><p>默认首页展示的标题颜色是绿色，图标背景是白色，通过以下操作，可以获得跟官方官网一样的炫彩配色了</p><ul><li>在 <code>.vitepress</code>目录下创建 <code>theme</code>目录，<code>theme</code>目录下创建 <code>index.ts</code>，输入以下内容<pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import Theme from &#39;vitepress/theme&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="2"></span>
<span class="code-block-extension-codeLine" data-line-num="3">export default {</span>
<span class="code-block-extension-codeLine" data-line-num="4">  ...Theme</span>
<span class="code-block-extension-codeLine" data-line-num="5">}</span>
</code></pre></li><li>在 <code>theme</code>目录下创建 <code>style</code>目录，<code>style</code>目录下创建 <code>var.css</code><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">css</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-css copyable code-block-extension-codeShowNum" lang="css"><span class="code-block-extension-codeLine" data-line-num="1">:root {</span>
<span class="code-block-extension-codeLine" data-line-num="2">  --vp-home-hero-name-color: red;</span>
<span class="code-block-extension-codeLine" data-line-num="3">}</span>
</code></pre></li><li>在 <code>theme/index.ts</code>下引入 <code>style/var.css</code><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">ts</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-ts copyable code-block-extension-codeShowNum" lang="ts"><span class="code-block-extension-codeLine" data-line-num="1">import Theme from &#39;vitepress/theme&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="2">import &#39;./style/var.css&#39;</span>
<span class="code-block-extension-codeLine" data-line-num="3"></span>
<span class="code-block-extension-codeLine" data-line-num="4">export default {</span>
<span class="code-block-extension-codeLine" data-line-num="5">  ...Theme</span>
<span class="code-block-extension-codeLine" data-line-num="6">}</span>
</code></pre></li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e70d669d2214374a2e9123164079ddd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>可以看到标题颜色已经变成设定的红色了</p><p>我们可以加点渐变色来让整体效果好看点，渐变色可以从<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwebkul.github.io%2Fcoolhue%2F" title="https://webkul.github.io/coolhue/" target="_blank" rel="noreferrer">这个网站</a>获取</p><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">css</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-css copyable code-block-extension-codeShowNum" lang="css"><span class="code-block-extension-codeLine" data-line-num="1">:root {</span>
<span class="code-block-extension-codeLine" data-line-num="2">  /* 标题 */</span>
<span class="code-block-extension-codeLine" data-line-num="3">  --vp-home-hero-name-color: transparent;</span>
<span class="code-block-extension-codeLine" data-line-num="4">  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);</span>
<span class="code-block-extension-codeLine" data-line-num="5"></span>
<span class="code-block-extension-codeLine" data-line-num="6">  /* 图标背景 */</span>
<span class="code-block-extension-codeLine" data-line-num="7">  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);</span>
<span class="code-block-extension-codeLine" data-line-num="8">  --vp-home-hero-image-filter: blur(150px);</span>
<span class="code-block-extension-codeLine" data-line-num="9">}</span>
</code></pre><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f8cf54d0a1940d8ae0f76b1406c81fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><h3 id="添加features" tabindex="-1">添加Features <a class="header-anchor" href="#添加features" aria-label="Permalink to &quot;添加Features&quot;">​</a></h3><p>官网下边可以加点Features来分点介绍</p><ul><li>修改根目录下的 <code>index.md</code>，也就是作为首页的文件</li></ul><pre><div class="code-block-extension-header"><div class="code-block-extension-headerLeft"><div class="code-block-extension-foldBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z" data-name="Down"></path></svg></div></div><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">md</span><div class="code-block-extension-copyCodeBtn">复制代码</div></div></div><code class="hljs language-md copyable code-block-extension-codeShowNum" lang="md"><span class="code-block-extension-codeLine" data-line-num="1">---</span>
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
<span class="code-block-extension-codeLine" data-line-num="21">    title: Vite, The DX that can&#39;t be beat</span>
<span class="code-block-extension-codeLine" data-line-num="22">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="23">  - icon: 🖖</span>
<span class="code-block-extension-codeLine" data-line-num="24">    title: Power of Vue meets Markdown</span>
<span class="code-block-extension-codeLine" data-line-num="25">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="26">  - icon: 🛠️</span>
<span class="code-block-extension-codeLine" data-line-num="27">    title: Simple and minimal, always</span>
<span class="code-block-extension-codeLine" data-line-num="28">    details: Lorem ipsum...</span>
<span class="code-block-extension-codeLine" data-line-num="29">---</span>
<span class="code-block-extension-codeLine" data-line-num="30"></span>
</code></pre><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35a27f9e275242bca4ec7d82a4bb2c4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>这样首页就能显得没那么空，也能加上小点为系统做更详细的描述</p>`,74),i=[c];function d(l,t,p,b,m,r){return n(),a("div",null,i)}const x=e(o,[["render",d]]);export{k as __pageData,x as default};
