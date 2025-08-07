<template>
  <div class="page">
    <AutoSrolling ref="autoSrolling">
      <ChatListAnjian :list="list" class="ChatListOne" :userImage="userimage"> </ChatListAnjian>
    </AutoSrolling>
  </div>
</template>

<script>
import AutoSrolling from '@/lib/chat/components/auto-scrolling'
import ChatListAnjian from '@/lib/chat/example/chat-list-anjian'
import { mocklist } from '@/lib/chat/components/message-list/mock'

export default {
  name: 'ChatExample',
  components: {
    AutoSrolling,
    ChatListAnjian
  },
  data() {
    return {
      list: mocklist,
      userimage: require('./user.jpg')
    }
  },
  created() {},
  methods: {}
}
</script>

<style>
.page {
  position: relative;
  height: 100vh;
}

.ChatListOne {
  margin-top: 20px;
}
</style>
