<template>
  <Assignment />
</template>

<script setup>
useSeoMeta({
  title:
    "Dashboard Assignment || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});

definePageMeta({
  layout: 'dashboard'
})

import Assignment from "@/components/dashboard/Assignment";
</script>

<style lang="scss" scoped></style>
