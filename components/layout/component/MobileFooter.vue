<template>
  <div class="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
    <div class="mobile-footer__number">
      <div class="text-17 fw-500 text-dark-1">Call us</div>
      <div class="text-17 fw-500 text-purple-1">800 388 80 90</div>
    </div>

    <div class="lh-2 mt-10">
      <div>
        329 Queensberry Street,
        <br />
        North Melbourne VIC 3051, Australia.
      </div>
      <div>hi@educrat.com</div>
    </div>

    <div class="mobile-socials mt-10">
      <nuxt-link
        v-for="platform in socialPlatforms"
        :key="platform.id"
        :to="platform.link"
        class="d-flex items-center justify-center rounded-full size-40"
      >
        <i :class="platform.iconClass"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>


const props = defineProps([]);

const socialPlatforms = [
  { id: 1, link: "#", iconClass: "fa fa-facebook" },
  { id: 2, link: "#", iconClass: "fa fa-twitter" },
  { id: 3, link: "#", iconClass: "fa fa-instagram" },
  { id: 4, link: "#", iconClass: "fa fa-linkedin" },
];
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
