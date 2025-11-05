<template>
  <div class="barba-container" data-barba="container">
    <main class="main-content">
      <HeaderDashboard />
      <div class="content-wrapper js-content-wrapper overflow-hidden">
        <div id="dashboardOpenClose" class="dashboard -home-9 js-dashboard-home-9">
          <div class="dashboard__sidebar scroll-bar-1">
            <Sidebar />
          </div>
          <div class="dashboard__main">
            <slot />

            <Footer />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>


import Sidebar from "@/components/dashboard/Sidebar";
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";
import Footer from "@/components/layout/footers/FooterNine";


onMounted(() => {
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

})
</script>

<style lang="scss" scoped></style>
