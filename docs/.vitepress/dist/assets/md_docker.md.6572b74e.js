import{_ as s,o as n,c as a,O as e}from"./chunks/framework.62020867.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/docker.md","filePath":"md/docker.md"}'),l={name:"md/docker.md"},p=e(`<p>npm run build:docs 本地构建</p><ol><li>在VitePress项目的根目录中创建一个名为 <code>Dockerfile</code> 的文件。</li><li>打开 <code>Dockerfile</code> 文件并添加以下内容：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 基于Node.js的Docker镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM node:14</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 创建一个工作目录</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR /app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 复制package.json和package-lock.json文件到工作目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY package*.json ./</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将VitePress项目的文件复制到工作目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY . .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 修改文件权限和所有者</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN chmod +x ./node_modules/.bin/vitepress &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    chown -R node:node .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换用户到node</span></span>
<span class="line"><span style="color:#A6ACCD;">USER node</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 构建VitePress项目</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN npm run build:docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 暴露默认的VitePress端口</span></span>
<span class="line"><span style="color:#A6ACCD;">EXPOSE 3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 运行VitePress服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD [&quot;npm&quot;, &quot;run&quot;, &quot;docs:serve&quot;]</span></span></code></pre></div><ol><li>保存并关闭 <code>Dockerfile</code> 文件。</li><li>在项目根目录下，打开终端或命令提示符窗口，并执行以下命令来构建Docker镜像：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bashCopy code</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -t vitepress-v0.2 .</span></span></code></pre></div><p>这将根据Dockerfile构建一个名为 &quot;vitepress-v0.2&quot; 的Docker镜像。</p><ol><li>构建完成后，执行以下命令将Docker镜像推送到Docker Hub或私有的Docker镜像仓库（如果需要）：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bashCopy code</span></span>
<span class="line"><span style="color:#A6ACCD;">docker push vitepress-v0.2:latest</span></span></code></pre></div><ol><li>在Linux CentOS 7.9的服务器上，使用以下命令来拉取Docker镜像：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bashCopy code</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull vitepress-v0.2:latest</span></span></code></pre></div><ol><li>完成拉取后，创建一个Docker容器并运行VitePress项目：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bashCopy code</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 3000:3000 --name vitepress-container vitepress-v0.2:latest</span></span></code></pre></div><p>这将在后台运行一个名为 &quot;vitepress-container&quot; 的Docker容器，并将宿主机的端口3000映射到容器的端口3000。</p><p>默认映射是4173时</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 3000:4173 --name vitepress-container vitepress-v0.2:latest</span></span></code></pre></div>`,15),o=[p];function c(t,i,r,C,d,A){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
