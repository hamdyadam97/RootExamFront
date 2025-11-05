<template>
  <section :class="`breadcrumbs ${dark ? 'bg-dark-1' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="breadcrumbs__content">
            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/">Home</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/">All courses</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/">User Experience Design</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/">User Interface</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["dark"]);
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
