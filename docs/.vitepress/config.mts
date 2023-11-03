import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xiaoliu',
  lastUpdated: true,
  //左边界面
  themeConfig: {
    search: {
      provider: 'local', // 设置本地搜索
      
    },
    siteTitle: "小刘,欢迎回家！",
    logo: "https://kmfuture-py.oss-cn-hangzhou.aliyuncs.com/logo1.png",
    nav: [
      { text: "vitepress脚本一键部署", link: "md/vitepress/docker.md" },
      {
        text: "阶段回顾",
        items: [
          {
            text: "阶段回归架构准备",
            items: [
              { text: "架构准备", link: "md/cloud-service/architecture.md" },
              { text: "dockerfile部署", link: "md/cloud-service/static.md" },
            ],
            
          },
          {
            text: "Item B",
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    // 配置社交链接socialLinks
    socialLinks: [
      
      { icon: "github", link: "https://github.com/Liu-fu-gui" },
      { icon: "twitter", link: "..." },
      // 您还可以通过传递 SVG 字符串来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    
    //侧边栏
    sidebar: [
      
      {
        text: "云服务器基础架构",
        
        collapsed: true,
        items: [
          {
            text: "阶段回顾与综合架构准备",link: "md/cloud-service/architecture.md"
          },
          {
            text: "docker快速搭建一个静态网站",link: "md/cloud-service/static.md",
          },
          {
            text: "FastDfs分布式文件系统",link: "md/cloud-service/FastDFS.md",
          },
          {
            text: "git使用",
            link: "md/cloud-service/static.md",
          },
        ],
      },
      {
        text: "vitepress脚本一键部署",
        collapsed: true,
        items: [
          {
            text: "初始化配置vitpress",
            link: "md/vitepress/initialize.md",
          },
          {
            text: "用dockerfile进行云部署",
            link: "md/vitepress/docker.md",
          },
          {
            text: "vitepress页面美化",
            link: "md/vitepress/beautify.md",
          },
          
        ],
      },

      {
        text: "error报错",
        collapsed: true,
        items: [

          {
            text: "vscode-git-443",
            link: "md/error/vscode-git.md",
          }, 
        ],
        
      },
      {
        text: "sd-api",
        collapsed: true,
        items: [
          {
            text: "sd-api",link: "md/sd/sd-api.md"
          },
          {
            text: "sd-github-api",link: "md/sd/sd-github-api.md",
          },
        ],
      },
    ],
  }, 
});
  