<template>
  <div class="page">
    <div class="chat-box">
      <ChatListPublic style="background: #fff" :config="config" />
    </div>
  </div>
</template>

<script>
import 'ys-md-rendering/plugin/ys-mermaid'
import ChatListPublic from '@/lib/chat/example/chat-list-public'

export default {
  name: 'ChatExample',
  components: {
    ChatListPublic
  },
  data() {
    return {
      config: {
        baseUrl: 'http://localhost/dev-api',
        token:
          'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImE2MGI5NjczLWJkYmEtNGE3Ny1iY2QwLTUxYzlkODRjNTIxYyJ9.FA9FRPYmG1TGg6894IoKNFzIk3yetvQDuDNygE2oxGcYT6suBvuPLMhrB_ImhEtpQuU2HcRh94UqSGS2RxZUjw'
      }
    }
  },
  created() {},
  methods: {}
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
