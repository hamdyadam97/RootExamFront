<template>
  <section class="layout-pt-sm layout-pb-sm bg-light-6">
    <div class="container">
      <div class="row y-gap-30 justify-between sm:justify-start items-center">
        <div
          v-for="(elm, i) in brands"
          :key="i"
          class="col-lg-auto col-md-2 col-sm-3 col-4"
        >
          <div class="d-flex justify-center items-center px-4">
            <nuxt-img
              width="90"
              height="30"
              style="object-fit: contain"
              class="w-1/1"
              :src="elm"
              alt="clients image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { brands } from "~/data/brands";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
