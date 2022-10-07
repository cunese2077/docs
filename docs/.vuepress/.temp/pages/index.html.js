export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"首页\",\"description\":\"首页\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"二级\",\"slug\":\"二级\",\"link\":\"#二级\",\"children\":[{\"level\":3,\"title\":\"三级\",\"slug\":\"三级\",\"link\":\"#三级\",\"children\":[]}]},{\"level\":2,\"title\":\"二级\",\"slug\":\"二级-1\",\"link\":\"#二级-1\",\"children\":[{\"level\":3,\"title\":\"三级\",\"slug\":\"三级-1\",\"link\":\"#三级-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1665063220000,\"contributors\":[{\"name\":\"xiaoyang\",\"email\":\"2425261752@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")

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
