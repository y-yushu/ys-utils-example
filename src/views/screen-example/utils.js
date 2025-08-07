const DEFAULT_CONFIG_KEY = 'DEFAULT_CONFIG_KEY'
// 获取配置
export const getConfig = id => {
  const d1 = localStorage.getItem(DEFAULT_CONFIG_KEY) || '{}'
  const d2 = JSON.parse(d1)
  return d2[id] || {}
}

// 保存配置
export const setConfig = (id, config) => {
  const d1 = localStorage.getItem(DEFAULT_CONFIG_KEY) || '{}'
  const d2 = JSON.parse(d1)
  d2[id] = config
  localStorage.setItem(DEFAULT_CONFIG_KEY, JSON.stringify(d2))
}
