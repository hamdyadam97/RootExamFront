<script setup>
import { ref } from "vue";
import { faq } from "@/data/faq";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const activeFaq = ref(0);

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? 0 : id;
};
</script>

<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-4">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-xl-8 col-lg-9 col-md-11">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Frequently Asked Questions.</h2>
            <!-- <p class="sectionTitle__text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p> -->
          </div>

          <div class="accordion -block text-left pt-60 lg:pt-40 js-accordion">
            <div
              v-for="(elm, i) in faq"
              :key="i"
              @click="toggleFaq(elm.id)"
              :class="{
                accordion__item: true,
                'is-active': activeFaq === elm.id,
              }"
            >
              <div class="accordion__button">
                <div class="accordion__icon">
                  <div
                    class="icon d-flex justify-center items-center"
                    data-feather="plus"
                  >
                    <FontAwesomeIcon :icon="faPlus" />
                  </div>
                  <div
                    class="icon d-flex justify-center items-center"
                    data-feather="minus"
                  >
                    <FontAwesomeIcon :icon="faMinus" />
                  </div>
                </div>
                <span class="text-17 fw-500 text-dark-1">{{
                  elm.question
                }}</span>
              </div>

              <div
                :style="{ maxHeight: activeFaq === elm.id ? '139px' : '0' }"
                class="accordion__content"
              >
                <div class="accordion__content__inner">
                  <p>{{ elm.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
