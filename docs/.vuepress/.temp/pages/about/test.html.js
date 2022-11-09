export const data = JSON.parse("{\"key\":\"v-524c3f6c\",\"path\":\"/about/test.html\",\"title\":\"1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1667985713000,\"contributors\":[{\"name\":\"Yang\",\"email\":\"2425261752@qq.com\",\"commits\":1},{\"name\":\"xiaoyang\",\"email\":\"2425261752@qq.com\",\"commits\":1}]},\"filePathRelative\":\"about/test.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
