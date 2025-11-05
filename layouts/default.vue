<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <slot />

      <Footer />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Educrat - Professional LMS Online Education Course NuxtJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',

})

import AOS from 'aos';
import Footer from "@/components/layout/footers/FooterFive";
import Header from "@/components/layout/headers/HeaderTwo";

// import 'aos/dist/aos.css'; // Import the AOS CSS

onMounted(() => {
  AOS.init({
    duration: 1400,
    once: true,
  });
  // if (!process.dev) {
  //   document.addEventListener('copy', e => e.preventDefault());
  //   document.addEventListener('cut', e => e.preventDefault());
  //   document.addEventListener('paste', e => e.preventDefault());

  //   // منع الزر الأيمن
  //   document.addEventListener('contextmenu', e => e.preventDefault());

  //   // منع بعض اختصارات لوحة المفاتيح
  //   document.addEventListener('keydown', e => {
  //     // F12
  //     if (e.key === 'F12') {
  //       e.preventDefault();
  //     }

  //     // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
  //     if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) {
  //       e.preventDefault();
  //     }

  //     // Ctrl+U
  //     if (e.ctrlKey && e.key === 'u') {
  //       e.preventDefault();
  //     }
  //   });
  // }
});
</script>
<style lang="scss">
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';
@import "../public/assets/css/vendors.css";
@import "../public/assets/css/main.css";
@import "../public/assets/sass/custom.scss";
@import 'swiper/scss';
@import 'swiper/scss/navigation';
@import 'swiper/scss/pagination';
@import 'swiper/css/effect-cards';
@import 'aos/dist/aos';
@import 'toastr/build/toastr.css';
</style>