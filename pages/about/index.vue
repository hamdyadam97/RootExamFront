<template>
 
  <About />
  <StepsOne />
  <LearningJourney />
  <Testimonials />

  <LearningPathSix />

  <BecomeInstactor />
  <BacomeStudent />

  <Brands />
</template>

<script setup>
useSeoMeta({
  title:
    "RootExams",
  description:
    "RootExams e-learning platforms.",
});

import About from "@/components/about/About";
import BecomeInstactor from "@/components/common/BecomeInstactor";
import BacomeStudent from "@/components/common/BecomeStudent";
import Brands from "@/components/common/Brands";
import PageLinks from "@/components/common/PageLinks";
import StepsOne from "@/components/common/StepsOne";

// import Footer from "@/components/layout/footers/FooterFive";
// import Header from "@/components/layout/headers/HeaderFive";
import Testimonials from "@/components/common/Testimonials";
import LearningJourney from "@/components/common/LearningJourney";
import LearningPathSix from "@/components/common/LearningPathSix";
</script>

<style lang="scss" scoped></style>
