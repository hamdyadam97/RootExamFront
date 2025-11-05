<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Your Gateway to Exam Knowledge</h1>
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

    <section class="layout-pt-sm layout-pb-lg">
      <div class="container">
        <div class="tabs -pills js-tabs">
          <div class="tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls">
            <div @click="setCurrentCategory(0)">
              <button :class="`tabs__button px-15 py-8 rounded-8 js-tabs-button ${currentCategory === 0 ? 'is-active' : ''
                }`" data-tab-target=".-tab-item-0" type="button">
                All Categories
              </button>
            </div>

            <div v-for="(elm, i) in categories" :key="i" @click="setCurrentCategory(elm.id)">
              <button :class="`tabs__button px-15 py-8 rounded-8 js-tabs-button ${currentCategory === elm.id ? 'is-active' : ''
                }`" data-tab-target=".-tab-item-1" type="button">
                {{ elm.name }}
              </button>
            </div>
          </div>

          <div class="tabs__content pt-40 js-tabs-content">
            <div class="tabs__pane -tab-item-1 is-active">
              <div class="row y-gap-30">
                <div v-for="(elm, i) in filtered_blogs" :key="i" class="col-lg-4 col-md-6">
                  <div class="blogCard -type-1">
                    <div class="blogCard__image">
                      <nuxt-img width="530" height="450" class="w-1/1 rounded-8" :src="elm.image" alt="image"
                        :id="`blog_image${i}`" @error="setDefault(i)" />
                    </div>
                    <div class="blogCard__content mt-20">
                      <div class="blogCard__category">
                        {{ elm.category.toUpperCase() }}
                      </div>
                      <h4 class="blogCard__title text-20 lh-15 fw-500 mt-5">
                        <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                          {{ elm.title }}
                        </nuxt-link>
                      </h4>
                      <div class="blogCard__date text-14 mt-5">
                        {{ elm.date }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
 
const pageItems = ref([]);
const currentCategory = ref(0);
const setCurrentCategory = (val) => {
  currentCategory.value = val;
};
const updatePageItems = () => {
  if (currentCategory.value === 0) {
    pageItems.value = blogs;
  } else {
    const filtered = blogs.filter(
      (elm) => elm.category === currentCategory.value,
    );
    pageItems.value = filtered;
  }
};
onMounted(() => {
  index();
});
 

const categories = ref([]);
const blogs = ref([]);
const default_image = ref(null);

const filtered_blogs = computed(() => {
  if (currentCategory.value !== 0) {
    return blogs.value.filter((i) => i.category_id == currentCategory.value);
  }

  return blogs.value;
})

const index = async () => {

  const { data, message } = await useNuxtApp().$api('/blogs/index', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (data) {
    categories.value = data.categories;
    blogs.value = data.blogs;
    default_image.value = data.default_image;
  }

}

const setDefault = (key) => {
  document.getElementById(`blog_image${key}`).srcset = default_image.value;
}
</script>
