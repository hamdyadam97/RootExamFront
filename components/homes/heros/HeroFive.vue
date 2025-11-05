<template>
  <section class="masthead -type-4 mt-0 pt-0">
    <div class="">
      <section class="video-background">
        <client-only>
        <video autoplay muted loop class="background-video">
          <source src="/assets/vedios/hero_bg.mp4" type="video/mp4">
          <!-- <source src="https://dogwjofipx0c5.cloudfront.net/jnmlztqhmwl_1623556752415.mp4" type="video/mp4"> -->
          <!-- <source src="/assets/vedios/hero.mp4" type="video/mp4"> -->
          Your browser does not support the video tag.
        </video>
      </client-only>
        <div class="content">

          <div class="masthead__content" style="margin-top: 200px;">
            <!-- <h1 class="masthead__title">
              With
              <span class="text-purple-1 underline">Roots</span>
              Better Doctors Better {{ " " }} Performance
            </h1>
            <p class="masthead__text pt-15 mb-80">
              Discover Our Complete Question Banks for
              Doctors, to Reach Excellence in Medical
              Educational Journey

            </p>
            <br> -->
            <div class="masthead__button row x-gap-20 y-gap-20 pt-30 mt-40  mx-auto">
              <div class="col-auto">
                <nuxt-link to="/signup" class="button -md -purple-1 -rounded text-white">
                  Join For Free
                </nuxt-link>
              </div>
              <!-- button -md -outline-dark-1 text-dark-1 -->
              <div class="col-auto">
                <nuxt-link to="/" class="button -md -outline-dark-1 text-white -rounded">
                  Find Courses
                </nuxt-link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
</script>

<style type="scss" scoped>
.masthead__title{
  color: #fff;
}

.button.-purple-1:hover {
    background-color: transparent !important;
    color: #fff !important;
}

.button.-outline-dark-1:hover {
    background-color: transparent;
    border: 2px solid var(--color-dark-1);
    color: white !important;
}
 

/* .video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
} */

.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
}


.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
