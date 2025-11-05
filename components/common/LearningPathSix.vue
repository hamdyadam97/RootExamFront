<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Why FutureLearn?</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 lg:pt-50">
        <div
          v-for="(elm, i) in learningPathSix"
          :key="`learningPathSix-${i}`"
          class="col-lg-3 col-md-6"
        >
          <div class="coursesCard -type-3 px-0 text-center">
            <div class="coursesCard__icon bg-white shadow-2">
              <i :class="elm.iconClass"></i>
            </div>

            <div class="coursesCard__content mt-30">
              <h5 class="coursesCard__title text-18 lh-1 fw-500">
                {{ elm.title }}
              </h5>
              <p class="coursesCard__text text-14 mt-10">
                {{ elm.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { learningPathSix } from "../../data/learningPaths";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
