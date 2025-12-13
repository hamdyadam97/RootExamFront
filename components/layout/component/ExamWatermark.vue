<template>
  <div class="exam-watermark" aria-hidden="true">
    <div class="watermark-grid">
      <div v-for="n in repeats" :key="n" class="wm-item">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps<{ text: string, intervalSec?: number, opacity?: number }>()
const repeats = 30
const displayed = ref(props.text || '')

let timer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  // حدث النص (الوقت) كل فترة صغيرة لتجعل الـ watermark متحركة قليلاً
  const interval = props.intervalSec ?? 30
  timer = setInterval(() => {
    displayed.value = `${props.text} • ${new Date().toLocaleString()}`
  }, interval * 1000)
  displayed.value = `${props.text} • ${new Date().toLocaleString()}`
})
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.exam-watermark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.07;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #000;
  transform: rotate(-30deg);
  user-select: none;
}

</style>

