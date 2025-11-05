<template>
  <div
    v-for="(elm, i) in footerLinks"
    :key="i"
    class="col-xl-2 col-lg-4 col-md-6"
  >
    <div :class="allClasses">{{ elm.title }}</div>
    <div class="d-flex y-gap-10 flex-column">
      <nuxt-link v-for="(itm, i2) in elm.links" :key="i2" :to="itm.href">
        {{ itm.label }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { footerLinks } from "../../../data/footerLinks";


const props = defineProps(["allClasses"]);
</script>
