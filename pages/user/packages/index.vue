<template>
   <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} • Dashboard`"
/>

</ClientOnly>
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
 import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;
console.log(user);
const userName = computed(() => {
 
  return `${user.first_name || ''} ${user.mobile_number || ''}`.trim() || 'Guest';
});
import PricingDashboard from "@/components/common/PricingDashboard";
</script>

<style lang="scss" scoped></style>
