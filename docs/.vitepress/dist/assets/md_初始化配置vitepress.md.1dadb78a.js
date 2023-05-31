import{_ as s,o as n,c as a,O as l}from"./chunks/framework.62020867.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/初始化配置vitepress.md","filePath":"md/初始化配置vitepress.md"}'),p={name:"md/初始化配置vitepress.md"},o=l(`<h2 id="_1-快速上手" tabindex="-1">1. 快速上手 <a class="header-anchor" href="#_1-快速上手" aria-label="Permalink to &quot;1. 快速上手&quot;">​</a></h2><p>使用git bash运行sh脚本</p><p><img src="https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/%E6%96%87%E6%A1%A3%E7%BD%91%E7%AB%99%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E5%9B%BE%E7%89%87/image-20230531163503933.2wbmpbcwugy0.webp" alt="image-20230531163503933"></p><h2 id="执行前" tabindex="-1">执行前 <a class="header-anchor" href="#执行前" aria-label="Permalink to &quot;执行前&quot;">​</a></h2><p><img src="https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/%E6%96%87%E6%A1%A3%E7%BD%91%E7%AB%99%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E5%9B%BE%E7%89%87/image-20230531163340110.hgifzijndy0.webp" alt="image-20230531163340110"></p><h2 id="执行中" tabindex="-1">执行中 <a class="header-anchor" href="#执行中" aria-label="Permalink to &quot;执行中&quot;">​</a></h2><p><img src="https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/%E6%96%87%E6%A1%A3%E7%BD%91%E7%AB%99%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E5%9B%BE%E7%89%87/image-20230531163526527.6e24apvkdsg0.webp" alt="image-20230531163526527"></p><h2 id="执行后" tabindex="-1">执行后 <a class="header-anchor" href="#执行后" aria-label="Permalink to &quot;执行后&quot;">​</a></h2><p><img src="https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/%E6%96%87%E6%A1%A3%E7%BD%91%E7%AB%99%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E5%9B%BE%E7%89%87/image-20230531202046381.rwjo3bb2ij4.webp" alt="image-20230531202046381"></p><h2 id="脚本代码" tabindex="-1">脚本代码 <a class="header-anchor" href="#脚本代码" aria-label="Permalink to &quot;脚本代码&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 通过命令行参数获取项目名称</span></span>
<span class="line"><span style="color:#A6ACCD;">project_name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;font-style:italic;">$1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 1: 创建文件夹并打开</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$project_name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$project_name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 2: 初始化</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 3: 安装 VitePress 和 Vue</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 4: 创建 index.md</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 5: 创建 .vitepress 目录和 config.js 文件</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vitepress</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vitepress</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 写入 config.js 的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">EOF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> config.js</span></span>
<span class="line"><span style="color:#C3E88D;">module.exports = {</span></span>
<span class="line"><span style="color:#C3E88D;">    title: &quot;标题&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    description: &quot;Just playing around.&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 6: 在根目录下创建 package.json 文件</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../../</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 写入 package.json 的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">EOF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> package.json</span></span>
<span class="line"><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;name&quot;: &quot;</span><span style="color:#A6ACCD;">$project_name</span><span style="color:#C3E88D;">&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;license&quot;: &quot;MIT&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  },</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;vitepress&quot;: &quot;^1.0.0-beta.1&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;vue&quot;: &quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 7: 创建 index.md 文件的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">EOF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> docs/index.md</span></span>
<span class="line"><span style="color:#C3E88D;">---</span></span>
<span class="line"><span style="color:#C3E88D;">layout: home</span></span>
<span class="line"><span style="color:#C3E88D;"> </span></span>
<span class="line"><span style="color:#C3E88D;">hero:</span></span>
<span class="line"><span style="color:#C3E88D;">  name: 名称</span></span>
<span class="line"><span style="color:#C3E88D;">  text: 文本</span></span>
<span class="line"><span style="color:#C3E88D;">  tagline: 标语</span></span>
<span class="line"><span style="color:#C3E88D;">  actions:</span></span>
<span class="line"><span style="color:#C3E88D;">    - theme: brand</span></span>
<span class="line"><span style="color:#C3E88D;">      text: 开始</span></span>
<span class="line"><span style="color:#C3E88D;">      link: /guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#C3E88D;">    - theme: alt</span></span>
<span class="line"><span style="color:#C3E88D;">      text: View on GitHub</span></span>
<span class="line"><span style="color:#C3E88D;">      link: https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#C3E88D;"> </span></span>
<span class="line"><span style="color:#C3E88D;">features:</span></span>
<span class="line"><span style="color:#C3E88D;">  - icon: &quot;⚡️&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    title: &quot;Vite, The DX that can&#39;t be beat&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    details: &quot;Lorem ipsum...&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  - icon: &quot;🖖&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    title: &quot;Power of Vue meets Markdown&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    details: &quot;Lorem ipsum...&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  - icon: &quot;🛠️&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    title: &quot;Simple and minimal, always&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    details: &quot;Lorem ipsum...&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    :root {</span></span>
<span class="line"><span style="color:#C3E88D;">  --vp-home-hero-name-color: transparent;</span></span>
<span class="line"><span style="color:#C3E88D;">  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 步骤 8: 启动文档站点</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div>`,11),e=[o];function t(c,i,r,y,C,D){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};
