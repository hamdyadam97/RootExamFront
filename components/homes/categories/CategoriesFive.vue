<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-end">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <!-- <div class="col-auto">
          <a href="#" class="button -icon -purple-3 text-purple-1">
            All Categories
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </a>
        </div> -->
      </div>

      <div class="row y-gap-30 pt-50">
        <div v-for="(elm, i) in categories" :key="i" class="col-xl-3 col-md-6 linkCustomTwo" data-aos="zoom-in"
          data-aos-duration="(i + 1) * 300">
          <nuxt-link :to="`/`" class="categoryCard -type-4">
            <!-- <div class="categoryCard__icon bg-light-3">
              <i :class="elm.icon"></i>
            </div> -->
            <nuxt-img class="categoryCard__icon bg-light-3" :id="`image${i}`" :src="elm.icon"
              @error="setDefault(i)"></nuxt-img>
            <div class="categoryCard__content mt-10">
              <h4 class="categoryCard__title text-17 fw-500">
                {{ elm.name }}
              </h4>
              <div class="categoryCard__text text-13 text-light-1 lh-1 mt-5">
                Question Count : {{ elm.questions_count }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  categories: { type: Object, required: true },
  default_image: { type: String, required: true }
})
const categories = computed(() => props.categories);
const default_image = computed(() => props.default_image);

const setDefault = (key) => {
  document.getElementById(`image${key}`).srcset = default_image.value;
}

</script>

<style scoped>
/* Add your component-specific styles here */
</style>
