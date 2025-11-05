<template>
  <OtpForm />
</template>

<script setup>
useSeoMeta({
  title: "OTP Verification",
  description: "",
});

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
})
import OtpForm from "@/components/others/OtpForm";
</script>

<style lang="scss" scoped></style>
