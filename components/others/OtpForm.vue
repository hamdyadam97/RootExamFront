<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-6 col-lg-8">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">OTP Verification</h3>

            <form class="contact-form respondForm__form row y-gap-20 pt-30" @submit.prevent="handleSubmit">
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">OTP</label>
                <input required type="text" v-model="obj.otp" placeholder="OTP" />
              </div>

              <div class="col-12">
                <button :disabled="loading" type="submit" name="submit" id="submit"
                  class="button -md -green-1 text-dark-1 fw-500 w-1/1">
                  <span v-if="!loading">Verify</span>
                  <div v-else class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>

                </button>
              </div>
            </form>


            <p class="mt-10 text-center">

              <button @click="resendOTP" class="text-purple-1">
                Resend Code
              </button>
            </p>

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
const { verifyOTP, getUserData, checkIsForget, resendOtp, checkVerification } = useAuthStore();
const { is_forget } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const loading = ref(false)
const obj = ref({
  otp: '',
});

onMounted(async () => {
  let user = getUserData()
  checkIsForget();

  if (!user?.mobile) {
    navigateTo(is_forget ? 'forget' : 'signup');
  }
});

const resendOTP = async () => {
  try {
    await resendOtp();
  } catch ($e) {

  } finally {

  }

}
const handleSubmit = async () => {
  try {
    loading.value = true;
    let success = await verifyOTP(obj.value);
 
    if (success) {
      navigateTo('reset')
    }
  } catch ($e) {

  } finally {
    loading.value = false;
  }
};

</script>
