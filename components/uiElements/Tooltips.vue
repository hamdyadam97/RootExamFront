<template>
  <div class="col-xl-3 col-lg-4">
    <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Tooltips</div>
    <div class="d-flex mt-24">
      <div class="tooltip -top px-35 py-15 bg-light-3 rounded-8">
        Top
        <div class="tooltip__content">Top</div>
      </div>
      <div class="tooltip -bottom px-35 py-15 bg-light-3 rounded-8 ml-12">
        Bottom
        <div class="tooltip__content">Bottom</div>
      </div>
      <div class="tooltip -left px-35 py-15 bg-light-3 rounded-8 ml-12">
        Left
        <div class="tooltip__content">Left</div>
      </div>
      <div class="tooltip -right px-35 py-15 bg-light-3 rounded-8 ml-12">
        Right
        <div class="tooltip__content">Right</div>
      </div>
    </div>

    <RangeSlider />
  </div>
</template>

<script setup>
import RangeSlider from "./RangeSlider";
</script>

<style lang="scss" scoped></style>
