<template>
  <div class="page">
    <div class="header">
      <h1>工具包</h1>
    </div>
    <div class="box">
      <div
        class="item glass-effect"
        v-for="(item, i1) in list"
        :key="i1"
        :style="{ animationDelay: `${i1 * 0.1}s` }"
        :class="{ 'has-desc': item.desc }"
        @click="toDetail(item)"
      >
        <div class="raster-effect"></div>
        <div class="content">
          <div class="icon-wrapper">
            <div class="icon">{{ item.title.charAt(0) }}</div>
          </div>
          <div class="text-content">
            <div class="title">{{ item.title }}</div>
            <div class="desc" v-if="item.desc">{{ item.desc }}</div>
          </div>
        </div>
        <div class="hover-indicator">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      list: [
        { title: '大屏组件示例', path: '/screen-example', desc: '自适应大屏，及可拖拽调整大小组件' },
        { title: '对话组件示例', path: '/chat-example-chat-list', desc: 'chat对话公共组件' }
      ]
    }
  },
  methods: {
    toDetail(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style scoped>
/* 页面整体样式 */
.page {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #2b5876, #4e4376);
  color: #fff;
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-y: auto;
}

/* 头部样式 */
.header {
  margin-bottom: 2.5rem;
  position: relative;
}

/* 标题样式 */
h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.8s ease-in-out forwards;
}

/* 渐变动画关键帧 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 卡片容器 */
.box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  justify-content: stretch;
  margin-bottom: 3rem;
}

/* 卡片项目 */
.item {
  position: relative;
  padding: 1.5rem;
  min-height: 120px;
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease-in-out forwards;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.08);
  cursor: pointer;
}

.item.has-desc {
  min-height: 140px;
}

.item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 8px 15px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.2);
}

.item:hover .icon-wrapper {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
}

.item:hover .hover-indicator {
  opacity: 1;
  transform: translateX(0);
}

.raster-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.06) 0px, rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 6px);
  background-size: 10px 10px;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.5s ease;
  z-index: 1;
}

.item:hover .raster-effect {
  opacity: 0.8;
  background-position: -10px -10px;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 6px);
  background-size: 12px 12px;
}

.item:nth-child(3n + 1):hover .raster-effect {
  background-image: repeating-linear-gradient(45deg, rgba(116, 235, 213, 0.08) 0px, rgba(116, 235, 213, 0.08) 1px, transparent 1px, transparent 6px);
}

.item:nth-child(3n + 2):hover .raster-effect {
  background-image: repeating-linear-gradient(45deg, rgba(172, 182, 229, 0.08) 0px, rgba(172, 182, 229, 0.08) 1px, transparent 1px, transparent 6px);
}

/* 内容布局 */
.content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

/* 图标样式 */
.icon-wrapper {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.icon {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
}

/* 文本内容 */
.text-content {
  flex-grow: 1;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.desc {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 悬停指示器 */
.hover-indicator {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
}

/* 适配移动端 */
@media (max-width: 768px) {
  .page {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .box {
    grid-template-columns: 1fr;
  }

  .item {
    min-height: 100px;
  }
}
</style>
