<template>
  <div
    v-for="(item, index) in rating"
    :key="index"
    :class="`icon-star ${textSize || 'text-9'} ${
      textColor || 'text-yellow-1'
    } `"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["star", "textSize", "textColor"]);
const rating = ref([]);

onMounted(() => {
  for (let i = Math.round(props.star); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
