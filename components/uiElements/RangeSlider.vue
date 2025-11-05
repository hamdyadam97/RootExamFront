<template>
  <div class="text-18 lh-1 text-dark-1 fw-500 mb-30 mt-60">Range Slider</div>
  <div class="js-price-rangeSlider">
    <div class="px-5 pt-30">
      <Slider v-model="value" />
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [20, 40],
    };
  },
};
</script>
<style scoped>
div {
  --slider-bg: #d1d5db;

  --slider-connect-bg: #6440fb;
  --slider-tooltip-bg: #6440fb;

  --slider-handle-ring-color: #6440fb;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
