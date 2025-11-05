<template>
  <section :class="`layout-pt-lg layout-pb-lg ${backgroundColor || ''}`">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-lg-6">
          <div class="sectionTitle text-center" data-aos="fade-center">
            <h2 class="sectionTitle__title">Learn from the best instructors</h2>
          </div>
        </div>

      </div>

      <div class="pt-60 lg:pt-50 js-section-slider">
        <ClientOnly>
          <Swiper class="overflow-visible" :modules="[Navigation, Pagination]"
            :pagination="{ el: '.event-four-pagination', clickable: true }" :navigation="{
              nextEl: '.icon-arrow-right-event-four',
              prevEl: '.icon-arrow-left-event-four',
            }" :space-between="30" :slides-per-view="1" :breakpoints="{
  450: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
}">
            <SwiperSlide v-for="(elm, i) in instructors" :key="i" class="swiper-slide">
              <div class="swiper-slide">
                <div class="doctor-box doctor-box-style2 text-center">
                  <div class="doctor-box-photo">
                    <img :src="elm.image" class="img-fluid" alt="" width="100%">
                  </div>
                  <div class="doctor-box-top">
                    <h5 class="doctor-box-name">{{ elm.name }}</h5>
                    <div class="doctor-box-position">{{ elm.specialization }}</div>
                    <!-- <div class="doctor-box-position">Software Eng</div> -->
                  </div>
                  <ul class="doctor-box-shedule">
                    <li><span>Mon-Thu</span><span>08:00 - 20:00</span></li>
                    <li><span>Friday</span><span>07:00 - 22:00</span></li>
                    <li><span>Saturday</span><span>08:00 - 18:00</span></li>
                  </ul>
                  <div class="doctor-box-booking">
                    <!-- <a href="#" data-toggle="modal" data-target="#modalBookingForm">Booking a visit <i class="icon-right-arrow"></i></a> -->
                  </div>
                </div>


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
import "swiper/css";
import "swiper/css/pagination";


const props = defineProps({
  instructors: { type: Object, required: true },
  // default_image: { type: String, required: true },
  backgroundColor: { type: String, required: false },
})
const instructors = computed(() => props.instructors);
// const default_image = computed(() => props.default_image);

const setDefault = (key) => {
  document.getElementById(`instructor_image${key}`).srcset = default_image.value;
}



</script>

<style scoped>
/* Add your component-specific styles here */

.doctor-box {
  max-width: 370px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding-bottom: 15px;
}

.doctor-box-style2 .doctor-box-photo {
  overflow: hidden;
}

.doctor-box-photo {
  position: relative;
  overflow: hidden;
  transition: 0.35s;
  background-color: #fff;
  margin-left: -15px;
  margin-right: -15px;
}

.doctor-box>* {
  margin-bottom: 0;
}

.doctor-box-style2 .doctor-box-photo img {
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

.doctor-box-top {
  margin: 0 -15px !important;
  padding: 20px 15px;
  background: #fafbfa;
}

.doctor-box-style2 .doctor-box-name {
  margin-bottom: 14px;
}

.doctor-box-style2 .doctor-box-name+.doctor-box-position {
  margin-top: 10px;
}

.doctor-box-shedule {
  margin: 20px auto;
  max-width: 250px;
  padding: 0;
  list-style: none;
}

.doctor-box-shedule li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
}

.doctor-box-shedule li span:first-child {
  color: #787878;
}

.doctor-box-booking>a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", serif;
  color: #5c6895;
  border-top: 1px solid #fafafa;
  text-decoration: none;
}

.doctor-box-style2:hover .doctor-box-photo img {
  -webkit-transition: transform 0.6s ease 0.05s;
  -o-transition: transform 0.6s ease 0.05s;
  transition: -webkit-transform 0.6s ease 0.05s;
  transition: transform 0.6s ease 0.05s;
  transition: transform 0.6s ease 0.05s, -webkit-transform 0.6s ease 0.05s;
  -webkit-transform: scale(1.1) rotate(0.0001deg);
  -ms-transform: scale(1.1) rotate(0.0001deg);
  transform: scale(1.1) rotate(0.0001deg);
}
</style>
