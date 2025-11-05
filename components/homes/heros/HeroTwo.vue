<template>
  <section class="mainSlider -type-1 js-mainSlider customizedHeroBackground">
    <div class="swiper-wrapper-two">
      <ClientOnly>
        <Swiper :modules="[Pagination, Navigation]" style="width: 100%" :navigation="{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev',
        }" :pagination="true" :space-between="0" slides-per-view="1" :breakpoints="{
  // when window width is >= 576px
  450: {
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 1,
  },
  1200: {
    // when window width is >= 992px
    slidesPerView: 1,
  },
}" :speed="1200">
          <SwiperSlide v-for="(item, i) in slidesData" :key="i">
            <div class="swiper-slide hightFull">
              <div class="mainSlider__bg">
                <img :src="item.bgImage" class="img-fluid" style="width: 100%; height: 100%;"/>
<!--                 
                <div class="bg-image js-lazy customedBg" :style="{ backgroundImage: `url(${item.bgImage})` }">
                </div> -->
              </div>
              <div class="container" v-if="i == 0">
                <!-- <div class="row justify-center text-center">
                  <div class="col-xl-6 col-lg-8">
                    <div class="mainSlider__content" data-aos="fade-up" data-aos-delay="500"> -->
                <!-- <h1 class="mainSlider__title text-white">
              Learn Your Way With Educrat To{{ " " }}
              <span class="text-green-1 underline">Web Design</span>
            </h1>

            <p class="mainSlider__text text-white">
              More than 6.500 online courses
            </p> -->

                <div class="mainSlider__form">
                  <nuxt-link to="/signup" class="btn">
                    Join For Free
                    <i class="icon-arrow-right text-13 ml-10"></i>
                  </nuxt-link>
                </div>
                <!--                       
                    </div>
                  </div>
                </div> -->

              </div>

            </div>


          </SwiperSlide>
        </Swiper>
      </ClientOnly>

    </div>

    <!-- <div class="container">
      <div class="row justify-center text-center">
        <div class="col-xl-6 col-lg-8">
          <div class="mainSlider__content" data-aos="fade-up" data-aos-delay="500">
        

            <div class="mainSlider__form mb-15">
              <nuxt-link to="/signup" class="button -md -outline-purple-1 text-purple-1">
                Join For Free
                <i class="icon-arrow-right text-13 ml-10"></i>
              </nuxt-link>
              
            </div>
          </div>
        </div>
      </div>
 
    </div> -->

    <button
      class="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
      <i class="icon icon-arrow-left text-24"></i>
    </button>

    <button
      class="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
      <i class="icon icon-arrow-right text-24"></i>
    </button>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { slidesData } from "@/data/hero";
</script>

<style lang="scss" scoped>
.mainSlider.-type-1 .mainSlider__bg::after {
  background-color: transparent !important;
}

.mainSlider {
  width: 100%;
  height: 100vh;
}

@media only screen and (max-width: 600px) {
  .mainSlider {
    height: 280px !important;
  }
}

@media (max-width: 1440px) {
  .mainSlider {
    height: 750px !important;
  }

  // .mainSlider.-type-1 .mainSlider__content {
  //   padding-top: 150px;
  // }

  // .mainSlider.-type-1 .mainSlider__title {
  //   font-size: 28px;
  //   // line-height: 1.16em;
  // }

  // .mainSlider.-type-1 .mainSlider__form {
  //   margin-top: 100px;
  // }
}

@media (max-width: 768px) {
  .mainSlider {
    height: 320px !important;
  }

  // .mainSlider.-type-1 .mainSlider__content {
  //   padding-top: 150px;
  // }

  // .mainSlider.-type-1 .mainSlider__title {
  //   font-size: 28px;
  //   // line-height: 1.16em;
  // }

  // .mainSlider.-type-1 .mainSlider__form {
  //   margin-top: 100px;
  // }
}

// @media (min-width: 1440px) {
//   .mainSlider.-type-1 .mainSlider__title {
//     font-size: 55px;
//   }

//   .mainSlider.-type-1 .mainSlider__form {
//     margin-top: 220px;
//   }
// }

.mainSlider.-type-1 .mainSlider__form {
  position: absolute !important;
  top: 50%;
  right: 25%;
}


.btn,
body:not(.touch) .btn:focus {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-shadow: none;
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;
  padding: 15px 25px;
  color: var(--color-dark-1);
  ;
  border: 2px solid var(--color-dark-1);
  ;
  border-radius: 26px;
  background: transparent;
  text-transform: none;
  letter-spacing: .05em;
  transition: 0.3s;
}

// @media (min-width: 1024px) {

//   .btn:not(.btn-xs):not(.btn-sm):not(.btn-lg) {
//     font-size: 14px;
//     line-height: 22px;
//     padding: 15px 30px;
//   }
// }

// @media (min-width: 1024px) {
//   .btn:not(.btn-xs):not(.btn-sm):not(.btn-lg) {
//     font-size: 20px;
//     line-height: 30px;
//     padding: 20px 40px;
//   }
// }

.btn {
  font-weight: 500;
  color: #fff !important;
  background: var(--color-dark-1);
  ;
  border: 1px solid transparent;
  box-shadow: none !important;
}</style>
