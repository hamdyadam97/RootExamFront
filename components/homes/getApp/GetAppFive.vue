<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 items-center">
        <div
          class="col-xl-7 col-lg-7"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <div class="app-image">
            <nuxt-img
              width="657"
              height="525"
              src="/assets/img/home-5/apps/img.png"
              alt="image"
            />
          </div>
        </div>

        <div class="col-lg-5">
          <div class="app-content">
            <h2 class="app-content__title" data-aos="fade-up">
              Learn From
              <br />
              <span>Anywhere</span>
            </h2>
            <p class="app-content__text" data-aos="fade-up">
              Take classes on the go with the educrat app. Stream or download to
              watch on the plane, the subway, or wherever you learn best.
            </p>
            <div class="app-content__buttons">
              <a data-aos="fade-up" data-aos-duration="400" href="#">
                <nuxt-img
                  width="210"
                  height="60"
                  style="height: 100%; width: 100%"
                  src="/assets/img/app/buttons/1.svg"
                  alt="button"
                />
              </a>
              <a data-aos="fade-up" data-aos-duration="400" href="#">
                <nuxt-img
                  width="190"
                  height="60"
                  style="height: 100%; width: 100%"
                  src="/assets/img/app/buttons/2.svg"
                  alt="button"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Add your component-specific styles here */
</style>
