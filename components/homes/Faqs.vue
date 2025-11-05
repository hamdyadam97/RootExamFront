<template>
    <div class="section bg-grey py-0" id="faqSection">
        <div class="container-fluid px-0">
            <div class="row no-gutters">
                <div class="col-xl-6 col-sm-12 col-md-6 order-2 order-xl-1">
                    <div class="faq-wrap px-15 px-lg-8">
                        <div class="title-wrap">
                            <h2 class="h1">Most Asked Questions</h2>
                        </div>
                        <div class="mt-2 mt-lg-4"></div>

                        <div class="accordion -block text-left pt-60 lg:pt-40 js-accordion">
                            <div v-for="(elm, i) in faq" :key="i" @click="toggleFaq(elm.id)" :class="{
                                'faq-item': true,
                                accordion__item: true,
                                'is-active': activeFaq === elm.id,
                            }">
                                <div class="accordion__button">
                                    <div class="accordion__icon">
                                        <div class="icon d-flex justify-center items-center" data-feather="plus">
                                            <FontAwesomeIcon :icon="faPlus" />
                                        </div>
                                        <div class="icon d-flex justify-center items-center" data-feather="minus">
                                            <FontAwesomeIcon :icon="faMinus" />
                                        </div>
                                    </div>
                                    <span class="text-17 fw-500 text-dark-1">{{
                                        elm.question
                                    }}</span>
                                </div>

                                <div :style="{ maxHeight: activeFaq === elm.id ? '139px' : '0' }"
                                    class="accordion__content">
                                    <div class="accordion__content__inner">
                                        <p>{{ elm.answer }}</p>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <!-- <a href="#" class="btn mt-15 mt-sm-3" data-toggle="modal" data-target="#modalQuestionForm"><i
                                class="icon-right-arrow"></i><span>Ask Question</span><i class="icon-right-arrow"></i></a> -->
                    </div>
                </div>
                <div class="col-xl-6 col-sm-12 col-md-6 banner-left bg-cover order-1 order-xl-2"
                    style="background-image: url(/assets/img/sliders/2.jpeg)">
                    <!-- /assets/img/banner-left.jpg -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { faq } from "@/data/faq";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const activeFaq = ref(0);

const toggleFaq = (id) => {
    activeFaq.value = activeFaq.value === id ? 0 : id;
};
</script>

<style scoped>
.section {
    position: relative;
    margin-top: 110px;
}

.bg-grey {
    padding: 100px 0;
    background: url(https://websmirno.site/medin/html/medera-html/images/bg-grey.jpg);
}

.bg-grey {
    padding: 100px 0;
    background-color: #f6f7f5;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*="col-"] {
    padding-right: 0;
    padding-left: 0;
}

/* @media (min-width: 1230px) {
    .order-xl-1 {
        order: 1;
    }
} */

/* @media (min-width: 1230px) {
    .col-xl-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
} */
/* 
.order-2 {
    order: 2;
} */

.faq-wrap {
    padding: 65px 100px 65px 80px;
    position: relative;
}

@media (min-width: 1024px) {

    .pl-lg-8,
    .px-lg-8 {
        padding-left: 80px !important;
    }
}

@media (min-width: 1024px) {

    .pr-lg-8,
    .px-lg-8 {
        padding-right: 80px !important;
    }
}

.title-wrap {
    position: relative;
}

.title-wrap .h1 {
    line-height: 1.167em;
}

.faq-item {
    margin-bottom: 10px;
    border: 0;
}

.faq-item {
    padding: 20px 45px 19px 25px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Poppins", serif;
    line-height: 1em;
    background-color: #fff;
    color: #444;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}
</style>