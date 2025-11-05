<template>
  <div :class="`tabs__pane -tab-item-2 ${activeTab == 2 ? 'is-active' : ''} `">
    <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
      <div class="col-md-12">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          Current password
        </label>

        <input required type="password" placeholder="Current password" v-model="form.current_password" />
      </div>

      <div class="col-md-12">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          New password
        </label>

        <input required type="password" placeholder="New password" v-model="form.password" />
      </div>

      <div class="col-md-12">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          Confirm New Password
        </label>

        <input required type="password" placeholder="Confirm New Password" v-model="form.password_confirmation" />
      </div>

      <div class="col-12 d-flex justify-end border-top-light ">
        <button class="button -md -purple-1 text-white">Save Password</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(["activeTab"]);

import { useAuthStore } from '~/store/auth';
const { updatePassword } = useAuthStore();


const handleSubmit = async () => {
  await updatePassword(form);
  resetForm();
};

const form = reactive({
  current_password: null,
  password: null,
  password_confirmation: null,
})

const resetForm = () => {
  form.current_password = form.password = form.password_confirmation = null;
}

</script>

<style lang="scss" scoped></style>
