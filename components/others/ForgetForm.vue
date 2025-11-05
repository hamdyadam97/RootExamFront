<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-6 col-lg-8">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">Forget Password</h3>
            <p class="mt-10">
              Already have an account?
              <nuxt-link to="/login" class="text-purple-1"> Log in </nuxt-link>
            </p>


            <form class="contact-form respondForm__form row y-gap-20 pt-30" @submit.prevent="handleSubmit">
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Mobile</label>
                <!-- <input required type="text" v-model="user.mobile" placeholder="Mobile" /> -->
                <PhoneBox @change="updateTeleInput" />
              </div>

              <div class="col-12">
                <button :disabled="loading" type="submit" name="submit" id="submit"
                  class="button -md -green-1 text-dark-1 fw-500 w-1/1">
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
import PhoneBox from "@/components/Teleinput/PhoneBox";

const { forget } = useAuthStore();
const { is_send_otp } = storeToRefs(useAuthStore());
const loading = ref(false);
const user = ref({
  mobile_country_code: '',
  dial_code: '',
  mobile_number: '',
});



const handleSubmit = async () => {
  loading.value = true;
  try {
    let success = await forget(user.value);
    if (success && is_send_otp) {
      navigateTo('otp')
    }
  } catch ($e) {

  } finally {
    loading.value = false;
  }
};


const updateTeleInput = (mobile_number_object) => {
  if (mobile_number_object.mobile_country_code && mobile_number_object.valid) {
    user.value.mobile_country_code = mobile_number_object.mobile_country_code;
    user.value.dial_code = mobile_number_object.dial_code;
    user.value.mobile_number = mobile_number_object.mobile;
  }
}

</script>
