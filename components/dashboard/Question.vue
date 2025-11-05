<template>
    <div>
        <div class="border-light overflow-hidden rounded-8">
            <div class="py-40 px-40 bg-light-3">
                <div class="d-flex justify-between">
                    <h4 class="text-18 lh-1 fw-500">Question {{ count }}</h4>
                    <div class="d-flex x-gap-50" @click="() => (is_marked = !is_marked)" :key="question.id">
                        <div class="d-flex items-center">
                            <div class="icon-flag mr-10" v-bind:style="[is_marked ? { 'color': 'red' } : {}]"></div>
                            <div>Flag Question</div>
                        </div>
                    </div>
                </div>
                <!-- 
            <div class="d-flex pt-15">
                <div class="text-white">Not yet answered</div>
                <div class="text-white ml-50">Marked out of 1.00</div>
            </div> -->

                <div class="text-20 lh-1 mt-15" v-html="question.text_question"></div>
                <div class="text-10 lh-1 text-hint mt-15" v-if="question.show_hint" v-html="question.hint"></div>

                <div class=" mt-15 d-flex justify-start" v-if="question.show_video">
                    <a target="_blank" :href="question.video_link"
                        class="button -md -outline-success-2 text-white -success-button-white mt-30">Video link</a>
                </div>
            </div>

            <div class=" mt-15 d-flex justify-start" v-if="question.question_has_image">
                <img @click="openImage" :src="question.question_image" />
            </div>

            <div class="px-40 py-40">
                <div class="mb-30">Select one:</div>


                <div v-for="(answer, i) in question.answers" :key="i" class="form-radio d-flex items-center">
                    <div class="d-flex justify-start my-1 radio_group" :key="i" :class="{
                        'bg-error-1': showErrorAnswer(answer),
                        'bg-success-1': showCorrectAnswer(answer),
                    }">
                        <div class="radio d-flex" style="width: 100%;">
                            <input :disabled="is_submited && answer_object.answer_id" type="radio" name="answer"
                                :key="answer.id" :value="answer.id" v-model="correct_answer"
                                :id="`answer${answer.id}`" />
                            <div class="radio__mark">
                                <div class="radio__icon"></div>
                            </div>
                            <div class="fw-500 ml-12" v-html="removeSpaces(answer.text)" :for="`answer${answer.id}`">
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="pb-10 px-40 mt-15 d-flex justify-between">
                <button @click="decQIndex" class="button -md -dark-1 text-white -dark-button-white"
                    :disabled="!(is_allowed_to_back && list_index > 0)">
                    Previous
                </button>

                <button @click="submitAnswer" class="button -md -purple-1 text-white">Submit</button>

                <button @click="incQIndex" class="button -md -dark-1 text-white -dark-button-white"
                    :disabled="!(list_index < (last_index - 1))">
                    Next
                </button>
            </div>

            <!-- <div class="pb-10 px-40 mt-15 d-flex justify-end">
                <button target="_blank" @click="showAnswer"
                    v-if="is_submited && is_tatur_mode && question.is_show_answer_explanation && question.notes != ''"
                    class="button -md -purple-1 text-white">Show answer & explanations</button>

            </div> -->

            <div class="pb-10 px-40 mt-15" v-if="is_submited && is_tatur_mode &&
                question.is_show_answer_explanation && is_show_answer_explanation_clicked">
                <div v-html="question.notes"></div>
                <div class=" mt-15 " v-if="question.answer_has_image">
                    <img :src="question.answer_image" />
                </div>

            </div>

        </div>

        <vue-easy-lightbox :visible="visibleRef" v-if="question.question_has_image" :imgs="[question.question_image]"
            :index="0" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script setup lang="ts">

import VueEasyLightbox from 'vue-easy-lightbox'

// samer code 
const props = defineProps({
    question: { type: Object, required: true },
    answer: { type: Object },
    count: { type: Number, required: true },
    list_index: { type: Number, required: true },
    last_index: { type: Number, required: true },
    is_tatur_mode: { type: Boolean, required: true },
    is_timed_mode: { type: Boolean, required: true },
    is_allowed_to_back: { type: Boolean, required: true },
})
const emit = defineEmits(['saveAnswer', 'updateTimer', 'updateQIndex', 'nextOrFinish']);

let question = computed(() => props.question);
let count = computed(() => props.count);
let answer = computed(() => props.answer);
let is_tatur_mode = computed(() => props.is_tatur_mode);
let is_timed_mode = computed(() => props.is_timed_mode);
let list_index = computed(() => props.list_index);
let last_index = computed(() => props.last_index);
let is_allowed_to_back = computed(() => props.is_allowed_to_back);


const correct_answer = ref(null);
const is_marked = ref(null);
const answer_object = ref({});
const is_submited = ref(false);
const is_clicked_submited = ref(false);
const visibleRef = ref(false);
const show_answer_enabled = ref(false);
const is_show_answer_explanation_clicked = ref(false);
const timer = ref(60);
let interval: any = null;

const removeSpaces = (html) => {
    return html.replace(/&nbsp;/g, ' ');
};

watch(is_marked, value => {
    setObj();
    emit('saveAnswer', answer_object.value)
})


watch(correct_answer, value => {

    is_submited.value = answer_object.value.is_submited;


    let obj = setObj();
})

const setObj = () => {
    answer_object.value = {
        "question_id": question.value.id,
        "answer_id": correct_answer.value,
        "is_correct": correct_answer.value == question.value.correct_answer_id ? 1 : 0,
        "is_marked": is_marked.value,
        "is_disabled": false,
        "timer": timer.value,
        'is_submited': is_submited.value
    };
}
onMounted(() => {
    show_answer_enabled.value = question.value.show_answer;

    checkAnswer();
    if (is_timed_mode.value) {
        startTimer();
    }
})

// watch(answer, new_answer => {
//     checkAnswer()
// })

const showCorrectAnswer = (answer: object) => {
    if (is_tatur_mode.value && is_submited.value && show_answer_enabled.value) {
        return (answer_object.value.is_correct && answer.id == question.value.correct_answer_id)
            || (is_tatur_mode && answer.id == question.value.correct_answer_id);
    }

    return false;
}

const showErrorAnswer = (answer: object) => {
    if (is_tatur_mode.value && is_submited.value && show_answer_enabled.value) {
        return answer.id == answer_object.value.answer_id && !answer_object.value.is_correct;
    }

    return false;
}

const checkAnswer = () => {


    correct_answer.value = answer.value.answer_id;
    is_marked.value = answer.value.is_marked;
    answer_object.value.timer = answer.value.timer;

    if (answer.value.answer_id) {
        // submitAnswer();
        initAnswer();
    }

}

const submitAnswer = () => {
    is_submited.value = true;
    is_clicked_submited.value = true;

    setObj();
    emit('saveAnswer', answer_object.value);
    emit('nextOrFinish');

    if (is_tatur_mode.value && question.value.is_show_answer_explanation && question.value.notes != "") {
        showAnswer();
    }
}

const initAnswer = () => {
    is_submited.value = true;

    setObj();
    emit('saveAnswer', answer_object.value);

    if (is_tatur_mode.value && question.value.is_show_answer_explanation && question.value.notes != "") {
        showAnswer();
    }
}

const showAnswer = () => {

    is_show_answer_explanation_clicked.value = true;
}

const startTimer = () => {
    if (interval) {
        clearInterval(interval);
    }
    if (answer_object.value?.timer >= 0) {
        timer.value = answer_object.value.timer;
    } else {
        timer.value = 60;
    }
    interval = setInterval(decreaseTimer, 1000);
};


const decreaseTimer = () => {
    if (timer.value == 1) {
        setObj()
        answer_object.value.is_disabled = true;
        submitAnswer();
    }
    if (timer.value > 0) {
        timer.value--;
    } else {
        clearInterval(interval);
        return;
    }
    emit('updateTimer', timer.value)
};

const openImage = () => {
    visibleRef.value = true;
}
const onHide = () => visibleRef.value = false

const decQIndex = () => {
    setObj();
    emit('saveAnswer', answer_object.value);
    emit('updateQIndex', list_index.value - 1)

}

const incQIndex = () => {
    setObj();
    emit('saveAnswer', answer_object.value);
    emit('updateQIndex', list_index.value + 1)

}
</script>

<style scoped type="sass">
.radio_group {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #dddddd;
    border-radius: 10px;
}

button[disabled] {
    cursor: not-allowed;
}
</style>