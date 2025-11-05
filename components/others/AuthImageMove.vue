<template>
  <div class="form-page__img bg-dark-1">
    <div class="form-page-composition">
      <!-- <div class="-bg">
        <nuxt-img
          width="1250"
          height="1000"
          style="width: 100%"
          data-move="30"
          class="js-mouse-move"
          src="/logo.jpeg"
          alt="bg"
        />
      </div> -->
      <div class="-el-1">
        <nuxt-img
          width="1250"
          height="1000"
          style="width: 100%"
          data-move="20"
          class="js-mouse-move"
          src="/logo.jpeg"
          alt="image"
        />
      </div>
      <!-- <div class="-el-2">
        <nuxt-img
          width="488"
          height="485"
          data-move="40"
          class="js-mouse-move"
          src="/logo.jpeg"
          alt="icon"
        />
      </div> -->
      <!-- <div class="-el-3">
        <nuxt-img
          width="108"
          height="108"
          data-move="40"
          class="js-mouse-move"
          src="/logo.jpeg"
          alt="icon"
        />
      </div> -->
      <!-- <div class="-el-4">
        <nuxt-img
          width="108"
          height="108"
          data-move="40"
          class="js-mouse-move"
          src="/logo.jpeg"
          alt="icon"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const handleSubmit = (e) => {
  e.preventDefault();
};

onMounted(() => {
  const parallaxIt = () => {
    const target = document.querySelectorAll(".js-mouse-move-container");

    target.forEach((container) => {
      const targets = container.querySelectorAll(".js-mouse-move");

      targets.forEach((el) => {
        const movement = el.getAttribute("data-move");

        document.addEventListener("mousemove", (e) => {
          const relX = e.pageX - container.offsetLeft;
          const relY = e.pageY - container.offsetTop;

          gsap.to(el, {
            x:
              ((relX - container.offsetWidth / 2) / container.offsetWidth) *
              Number(movement),
            y:
              ((relY - container.offsetHeight / 2) / container.offsetHeight) *
              Number(movement),
            duration: 0.2,
          });
        });
      });
    });
  };

  parallaxIt();
});
</script>

<style scoped>
/* Add your styles here if necessary */
</style>
