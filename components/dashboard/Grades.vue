<template>
      <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Grades</h1>
          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Grades</h2>
            </div>

            <div class="py-30 px-30">
              <div class="row">
                <div class="col-auto">Grader Report</div>
              </div>

              <div class="row y-gap-20 x-gap-20 items-center pt-30">
                <div class="col-auto">
                  <h4 class="text-18 lh-13 fw-500">First name</h4>
                </div>

                <div class="col-12">
                  <div class="d-flex x-gap-5 y-gap-10 flex-wrap">
                    <div>
                      <div class="py-8 pr-5 d-flex justify-center items-center">
                        All
                      </div>
                    </div>

                    <div
                      v-for="(letter, index) in letters"
                      :key="index"
                      style="cursor: pointer"
                      @click="() => setCurrentLetter(letter)"
                    >
                      <div
                        :class="{
                          'size-35 d-flex justify-center items-center border-light rounded-4': true,
                          'bg-dark-1 -dark-bg-dark-2 text-white':
                            currentLetter === letter,
                        }"
                      >
                        {{ letter }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25"
              >
                <div class="row y-gap-20 justify-between items-center">
                  <div class="col-xl-3">
                    <div class="text-purple-1 fw-500">First name / Surname</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-purple-1 fw-500">Email address</div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-between items-center">
                      <div class="text-purple-1 fw-500">
                        Are you a Literacy Light...
                      </div>
                      <div class="d-flex y-gap-5 x-gap-10 items-center pl-10">
                        <a href="#">
                          <i class="icon-edit text-16 text-purple-1"></i>
                        </a>
                        <a href="#">
                          <i class="icon-up_down text-20 text-purple-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-between items-center">
                      <div class="text-purple-1 fw-500">
                        Let&#39;s learn about...
                      </div>
                      <div class="d-flex y-gap-5 x-gap-10 items-center pl-10">
                        <a href="#">
                          <i class="icon-edit text-16 text-purple-1"></i>
                        </a>
                        <a href="#">
                          <i class="icon-up_down text-20 text-purple-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-between items-center">
                      <div class="text-purple-1 fw-500">Course total</div>
                      <div class="d-flex y-gap-5 x-gap-10 items-center pl-10">
                        <a href="#">
                          <i class="icon-edit text-16 text-purple-1"></i>
                        </a>
                        <a href="#">
                          <i class="icon-up_down text-20 text-purple-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-light-bottom py-20 px-30">
                <div
                  v-for="(grade, index) in grades"
                  :key="index"
                  class="row y-gap-20 justify-between items-center"
                  :class="{ 'border-top-light pt-20 mt-20': index !== 0 }"
                >
                  <div class="col-xl-3">
                    <div class="d-flex items-center">
                      <div class="d-flex x-gap-10 items-center mr-30">
                        <a href="#">
                          <i class="icon-calendar text-16"></i>
                        </a>
                        <a href="#">
                          <i class="icon-edit text-16"></i>
                        </a>
                      </div>
                      <nuxt-img width="44" height="44" :src="grade.avatar" alt="image" class="size-40" />
                      <div class="text-dark-1 ml-10">{{ grade.name }}</div>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <div class="text-dark-1">{{ grade.email }}</div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-end">
                      <a href="#">
                        <i class="icon-zoom-in text-20"></i>
                      </a>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-end">
                      <a href="#">
                        <i class="icon-zoom-in text-20"></i>
                      </a>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <div class="d-flex justify-end">
                      <a href="#">
                        <i class="icon-zoom-in text-20"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { grades } from "@/data/dashboard";
 
import PageLinksTwo from "../common/PageLinksTwo";
import { letters } from "~/data/dictionary";
const currentLetter = ref("A");

const setCurrentLetter = (letter) => {
  currentLetter.value = letter;
};
</script>
