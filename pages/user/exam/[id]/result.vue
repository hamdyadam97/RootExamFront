<template>
    <div class="dashboard__content bg-light-4">
           <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} `"
/>

</ClientOnly>
        <div class="row pb-50 mb-10">
            <div class="col-auto">
                <h1 class="text-30 lh-12 fw-700">Exam Result</h1>
            </div>
        </div>

        <div class="row y-gap-30" v-if="exam">
            <div class="col-xl-12 col-sm-12">
                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">

                    <div class="py-30 px-30">

                        <div class="row y-gap-30 justify-between ">
                            <div class="col-lg-4 col-md-4">
                                <div class="py-40 px-45 rounded-16 bg-light-4">
                                    <div class="d-flex justify-center items-center size-70 rounded-full bg-white">
                                        <i width="30" height="30" class="fa fa-question fa-3x"></i>
                                        <!-- <nuxt-img width="30" height="30" :src="elm.icon" alt="icon" /> -->
                                    </div>
                                    <h4 class="text-20 lh-11 fw-500 mt-25">Questions Count</h4>
                                    <p class="mt-10">{{ exam.total_questions }}</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <div class="py-40 px-45 rounded-16 bg-success-1">
                                    <div class="d-flex justify-center items-center size-70 rounded-full bg-white">
                                        <i width="30" height="30" class="fa fa-check fa-3x"></i>
                                        <!-- <nuxt-img width="30" height="30" :src="elm.icon" alt="icon" /> -->
                                    </div>
                                    <h4 class="text-20 lh-11 fw-500 mt-25">Correct Answers</h4>
                                    <p class="mt-10">{{ exam.correct_answers }}</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <div class="py-40 px-45 rounded-16 bg-error-1">
                                    <div class="d-flex justify-center items-center size-70 rounded-full bg-white">
                                        <i width="30" height="30" class="fa fa-times fa-3x"></i>
                                        <!-- <nuxt-img width="30" height="30" :src="elm.icon" alt="icon" /> -->
                                    </div>
                                    <h4 class="text-20 lh-11 fw-500 mt-25">InCorrect Answers</h4>
                                    <p class="mt-10">{{ exam.wrong_answers }}</p>
                                </div>
                            </div>


                        </div>

                        <div class="row y-gap-30 mt-50" v-if="exam_report">
                            <div class="tabs -pills js-tabs">
                                <div class="tabs__controls d-flex x-gap-10 js-tabs-controls">

                                    <div @click="() => setCurrentTab(index)" v-for="(report, index) in exam_report">
                                        <button :class="{
                                            'is-active': currentTab === index,
                                            'tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button': true,
                                        }" type="button">
                                            {{ report.title }}
                                        </button>
                                    </div>
                                </div>

                                <div class="tabs__content mt-20 js-tabs-content">
                                    <div v-for="(report, index) in exam_report" :class="{
                                        'is-active': currentTab === index,
                                        'tabs__pane -tab-item-1': true,
                                    }">

                                        <div class="row y-gap-30"
                                            v-if="report.result">
                                            <div class="col-12">
                                                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                                                    <div class="py-30 px-30">

                                                        <div
                                                            class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                                                            <div class="row y-gap-20 justify-between items-center">
                                                                <div class="col-xl-6">
                                                                    <div class="text-purple-1 fw-500">{{ report.title }}</div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="text-purple-1 fw-500">Count</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="border-light-bottom py-20 px-30">
                                                            <div v-for="(rep, index) in report.result"
                                                                :key="`cat_${index}`"
                                                                class="row y-gap-20 justify-between items-center text-center"
                                                                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                                                                <div class="col-xl-6">
                                                                    <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                                                                </div>

                                                                <div class="col-xl-6">
                                                                    <div class="text-dark-1">{{ rep.correct_answers }}/{{
                                                                        rep.total_questions }}</div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>

                        </div>


                        <!--                         
                       
                        <div class="row y-gap-30" v-if="exam_report.sub_categories && exam_report.sub_categories.length">
                            <div class="col-12">
                                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                                    <div class="py-30 px-30">

                                        <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                                            <div class="row y-gap-20 justify-between items-center">
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Sub Category</div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Count</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-light-bottom py-20 px-30">
                                            <div v-for="(rep, index) in exam_report.sub_categories"
                                                :key="`sub_cat_${index}`"
                                                class="row y-gap-20 justify-between items-center text-center"
                                                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                                                <div class="col-xl-6">
                                                    <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="text-dark-1">{{ rep.correct_answers }}/{{
                                                        rep.total_questions }}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="row y-gap-30"
                            v-if="exam_report.sub_sub_categories && exam_report.sub_sub_categories.length">
                            <div class="col-12">
                                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                                    <div class="py-30 px-30">

                                        <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                                            <div class="row y-gap-20 justify-between items-center">
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Sub Sub-Category</div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Count</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-light-bottom py-20 px-30">
                                            <div v-for="(rep, index) in exam_report.sub_sub_categories"
                                                :key="`sub_sub_cat_${index}`"
                                                class="row y-gap-20 justify-between items-center text-center"
                                                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                                                <div class="col-xl-6">
                                                    <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="text-dark-1">{{ rep.correct_answers }}/{{
                                                        rep.total_questions }}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row y-gap-30" v-if="exam_report.sections && exam_report.sections.length">
                            <div class="col-12">
                                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                                    <div class="py-30 px-30">

                                        <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                                            <div class="row y-gap-20 justify-between items-center">
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">section</div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Count</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-light-bottom py-20 px-30">
                                            <div v-for="(rep, index) in exam_report.sections" :key="`section_${index}`"
                                                class="row y-gap-20 justify-between items-center text-center"
                                                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                                                <div class="col-xl-6">
                                                    <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="text-dark-1">{{ rep.correct_answers }}/{{
                                                        rep.total_questions }}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row y-gap-30" v-if="exam_report.topics && exam_report.topics.length">
                            <div class="col-12">
                                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                                    <div class="py-30 px-30">

                                        <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                                            <div class="row y-gap-20 justify-between items-center">
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Topic</div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="text-purple-1 fw-500">Count</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-light-bottom py-20 px-30">
                                            <div v-for="(rep, index) in exam_report.topics" :key="`topic_${index}`"
                                                class="row y-gap-20 justify-between items-center text-center"
                                                :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                                                <div class="col-xl-6">
                                                    <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="text-dark-1">{{ rep.correct_answers }}/{{
                                                        rep.total_questions }}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->



                        <div class="d-flex justify-center">

                            <nuxt-link to="/user/exam" class="button -md -light-1 text-white -dark-button-white mt-40">
                                Go Home
                            </nuxt-link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup type="ts">

useSeoMeta({
    title: "Exam Result",
});
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

//////////////////////////////////////////////////////////////////////////////////////////
import { useRoute } from "vue-router";
import { useExamsStore } from '~/store/exam';
const { getExam } = useExamsStore();
 
const currentTab = ref('categories');

const setCurrentTab = (tab) => {
    currentTab.value = tab;
};



const route = useRoute();

const id = ref(null);
const exam = ref(null);
const exam_report = ref([]);


onMounted(async () => {
    id.value = route.params.id;
    let data = await getExam(id.value);
    exam.value = data.exam;
    exam_report.value = data.exam_report;
});
watch(route, async (newroute) => {
    id.value = newroute.params.id;
})

import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const userstore = storedUser ? JSON.parse(storedUser) : null;

const userName = computed(() => {
 
  return `${userstore.first_name || ''} ${userstore.mobile_number || ''}`.trim() || 'Guest';
});


</script>