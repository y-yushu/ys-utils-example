<template>
  <div class="bg-decoration">
    <div class="floating-shape shape-1"></div>
    <div class="floating-shape shape-2"></div>
    <div class="floating-shape shape-3"></div>
    <div class="floating-shape shape-4"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(79, 172, 254, 0.38);
  animation: float 25s infinite linear;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 12%;
  animation-delay: -8s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 25%;
  right: 25%;
  animation-delay: -15s;
}

.shape-4 {
  width: 90px;
  height: 90px;
  bottom: 25%;
  left: 15%;
  animation-delay: -20s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  33% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.6;
  }
  66% {
    transform: translateY(10px) translateX(-8px);
    opacity: 0.4;
  }
}
</style>
