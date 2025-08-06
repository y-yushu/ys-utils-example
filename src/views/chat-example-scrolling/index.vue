<template>
  <div class="page">
    <!-- 背景 -->
    <BgDecoration />

    <!-- 滚动组件 -->
    <div class="chat-container">
      <div class="chat-buttons">
        <button @click="test1">开始滚动</button>
        <button @click="test2">停止滚动</button>
        <br />
        <button @click="test3">添加一项</button>
        <button @click="test4">移除一项</button>
      </div>
      <AutoSrolling ref="autoSrolling" @can-scroll-to-bottom="handleCanScrollToBottom">
        <div class="chat-main">
          <div v-for="i in list" :key="i" class="ttt">
            <span>key == {{ i }}</span>
          </div>
        </div>
      </AutoSrolling>
    </div>
  </div>
</template>

<script>
import AutoSrolling from '@/lib/chat/components/auto-scrolling/index.vue'
import BgDecoration from './components/bg-decoration.vue'

const getkey = () => Math.random()

export default {
  name: 'ChatExample',
  components: {
    AutoSrolling,
    BgDecoration
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list = Array.from({ length: 2 }).map(() => getkey())
  },
  methods: {
    handleCanScrollToBottom(canScrollToBottom) {
      console.log('canScrollToBottom', canScrollToBottom)
    },

    test1() {
      const dom = this.$refs.autoSrolling
      if (dom) dom.startScroll()
    },
    test2() {
      const dom = this.$refs.autoSrolling
      if (dom) dom.stopScroll()
    },

    test3() {
      this.list.push(getkey())
    },
    test4() {
      const halfLength = Math.floor(this.list.length / 2)
      this.list.splice(0, halfLength)
    }
  }
}
</script>

<style>
.page {
  position: relative;
  height: 100vh;
}

.chat-container {
  position: relative;
  height: 100%;
  z-index: 2;
}

.chat-buttons {
  position: absolute;
  top: 0;
  left: 0;
}

.chat-main {
  margin-inline: auto;
  max-width: 1024px;
}

.ttt {
  height: 300px;
  border: 1px solid red;
}
</style>
