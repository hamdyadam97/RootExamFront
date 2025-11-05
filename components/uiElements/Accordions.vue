<template>
  <div class="col-lg-6">
    <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Accordions</div>
    <div class="accordion -block js-accordion">
      <div
              v-for="(elm, i) in accordionItems"
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
    <div class="accordion -block js-accordion"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { accordionItems } from "@/data/accordionItems";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const activeFaq = ref(0);

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? 0 : id;
};
</script>
