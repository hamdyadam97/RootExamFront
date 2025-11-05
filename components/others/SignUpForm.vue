<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-8 col-lg-9">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">Sign Up</h3>
            <p class="mt-10">
              Already have an account?
              <nuxt-link to="/login" class="text-purple-1"> Log in </nuxt-link>
            </p>

            <form class="contact-form respondForm__form row y-gap-20 pt-30" @submit.prevent="handleSubmit">
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Name *</label>
                <input required type="text" v-model="obj.name" placeholder="Name" />
              </div>

              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Mobile *</label>
                <PhoneBox @change="updateTeleInput" />
 <!-- <input required type="text" v-model="obj.mobile" placeholder="Email address" /> -->
              </div>

              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password *</label>
                <input required type="password" v-model="obj.password" placeholder="Password" />
              </div>
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Confirm Password *</label>
                <input required type="password" v-model="obj.password_confirmation" placeholder="Confirm Password" />
              </div>
              <div class="col-12">
                <button type="submit" :disabled="loading" class="button -md -green-1 text-dark-1 fw-500 w-1/1">
                  <span v-if="!loading">Register</span>
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
import { useAuthStore } from '~/store/auth';
const { register } = useAuthStore();
const router = useRouter();
import PhoneBox from "@/components/Teleinput/PhoneBox";



const handleSubmit = async () => {
  try {
    loading.value = true;
    let success = await register(obj.value);

    if (success) {
      router.push('/verify-otp')
    }
  } catch ($e) {

  } finally {
    loading.value = false;
  }

};

const loading = ref(false);
const obj = ref({
  name: '',
  mobile_country_code: '',
  dial_code: '',
  mobile_number: '',
  password: '',
  password_confirmation: '',
});


const updateTeleInput = (mobile_number_object) => {
  if (mobile_number_object.mobile_country_code && mobile_number_object.valid) {
    obj.value.mobile_country_code = mobile_number_object.mobile_country_code;
    obj.value.dial_code = mobile_number_object.dial_code;
    obj.value.mobile_number = mobile_number_object.mobile;
  }
}

</script>
