<template>
  <div class="dashboard__content bg-light-4">
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Assignment</h1>
        <PageLinksTwo />
      </div>
    </div>

    <div class="row y-gap-30">
      <div class="col-xl-10">
        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
          <div class="d-flex items-center py-20 px-30 border-bottom-light">
            <h2 class="text-17 lh-1 fw-500">Page Head</h2>
          </div>

          <div class="py-30 px-30">
            <div>
              <h4 class="text-18 lh-1 fw-500">
                Assignment 1 (Text or Audio)
              </h4>
              <div class="col-xl-6">
                <p class="mt-15">
                  Keep it short! Type or Record your answer! Record with the
                  audio or video buttons above! From your readings, define
                  Digital Literacy in no more than 15 words. Can you master
                  the art of being succinct?
                </p>
              </div>
            </div>

            <div class="mt-60">
              <h4 class="text-18 lh-1 fw-500">Grading summary</h4>
            </div>

            <div class="mt-30">
              <div v-for="(item, index) in gradingSummary" :key="index" :class="[index % 2 === 0 ? 'bg-light-4' : '']">
                <div class="rounded-8 px-25 py-25">
                  <div class="row">
                    <div class="col-3">
                      <div class="text-dark-1">{{ item.label }}</div>
                    </div>
                    <div class="col-auto">
                      {{ item.value }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex x-gap-30 flex-wrap y-gap-10 justify-center items-center mt-30">
              <div>
                <a href="#" class="button -icon -light-3 h-50">
                  View All Submissions
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
              <div>
                <a href="#" class="button -icon -light-3 h-50">
                  Grade
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>

            <div class="d-flex flex-wrap y-gap-10 justify-between items-center mt-40">
              <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                Forum Netiquette
                <i class="icon-arrow-top-right text-13 ml-10"></i>
              </a>

              <div @click="toggleDropdown" :class="`dropdown js-dropdown js-category-active ${isDropdownActive ? '-is-dd-active' : ''
                }`">
                <div
                  class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10"
                  data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                  <span class="js-dropdown-title">Jump to...</span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div :class="`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${isDropdownActive ? '-is-el-visible' : ''
                  }`">
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div v-for="category in categories" :key="category.id">
                      <a :href="`#${category.link}`" class="d-block js-dropdown-link">{{ category.name }}</a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                Share Examples Of Digital
                <i class="icon-arrow-top-right text-13 ml-10"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageLinksTwo from "../common/PageLinksTwo.vue";

const isDropdownActive = ref(false);

const toggleDropdown = () => {
  isDropdownActive.value = !isDropdownActive.value;
};

const gradingSummary = [
  { label: "Hidden from students", value: "No" },
  { label: "Participants", value: "10" },
  { label: "Submitted", value: "2" },
  { label: "Needs grading", value: "1" },
  { label: "Due date", value: "Thursday, 26 December 2019, 1:00 AM" },
  { label: "Time remaining", value: "Assignment is due" },
];

const categories = [
  { id: 1, name: "Animation", link: "animation" },
  { id: 2, name: "Design", link: "design" },
  { id: 3, name: "Illustration", link: "illustration" },
  { id: 4, name: "Business", link: "business" },
];
</script>
