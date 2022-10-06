export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"English\"},\"/about\":{\"selectLanguageName\":\"简体中文\"}},\"colorMode\":\"light\",\"colorModeSwitch\":true,\"home\":\"/\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"关于\",\"link\":\"/about\"}],\"logo\":\"/favicon_1.ico\",\"logoDark\":\"/favicon.ico\",\"sidebar\":\"auto\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"editLinkPattern\":\"https://gitlab.com/owner/name\",\"lastUpdated\":true,\"lastUpdatedText\":\"上一次更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"notFound\":[\"抱歉，页面走丢了\"],\"backToHome\":\"回到首页\",\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
