<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-6 col-lg-8">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">Reset Password</h3>


            <form class="contact-form respondForm__form row y-gap-20 pt-30" @submit.prevent="handleSubmit">
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password</label>
                <input required type="password" v-model="obj.password" placeholder="Password" />
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password Confirmation</label>
                <input required type="password" v-model="obj.password_confirmation" placeholder="Password Confirmation" />
              </div>

              <div class="col-12">
                <button :disabled="loading" type="submit" name="submit" id="submit" class="button -md -green-1 text-dark-1 fw-500 w-1/1">
                  <span v-if="!loading">Reset</span>
                  <div v-else class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>

                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
const { resetPassword, getUserData, checkIsForget } = useAuthStore();
const { is_forget, authenticated } = storeToRefs(useAuthStore()); 

const loading = ref(false);
const obj = ref({
  password: '',
  password_confirmation: '',
});

onMounted(async () => {
  getUserData();
  checkIsForget();

  if (!user?.value?.mobile && is_forget) {
    navigateTo('forget');
  }
});


const handleSubmit = async () => {
  try {
    loading.value = true;
    let success = await resetPassword(obj.value);

    if (success && authenticated) {
      navigateTo('user')
    }
  } catch ($e) {

  } finally {
    loading.value = false;
  }
};

</script>
