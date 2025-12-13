<template>
  <div class="dashboard__content bg-light-4">
       <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} • Dashboard`"
/>

</ClientOnly>
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Exam Questions</h1>
      </div>
    </div>

    <div class="row y-gap-30" v-if="displayed_question">
      <!-- <div class="row y-gap-30" v-if="displayed_questions && displayed_questions.length"> -->
      <div class="col-xl-9 col-sm-12">
        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">

          <div class="py-30 px-30">

            <!-- v-for="(question, k) in displayed_questions" -->
            <Question :id="`question${displayed_question.id}`"
              :answer="answers.find((i) => i.question_id == displayed_question.id)" :is_tatur_mode="is_tatur_mode"
              :is_timed_mode="is_timed_mode" :key="(list_index * chuck_size) + 1" :question="displayed_question"
              :count="(list_index * chuck_size) + 1" @updateTimer="setTimer" @saveAnswer="saveAnswer"
              @updateQIndex="(q_i) => list_index = q_i" :list_index="list_index" :last_index="last_index"
              :is_allowed_to_back="answers[list_index - 1]?.timer > 1" @nextOrFinish="nextOrFinishHandler">
            </Question>
            <!-- <Question :id="`question${(k + (list_index * chuck_size)) + 1}`"
              :answer="answers.find((i) => i.question_id == displayed_question.id)" :is_tatur_mode="is_tatur_mode"
              :is_timed_mode="is_timed_mode" :key="(k + (list_index * chuck_size)) + 1" :question="displayed_question"
              :count="(0 + (list_index * chuck_size)) + 1" @updateTimer="setTimer" @saveAnswer="saveAnswer"
              @updateQIndex="(q_i) => list_index = q_i" :list_index="list_index" :last_index="last_index"
              :is_allowed_to_back="answers[list_index - 1]?.timer > 1" @nextOrFinish="nextOrFinishHandler">
            </Question> -->




            <div class="d-flex justify-between">
              <!-- <button @click="--list_index" class="button -md -dark-1 text-white -dark-button-white mt-40"
                v-if="is_tatur_mode && list_index > 0">
                Previous
              </button>
              <button @click="++list_index" class="button -md -dark-1 text-white -dark-button-white mt-40"
                v-if="is_tatur_mode && (list_index < (last_index - 1))">
                Next
              </button> -->
              <button @click="finishExam" class="button -md -dark-1 text-white -dark-button-white mt-40"
                v-if="list_index == (last_index - 1)">
                Finish
              </button>
            </div>


          </div>

        </div>
        

      </div>

      <div class="col-xl-3 col-lg-3 col-sm-12">
        <div class="row y-gap-30">
          <div class="col-12" v-if="!is_tatur_mode && is_timed_mode">
            <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <h5 class="text-17 fw-500 mb-30">Time
                <FontAwesomeIcon :icon="faClock" />
              </h5>

              <div class="d-flex items-center">
                <div class="progress-bar w-1/1">
                  <div class="progress-bar__bg bg-light-3"></div>
                  <div class="progress-bar__bar bg-purple-1" :style="`width: ${(timer / 60) * 100}%`"></div>
                </div>

                <div class="d-flex y-gap-10 justify-between items-center ml-15">
                  <div v-html="`${timer}s`"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12" v-if="lab_value && lab_value != ''">
            <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div class="d-flex items-center  y-gap-10">
                <button @click="showModal = !showModal" class="button -md -light-3 text-dark-1 rounded-8"
                  style="width: 100%;">
                  Lab Value
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 lab_value_container" v-if="showModal">
            <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <h5 class="text-17 fw-500 mb-30">Lab Value</h5>

              <div v-html="lab_value"></div>
            </div>
          </div>



          <div class="col-12">
            <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <h5 class="text-17 fw-500 mb-30">Exam Complete</h5>

              <div class="d-flex items-center">
                <div class="progress-bar w-1/1">
                  <div class="progress-bar__bg bg-light-3"></div>
                  <div class="progress-bar__bar bg-purple-1" :style="`width: ${exam_complete}%`"></div>
                </div>

                <div class="d-flex y-gap-10 justify-between items-center ml-15">
                  <div v-html="`${exam_complete}%`"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <h5 class="text-17 fw-500 mb-30">Quiz Navigation</h5>

              <div class="row x-gap-10 y-gap-10">

                <div class="col-auto" v-for="(question, i) in questions_list">
                  <button @click="goToQuestion(question)"
                    :disabled="answers.find((i) => i.question_id == question).is_disabled" :class="{
                      'button -single-icon  text-dark-1 size-35 rounded-8': true,
                      '-light-3': !checkIsAnswered(question) && !checkIsMarked(question),
                      '-green-1': checkIsCorrectAnswered(question),
                      '-error-1': checkIsInCorrectAnswered(question),
                      'bg-warning-1': checkIsMarked(question)
                    }">
                    <div class="text-15 lh-1 fw-500">{{ i + 1 }}</div>
                  </button>
                </div>

              </div>

              <button @click="finishExam" class="button -md -dark-1 text-white -dark-button-white mt-30">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
// imports components
import Question from "@/components/dashboard/Question";

useSeoMeta({
  title: "Exam Questions",
});
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

//////////////////////////////////////////////////////////////////////////////////////////

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { onMounted, computed } from "vue";
import { useExamsStore } from '~/store/exam';
const { getExamQuestions, saveExamResult,saveExamSingle, getQuestion } = useExamsStore();
 
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
const router = useRouter();

const route = useRoute();
const id = ref(null);
const list_index = ref(0);
const chuck_size = 1;
const exam = ref(null);
const questions = ref(null);
const questions_list = ref([]);
const question = ref(null);
const lab_value = ref(null);
const answers = ref([]);
const is_tatur_mode = ref(false);
const is_timed_mode = ref(false);
const timer = ref(0);
const showModal = ref(false);

const displayed_question = computed(() => {
  return question.value;
})
// const displayed_questions = computed(() => {
//   // return [question.value]
//   let start = (list_index.value * chuck_size);

//   // return questions.value ? questions.value.slice(start, (start + chuck_size)) : []

//   return question.value;
// })

const last_index = computed(() => {
  return questions_list.value ? parseInt(questions_list.value.length / chuck_size) : 0
  // return questions.value ? parseInt(questions.value.length / chuck_size) : 0
})

const goToQuestion = (q) => {
  list_index.value = questions_list.value.indexOf(q);
  loadQuestion(list_index.value)
  // scrollToSection('question' + q)
}

// const scrollToSection = (id) => {
//   router.push({ hash: `#${id}` }).then(() => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// };


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
// });

onMounted(async () => {
  id.value = route.params.id;
  let data = await getExamQuestions(id.value)

  exam.value = data?.exam ?? null;
  is_tatur_mode.value = exam.value.is_tatur_mode;
  is_timed_mode.value = exam.value.is_timed_mode;

  questions_list.value = data?.questions ?? [];
  // questions.value = data?.questions ?? [];
  lab_value.value = data?.lab_value ?? [];
  loadQuestion();
  if (data?.details && data?.details.length) {
    answers.value = data?.details ?? []
    answers.value.map((i) => i.is_submited = true);
  } else {
    initAnswers();
  }

});

const loadQuestion = async (index = 0) => {

  if (questions_list.value[index]) {
    let qData = await getQuestion(questions_list.value[index])
    if (qData.question) {
      question.value = qData.question;
    }
  }
}
watch(route, async (newroute) => {
  id.value = newroute.params.id;
})
watch(list_index, async (list_index) => {
  question.value = null;

  await loadQuestion(list_index)

})

const initAnswers = () => {
  answers.value = questions_list.value.map((item) => {
    return {
      "exam_id": exam.value.id,
      "question_id": item,
      "answer_id": null,
      "is_correct": null,
      "is_marked": null,
      "is_submited": false,
    }
  })
}

const saveAnswer = (result) => {

  if (result?.question_id) {
    let answer = answers.value.find((i) => i.question_id == result.question_id);

    answer.answer_id = result?.answer_id ?? null;
    answer.is_correct = result.is_correct;
    answer.is_marked = result.is_marked;
    answer.is_disabled = result.is_disabled;
    answer.timer = result.timer;


    saveExamSingle(exam.value.id, answer);

    // if (!is_tatur_mode.value) {
    //   if (is_timed_mode.value && timer.value > 1) {
    //     nextOrFinish();
    //   } else if (!is_timed_mode.value) {
    //     nextOrFinish(false);
    //   }
    // }
  }
}
const nextOrFinishHandler = () => {
  if (!is_tatur_mode.value) {
    if (is_timed_mode.value && timer.value > 1) {
      nextOrFinish();
    } else if (!is_timed_mode.value) {
      nextOrFinish(false);
    }
  }
}
const nextOrFinish = (can_finish = true) => {
  if (list_index.value < (last_index.value - 1)) {
    list_index.value += 1;

  } else if (can_finish) {
    useNuxtApp().$sweetalert2.fire({
      title: "Finishing Exam",
      animation: true,
      icon: "info",
      showConfirmButton: false,
      timer: 3000
    })
    useNuxtApp().$sweetalert2.showLoading()
    setTimeout(() => {
      saveExamResult(exam.value.id, answers.value);
    }, 3000)
  }
}
const exam_complete = computed(() => {
  let complete = 0;
   
  if ((questions_list.value ?? []).length) {
    complete = (answers.value.filter((i) => i.answer_id != null).length) / ((questions_list.value ?? []).length);
  }
  return parseInt(complete * 100)
})

const finishExam = () => {
  useNuxtApp().$sweetalert2.fire({
    title: "Are you sure you want to finish the exam?",
    animation: true,
    showDenyButton: true,
    showConfirmButton: true,
    icon: "question",
    confirmButtonText: "Yes",
    confirmButtonColor: "#140342",
    preConfirm: async () => {
      saveExamResult(exam.value.id, answers.value);
    }
  })

}

const checkIsAnswered = (question) => {
  return is_tatur_mode.value && answers.value.find((i) => i.question_id == question)?.answer_id != null;
}

const checkIsCorrectAnswered = (question) => {
  let answer = answers.value.find((i) => i.question_id == question);
  return is_tatur_mode.value && !answer?.is_marked && answer?.is_correct == true;
}

const checkIsInCorrectAnswered = (question) => {
  let answer = answers.value.find((i) => i.question_id == question);
  return is_tatur_mode.value && !answer?.is_marked && answer?.is_correct == false;
}

const checkIsMarked = (question) => {
  return answers.value.find((i) => i.question_id == question)?.is_marked == true;
}

const setTimer = (t) => {
  timer.value = t;
  if (timer.value == 0) {
    nextOrFinish();

    // if (list_index.value < (last_index.value - 1)) {
    //   ++list_index.value;
    // } else {
    //   // this.finishExam();
    // }
  }
}

import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const userstore = storedUser ? JSON.parse(storedUser) : null;

const userName = computed(() => {
 
  return `${userstore.first_name || ''} ${userstore.mobile_number || ''}`.trim() || 'Guest';
});
</script>

<style lang="scss" scoped>
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

.lab_value_container {
  max-height: 400px;
  overflow: scroll;
}

// button
// disabled
</style>
