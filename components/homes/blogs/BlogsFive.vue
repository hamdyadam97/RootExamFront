<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="800">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Blogs</h2>
          </div>
        </div>

        <div class="col-auto" data-aos="fade-left" data-aos-duration="800">
          <nuxt-link to="/blogs" class="button -icon -purple-3 text-purple-1">
            Browse Blogs
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="row y-gap-30 pt-50">
        <div v-for="(elm, i) in blogs" :key="i" class="col-lg-4 col-md-6" data-aos="fade-left"
          data-aos-duration="(i + 1) * 600">
          <div class="blogCard -type-1">
            <div class="blogCard__image">
              <nuxt-img :width="410" :height="350" :src="elm.image" alt="image" :id="`blog_image${i}`"
                @error="setDefault(i)" />
            </div>
            <div class="blogCard__content">
              <div class="blogCard__category">{{ elm.category }}</div>
              <h4 class="blogCard__title">
                <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">{{
                  elm.title
                }}</nuxt-link>
              </h4>
              <div class="blogCard__date">{{ elm.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  blogs: { type: Object, required: true },
  default_image: { type: String, required: true }
})
const blogs = computed(() => props.blogs);
const default_image = computed(() => props.default_image);

const setDefault = (key) => {
  document.getElementById(`blog_image${key}`).srcset = default_image.value;
}


</script>

<style scoped>
/* Add your component-specific styles here */
</style>
