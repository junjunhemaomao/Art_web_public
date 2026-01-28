import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CodeFather",
  description: "CodeFather Art Web",
  srcDir: '.',
  outDir: './.vitepress/dist',
  ignoreDeadLinks: true,
  rewrites: {
      'README.md': 'index.md',
      ':path(.*)/README.md': ':path/index.md'
    },
  themeConfig: {
    logo: '/logo.png',
    nav: [
        { text: "全流程美术", link: "/全流程美术/" },
        { text: "电影和阅读", link: '/电影和阅读/' },
        { text: "游戏引擎", link: '/游戏引擎/' },
        { text: "游戏设计", link: '/游戏设计/' },
        { text: "插件工具", link: '/插件工具/' },
        { text: "技术美术", link: '/技术美术/' },
        { text: "项目实践", link: '/项目实践/' },
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      // { icon: 'github', link: '...' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present CodeFather'
    }
  }
})
