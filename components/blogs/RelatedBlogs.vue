<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-4">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Related Posts</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-60">
        <div
          v-for="(elm, i) in blogs.slice(0, 4)"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <div class="blogCard -type-1">
            <div class="blogCard__image">
              <nuxt-img
                width="510"
                height="425"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>
            <div class="blogCard__content mt-20">
              <div class="blogCard__category">
                {{ elm.category.toUpperCase() }}
              </div>
              <h4 class="blogCard__title text-17 lh-15 mt-5">
                <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                  {{ elm.title }}
                </nuxt-link>
              </h4>
              <div class="blogCard__date text-14 mt-5">{{ elm.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogs } from "@/data/blog";
</script>
