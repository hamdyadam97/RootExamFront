<template>
    <div class="section py-0" id="testimonialsSection">
        <div class="container-fluid px-0">
            <div class="row no-gutters">

                <div class="col-sm-12 col-md-6 col-lg-6 order-0 reviews-photo">
                    <img src="/assets/img/testimonials-left.jpg" alt="">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 order-1 bg-cover"
                    style="background-image: url('/assets/img/reviews-bg.jpg');">

                    <div class="reviews-wrap reviews-style2 ">
                        <ClientOnly>
                            <Swiper class="overflow-hidden" :modules="[Navigation, Pagination]" :space-Between="4"
                                :speed="1000" :slides-Per-View="1" @swiper="onSwiper" @slideChange="handleSlideChange">
                                <SwiperSlide v-for="(elm, i) in testimonials" :key="i" class="swiper-slide">
                                    <div class="swiper-slide h-100">
                                        <div class="testimonials -type-2 text-center" data-aos="fade-up"
                                            data-aos-duration="600">
                                            <div class="testimonials__icon">
                                                <img width="60" height="43" src="/assets/img/quote.svg"
                                                    alt="quote" />
                                            </div>
                                            <div class="testimonials__text md:text-20 fw-500 text-dark-1">
                                                {{ elm.text }}
                                            </div>
                                            <div class="testimonials__author">
                                                <h5 class="text-17 lh-15 fw-500">{{ elm.name }}</h5>
                                                <div class="mt-5">{{ elm.position }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </ClientOnly>


                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

 

const swiperRef = ref(null);
const currentSlideIndex = ref(0);



const handleSlideChange = (swiper) => {
    currentSlideIndex.value = swiper.activeIndex;
};

const onSwiper = (swiper) => {
    swiperRef.value = swiper;
};

const testimonials = [
    {
        id: 0,
        name: "Joseph Dunbar",
        position: "Carpenter",
        text: `I would like to give you a special 'Thank You' to all of you for the care you've given. You were special to a part of our lives for the year we knew you all. You were very caring. Nurses like you are never forgotten. I just can't thank you enough.`,
    },
    {
        id: 1,
        name: "Steven Roa",
        position: "Businesswoman",
        text: `Today is my last day of infusion. But I know I will be back …not as a patient but a visitor. I have only positive things to say about the nurses at MedEra here in infusion and also on the 4th Floor. They all called me by my name when I walked in the …`,
    },
    {
        id: 2,
        name: "Wilmer Stevenson",
        position: "Creative manager",
        text: `Am very impressed with you all as well as being highly proficient is absolutely adorable. I feel so relaxed in her capable hands and hope to be her patient for a very long time! You are a fantastic team and I feel very privileged to come to you all!!!`,
    },

]

</script>

<style scoped>
.section {
    position: relative;
}

.container-fluid.px-0 {
    overflow-x: hidden;
    overflow-y: hidden;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}

.reviews-style2.reviews-wrap {
    max-width: 660px;
    height: 100%;
    padding: 40px 60px 10px 63px;
}

.reviews-style2 .reviews-carousel {
    position: relative;
}

/* .slick-slider {
    padding: 0;
    list-style: none;
} */

.reviews-carousel {
    margin-top: 25px;
    position: relative;
    z-index: 0;
}

.reviews-style2 .reviews-carousel:before {
    content: '“';
    position: absolute;
    top: -.25em;
    left: -5px;
    margin-top: -34px;
    font-size: 200px;
    line-height: 1em;
    font-family: "Poppins", serif;
    color: #5c6895;
    font-weight: bold;
}

/* .slick-slider .slick-track,
.slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
} */

/* .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
} */
.reviews-photo{
    padding-left: 0;
    padding-right: 0;
}
@media (min-width: 576px) {
    .reviews-photo.order-0 {
        display: flex;
        justify-content: flex-end;
    }
}

/* 
.no-gutters>.col,
.no-gutters>[class*="col-"] {
    padding-right: 0;
    padding-left: 0;
} */

img {
    vertical-align: middle;
    border-style: none;
}
</style>