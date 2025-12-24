<template>
  <div class="dashboard__content bg-light-4">
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Dashboard</h1>
      </div>
    </div>
   <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} `"
/>

</ClientOnly>

    <div class="row y-gap-30">
      <div v-for="(elm, i) in states" :key="i" class="col-xl-6 col-md-6">
        <div class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <div>
            <div class="lh-1 fw-500">{{ elm.title }}</div>
            <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
              {{ elm.value }}
            </div>
          </div>

          <FontAwesomeIcon :icon="elm.iconClass" class="text-40 text-purple-1" />
        </div>
      </div>
    </div>

    <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 mt-30 ">
      <div class="py-30 px-30">
        <div class="row y-gap-30 " v-if="exam_report">
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

                <div class="row y-gap-30" v-if="report.result">
                  <div class="col-12">
                    <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

                      <div class="py-30 px-30">

                        <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
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
                          <div v-for="(rep, index) in report.result" :key="`cat_${index}`"
                            class="row y-gap-20 justify-between items-center text-center"
                            :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                            <div class="col-xl-6">
                              <div class="text-dark-1 ml-10">{{ rep.name }}</div>
                            </div>

                            <div class="col-xl-6">
                              <div class="text-dark-1">{{ rep.correct_answers }} / {{
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
      </div>
    </div>



    <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 mt-30 " v-if="categories_remaining_counts">
      <div class="py-30 px-30">
      
        <div class="row y-gap-30" v-if="categories_remaining_counts">


          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Categories Remaining Questions Count</h1>
          </div>

          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">

              <div class="py-25 px-30 bg-light-7 -dark-bg-dark-2 rounded-8 mt-25 text-center">
                <div class="row y-gap-20 justify-between items-center">
                  <div class="col-xl-6">
                    <div class="text-purple-1 fw-500">Category</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-purple-1 fw-500">Answered Count</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-purple-1 fw-500">Total Count</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-purple-1 fw-500">Remaining Count</div>
                  </div>
                </div>
              </div>

              <div class="border-light-bottom py-20 px-30">
                <div v-for="(rep, index) in categories_remaining_counts" :key="`cat_${index}`"
                  class="row y-gap-20 justify-between items-center text-center"
                  :class="{ 'border-top-light pt-20 mt-20': index !== 0 }">
                  <!-- {{ rep }} -->
                  <div class="col-xl-6">
                    <div class="text-dark-1 ml-10">{{ rep.category_name }}</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-dark-1 ml-10">{{ rep.answered_questions }}</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-dark-1 ml-10">{{ rep.total_questions }}</div>
                  </div>
                  <div class="col-xl-2">
                    <div class="text-dark-1 ml-10">{{ rep.remaining_questions }}</div>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTags, faLayerGroup, faCertificate } from "@fortawesome/free-solid-svg-icons";
import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;
console.log(user);


const currentTab = ref('categories');

const setCurrentTab = (tab) => {
  currentTab.value = tab;
};

const userName = computed(() => {
 
  return `${user.first_name || ''} ${user.mobile_number || ''}`.trim() || 'Guest';
});



const states = reactive([
  {
    id: 1,
    title: "Total Subscriptions",
    value: 0,
    iconClass: faTags,
  },
  {
    id: 2,
    title: "Total Active Subscriptions",
    value: 0,
    iconClass: faTags,
  },
  {
    id: 3,
    title: "Categories Count",
    value: 0,
    iconClass: faLayerGroup,
  },
  {
    id: 4,
    title: "SubCategories Count",
    value: 0,
    iconClass: faLayerGroup,
  },
  {
    id: 5,
    title: "Total Exams",
    value: 0,
    iconClass: faCertificate,
  },
])
const exam_report = ref([]);
const categories_remaining_counts = ref([]);

onMounted(() => {
  index();
})

const index = async () => {

  const { data } = await useNuxtApp().$api(`/home`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (data) {
    states.find((i) => i.id == 1).value = data.total_subscriptions;
    states.find((i) => i.id == 2).value = data.total_active_subscriptions;
    states.find((i) => i.id == 3).value = data.categories_count;
    states.find((i) => i.id == 4).value = data.sub_categories_count;
    states.find((i) => i.id == 5).value = data.exams_count;
    exam_report.value = data.exam_report;
    categories_remaining_counts.value = data.categories_remaining_counts;
  }

}

</script>

<style lang="scss" scoped></style>
