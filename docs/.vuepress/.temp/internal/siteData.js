export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"en-US\",\"title\":\"cunese\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"vuepress v2.x\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"description\":\"Vue-powered Static Site Generator\"},\"/about\":{\"lang\":\"zh-CN\",\"description\":\"Vue 驱动的静态网站生成器\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
