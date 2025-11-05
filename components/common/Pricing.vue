<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">

      <div class="row justify-center text-center mt-25">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Sub Categories</h2>

          </div>
        </div>
      </div>

      <div class="overflow-hidden pt-50 js-section-slider" data-aos="fade-left">
        <div class="row g-3">
          <div class="col-sm-4">
            <div :class="{ 'department-tab': true, 'active': active_tab == 'all' }">
              <div class="department-tab-icon">
                <nuxt-img :src="category.icon" @error="setDefault(`imageAll`)" alt="icon" id="imageAll" />
              </div>
              <div class="department-tab-text my-4 ">
                All
              </div>
              <div class="department-tab-text">
                Question Count:{{ category.questions_count }}
              </div>
            </div>
          </div>

          <div v-for="(elm, i) in sub_categories" :key="i" @click="getPackages(i, elm.id)" class="col-sm-4">
            <div :class="{ 'department-tab': true, 'active': i == active_tab }">
              <div class="department-tab-icon">
                <nuxt-img :src="elm.icon" @error="setDefault(`image${i}`)" alt="icon" :id="`image${i}`" />
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


      <div v-if="loading_packages">
        <div class="row justify-center text-center mt-25">
          <div class="col-auto">
            <div class="spinner-border text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row justify-center text-center" style="margin-top: 5rem;" v-if="packages && packages.length">
          <div class="col-auto">
            <div class="sectionTitle">
              <h2 class="sectionTitle__title">Packages</h2>
            </div>
          </div>
        </div>


        <div v-if="packages && packages.length" class="row y-gap-30 justify-start pt-60 lg:pt-40 js-section-slider">
          <div v-for="(item, index) in packages" :key="index" class="col-lg-4 col-md-6">
            <div class="priceCard -type-1 rounded-16 bg-white shadow-2">
              <div class="priceCard__content py-45 px-60 xl:px-40 text-center">
                <div class="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                  {{ item.name }}
                </div>
                <div class="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15">
                  {{ item.price }}
                  JD
                </div>
                <div class="priceCard__period text-18 mt-10">
                  {{ item.period }} Days
                </div>
                <!-- <nuxt-img :src="`${item.icon}`" width="90" height="90" class="mt-30" alt="icon"
                  :id="`package_image${index}`" @error="setDefault(`package_image${index}`)" /> -->

                <div class="text-left y-gap-15 mt-35">
                  <div v-if="item.category" :key="0">
                    <i class="text-purple-1 fa fa-check pr-8" style="strokewidth: 2" data-feather="check"></i>
                    {{ item.category.name }}
                  </div>
                  <div v-if="item.sub_categories" v-for="(sub, i) in item.sub_categories" :key="i + 1">
                    <i class="text-purple-1 fa fa-check pr-8" style="strokewidth: 2" data-feather="check"></i>
                    {{ sub.name }}
                  </div>
                </div>

                <div class="d-inline-block mt-30">
                  <nuxt-link :to="`/checkout?package_id=${item.id}`" :disabled="loading"
                    class="button px-40 py-20 fw-500 -purple-3 text-purple-1">
                    Subscribe
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div v-else class="row y-gap-30 pt-60 lg:pt-40">
          <div class="col-sm-12">
            <div :class="`d-flex items-center justify-center bg-info-1 pl-30 pr-20 py-30 rounded-8`">
              <div class=" lh-1 fw-500 text-center">
                There is no packages available
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import { usePackagesStore } from '~/store/packages';
import { useConstantsStore } from '~/store/constants';
const { index } = usePackagesStore();
const { getCategory,getSubCategories } = useConstantsStore();
const route = useRoute();
// import { onClickOutside } from '@vueuse/core'

const packages = ref([]);
const active_tab = ref('all');
const categories = ref([]);
const category = ref([]);
// const category_select_menu = ref(null);
// const sub_category_select_menu = ref(null);
const sub_categories = ref([]);
const loading = ref(false);
// const categoryOpen = ref(false);
const selected_categories = ref([]);
// const subCategoryOpen = ref(false);
const default_image = ref(null);
const selected_sub_categories = ref([]);
const loading_packages = ref(false);

onMounted(async () => {
  selected_categories.value = [route.query['category-id']];
  if (route.query['category-id']) {
    let c_data = await getCategory(route.query['category-id'])    
    category.value = c_data.category;

 
    let data = await getSubCategories(route.query['category-id'])
    sub_categories.value = data.sub_categories;
    default_image.value = data.default_image;
    if (sub_categories.value[0]?.id) {
      getPackages('all')
    }
  }

});


const getPackages = async (i, sub_c_id = null) => {
  loading_packages.value = true;
  try {
    active_tab.value = i;
    if (sub_c_id) {
      selected_sub_categories.value = [sub_c_id];
    }
    let form = {
      'name': '',
      'categories': selected_categories.value,
      'sub_categories[]': selected_sub_categories.value,
    }
    await loadData(form);
  } catch ($e) {

  } finally {
    loading_packages.value = false;

  }
}

const loadData = async (params = {}) => {
  try {
    let data = await index(params);
    packages.value = data.packages;
    // categories.value = data.categories;
    // category.value = categories.value ? categories.value.find((i) => i.id == selected_categories.value) : null;
  } catch ($e) {

  }
}

// const subscribeHandler = async (package_id) => {
//   try {
//     loading.value = true;
//     await subscribe({ package_id });
//   } catch ($e) {

//   } finally {
//     loading.value = false;
//   }
// }

// const filter = () => {
//   let form = {
//     'name': '',
//     'categories[]': selected_categories.value,
//     'sub_categories[]': selected_sub_categories.value,
//   }
//   loadData(form);
// }

// const filtered_sub_categories = computed(() => {
//   return sub_categories.value.filter((i) => {
//     return selected_categories.value.includes(i.category_id);
//   })
// });


// const toggleDropdown = () => {
//   categoryOpen.value = !categoryOpen.value;
// };


// const toggleSubCategoryDropdown = () => {
//   subCategoryOpen.value = !subCategoryOpen.value;
// };

// const handleSelectedElement = (elm) => {
//   if (selected_categories.value.includes(elm)) {
//     selected_categories.value = selected_categories.value.filter((el) => el !== elm);
//   } else {
//     selected_categories.value = [...selected_categories.value, elm];
//   }
// };
// const getSelectedCategoriesLabel = () => {
//   let list = categories.value.filter((i) => selected_categories.value.includes(i.id)).map((i) => i.name);

//   if (list.length < 5) {
//     return list.join(", ");
//   } else {
//     return `${list.length} Category Selected`;
//   }
// }

// const handleSelectedSubCategory = (elm) => {
//   if (selected_sub_categories.value.includes(elm)) {
//     selected_sub_categories.value = selected_sub_categories.value.filter((el) => el !== elm);
//   } else {
//     selected_sub_categories.value = [...selected_sub_categories.value, elm];
//   }
// };
// const getSelectedSubCategoriesLabel = () => {
//   let list = sub_categories.value.filter((i) => selected_sub_categories.value.includes(i.id)).map((i) => i.name);

//   if (list.length < 3) {
//     return list.join(", ");
//   } else {
//     return `${list.length} Sub-Category Selected`;
//   }
// }

// watch(selected_categories, () => {
//   selected_sub_categories.value = selected_sub_categories.value.filter(i => filtered_sub_categories.value.map(({ id }) => id).includes(i));
// });


const setDefault = (id) => {
  if (default_image.value) {
    document.getElementById(`${id}`).srcset = default_image.value;
  }
}
</script>
<style scoped>
/* .department-tabs {
  display: flex;
  flex-wrap: wrap;
  margin: -6px -6px 0;
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

.department-tab.active .department-tab-icon,
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

.priceCard:hover {
  background-color: var(--color-dark-1) !important;

  div {
    color: #ffffff !important;
  }
}
</style>