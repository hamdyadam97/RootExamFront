<template>
  <section class="layout-pt-lg layout-pb-lg border-top-light">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="h1">Deep Dive into Every Exam</h2>
            <div class="h-decor"></div>

          </div>
        </div>
      </div>

      <div class="pt-60 lg:pt-50 js-section-slider blog-grid-full blog-grid-carousel-full">
        <ClientOnly>
          <Swiper class="overflow-hidden" :modules="[Navigation, Pagination]"
            :pagination="{ el: '.event-four-pagination', clickable: true }" :navigation="{
              nextEl: '.icon-arrow-right-event-four',
              prevEl: '.icon-arrow-left-event-four',
            }" :space-between="30" :slides-per-view="1" :breakpoints="{
  450: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1200: { slidesPerView: 4 },
}">

            <SwiperSlide v-for="(blog, i ) in blogs" :key="i">
              <div class="blog-post blog-post-style2" @click="navigateTo(`/blogs/${blog.id}`)">
                <div class="post-image">
                  <img :src="blog.image" style="width: 100% !important;height: 280px !important;" alt="image"
                    :id="`blog_image${i}`" @error="setDefault(i)">
                </div>
                <h2 class="post-title">{{ blog.title }}</h2>
                <div class="post-teaser" v-html="blog.short_description"></div>
                <!-- <div class="post-teaser">New research suggests that a simple blood test, which doctors
                  currently use to diagnose heart attacks, may.</div> -->
                <div class="post-date-inline">{{ blog.date }}</div>
              </div>
            </SwiperSlide>

          </Swiper>
        </ClientOnly>


        <div class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
          <div class="col-auto">
            <button class="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-four">
              <i class="icon icon-arrow-left"></i>
            </button>
          </div>
          <div class="col-auto">
            <div class="pagination -arrows js-pagination event-four-pagination"></div>
          </div>
          <div class="col-auto">
            <button class="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-four">
              <i class="icon icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps({
  blogs: { type: Object, required: true },
  default_image: { type: String, required: true }
})

const blogs = computed(() => props.blogs);
const default_image = computed(() => props.default_image);

const setDefault = (key) => {
  document.getElementById(`blog_image${key}`).srcset = default_image.value;
}

const goAction = () => {
  // navigateTo(`/blogs/${elm.id}`)
}

</script>


<style scoped lang="scss">
section {
  padding-bottom: 0px;
}

.section {
  position: relative;
  margin-top: 110px;
  margin-bottom: 110px;
}

.container-fluid.px-0 {
  overflow-x: hidden;
  overflow-y: hidden;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.title-wrap {
  position: relative;
}

.text-center {
  text-align: center !important;
}

.h1 {
  line-height: 1.167em;
}

.h-decor {
  display: inline-block;
  height: 3px;
  width: 53px;
  background-color: var(--color-dark-1);
}

.mt-lg-3 {
  margin-top: 30px !important;
}

.blog-grid-full .blog-post-style2 {
  padding: 37px 37px 32px;
  box-sizing: border-box;

}

/* .swiper-slide{
    width: 25rem !important;
} */
.blog-grid-full .blog-post {
  padding: 20px 20px 32px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.blog-grid-full .blog-post {
  margin-bottom: 30px;
}

/* .blog-post:last-child {
    border-bottom: 0;
    margin-bottom: 0;
} */
.blog-grid-full .blog-post-style2 .post-image:first-child {
  margin-top: -37px;
}

.blog-grid-full .blog-post-style2 .post-image {
  margin-left: -20px;
  margin-right: -20px;
}

.blog-post-style2 .post-image {
  overflow: hidden;
}

/* .blog-grid-full .blog-post-style2 .post-image {
    margin-left: -37px;
    margin-right: -37px;
} */

.blog-post .post-image img {
  max-width: 100%;
  width: 100%;
}

.blog-post .post-image img {
  -webkit-transition: transform 0.5s ease 0s;
  -o-transition: transform 0.5s ease 0s;
  transition: -webkit-transform 0.5s ease 0s;
  transition: transform 0.5s ease 0s;
  transition: transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  image-rendering: optimizeQuality;
  vertical-align: middle;
  max-width: 100%;
}

.blog-post-style2:hover .post-image img {
  -webkit-transition: transform 0.6s ease 0.05s;
  -o-transition: transform 0.6s ease 0.05s;
  transition: -webkit-transform 0.6s ease 0.05s;
  transition: transform 0.6s ease 0.05s;
  transition: transform 0.6s ease 0.05s, -webkit-transform 0.6s ease 0.05s;
  -webkit-transform: scale(1.1) rotate(0.0001deg);
  -ms-transform: scale(1.1) rotate(0.0001deg);
  transform: scale(1.1) rotate(0.0001deg);
}

@media (min-width: 1024px) {
  .blog-grid-full .blog-post-style2 .post-title {
    font-size: 24px;
    line-height: 30px;
  }
}

.blog-grid-full .blog-post-style2 .post-title {
  margin-top: 34px;
  margin-bottom: 0;
}

.blog-grid-full .blog-post .post-teaser {
  font-size: 16px;
  line-height: 28px;
}

.blog-grid-full .blog-post-style2 .post-title+* {
  margin-top: 10px;
}

.blog-grid-full .blog-post>*+* {
  margin-top: 25px;
}

.blog-post .post-date-inline {
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  font-family: "Poppins", serif;
  color: #5c6895;
}

.my-lg-4 {
  margin-top: 40px !important;
}

.btn:not(.btn-noanimate) [class*='icon']:first-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:first-child {
  transform: translateX(-55px);
  opacity: 0;
  width: 0;
}

.btn:not(.btn-noanimate) [class*='icon']:last-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:last-child {
  padding-left: 10px;
}

.btn .icon-right-arrow,
.btn:focus .icon-right-arrow {
  font-size: 10px;
}

.btn [class*='icon'],
body:not(.touch) .btn:focus [class*='icon'] {
  position: relative;
  display: inline-block;
  top: 0;
  font-size: 14px;
  transition: 0.3s;
}

body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:first-child {
  width: auto;
  padding-right: 10px;
  transform: translateX(0);
  opacity: 1;
}

body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:last-child {
  width: 0;
  padding-left: 0;
  transform: translateX(55px);
  opacity: 0;
}

.btn:hover {
  background: #7883ac;
  color: #fff;
  border: 1px solid transparent;
}

.btn {
  font-weight: 500;
  color: #fff;
  background: #5c6895;
  border: 1px solid transparent;
  box-shadow: none !important;
}

.mt-lg-4,
.my-lg-4 {
  margin-top: 40px !important;
}

.btn:not(.btn-noanimate) [class*='icon']:first-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:first-child {
  transform: translateX(-55px);
  opacity: 0;
  width: 0;
}

.btn:not(.btn-noanimate) [class*='icon']:last-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:last-child {
  padding-left: 10px;
}

.btn .icon-right-arrow,
.btn:focus .icon-right-arrow {
  font-size: 10px;
}

.btn [class*='icon'],
body:not(.touch) .btn:focus [class*='icon'] {
  position: relative;
  display: inline-block;
  top: 0;
  font-size: 14px;
  transition: 0.3s;
}

body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:first-child {
  width: auto;
  padding-right: 10px;
  transform: translateX(0);
  opacity: 1;
}

body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:last-child {
  width: 0;
  padding-left: 0;
  transform: translateX(55px);
  opacity: 0;
}

.btn:hover {
  background: #7883ac;
  color: #fff;
  border: 1px solid transparent;
}
</style>