<template>
  <section class="layout-pt-lg layout-pb-lg" id="about">
    <div class="container">
      <div class="row y-gap-15 justify-between items-center">
        <div class="col-xl-6 col-lg-5 col-md-9">
          <!-- <div class="h-sub">25 Years of Medical Excellence</div> -->
          <h2 class="text-30 lh-13">
            Why Choose ROOTS Medical Q Banks?
            <!-- <br />
            <span class="text-orange-1">of Medicine</span> -->
          </h2>
          <p class="mt-15 mb-25 text-20">
            Preparing for crucial medical exams? ROOTS Q Banks are designed to help you succeed.
            <br />
            Here's how we can help you excel:
          </p>
 

          <ul class="marker-list-md">
            <li>
              <i class="icon icon-check"></i>
              Comprehensive Coverage: Our Q Banks cover a wide range of medical specialties and topics, ensuring you have the knowledge you need, whether you're a student or a practicing doctor.
            </li>
            <li>
              <i class="icon icon-check"></i>
              Exam-Focused Questions: We meticulously craft our questions to mirror the style and difficulty of real exams, giving you the confidence to tackle any challenge.
            </li>
            <li>
              <i class="icon icon-check"></i>
              Detailed Explanations: Every question comes with in-depth explanations to help you understand the concepts and reasoning behind the answers, solidifying your learning.
            </li>
            <li>
              <i class="icon icon-check"></i>
              Up-to-Date Content: Our team continuously updates the Q Banks to reflect the latest medical guidelines, research, and exam patterns, ensuring you're always studying the most relevant material.
            </li>
            <li>
              <i class="icon icon-check"></i>
              Track Your Progress: Monitor your performance, identify your strengths and weaknesses, and focus your study efforts where they're needed most with our performance tracking tools.
            </li>
          </ul>

          <p class="mt-15 mb-25 text-20">
            Ready to take your medical knowledge to the next level? Explore our Q Banks and start your free trial today!
          </p>

        </div>

        <div class="col-xl-6 col-lg-6 col-md-3">
          <div class="composition -type-7">
            <div class="-el-1">
              <nuxt-img class="w-1/1" width="662" height="730" src="/assets/img/sliders/1.jpeg" alt="image"></nuxt-img>
            </div>
            <!-- /assets/img/video-poster.jpg -->

            <div class="-el-2" @click="() => isOpen = true" style="cursor: pointer">
              <div class="d-flex items-center justify-center bg-white size-90 rounded-full js-gallery"
                data-gallery="gallery1">
                <div class="icon-play text-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo videoId="/assets/img/sliders/about.mp4" :isOpen="isOpen" @close="close" />
</template>

<script setup>
import ModalVideo from "~/components/common/ModalVideo";

import { ref } from "vue";

const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Add your scoped styles here */
p {
  color: #787878
}

.h-sub {
  margin-bottom: 17px;
  font-size: 17px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: "Poppins", serif;
  letter-spacing: 1px;
}

ul.marker-list-md {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  line-height: 22px;
}

ul.marker-list-md li {
  color: #787878 !important;
  font-weight: 400;
  font-size: 16px;
}

ul.marker-list-md li i {
  padding-right: 5px;
}

ul.marker-list-md li:not(:last-child) {
  margin-bottom: 16px;
}

/* ul.marker-list-md li:before {
  left: 3px;
} */

ul.marker-list-md li i {
  /* content: '\e904'; */
  font-size: 12px;
  /* font-family: 'dentco'; */
  /* position: absolute; */
  /* left: 0;
    top: 1px; */
  color: #5c6895;
}
</style>
