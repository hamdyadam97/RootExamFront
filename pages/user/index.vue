<template>
  
  <div class="exam-page select-none">
    <slot />
    <div>
    <DashboardOne />
    
  </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Dashboard",
  description: "",
});

definePageMeta({
  middleware: 'auth',
  layout: 'dashboard'
}) 
onMounted(() => {
  // منع الزر اليمين
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // منع النسخ واللصق
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('cut', (e) => e.preventDefault());
  document.addEventListener('paste', (e) => e.preventDefault());

  // منع اختصارات معينة (زي Ctrl+U أو Ctrl+Shift+I)
  document.addEventListener('keydown', (e) => {
    if (
      (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 's') ||
      (e.key === 'F12')
    ) {
      e.preventDefault();
    }
  });


let overlay = null;

  // لما المستخدم يخرج من التبويب أو يفتح أدوات مطور
  const showOverlay = () => {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.95);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        z-index: 9999;
      `;
      overlay.innerText = '⚠️ تم إيقاف العرض مؤقتًا لحماية الامتحان';
      document.body.appendChild(overlay);
    }
  };

  const hideOverlay = () => {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
  };

  // عند فقد التركيز (Alt+Tab أو PrintScreen)
  window.addEventListener('blur', showOverlay);
  window.addEventListener('focus', hideOverlay);

  // عند فتح أدوات المطور (تقريبية)
  let devtoolsOpen = false;
  const threshold = 160;
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        showOverlay();
      }
    } else {
      if (devtoolsOpen) {
        devtoolsOpen = false;
        hideOverlay();
      }
    }
  }, 1000);
});

import DashboardOne from "@/components/dashboard/DashboardOne";
</script>

<style lang="scss" scoped>
/* يمنع تحديد النصوص */
.select-none {
  user-select: none;
}
</style>
