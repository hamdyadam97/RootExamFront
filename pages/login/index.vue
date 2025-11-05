<template>
  <LoginForm />
</template>

<script setup>
useSeoMeta({
  title: "Login",
  description: "",
});



definePageMeta({
  layout: 'auth',
  middleware: 'auth',

})
import LoginForm from "@/components/others/LoginForm";
</script>

<style lang="scss" scoped></style>
