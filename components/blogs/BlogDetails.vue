<template>
  <section class="page-header -type-1 mt-40" v-if="blog">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <div class="text-14 text-purple-1 uppercase fw-500 mb-8">
                {{ blog.category.toUpperCase() }}
              </div>

              <h1 class="page-header__title lh-14">
                {{ blog.title.split(" ").slice(0, 4).join(" ") }}
                <br />
                {{ blog.title.split(" ").slice(4).join(" ") }}
              </h1>

              <p class="page-header__text">{{ blog.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-md"  v-if="blog">
    <div class="container">
      <div
        class="ratio ratio-16:9 rounded-8 bg-image js-lazy"
        :style="{ backgroundImage: `url(${blog.image})` }"
      ></div>
    </div>
  </section>

  <section class="layout-pt-md layout-pb-lg"  v-if="blog">
    <div class="container">
      <div class="blogSection">
        <div class="blogCard">
          <div class="row justify-center">
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="blogCard__content" v-html="blog.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { blogs, tags } from "@/data/blog";
const props = defineProps(["id" , 'blog' , 'default_image']);

const blog = computed(() => props.blog);
const default_image = computed(() => props.default_image);


onMounted(() => {
  // data.value = blogs.filter((elm) => elm.id == props.id)[0] || blogs[0];
  // getBlog();
});


const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
