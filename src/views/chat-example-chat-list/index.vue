<template>
  <div class="page">
    <AutoSrolling ref="autoSrolling">
      <div style="height: 20px"></div>
      <MessageList :list="list" maxWidth="1024px">
        <template #user="{ item }">
          <div class="message">
            <div class="message-content message-content-1">{{ item.question }}</div>
          </div>
        </template>
        <template #ai="{ item }">
          <div class="message">
            <div class="message-content message-content-2">{{ item.answer }}</div>
          </div>
        </template>
      </MessageList>
    </AutoSrolling>
  </div>
</template>

<script>
import AutoSrolling from '@/lib/chat/components/auto-scrolling'
import MessageList from '@/lib/chat/components/message-list'
import { mocklist } from '@/lib/chat/components/message-list/mock'

export default {
  name: 'ChatExample',
  components: {
    AutoSrolling,
    MessageList
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    const item = mocklist[0]
    for (let i = 0; i < 50; i++) {
      this.list.push({
        ...item,
        id: item.id + i,
        answer: i + item.answer
      })
    }
  },
  methods: {}
}
</script>

<style>
.page {
  position: relative;
  height: 100vh;
}

.message {
  position: relative;
  max-width: 70%;
}

.message-content {
  padding: 12px 16px;
  line-height: 1.7;
  font-size: 14px;
  border-radius: 16px;
}

.message-content-1 {
  background-color: #7565ff;
  color: white;
  border-top-right-radius: 4px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.message-content-2 {
  background-color: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
