<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              Dive into our Medical Q Banks with high-yield exam-focused
              <br>
              questions for key medical fields:
            </p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden pt-50 js-section-slider" data-aos="fade-left">
        <div class="row g-3">
          <div v-for="(elm, i) in categories" :key="i" @click="navigateTo('packages?category-id=' + elm.id)"
            class="col-sm-4">
            <div :class="{ 'department-tab': true }">
              <div class="department-tab-icon">
                <nuxt-img :src="elm.icon" @error="setDefault(i)" alt="icon" :id="`image${i}`" />
              </div>
              <div class="department-tab-text my-4 ">
                {{ elm.name }}
              </div>
              <div class="department-tab-text">
                Question Count:{{ elm.questions_count }}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  categories: { type: Object, required: true },
  default_image: { required: true }
})
const categories = computed(() => props.categories);
const default_image = computed(() => props.default_image);
const active_tab = ref(0);

const setDefault = (key) => {
  document.getElementById(`image${key}`).srcset = default_image.value;
}
</script>
<style scoped>
/* .department-tabs {
  gap: 12px;
  box-sizing: border-box !important;
} */

.department-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 41px 0 45px;
  background-color: #f6f7f5;
  box-sizing: border-box !important;
}

.department-tab {
  transition: 0.2s;
  cursor: pointer;
}



.department-tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  font-size: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #a5a7ac;
  box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  transition: 0.5s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.department-tab.active:hover .department-tab-icon,
.department-tab:hover .department-tab-icon {
  color: var(--color-dark-1);
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2);
}

.department-tab-icon:not(:last-child) {
  margin-bottom: 12px;
}

.department-tab-icon:not(:last-child) {
  margin-bottom: 12px;
}

.department-tab-text {
  font-size: 14px;
  line-height: 1em;
  font-weight: 600;
  font-family: "Poppins", serif;
  color: #444444;
  transition: 0.2s;
  text-align: center;
}

.department-tab.active,
.department-tab:hover {
  background-color: var(--color-dark-1);
}

.department-tab.active .department-tab-text,
.department-tab:hover .department-tab-text {
  color: #ffffff;
}

/* .featureCard.-type-1 .featureCard__content {
  padding: 26px 40px;
} */
</style>
