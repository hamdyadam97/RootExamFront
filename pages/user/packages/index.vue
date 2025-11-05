<template>
      <PricingDashboard/>
</template>

<script setup>
useSeoMeta({
  title: "Packages",
  description: "",
});

definePageMeta({
  layout: 'dashboard'
})
 
import PricingDashboard from "@/components/common/PricingDashboard";
</script>

<style lang="scss" scoped></style>
