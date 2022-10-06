import { defaultTheme } from 'vuepress'

export default {
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
         ],
         // logo 
         logo: '/favicon_1.ico',
         // 夜间模式 的 logo 
         logoDark: '/favicon.ico',
         // 侧边栏
         sidebar: 'auto',
         // 编辑此页 
         editLink: true,
         editLinkText: 'Edit this page',
         editLinkPattern: 'https://gitlab.com/owner/name',
         // 最近更新
         lastUpdated: true,
         lastUpdatedText: '上一次更新',
         // 贡献者
         contributors: true,
         contributorsText: '贡献者',
         // 404 页面提示
         notFound: ['抱歉，页面走丢了'],
         // 404 页面 回到首页 文字
         backToHome: '回到首页',
      }),
}


