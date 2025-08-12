<template>
  <div class="page">
    <div class="chat-box">
      <ChatListPublic />
    </div>
    <!-- <AutoSrolling ref="autoSrolling">
      <ChatListAnjian :list="list" :userImage="userimage">
        <template #ai-before="{ item }">
          <StepList v-if="item.meta && item.meta.steps" :steps="item.meta.steps" />
        </template>
      </ChatListAnjian>
    </AutoSrolling> -->
  </div>
</template>

<script>
import ChatListPublic from '@/lib/chat/example/chat-list-public'
// import AutoSrolling from '@/lib/chat/components/auto-scrolling'
// import StepList from '@/lib/chat/components/step-list'
// import ChatInput from '@/lib/chat/components/chat-input'
import { mocklist } from '@/lib/chat/components/message-list/mock'

export default {
  name: 'ChatExample',
  components: {
    // AutoSrolling,
    ChatListPublic
    // StepList,
    // ChatInput
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
  padding: 50px;
  height: 100%;
  box-sizing: border-box;
  background: #c0c4cc;
}

.chat-box {
  width: 100%;
  height: 800px;
}
</style>
