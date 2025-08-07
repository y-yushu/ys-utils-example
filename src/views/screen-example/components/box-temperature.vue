<template>
  <YsContainer ref="ysContainerRef" :width="positionInfo.width" :height="positionInfo.height" :left="positionInfo.left" :top="positionInfo.top">
    <img class="cu-img" src="https://pic.pngsucai.com/00/88/41/fa4e84e8f35da2f1.webp" alt="" />
  </YsContainer>
</template>

<script>
import YsContainer from '@/lib/screen/components/ys-container'
import { getConfig, setConfig } from '../utils'

export default {
  name: 'BoxTemperature',
  components: { YsContainer },
  data() {
    return {
      id: 'box-temperature',
      positionInfo: {
        width: 1200,
        height: 600,
        left: 120,
        top: 60
      }
    }
  },
  created() {
    this.initConfig()
  },
  methods: {
    // 获取配置
    initConfig() {
      const config = getConfig(this.id)
      this.positionInfo = {
        ...this.positionInfo,
        ...config
      }
    },

    saveConfig() {
      const dom = this.$refs.ysContainerRef
      if (!dom) return console.error('[未获取元素]')
      const config = dom.getConfig()

      setConfig(this.id, config)
      this.positionInfo = {
        ...this.positionInfo,
        ...config
      }
    }
  }
}
</script>

<style scoped>
.box-temperature {
  width: 100%;
  height: 100%;
}

.cu-img {
  width: 100%;
  height: 100%;
}
</style>
