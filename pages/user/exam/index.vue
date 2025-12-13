<template>
  <div class="dashboard__content bg-light-4">
       <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} • Dashboard`"
/>

</ClientOnly>
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Exams</h1>
      </div>
    </div>

    <div class="row y-gap-30">
      <div class="col-12">
        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

          <div class="py-30 px-30">

            <!-- <div class="row y-gap-20 x-gap-20 items-center pt-30">
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
              </div> -->

            <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
              <div class="row y-gap-20 justify-between items-center">
                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">Title</div>
                </div>
                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">Questions Count</div>
                </div>

                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">Mode</div>
                </div>

                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">
                    Question mode
                  </div>
                </div>

                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">
                    Categories
                  </div>
                </div>

                <div class="col-xl-2">
                  <div class="text-purple-1 fw-500">
                    Action
                  </div>
                </div>
              </div>
            </div>

            <div class="border-light-bottom py-20 px-30">
              <div v-for="(exam, index) in exams" :key="index"
                class="row y-gap-20 justify-between items-center text-center"
                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                <div class="col-xl-2">
                  <div class="text-dark-1 ml-10">{{ exam.title }}</div>
                </div>

                <div class="col-xl-2">
                  <div class="text-dark-1">{{ exam.question_count }}</div>
                </div>

                <div class="col-xl-2">
                  <div class="text-dark-1">{{ exam.mode }}</div>
                </div>


                <div class="col-xl-2">
                  <div class="text-dark-1">{{ exam.question_mode }}</div>
                </div>



                <div class="col-xl-2">
                  <div class="text-dark-1">{{ exam.categories }}</div>
                </div>


                <div class="col-xl-2  x-gap-10">

                  <nuxt-link :to="`/user/exam/${exam.id}/show`">
                    <i class="fa fa-question text-16"></i>
                  </nuxt-link>
                  <!-- <a href="#">
                        <i class="icon-edit text-16"></i>
                      </a> -->

                </div>

              </div>
            </div>

            <div class="d-flex justify-center mt-50">
              <CommonPaginationTwo :pagination="paginationData" @pageChange="fetchPageData"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { onMounted } from "vue";
import { useExamsStore } from '~/store/exam';
const { getExams } = useExamsStore();
const { exams } = storeToRefs(useExamsStore());

// import { letters } from "~/data/dictionary";
// const currentLetter = ref("A");

// const setCurrentLetter = (letter) => {
//   currentLetter.value = letter;
// };

const page_number = ref(1);
const paginationData = ref();

useSeoMeta({
  title: "Exams",
});
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

onMounted(async () => {
  let resp = await getExams(page_number.value);
  paginationData.value = resp?.pagination ?? null  
})

const fetchPageData = async (page = 1) => {
  let resp = await getExams(page);
  paginationData.value = resp?.pagination ?? null
};



import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const userstore = storedUser ? JSON.parse(storedUser) : null;

const userName = computed(() => {
 
  return `${userstore.first_name || ''} ${userstore.mobile_number || ''}`.trim() || 'Guest';
});

</script>

<style lang="scss" scoped></style>
