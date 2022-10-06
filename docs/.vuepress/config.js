import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    // 默认主题配置
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
  }),
}
