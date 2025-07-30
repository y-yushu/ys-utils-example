<template>
  <div class="page">
    <YsScaleScreen>
      <div class="box" @click="handleClick">
        <div v-for="(item, i) in dots" :key="i" class="dot" :style="{ top: item.y + 'px', left: item.x + 'px' }">{{ i }}</div>
      </div>
    </YsScaleScreen>
  </div>
</template>

<script>
import YsScaleScreen from '@/lib/screen/components/ys-scale-screen/index2.vue'

export default {
  name: 'HomePage',
  components: {
    YsScaleScreen
  },
  data() {
    return {
      dots: []
    }
  },
  methods: {
    handleClick(e) {
      console.log('🚀 ~ handleClick ~ e:', e)
      this.dots.push({ x: e.offsetX, y: e.offsetY })
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background: greenyellow;
}

.box {
  position: relative;
  width: 100%;
  height: 100%;
  background: orange;
}

.dot {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
  background: blue;
}
</style>
