<template>
  <ForgetForm />
</template>

<script setup>
useSeoMeta({
  title: "Forget Password",
  description: "",
});

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
})
import ForgetForm from "@/components/others/ForgetForm";
</script>

<style lang="scss" scoped></style>
