<template>
  <!-- <HeroFive /> -->
  

</template>

<script setup>
useSeoMeta({
  title: "RootExams",
  description: "RootExams e-learning platforms.",
});

import HeroTwo from "@/components/homes/heros/HeroTwo";
import LearningPathFive from "@/components/common/LearningCommon";
import TestimonialsEight from "@/components/homes/testimonials/TestimonialsEight";
import Categories from "@/components/homes/categories/Categories";
import WhyUs from "@/components/homes/why_us";
import Services from "@/components/homes/Services";
import Faqs from "@/components/homes/Faqs";
import Instructors from "@/components/common/Instructors";
// import Testimonials from "@/components/homes/Testimonials";
import Events from "@/components/homes/Events";
import Online_Appointment from "@/components/homes/Online_Appointment";
// import Contacts from "@/components/homes/Contacts";
// import CategoriesFive from "@/components/homes/categories/CategoriesFive";
// import Pricing from "@/components/common/Pricing";
// import BlogsFive from "@/components/homes/blogs/BlogsFive";
// import RecomentationFive from "@/components/homes/LearningRecomentation/RecomentationFive";
// import HeroFive from "@/components/homes/heros/HeroFive";

onMounted(() => {
  home();
})

const categories = ref();
const instructors = ref();
const blogs = ref();
const default_image = ref(null);

const home = async () => {

  const { data, message } = await useNuxtApp().$api('/landing/index', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (data) {
    categories.value = data.categories;
    instructors.value = data.instructors;
    blogs.value = data.blogs;
    default_image.value = data.default_image;
  }

}
</script>

<style lang="scss" scoped></style>
