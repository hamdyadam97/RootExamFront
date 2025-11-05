<template>
  <SignUpForm />
</template>

<script setup>
useSeoMeta({
  title: "Sign up",
  description: "",
});

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
})
import SignUpForm from "@/components/others/SignUpForm";
</script>

<style lang="scss" scoped></style>
