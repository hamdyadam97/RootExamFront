<template>
  <div>
    <section class="page-header -type-4 bg-beige-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Contact Us</h1>
              </div>

              <div>
                <p class="page-header__text">
                  We’re committed to helping you excel in your medical career
                  <br />
                  through expertly curated exam preparation materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-50 justify-between">
          <div class="col-xl-5 col-lg-6">
            <h3 class="text-24 lh-1 fw-500">Our offices</h3>
            <div class="row y-gap-30 pt-40">
              <div v-for="(elm, i) in locationData" :key="i" class="col-sm-6">
                <div class="text-20 fw-500 text-dark-1">
                  {{ elm.location }}
                </div>
                <div class="y-gap-10 pt-15">
                  <a href="#" class="d-block">
                    {{ elm.address }}
                  </a>
                  <a :href="`tel:${elm.phoneNumber}`" class="d-block">
                    {{ elm.phoneNumber }}
                  </a>
                  <a v-if="elm.phoneNumber2" :href="`tel:${elm.phoneNumber2}`" class="d-block">
                    {{ elm.phoneNumber2 }}
                  </a>
                  <a :href="`mailto:${elm.email}`" class="d-block">
                    {{ elm.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
              <h3 class="text-24 fw-500">Send a Message</h3>
              <p class="mt-25">
                We’re here to help! Whether you have questions about our exam materials,
                <br />
                need technical support, or just want to know more, reach out to us.
                <br />
                Fill out the form below, and our team will get back to you as soon as possible.
              </p>

              <form class="contact-form row y-gap-30 pt-60 lg:pt-40" @submit.prevent="handleSubmit">
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Name
                  </label>
                  <input v-model="formData.title" required type="text" placeholder="Name..." />
                </div>
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Email Address
                  </label>
                  <input v-model="formData.email" required type="email" placeholder="Email..." />
                </div>
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Message...
                  </label>
                  <textarea v-model="formData.comment" required placeholder="Message" rows="8"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" name="submit" id="submit" class="button -md -purple-1 text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { locationData } from "@/data/officeLocation";
import { ref } from "vue";

const handleSubmit = async (e) => {
  e.preventDefault();
  // Handle form submission logic here



  const { data, message } = await useNuxtApp().$api('contact', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: formData.value,
  });


  formData.value.title = "";
  formData.value.email = "";
  formData.value.comment = "";
  useNuxtApp().$toastr.success(message);

};

const formData = ref({
  title: "",
  email: "",
  comment: "",
});
</script>
