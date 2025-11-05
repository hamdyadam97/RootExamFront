<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">How can we help you?</h1>
              </div>

              <div>
                <p class="page-header__text">
                  We’re on a mission to deliver engaging, curated courses at a
                  reasonable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pb-lg">
      <div class="container">
        <div class="row justify-center text-center">
          <div class="col-xl-6 col-lg-8">
            <form
              class="form-single-field -help"
              @submit.prevent="handleSubmit"
            >
              <input
                required
                type="text"
                v-model="searchQuery"
                placeholder="Enter a question, topic, or keyword"
              />
              <button class="button -purple-1 text-white" type="submit">
                <i class="icon-search text-20 mr-15"></i> Search
              </button>
            </form>
          </div>
        </div>

        <div class="row y-gap-30 justify-between pt-90 lg:pt-50">
          <div v-for="(elm, i) in helpItems" :key="i" class="col-lg-4 col-md-6">
            <div class="py-40 px-45 rounded-16 bg-light-4">
              <div
                class="d-flex justify-center items-center size-70 rounded-full bg-white"
              >
                <nuxt-img width="30" height="30" :src="elm.icon" alt="icon" />
              </div>
              <h4 class="text-20 lh-11 fw-500 mt-25">{{ elm.title }}</h4>
              <p class="mt-10">{{ elm.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { helpItems } from "@/data/helpItems";

const searchQuery = ref("");

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>
