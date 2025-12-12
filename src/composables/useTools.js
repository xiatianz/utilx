import { ref, reactive } from 'vue'

// 收藏的工具ID列表
const favoriteTools = ref([])

// 最近使用的工具ID列表
const recentTools = ref([])

// 初始化数据
export const initToolsData = () => {
  // 从localStorage恢复收藏的工具
  if (typeof localStorage !== 'undefined') {
    const savedFavorites = localStorage.getItem('favoriteTools')
    if (savedFavorites) {
      try {
        favoriteTools.value = JSON.parse(savedFavorites)
      } catch (e) {
        console.error('Failed to parse favorite tools', e)
      }
    }

    // 从localStorage恢复最近使用的工具
    const savedRecent = localStorage.getItem('recentTools')
    if (savedRecent) {
      try {
        recentTools.value = JSON.parse(savedRecent)
      } catch (e) {
        console.error('Failed to parse recent tools', e)
      }
    }
  }
}

// 切换工具的收藏状态
export const toggleFavorite = (toolId) => {
  const index = favoriteTools.value.indexOf(toolId)
  if (index > -1) {
    // 取消收藏
    favoriteTools.value.splice(index, 1)
  } else {
    // 添加收藏
    favoriteTools.value.push(toolId)
  }
  
  // 保存到localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('favoriteTools', JSON.stringify(favoriteTools.value))
  }
  
  return index === -1 // 返回是否是新增收藏
}

// 检查工具是否被收藏
export const isFavorite = (toolId) => {
  return favoriteTools.value.includes(toolId)
}

// 添加最近使用的工具
export const addRecentTool = (toolId) => {
  // 移除已存在的
  const filtered = recentTools.value.filter(id => id !== toolId)
  // 添加到开头
  filtered.unshift(toolId)
  // 限制数量为20个
  recentTools.value = filtered.slice(0, 20)
  
  // 保存到localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('recentTools', JSON.stringify(recentTools.value))
  }
}

// 获取收藏的工具ID列表
export const getFavoriteTools = () => {
  return [...favoriteTools.value]
}

// 获取最近使用的工具ID列表
export const getRecentTools = () => {
  return [...recentTools.value]
}

// 清空最近使用的工具
export const clearRecentTools = () => {
  recentTools.value = []
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('recentTools')
  }
}