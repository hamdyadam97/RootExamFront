<!-- components/EditProfile.vue -->

<template>
  <div v-if="activeTab === 1" class="tabs__pane -tab-item-1 is-active">
    <div class="row y-gap-20 x-gap-20 items-center">
      <label class="col-auto" for="imageUpload" :style="previewImage
        ? {}
        : { backgroundColor: '#f2f3f4', width: '100px', height: '100px' }
        ">
        <img v-if="previewImage" width="100" height="100" class="size-100" :src="previewImage"
          :alt="previewImage ? 'image' : ''" />
      </label>

      <div class="col-auto">
        <div class="text-16 fw-500 text-dark-1">Your avatar</div>
        <div class="text-14 lh-1 mt-10">
          PNG or JPG no bigger than 800px wide and tall.
        </div>

        <div class="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
          <div>
            <div class="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
              <label style="cursor: pointer" for="imageUpload1" class="icon-cloud text-16"></label>
              <input required id="imageUpload1" type="file" accept="image/*" @change="handleImageChange"
                style="display: none" />
            </div>
          </div>
          <div>
            <div style="cursor: pointer" @click="handleImageRemove"
              class="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
              <div class="icon-bin text-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-top-light pt-30 mt-30">
      <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">First Name</label>
          <input required type="text" placeholder="First Name" v-model="form.first_name" />
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>
          <input required type="text" placeholder="Last Name" v-model="form.last_name" />
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Email</label>
          <input required type="email" placeholder="Email" v-model="form.email" />
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Specialization</label>
          <input required type="text" placeholder="Specialization" v-model="form.specialization" />
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Governorate</label>
          <input required type="text" placeholder="Governorate" v-model="form.governorate" />
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Date of Birth</label>
          <input class="form-input" required type="date" max="2007-12-31" v-model="form.birth_date" />
        </div>


        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Mobile</label>
          <PhoneBox :init_mobile="form.mobile_number" :init_mobile_country_code="form.mobile_country_code"
            @change="updateTeleInput" />
        </div>


        <div class="col-12 d-flex justify-end border-top-light ">
          <button class="button -md -purple-1 text-white">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["activeTab", 'user']);
import PhoneBox from "@/components/Teleinput/PhoneBox";

import { useAuthStore } from '~/store/auth';
const { updateProfile } = useAuthStore();


const previewImage = ref("/assets/img/dashboard/edit/1.png");
const avatarFile = ref(null);
const form = reactive({
  first_name: null,
  last_name: null,
  email: null,
  mobile_country_code: null,
  dial_code: null,
  mobile_number: null,
  specialization: null,
  governorate: null,
  birth_date: null,
})

const user = computed(() => props.user);

onMounted(() => {
  if (user.value) {
    fillFormData();
  }
})
const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    avatarFile.value = file;
    reader.onloadend = () => {
      previewImage.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};

const handleImageRemove = () => {
  document.getElementById("imageUpload1").value = "";
  previewImage.value = "";
};

const handleImageUpload = () => {
  document.getElementById("imageUpload1").click();
};

const handleSubmit = () => {
  if (new Date(form.birth_date) >= new Date("2008-01-01")) {
    alert("تاريخ الميلاد يجب أن يكون قبل سنة 2008");
    return;
  }

  const formData = new FormData();

  Object.keys(form).forEach(key => {
    formData.append(key, form[key])
  });

  if (avatarFile.value) {
    formData.append('thumb', avatarFile.value);
  }


  updateProfile(formData);
};


const updateTeleInput = (mobile_number_object) => {
  if (mobile_number_object.mobile_country_code && mobile_number_object.valid) {
    form.mobile_country_code = mobile_number_object.mobile_country_code;
    form.dial_code = mobile_number_object.dial_code;
    form.mobile_number = mobile_number_object.mobile;
  }
}

watch(user, () => {
  if (user.value) {
    fillFormData();
  }
});


const fillFormData = () => {
  if (user.value.image) {
    previewImage.value = user.value.image;
  }
  form.first_name = user.value?.first_name;
  form.last_name = user.value?.last_name;
  form.email = user.value?.email;
  form.mobile_country_code = user.value?.mobile_country_code;
  form.dial_code = user.value?.dial_code;
  form.mobile_number = user.value?.mobile_number;

  
  form.specialization = user.value?.specialization;
  form.governorate = user.value?.governorate;
  form.birth_date = user.value?.birth_date;
}
</script>
<style>
  .form-input {
  width: 100%;
  height: 54px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background-color: #fff;
}
</style>
