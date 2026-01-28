import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 辅助函数：扫描目录并生成 sidebar 配置
function generateSidebar() {
  const sidebar = {}
  const rootDir = __dirname // 当前是 .vitepress 目录
  const projectRoot = path.resolve(rootDir, '..')
  
  // 获取所有一级目录
  const dirs = fs.readdirSync(projectRoot).filter(f => {
    const fullPath = path.join(projectRoot, f)
    return fs.statSync(fullPath).isDirectory() && !f.startsWith('.') && f !== 'node_modules'
  })

  dirs.forEach(dir => {
    const readmePath = path.join(projectRoot, dir, 'README.md')
    const indexMdPath = path.join(projectRoot, dir, 'index.md') // 也检查 index.md
    
    // 优先读取 README.md，其次 index.md
    let targetFile = null
    if (fs.existsSync(readmePath)) targetFile = readmePath
    else if (fs.existsSync(indexMdPath)) targetFile = indexMdPath
    
    if (targetFile) {
      try {
        const content = fs.readFileSync(targetFile, 'utf-8')
        const items = []
        
        // 匹配二级标题 (## Title)
        const regex = /^##\s+(.+)$/gm
        let match
        while ((match = regex.exec(content)) !== null) {
          const title = match[1].trim()
          // 生成对应的锚点链接 (VitePress 默认将标题转换为小写并替换空格为 -)
          // 这里做一个简单的处理，更复杂的锚点生成逻辑可能需要 slugify 库，但通常简单的中文标题直接作为 hash 即可
          const anchor = title.toLowerCase().replace(/\s+/g, '-')
          
          items.push({
            text: title,
            link: `/${dir}/#${title}` // 直接链接到锚点，VitePress 会处理中文编码
          })
        }
        
        if (items.length > 0) {
          sidebar[`/${dir}/`] = [
            {
              text: dir,
              link: `/${dir}/`,
              items: items
            }
          ]
        }
      } catch (e) {
        console.error(`Error processing ${dir}:`, e)
      }
    }
  })
  
  return sidebar
}

export default defineConfig({
  base: '/Art_web/',
  title: "CodeFather",
  description: "CodeFather Art Web",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
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
    // 动态生成侧边栏配置
    sidebar: generateSidebar(),
    // 保持页面内标题导航开启，方便查看具体文章结构
    outline: {
      level: 'deep',
      label: '页面导航'
    },
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
