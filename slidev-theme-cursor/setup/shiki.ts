// 导入 Slidev 的 Shiki 设置相关类型 / Import Slidev's Shiki setup related types
import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

// 定义 Shiki 代码高亮设置 / Define Shiki code highlighting setup
export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    // 配置主题：深色和浅色模式 / Configure themes: dark and light modes
    themes: {
      dark: 'vitesse-dark',   // 深色主题使用 vitesse-dark / Dark theme uses vitesse-dark
      light: 'vitesse-light', // 浅色主题使用 vitesse-light / Light theme uses vitesse-light
    },
  }
})
