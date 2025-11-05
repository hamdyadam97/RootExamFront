<template>
  <div class="breadcrumbs mt-10 pt-0 pb-0">
    <div class="breadcrumbs__content">
      <div class="breadcrumbs__item">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link to="/">All courses</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link :to="`/`">User Experience Design</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link :to="`/`">User Interface</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
