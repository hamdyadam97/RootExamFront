<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-4">
    <div class="container">
      <div class="row y-gap-15 justify-between items-end">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Students</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div class="col-auto">
          <a href="#" class="button -icon -purple-3 -rounded text-purple-1">
            View All Students
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </a>
        </div>
      </div>

      <div class="row y-gap-30 pt-60 lg:pt-40">
        <div
          v-for="(elm, i) in students.slice(0, 4)"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <div
            class="teamCard -type-2 bg-white"
            data-aos="fade-right"
            data-aos-duration="(i + 1) * 400"
          >
            <div class="teamCard__content">
              <div class="teamCard__img">
                <nuxt-img
                  :src="elm.imgSrc"
                  width="90"
                  height="90"
                  alt="image"
                ></nuxt-img>
              </div>
              <h4 class="teamCard__title text-17 lh-15 fw-500 mt-12">
                {{ elm.name }}
              </h4>
              <div class="teamCard__subtitle text-14 lh-1 mt-5">
                {{ elm.title }}
              </div>

              <div class="teamCard__socials d-flex x-gap-20 pt-12">
                <a
                  v-for="(itm, index) in elm.socials"
                  :key="index"
                  :href="itm.link"
                >
                  <i :class="itm.icon"></i>
                </a>
              </div>

              <div class="teamCard-tags pt-20">
                <div
                  v-for="(itm, index) in elm.tags"
                  :key="index"
                  class="teamCard-tags__item"
                >
                  <div class="teamCard-tags__tag">{{ itm }}</div>
                </div>
              </div>

              <div class="teamCard__button mt-20">
                <a
                  :href="elm.buttonLink"
                  class="button -icon -outline-purple-1 -rounded text-purple-1"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { students } from "~/data/students";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
