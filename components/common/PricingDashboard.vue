<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">

      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Packages</h2>

            <p class="mt-4">
              Check out our packages and offers. Choose the best option that fits your needs and budget,
              <br/>
              with access to comprehensive exam materials that will guide you to success.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-60 mt-30 ">
        <div class="col-12">
          <div class="rounded-16  bg-light-3 -dark-bg-dark-1 shadow-4 h-100">


            <div class="py-30 px-30">
              <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30" action="#">

                <!-- <div class="col-4">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                  <input type="text" placeholder="Name" />
                </div> -->

                <div class="col-6 ">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Category</label>

                  <div class="select js-multiple-select" data-select-value="" ref="category_select_menu">
                    <button @click="toggleDropdown" class="select__button js-button">
                      <span class="js-button-title">
                        {{ selected_categories.length > 0 ? getSelectedCategoriesLabel() : "Categories" }}
                      </span>
                      <FontAwesomeIcon :icon="faChevronDown" />
                    </button>

                    <div :class="{
                      '-is-visible': categoryOpen,
                      'select__dropdown js-dropdown': true,
                    }">
                      <div class="select__options js-options">
                        <div @click="() => handleSelectedElement(category.id)" v-for="(category, i) in categories"
                          :key="i" :class="{
                            '-is-choosen': selected_categories.includes(category.id),
                            'select__options__button js-target-title': true,
                          }">
                          <div class="form-checkbox pointer-events-none">
                            <input :checked="selected_categories.includes(category.id)" type="checkbox" />
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <span class="ml-10">{{ category.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-6" v-if="filtered_sub_categories.length">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Sub Category</label>

                  <div class="select js-multiple-select" data-select-value="" ref="sub_category_select_menu">
                    <button @click="toggleSubCategoryDropdown" class="select__button js-button">
                      <span class="js-button-title">
                        {{ selected_sub_categories.length > 0 ? getSelectedSubCategoriesLabel() : "Sub-Categories" }}
                      </span>
                      <FontAwesomeIcon :icon="faChevronDown" />
                    </button>

                    <div :class="{
                      '-is-visible': subCategoryOpen,
                      'select__dropdown js-dropdown': true,
                    }">
                      <div class="select__options js-options">
                        <div @click="() => handleSelectedSubCategory(subcategory.id)"
                          v-for="(subcategory, i) in filtered_sub_categories" :key="i" :class="{
                            '-is-choosen': selected_sub_categories.includes(subcategory.id),
                            'select__options__button js-target-title': true,
                          }">
                          <div class="form-checkbox pointer-events-none">
                            <input :checked="selected_sub_categories.includes(subcategory.id)" type="checkbox" />
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <span class="ml-10">{{ subcategory.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="row y-gap-20 justify-end">
                  <div class="col-auto">
                    <button class="button -md -purple-1 text-white" @click="filter">
                      Filter
                    </button>
                  </div>
                </div>

              </form>


            </div>
          </div>
        </div>

      </div>





      <div class="row y-gap-30 justify-start pt-60 lg:pt-40 js-section-slider">
        <div v-for="(item, index) in packages" :key="index" class="col-lg-4 col-md-6">
          <div class="priceCard -type-1 rounded-16 bg-white shadow-2">
            <div class="priceCard__content py-45 px-60 xl:px-40 text-center">
              <div class="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                {{ item.name }}
              </div>
              <div class="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15">
                {{ item.price }}
                د.إ
              </div>
              <div class="priceCard__period text-18 mt-10">
                {{ item.period }} يوم
              </div>
              <!-- <nuxt-img :src="`${item.icon}`" width="90" height="90" class="mt-30" alt="icon"
                :id="`package_image${index}`" @error="setDefault(index)" /> -->

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


        <!-- 
        <div v-if="packages.length" class="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
          <div class="col-auto">
            <button
              class="button -outline-purple-1 text-purple size-50 rounded-full d-flex justify-center items-center js-prev">
              <i class="icon icon-arrow-left text-24"></i>
            </button>
          </div>
          <div class="col-auto">
            <button
              class="button -outline-purple-1 text-purple size-50 rounded-full d-flex justify-center items-center js-next">
              <i class="icon icon-arrow-right text-24"></i>
            </button>
          </div>
        </div> -->

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Pagination } from "swiper";


import { usePackagesStore } from '~/store/packages';
const { index , indexData } = usePackagesStore();

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faL } from "@fortawesome/free-solid-svg-icons";
import { onClickOutside } from '@vueuse/core'

const packages = ref([]);
const categories = ref([]);
const category_select_menu = ref(null);
const sub_category_select_menu = ref(null);
const sub_categories = ref([]);
const loading = ref(false);
const categoryOpen = ref(false);
const selected_categories = ref([]);
const subCategoryOpen = ref(false);
const default_image = ref(null);
const selected_sub_categories = ref([]);

onMounted(async () => {
  await loadData();
  selected_categories.value.push(categories.value[0]?.id)
  filter();

});

onClickOutside(category_select_menu, (event) => {
  categoryOpen.value = false;
},)

onClickOutside(sub_category_select_menu, (event) => {
  subCategoryOpen.value = false;
},)


const loadData = async (params = {}) => {
  try {
    let data = await indexData();
    categories.value = data.categories;
    sub_categories.value = data.sub_categories;
  } catch ($e) {
      console.log($e);
      
  }
}

const loadPackages = async (params = {}) => {
  try {
    let data = await index(params);
    packages.value = data.packages;
    // categories.value = data.categories;
    // sub_categories.value = data.sub_categories;
    default_image.value = data.default_image;

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

const filter = () => {
  let form = {
    'name': '',
    'categories[]': selected_categories.value,
    'sub_categories[]': selected_sub_categories.value,
  }
  loadPackages(form);
}

const filtered_sub_categories = computed(() => {
  return sub_categories.value.filter((i) => {
    return selected_categories.value.includes(i.category_id);
  })
});


const toggleDropdown = () => {
  categoryOpen.value = !categoryOpen.value;
};


const toggleSubCategoryDropdown = () => {
  subCategoryOpen.value = !subCategoryOpen.value;
};

const handleSelectedElement = (elm) => {
  if (selected_categories.value.includes(elm)) {
    selected_categories.value = selected_categories.value.filter((el) => el !== elm);
  } else {
    selected_categories.value = [...selected_categories.value, elm];
  }
};
const getSelectedCategoriesLabel = () => {
  let list = categories.value.filter((i) => selected_categories.value.includes(i.id)).map((i) => i.name);

  if (list.length < 5) {
    return list.join(", ");
  } else {
    return `${list.length} Category Selected`;
  }
}

const handleSelectedSubCategory = (elm) => {
  if (selected_sub_categories.value.includes(elm)) {
    selected_sub_categories.value = selected_sub_categories.value.filter((el) => el !== elm);
  } else {
    selected_sub_categories.value = [...selected_sub_categories.value, elm];
  }
};
const getSelectedSubCategoriesLabel = () => {
  let list = sub_categories.value.filter((i) => selected_sub_categories.value.includes(i.id)).map((i) => i.name);

  if (list.length < 3) {
    return list.join(", ");
  } else {
    return `${list.length} Sub-Category Selected`;
  }
}

watch(selected_categories, () => {
  selected_sub_categories.value = selected_sub_categories.value.filter(i => filtered_sub_categories.value.map(({ id }) => id).includes(i));
});


const setDefault = (key) => {
  document.getElementById(`package_image${key}`).srcset = default_image.value;
}
</script>

<style scoped>
.priceCard:hover {
  background-color: var(--color-dark-1) !important;

  div {
    color: #ffffff !important;
  }
}
</style>