export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"English\"},\"/about\":{\"selectLanguageName\":\"简体中文\"}},\"colorMode\":\"light\",\"colorModeSwitch\":true,\"home\":\"/\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"关于\",\"link\":\"/about\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/\"}],\"logo\":\"/favicon_1.ico\",\"logoDark\":\"/favicon.ico\",\"sidebar\":\"auto\",\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"docsRepo\":\"https://github.com/cunese2077/docs\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/edit/:branch/:path\",\"lastUpdated\":true,\"lastUpdatedText\":\"上一次更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"notFound\":[\"抱歉，页面走丢了\"],\"backToHome\":\"回到首页\",\"toggleColorMode\":\"切换颜色模式\",\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"openInNewWindow\":\"open in new window\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
