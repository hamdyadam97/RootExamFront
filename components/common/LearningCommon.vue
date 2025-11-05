<template>
  <section class="">
    <div class="container">

      <div class="row y-gap-30 pt-60 lg:pt-40">
        <div v-for="(elm, i) in learningPathFive" :key="i" class="col-sm-6 col-md-6 col-lg-3 ">
          <div class="featureIcon -type-1">
            <div class="featureIcon__icon">
              <nuxt-img width="40" height="40" :src="elm.image" alt="icon"></nuxt-img>
            </div>

            <div class="featureIcon__content ml-30 md:ml-20">
              <h4 class="text-17 fw-500">{{ elm.title }}</h4>
              <!-- <p class="mt-5">
                {{  elm.description }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const learningPathFive = ref([
  {
    id: 1,
    title: "Higher Pass Rates",
    image: "/assets/img/custom/1.png",
    description: "Ace your exams with high marks.",
  },
  {
    id: 2,
    title: "Updated Content",
    image: "/assets/img/custom/2.png",
    description: "Get Access to Every New Question With Us.",
  },
  {
    id: 3,
    title: "Comprehensive Explanation",
    image: "/assets/img/custom/3.png",
    description: "Simple Detailed Written Explanation & Videos (soon).",
  },
  {
    id: 4,
    title: "Challenging Questions",
    image: "/assets/img/custom/4.png",
    description: "Master your Knowledge and Practice More.",
  },
]);
</script>

<style scoped>
/* Add your component-specific styles here */
.featureIcon__content{
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
