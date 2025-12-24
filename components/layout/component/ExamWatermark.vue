<template>
  <div class="exam-watermark" aria-hidden="true">
    <div class="wm-wrapper">
      <!-- LOGO -->
      <img
        src="/logo.png"
        alt="Company Logo"
        class="wm-logo"
        draggable="false"
      />

      <!-- TEXT -->
      <div class="wm-text">
        {{ displayed }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  text: string
  intervalSec?: number
}>()

const displayed = ref(props.text)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  const interval = props.intervalSec ?? 30

  const update = () => {
    displayed.value = `${props.text} • ${new Date().toLocaleString()}`
  }

  update()
  timer = setInterval(update, interval * 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.exam-watermark {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Container */
.wm-wrapper {
  display: flex;
  flex-direction: column; /* اللوجو فوق النص */
  align-items: center;
  user-select: none;
}

/* Logo */
.wm-logo {
  width: 260px;        /* كبر اللوجو */
  max-width: 55vw;
  opacity: 0.5;        /* واضح لكن مش مزعج */
  margin-bottom: 16px;
}

/* Text */
.wm-text {
  font-size: 26px;     /* خط أصغر */
  font-weight: 500;
  color: #000;
  opacity: 0.06;       /* شفاف جدًا */
  white-space: nowrap;
}
</style>
