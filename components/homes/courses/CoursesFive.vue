<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="tabs -pills js-tabs">
        <div class="row y-gap-20 justify-between items-end">
          <div class="col-auto">
            <div class="sectionTitle">
              <h2 class="sectionTitle__title">Explore Featured Courses</h2>
              <p class="sectionTitle__text">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div class="col-auto">
            <div
              class="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls"
            >
              <button
                v-for="(elm, i) in courseStates"
                :key="i"
                @click="() => setCurrentCourseState(elm)"
                :class="[
                  tabBtnStyle
                    ? tabBtnStyle
                    : 'tabs__button px-20 py-8 rounded-200 js-tabs-button',
                  currentCourseState === elm ? 'is-active' : '',
                ]"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                {{ elm }}
              </button>
            </div>
          </div>
        </div>

        <div class="tabs__content pt-60 lg:pt-50 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-active">
            <div
              class="js-section-slider"
              data-aos="fade-left"
           
            >
              <ClientOnly>
          <Swiper
                :modules="[Navigation, Pagination]"
                class="overflow-hidden"
                :navigation="{
                  nextEl: '.course-five-right',
                  prevEl: '.course-five-left',
                }"
                :space-between="30"
                :slide-per-view="1"
                :breakpoints="{
                  450: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in pageItem" :key="i">
                  <CourceCard :data="elm" :index="i" />
                </SwiperSlide>
              </Swiper></ClientOnly>


              <button
                class="course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev"
              >
                <i class="icon icon-arrow-left text-24"></i>
              </button>

              <button
                class="course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next"
              >
                <i class="icon icon-arrow-right text-24"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import CourceCard from "../courseCards/CourseCardFive";
const props = defineProps(["tabBtnStyle"]);
const currentCourseState = ref("All");
const setCurrentCourseState = (val) => {
  if (currentCourseState.value == val) {
    currentCourseState.value = "All";
  } else {
    currentCourseState.value = val;
  }
};
const pageItem = ref(coursesData);

import { coursesData } from "@/data/courses";
import { courseStates } from "@/data/courses";

const updatePageItem = () => {
  if (currentCourseState.value === "All") {
    pageItem.value = coursesData;
  } else {
    const filtered = coursesData.filter(
      (elm) => elm.state === currentCourseState.value,
    );
    pageItem.value = filtered;
  }
};

onMounted(() => {
  updatePageItem(); // Initialize pageItem when the component is mounted
});

// Watch for changes in currentCourseState and update pageItem accordingly
watch(currentCourseState, () => {
  updatePageItem();
});
</script>
