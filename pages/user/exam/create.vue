<template>
  <div class="dashboard__content bg-light-4">
       <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'}`"
/>

</ClientOnly>
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Create New Exam</h1>
      </div>
    </div>

    <div class="row y-gap-60">
      <div class="col-12">
        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
          <!-- <div class="d-flex items-center py-20 px-30 border-bottom-light">
            <h2 class="text-17 lh-1 fw-500">Basic Information</h2>
          </div> -->

          <div class="py-30 px-30">
            <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30" action="#">

              <div class="col-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Title</label>
                <input required type="text" placeholder="Title" v-model="exam.title" />
              </div>

              <div class="col-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Questions Count</label>
                <input required type="number" step="1" placeholder="Questions Count"
                  v-model.number="exam.question_count" />
                  <label class="label text-red-1 text-11">Maximum number for questions is {{max_question_count}}</label>
              </div>

              <div class="col-12">
                <h5 class="text-17 lh-1 fw-500">Test Mode</h5>
              </div>
              <div class="col-6">



                <label v-for="(mode, i ) in exam_modes" class="radio-inline mx-3">
                  <div class="mt-30">
                    <div class="form-radio d-flex items-center">
                      <div class="radio">
                        <input type="radio" name="exam_type" :value="i" v-model="exam.exam_mode" />
                        <div class="radio__mark">
                          <div class="radio__icon"></div>
                        </div>
                      </div>
                      <h5 class="ml-15 text-15 lh-1 fw-500 text-dark-1">
                        {{ mode }}
                      </h5>
                    </div>
                  </div>
                </label>

              </div>

              <div class="col-6 mt-10">
                <div class="row y-gap-20 justify-start">
                  <div class="col-auto">
                    <div class="text-16 fw-500 text-dark-1">
                      Timed Mode
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="form-switch">
                      <div class="switch" data-switch=".js-switch-content">
                        <input type="checkbox" v-model="exam.is_timed_mode" :value="true" />
                        <span class="switch__slider"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-bottom-light py-0"></div>


              <div class="col-12">
                <h5 class="text-17 lh-1 fw-500">Question Mode</h5>
              </div>

              <div class="col-12">

                <label v-for="(q_mode, key ) in question_modes" :key="key" class="radio-inline mx-3">
                  <div class="mt-30" :ref="el => setTooltipRef(el, key)" :data-content="q_mode.desc">
                    <div class="form-radio d-flex items-center">
                      <div class="radio">
                        <input type="radio" name="q_type" :value="key" v-model="exam.question_mode" />
                        <div class="radio__mark">
                          <div class="radio__icon"></div>
                        </div>
                      </div>
                      <h5 class="ml-15 text-15 lh-1 fw-500 text-dark-1">
                        {{ q_mode.name }}
                      </h5>
                    </div>
                  </div>
                </label>

              </div>


              <div class="border-bottom-light py-0"></div>


              <div class="col-12">
                <div class="d-flex justify-between">
                  <h5 class="text-17 lh-1 fw-500">Category</h5>
                  <button type="button" class="button -md -purple-3 text-purple-1" @click="checkAll('category')">
                    Check All
                  </button>
                </div>
              </div>



              <div class="col-12">
                <label v-for="(item, index) in filtered_categories" :key="index" class="radio-inline mx-3">
                  <div class="form-checkbox">
                    <input type="checkbox" :value="item.id" v-model="exam.categories" />
                    <div class="form-checkbox__mark">
                      <div class="form-checkbox__icon icon-check"></div>
                    </div>
                    <div class="sidebar-checkbox__title mx-3" id="">
                      {{ item.name }} ({{ item.questions_count }})
                    </div>
                  </div>
                </label>

              </div>


              <div class="border-bottom-light mb-20" v-if="filtered_sub_categories.length"></div>

              <div class="col-12" v-if="filtered_sub_categories.length">
                <div class="d-flex justify-between">
                  <h5 class="text-17 lh-1 fw-500">Sub Categories</h5>
                  <button type="button" class="button -md -purple-3 text-purple-1" @click="checkAll('sub_categories')">
                    Check All
                  </button>
                </div>
              </div>

              <div class="col-12" v-if="filtered_sub_categories.length">
                <div class="row">
                  <div class="col-4" v-for="(item, index) in filtered_sub_categories" :key="index">
                    <label :key="index" class="radio-inline mx-3">
                      <div class="form-checkbox">
                        <input type="checkbox" :value="item.id" v-model="exam.sub_categories" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                        <div class="sidebar-checkbox__title mx-3" id="">
                          {{ item.name }} ({{ item.questions_count }})
                        </div>
                      </div>
                    </label>

                  </div>
                </div>

              </div>


              <div class="border-bottom-light mb-20" v-if="filtered_sub_sub_categories.length"></div>

              <div class="col-12" v-if="filtered_sub_sub_categories.length">
                <div class="d-flex justify-between">
                  <h5 class="text-17 lh-1 fw-500">Sub Sub-Categories</h5>
                  <button type="button" class="button -md -purple-3 text-purple-1"
                    @click="checkAll('sub_sub_categories')">
                    Check All
                  </button>
                </div>
              </div>

              <div class="col-12" v-if="filtered_sub_sub_categories.length">
                <div class="row">
                  <div class="col-4" v-for="(sub_sub_category, index) in filtered_sub_sub_categories"
                    :key="'sub_sub_cat' + sub_sub_category.id">
                    <label :key="'sub_sub_cat' + sub_sub_category.id" class="radio-inline mx-3">
                      <div class="form-checkbox">
                        <input type="checkbox" :value="sub_sub_category.id" v-model="exam.sub_sub_categories" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                        <div class="sidebar-checkbox__title mx-3" id="">
                          {{ sub_sub_category.name }} ({{ sub_sub_category.questions_count }})
                        </div>
                      </div>
                    </label>

                  </div>
                </div>

              </div>




              <div class="border-bottom-light mb-20" v-if="filtered_sections.length"></div>

              <div class="col-12" v-if="filtered_sections.length">
                <div class="d-flex justify-between">
                  <h5 class="text-17 lh-1 fw-500">Sections</h5>
                  <button type="button" class="button -md -purple-3 text-purple-1" @click="checkAll('sections')">
                    Check All
                  </button>
                </div>
              </div>

              <div class="col-12" v-if="filtered_sections.length">
                <div class="row">
                  <div class="col-3" v-for="(section, i) in filtered_sections" :key="`section_${i}`">
                    <label class="radio-inline mx-3">
                      <div class="form-checkbox">
                        <input type="checkbox" :value="section.id" v-model="exam.sections" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                        <div class="sidebar-checkbox__title mx-3" id="">
                          {{ section.name }} ({{ section.questions_count }})
                        </div>
                      </div>
                    </label>

                  </div>
                </div>

              </div>





              <div class="border-bottom-light mb-20" v-if="filtered_topics.length"></div>

              <div class="col-12" v-if="filtered_topics.length">
                <div class="d-flex justify-between">
                  <h5 class="text-17 lh-1 fw-500">Topics</h5>
                  <button type="button" class="button -md -purple-3 text-purple-1" @click="checkAll('topics')">
                    Check All
                  </button>
                </div>
              </div>

              <div class="col-12" v-if="filtered_topics.length">
                <div class="row">
                  <div class="col-3" v-for="(topic, i) in filtered_topics" :key="`topic_${i}`">
                    <label class="radio-inline mx-3">
                      <div class="form-checkbox">
                        <input type="checkbox" :value="topic.id" v-model="exam.topics" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                        <div class="sidebar-checkbox__title mx-3" id="">
                          {{ topic.name }} ({{ topic.questions_count }})
                        </div>
                      </div>
                    </label>
                  </div>
                </div>


              </div>

              <!-- //////////////////////////////////// -->

              <div class="border-bottom-light mb-20"></div>

              <div class="row y-gap-20 justify-end">
                <div class="col-auto">
                  <button class="button -md -purple-1 text-white">
                    Save
                  </button>
                </div>
              </div>

            </form>


          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Create Exam",
});
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import { storeToRefs } from 'pinia';
import { useExamsStore } from '~/store/exam';
const { create, store, refreshSectionsAndTopics } = useExamsStore();
const { exam_modes, question_modes, sections, topics } = storeToRefs(useExamsStore());
import { useAuthStore } from '~/store/auth';
const { user } = storeToRefs(useAuthStore());
const { getProfileData } = useAuthStore();
const tooltipRefs = ref([]);

const setTooltipRef = (el, key) => {
  if (el) {
    tooltipRefs.value.push(el)
  }
}



const exam = reactive({
  title: null,
  question_count: 0,
  exam_mode: 0,
  is_timed_mode: false,
  question_mode: '',
  categories: [],
  sub_categories: [],
  sub_sub_categories: [],
  sections: [],
  topics: [],
});
const categories = ref([]);
const sub_categories = ref([]);
const sub_sub_categories = ref([]);

const handleSubmit = (e) => {
  e.preventDefault();
  store(exam);
};


// onBeforeMount(() => {
//   let toggle = document.getElementsByClassName('js-dashboard-home-9-sidebar-toggle');
//   let sidebar = document.getElementsByClassName('dashboard -home-9 js-dashboard-home-9 -is-sidebar-hidden');

//   if (!sidebar.length) {
//     for (var i = 0; i < toggle.length; i++) {
//       toggle[i].click();
//     }
//   }
// });

// onBeforeUnmount(() => {
//   let toggle = document.getElementsByClassName('js-dashboard-home-9-sidebar-toggle');
//   let sidebar = document.getElementsByClassName('dashboard -home-9 js-dashboard-home-9 -is-sidebar-hidden');

//   if (sidebar.length) {
//     for (var i = 0; i < toggle.length; i++) {
//       toggle[i].click();
//     }
//   }
// })

const max_question_count = ref(100);


onMounted(async () => {
  getProfileData();
  await create();


  setCategoriesAndSubs();

  if (tooltipRefs.value) {
    tooltipRefs.value.forEach((el, index) => {
      if (el) {
        tippy(el, {
          content: el.getAttribute('data-content'), // Get the tooltip content from the data attribute
          placement: 'top', // Tooltip position (can be 'top', 'bottom', etc.)
        })
      }
    })


  }

})

const filtered_categories = computed(() => {
  return categories.value.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
});

const filtered_sub_categories = computed(() => {
  return sub_categories.value.filter((i) => {
    return exam.categories.includes(i.category_id);
  }).filter((value, index, self) => {
    return self.indexOf(value) === index && value?.questions_count > 0
  })
});

const filtered_sub_sub_categories = computed(() => {
  return sub_sub_categories.value.filter((i) => {
    return exam.sub_categories.includes(i.sub_cat_id);
  }).filter((value, index, self) => {
    return self.indexOf(value) === index && value?.questions_count > 0
  })
});

const filtered_sections = computed(() => {
  return sections.value.filter((i) => {
    return exam.categories.includes(i.category_id);
  }).filter((value, index, self) => {
    return self.indexOf(value) === index && value?.questions_count > 0
  })
});

const filtered_topics = computed(() => {
  return topics.value.filter((i) => {
    return exam.categories.includes(i.category_id);
  }).filter((value, index, self) => {
    return self.indexOf(value) === index && value?.questions_count > 0
  })
});


watch(() => exam.categories, () => {
  exam.sub_categories = exam.sub_categories.filter(i => filtered_sub_categories.value.map(({ id }) => id).includes(i));
  exam.sections = exam.sections.filter(i => filtered_sections.value.map(({ id }) => id).includes(i));
  exam.topics = exam.topics.filter(i => filtered_topics.value.map(({ id }) => id).includes(i));
}, { deep: true });

watch(() => exam.sub_categories, () => {
  filterSectionsAndTopics()
}, { deep: true });
watch(() => exam.sub_sub_categories, () => {
  filterSectionsAndTopics()
}, { deep: true });


const filterSectionsAndTopics = async () => {
  await refreshSectionsAndTopics(exam.sub_categories, exam.sub_sub_categories)

}

watch(user, new_user => {
  setCategoriesAndSubs();
})

const setCategoriesAndSubs = () => {
  if (user.value) {
    categories.value = user?.value?.categories ?? [];
    sub_categories.value = user?.value?.sub_categories ?? [];
    sub_sub_categories.value = user?.value?.sub_sub_categories ?? [];
  }
}

const checkAll = (type) => {
  if (type == "category") {
    exam.categories = filtered_categories.value.map((i) => i.id);
  } else if (type == "sub_categories") {
    exam.sub_categories = filtered_sub_categories.value.map((i) => i.id);
  } else if (type == "sub_sub_categories") {
    exam.sub_sub_categories = filtered_sub_sub_categories.value.map((i) => i.id);
  } else if (type == "sections") {
    exam.sections = filtered_sections.value.map((i) => i.id);
  } else if (type == "topics") {
    exam.topics = filtered_topics.value.map((i) => i.id);
  }
}
import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const userstore = storedUser ? JSON.parse(storedUser) : null;

const userName = computed(() => {
 
  return `${userstore.first_name || ''} ${userstore.mobile_number || ''}`.trim() || 'Guest';
});

</script>

<!-- import 'vuetify/lib/styles/main.sass'; -->
<style lang="scss" scoped> 

.form-checkbox {
  display: flex;
  align-items: flex-start;
}

.form-checkbox__mark {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px; /* helps align with multiline text */
}

.sidebar-checkbox__title {
  flex: 1;
  word-break: break-word;
}

</style>

 
