<template>
  <div class="page">
    <AutoSrolling ref="autoSrolling">
      <ChatListAnjian :list="list" :userImage="userimage">
        <template #ai-before="{ item }">
          <StepList v-if="item.meta && item.meta.steps" :steps="item.meta.steps" />
        </template>
      </ChatListAnjian>
    </AutoSrolling>

    <div class="footer">
      <div class="footer_box">
        <ChatInput v-model="textarea" :is-file-upload="false" />
        <!-- :disabled="disabled"
        
          :show-history-button="false"
          :show-empty-button="!!messages.length"
          @haildeEmpty="haildeEmpty"
          @haildeStop="haildeStop"
          @haildeSending="haildeSending" -->
      </div>
    </div>
  </div>
</template>

<script>
import AutoSrolling from '@/lib/chat/components/auto-scrolling'
import ChatListAnjian from '@/lib/chat/example/chat-list-anjian'
import StepList from '@/lib/chat/components/step-list'
import ChatInput from '@/lib/chat/components/chat-input'
import { mocklist } from '@/lib/chat/components/message-list/mock'

export default {
  name: 'ChatExample',
  components: {
    AutoSrolling,
    ChatListAnjian,
    StepList,
    ChatInput
  },
  data() {
    return {
      list: mocklist,
      userimage: require('./user.jpg'),

      textarea: ''
    }
  },
  created() {},
  methods: {
    tolll(item) {
      console.log('🚀 ~ tolll ~ item:', item)
      return '123123'
    }
  }
}
</script>

<style>
.page {
  position: relative;
  height: 100vh;
}

.cu-input {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 1200px;
  margin-inline: auto;
  width: 400px;
  height: 80px;
  background: yellow;
}

/* 底部输入区域 */
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: auto;
  background: #ffffff;
}

.footer_box {
  position: relative;
  bottom: 0;
  margin-inline: auto;
  margin-bottom: 20px;
  width: 1200px;
  max-width: 100%;
}
</style>
