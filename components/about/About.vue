<template>
  <section class="page-header -type-1 mt-40">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">About Us</h1>
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
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-50 justify-between items-center">
        <div class="col-lg-6 pr-50 sm:pr-15">
          <div class="composition -type-8">
            <div class="-el-1">
              <nuxt-img
                :width="300"
                :height="400"
                src="/assets/img/about-1/1.png"
                alt="image"
              />
            </div>
            <div class="-el-2">
              <nuxt-img
                :width="200"
                :height="200"
                src="/assets/img/about-1/2.png"
                alt="image"
              />
            </div>
            <div class="-el-3">
              <nuxt-img
                :width="255"
                :height="250"
                src="/assets/img/about-1/3.png"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <h2 class="text-30 lh-16">
            Welcome to Educrat Enhance your skills with best Online courses
          </h2>
          <p class="text-dark-1 mt-30">
            You can start and finish one of these popular courses in under a day
            – for free! Check out the list below.. Take the course for free
          </p>
          <p class="pr-50 lg:pr-0 mt-25">
            Neque convallis a cras semper auctor. Libero id faucibus nisl
            tincidunt egetnvallis a cras semper auctonvallis a cras semper
            aucto. Neque convallis a cras semper auctor. Liberoe convallis a
            cras semper atincidunt egetnval
          </p>
          <div class="d-inline-block">
            <nuxt-link
              to="/signup"
              class="button -md -purple-1 text-white mt-30"
            >
              Start Learning For Free
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
