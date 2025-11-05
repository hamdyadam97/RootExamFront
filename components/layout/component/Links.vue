<template>
  <nuxt-link
    v-for="(link, index) in links"
    :key="index"
    :class="allClasses"
    :to="link.href"
  >
    {{ link.label }}
  </nuxt-link>
</template>

<script setup>
import { links } from "../../../data/links";


const props = defineProps(["allClasses"]);
</script>
