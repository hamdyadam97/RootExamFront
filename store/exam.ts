import { defineStore } from 'pinia';

export const useExamsStore = defineStore('exams', {
    state: () => ({
        exams: [],
        exam_modes: [],
        question_modes: [],
        sections: [],
        topics: [],
    }),
    actions: {

        async getExams(page_number = 1) {

            const response: any = await useNuxtApp().$api('/exams/get?page=' + page_number, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });


            if (response.data) {
                this.exams = response.data.exams;
                return response;
            }
        },

        async getExam(exam_id: Number) {

            const { data }: any = await useNuxtApp().$api(`/exams/${exam_id}/get`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                return data;
            }
            return null;
        },


        async getExamQuestions(exam_id: number) {

            const { data }: any = await useNuxtApp().$api(`/exams/get-questions?exam_id=${exam_id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                return data;
            }
            return false;
        },

        async getQuestion(question_id: number) {

            const { data }: any = await useNuxtApp().$api(`/exams/${question_id}/get-question`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                return data;
            }
            return false;
        },


        async create() {

            const { data }: any = await useNuxtApp().$api('/exams/create', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                this.exam_modes = data.exam_modes;
                this.question_modes = data.question_modes;
                this.sections = data.sections;
                this.topics = data.topics;
            }
        },
        async refreshSectionsAndTopics(sub_categories = [], sub_sub_categories = []) {
            let s_arr = sub_categories.join(',');
            let s_s_arr = sub_sub_categories.join(',');

            const { data }: any = await useNuxtApp().$api('/exams/refresh-sections-and-topics', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                params: {
                    'sub_categories': s_arr,
                    'sub_sub_categories': s_s_arr,
                }
            });

            if (data) {
                this.sections = data.sections;
                this.topics = data.topics;
            }
        },



        async store(exam: any) {

            const { data, message }: any = await useNuxtApp().$api('/exams/store', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: exam,
            });

            if (data) {
                useNuxtApp().$toastr.success(message);
                navigateTo('/user/exam/' + data.exam_id + "/show")
            }
        },

        async reset() {

            const { data, message }: any = await useNuxtApp().$api('/exams/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                useNuxtApp().$toastr.success(message);
                navigateTo('/user/exam')
            }
        },


        async getQuestions() {

            const { data }: any = await useNuxtApp().$api('/exams/create', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                this.exam_modes = data.exam_modes;
                this.question_modes = data.question_modes;
                this.sections = data.sections;
                this.topics = data.topics;
            }
        },


        async saveExamResult(exam_id: Number, result: Object) {

            const { data, message }: any = await useNuxtApp().$api(`/exams/${exam_id}/store-question-answer`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    result
                },
            });

            if (data) {
                useNuxtApp().$toastr.success(message);
                navigateTo(`/user/exam/${exam_id}/result`);
            }
        },

        async saveExamSingle(exam_id: Number, obj: any) {

            const { data, message }: any = await useNuxtApp().$api(`/exams/${exam_id}/store-single-question-answer`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: obj,
            });

            if (data) {
                // useNuxtApp().$toastr.success(message);
                // navigateTo(`/user/exam/${exam_id}/result`);
            }
        },




    },
});
