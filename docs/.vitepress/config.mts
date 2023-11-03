import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xiaoliu',
  //左边界面
  themeConfig: {
    search: {
      provider: 'local', // 注意冒号应为单冒号
    },
    siteTitle: "小刘,欢迎回家！",
    logo: "https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/文档网站所需要的图片/logo1.4f9rt58nd5s0.webp",
    
    
    nav: [
      { text: "vitepress脚本一键部署", link: "../md/初始化配置vitepress.md" },
      { text: "chatgpt充值付款流程", link: "../md/chatgpt付款流程.md" },
      {
        text: "阶段回顾",
        items: [
          {
            text: "阶段回归架构准备",
            items: [
              { text: "架构准备", link: "../md/1.阶段回顾与综合架构准备.md" },
              { text: "dockerfile部署", link: "../md/2.docker快速搭建一个静态网站.md" },
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
      { icon: "github", link: "https://github.com/Liu-wei-tao" },
      { icon: "twitter", link: "..." },
      // 您还可以通过传递 SVG 字符串来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
//1
    //侧边栏
    sidebar: [
      {
        text: "阶段回顾",
        collapsed: true,
        items: [
          {
            text: "阶段回顾与综合架构准备",link: "../md/1.阶段回顾与综合架构准备.md"
          },
          {
            text: "docker快速搭建一个静态网站",link: "../md/2.docker快速搭建一个静态网站.md",
          },
          {
            text: "FastDfs分布式文件系统",link: "../md/vitepress/FastDFS.md",
          },
          {
            text: "git使用",
            link: "../md/git使用.md",
          },
        ],
      },
      {
        text: "vitepress脚本一键部署",
        collapsed: true,
        items: [
          {
            text: "初始化配置vitpress",
            link: "../md/初始化配置vitepress.md",
          },
          {
            text: "用dockerfile进行云部署",
            link: "../md/docker.md",
          },
          
        ],
      },

      {
        text: "免费ai项目",
        collapsed: true,
        items: [

          {
            text: "python脚本余额查询",
            link: "../md/pythonapi.md",
          }, 
          {
            text: "chatgpt充值付款流程",
            link: "../md/chatgpt付款流程.md",
          }, 
        ],
        
      },
    ],
  }, 
});
