<template>
  <div v-if="props.error.statusCode == 404" class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <NotFound />
      <Footer />
    </div>
  </div>
  <div v-else>
    An error found with {{ props.error.statusCode }} status
  </div>
</template>
  
<script setup>
const props = defineProps({
  error: Object
})
useSeoMeta({
  title:
    ` ${props.error.statusCode == 404 ? 'Page not found' : 'An error found'} || Educrat - Professional LMS Online Education Course NuxtJS Template`,
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import NotFound from "@/components/not-found/NotFound";
import Footer from "@/components/layout/footers/FooterFive";
import Header from "@/components/layout/headers/HeaderFive";

</script>
  
<style lang="scss">
@import "./public/assets/css/vendors.css";
@import "./public/assets/css/main.css";
@import "./public/assets/sass/custom.scss";
@import 'swiper/scss';
@import 'swiper/scss/navigation';
@import 'swiper/scss/pagination';
@import 'swiper/css/effect-cards';
@import 'aos/dist/aos';
</style>