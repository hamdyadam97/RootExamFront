<template>
  <div class="mt-60">
    <HelpCenter />
    <Faq />
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "RootExams | Help Center",
  description:
    "RootExams e-learning platforms.",
});

import Faq from "@/components/common/Faq";

import HelpCenter from "@/components/others/HelpCenter";
</script>

<style lang="scss" scoped></style>
