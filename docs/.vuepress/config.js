import { defaultTheme } from 'vuepress'

export default {
  // github 仓库后缀
  base: "/docs/",
  title: "cunese",
  // description: "",    //  会被每个页面的 description 覆盖
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'vuepress v2.x' }]
],
locales: {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  // title 会覆盖上面设置的 title 
  '/': {
    lang: 'en-US',
    // title: 'VuePress',
    description: 'Vue-powered Static Site Generator',
  },
  '/about': {
    lang: 'zh-CN',
    // title: 'VuePress',
    description: 'Vue 驱动的静态网站生成器',
  },
},
  theme: defaultTheme({
        // 默认主题配置
        // 多语言配置
        locales: {
          '/': {
            selectLanguageName: 'English',
          },
          '/about': {
            selectLanguageName: '简体中文',
          },
        },
        // 颜色模式
        colorMode: 'light',
         // 颜色模式开关，默认 true 
        colorModeSwitch: true, 
        // 首页的路径
        home: '/',
         // 导航栏
         navbar: [
           {
             text: '首页',
             link: '/',
           },
           {
             text: '关于',
             link: '/about',
           },
           {
            text: 'GitHub',
            link: 'https://github.com/',
          },
         ],
         // logo 
         logo: '/favicon_1.ico',
         // 夜间模式 的 logo 
         logoDark: '/favicon.ico',
         // 侧边栏
         sidebar: 'auto',
         // 编辑此页 (是否允许、编辑文字、仓库地址、分支、目录名、编辑此页的链接)
         editLink: true,
         editLinkText: '在 GitHub 上编辑此页',
         docsRepo: 'https://github.com/cunese2077/docs',
         docsBranch: 'main',
         docsDir: 'docs',
         editLinkPattern: ':repo/edit/:branch/:path',
         // 最近更新
         lastUpdated: true,
         lastUpdatedText: '上一次更新',
         // 贡献者
         contributors: false,
         contributorsText: '贡献者',
         // 404 页面提示
         notFound: ['抱歉，页面走丢了'],
         // 404 页面 回到首页 文字
         backToHome: '回到首页',
         // 切换黑暗模式按钮文字提示 (三元表达式，有问题)
        //  toggleColorMode: this.colorModeSwitch ? '开启暗夜模式' : '开启白昼模式',
        toggleColorMode:  '切换颜色模式' ,
      }),
}