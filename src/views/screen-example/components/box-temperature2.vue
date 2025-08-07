<template>
  <YsContainer ref="ysContainerRef" :width="positionInfo.width" :height="positionInfo.height" :left="positionInfo.left" :top="positionInfo.top">
    <img class="cu-img" src="https://img.777ppt.com/mat_img/81db7701.jpg?x-oss-process=image/resize,w_1920,m_lfit/quality,q_80/interlace,1" alt="" />
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
      id: 'box-temperature-2',
      positionInfo: {
        width: 500,
        height: 500,
        left: 600,
        top: 600
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
