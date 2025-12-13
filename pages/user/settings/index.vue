<template>
  <div class="dashboard__content bg-light-4">
       <ClientOnly>
<ExamWatermark
  :text="`${userName || 'no'} • Dashboard`"
/>

</ClientOnly>
    <div class="row pb-50 mb-10">
      <div class="col-auto">
        <h1 class="text-30 lh-12 fw-700">Settings</h1>
      </div>
    </div>

    <div class="row y-gap-30">
      <div class="col-12">
        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
          <div class="tabs -active-purple-2 js-tabs pt-0">
            <div
              class="tabs__controls d-flex x-gap-30 y-gap-20 flex-wrap items-center pt-20 px-30 border-bottom-light js-tabs-controls">
              <button v-for="(button, index) in buttons" :key="index" @click="() => (activeTab = index + 1)" :class="[
                'tabs__button',
                'text-light-1',
                'js-tabs-button',
                { 'is-active': activeTab === index + 1 },
              ]" type="button">
                {{ button }}
              </button>
            </div>

            <div class="tabs__content py-30 px-30 js-tabs-content">
              <EditProfile :activeTab="activeTab" :user="user"/>
              <Password :activeTab="activeTab" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Settings",
});
 
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

import EditProfile from "@/components/dashboard/Settings/EditProfile";
import Password from "@/components/dashboard/Settings/Password";
const activeTab = ref(1);
const buttons = [
  "Edit Profile",
  "Password",
];


import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
const { getUserData  , getProfileData} = useAuthStore();
const { user } = storeToRefs(useAuthStore());


onMounted(async () => {
  await getProfileData();
  getUserData();
});


import ExamWatermark from '~/components/layout/component/ExamWatermark.vue'

const storedUser = localStorage.getItem('user');
const userstore = storedUser ? JSON.parse(storedUser) : null;

const userName = computed(() => {
 
  return `${userstore.first_name || ''} ${userstore.mobile_number || ''}`.trim() || 'Guest';
});
</script>

<style lang="scss" scoped></style>
