<template>
  <a
    v-for="(link, index) in socialMediaLinks"
    :key="index"
    :class="componentsClass"
    :href="link.href"
  >
    <i :class="`${link.iconClassName} ${textSize}`"></i>
  </a>
</template>

<script setup>
import { socialMediaLinks } from "../../data/socialLinks";

const props = defineProps(["componentsClass", "textSize"]);
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
