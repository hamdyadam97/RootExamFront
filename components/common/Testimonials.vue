<template>
  <section class="layout-pt-lg layout-pb-lg section-bg">
    <div
      :class="{
        'bg-white-two': backgroundComponent,
        'bg-light-6': !backgroundComponent,
        'section-bg__item': true,
      }"
    ></div>

    <div class="container">
      <div class="row y-gap-20 justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Testimonials</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-center pt-60">
        <div class="col-xl-6 col-lg-8 col-md-10">
          <div class="overflow-hidden js-testimonials-slider">
            <ClientOnly>
          <Swiper
              class="overflow-visible"
              :modules="[Navigation, Pagination]"
              :space-Between="4"
              :speed="1000"
              :slides-Per-View="1"
              @swiper="onSwiper"
              @slideChange="handleSlideChange"
            >
              <SwiperSlide
                v-for="(elm, i) in testimonialsTwo"
                :key="i"
                class="swiper-slide"
              >
                <div class="swiper-slide h-100">
                  <div
                    class="testimonials -type-2 text-center"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div class="testimonials__icon">
                      <nuxt-img
                        width="60"
                        height="43"
                        src="/assets/img/misc/quote.svg"
                        alt="quote"
                      />
                    </div>
                    <div
                      class="testimonials__text md:text-20 fw-500 text-dark-1"
                    >
                      {{ elm.text }}
                    </div>
                    <div class="testimonials__author">
                      <h5 class="text-17 lh-15 fw-500">{{ elm.author }}</h5>
                      <div class="mt-5">{{ elm.position }}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper></ClientOnly>


            <div class="pt-60 lg:pt-40">
              <div
                class="pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination"
              >
                <div
                  v-for="(elm, i) in paginationImages"
                  :key="i"
                  @click="() => handlePaginationClick(i)"
                  class="col-auto"
                >
                  <div
                    :class="{
                      pagination__item: true,
                      'is-active': currentSlideIndex === i,
                    }"
                  >
                    <nuxt-img width="70" height="70" :src="elm" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const props = defineProps(["backgroundComponent"]);

import { testimonialsTwo } from "../../data/tesimonials";
import { paginationImages } from "../../data/tesimonials";
const swiperRef = ref(null);
const currentSlideIndex = ref(0);

const handlePaginationClick = (index) => {
  currentSlideIndex.value = index;
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const handleSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.activeIndex;
};

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
