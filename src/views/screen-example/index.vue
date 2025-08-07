<template>
  <div class="page">
    <YsScaleScreen :is-edit="isEdit">
      <!-- 背景 -->
      <div class="background">
        <button class="cu-button" @click="openEditMode">{{ this.isEdit ? '关闭' : '开启' }}编辑</button>
        <button class="cu-button" @click="savePosition">保存位置</button>
      </div>
      <BoxTemperature ref="boxTemperature" />

      <BoxTemperature2 ref="boxTemperature2" />
    </YsScaleScreen>
  </div>
</template>

<script>
import YsScaleScreen from '@/lib/screen/components/ys-scale-screen'
import BoxTemperature from './components/box-temperature'
import BoxTemperature2 from './components/box-temperature2'

export default {
  name: 'HomePage',
  components: {
    YsScaleScreen,
    BoxTemperature,
    BoxTemperature2
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    openEditMode() {
      this.isEdit = !this.isEdit
      console.log('🚀 ~ openEditMode ~ 编辑状态:', this.isEdit ? '开启' : '关闭')
    },

    savePosition() {
      const chil1 = this.$refs.boxTemperature
      const chil2 = this.$refs.boxTemperature2
      if (!chil1 || !chil2) return console.error('[未获取元素]')
      chil1.saveConfig()
      chil2.saveConfig()
      console.log('🚀 ~ savePosition ~ 保存配置')
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background: #dcdfe6;
}

.background {
  width: 100%;
  height: 100%;
  background: #f2f6fc;
}

.cu-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-right: 10px;
  transition: 0.1s;
  font-weight: 500;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  background-image: none;
  border-color: #409eff;
}
</style>
