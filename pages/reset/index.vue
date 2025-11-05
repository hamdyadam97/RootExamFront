<template>
  <ResetForm />
</template>

<script setup>
useSeoMeta({
  title: "Reset Password",
  description: "",
});

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
})
import ResetForm from "@/components/others/ResetForm";
</script>

<style lang="scss" scoped></style>
