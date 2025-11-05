<template>
  <Grades />
</template>

<script setup>
useSeoMeta({
  title:
    "Dashboard Grades || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import Grades from "@/components/dashboard/Grades";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style lang="scss" scoped></style>
