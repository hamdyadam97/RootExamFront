<template>
  <div>
    <DashboardOne />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Dashboard",
  description: "",
});

definePageMeta({
  middleware: 'auth',
  layout: 'dashboard'
}) 


import DashboardOne from "@/components/dashboard/DashboardOne";
</script>

<style lang="scss" scoped></style>
