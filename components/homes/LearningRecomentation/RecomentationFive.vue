<template>
  <section class="layout-pt-lg layout-pb-lg bg-dark-2 relative">
    <div class="side-image pr-25 lg:d-none">
      <nuxt-img
        width="464"
        height="357"
        src="/assets/img/home-5/cta/img.png"
        alt="image"
      ></nuxt-img>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-7">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title text-white">
              Get personal learning recommendations
            </h2>

            <p class="sectionTitle__text text-white">
              Enhance your skills with best Online courses
            </p>
          </div>

          <div class="row x-gap-20 y-gap-20 pt-60 lg:pt-40">
            <div class="col-auto">
              <div
                class="dropdown js-dropdown js-drop1-active"
                :class="{ '-is-dd-active': currentDropdown === 'category' }"
              >
                <div
                  @click="() => toggleDropdown('category')"
                  class="dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60"
                  data-el-toggle=".js-drop1-toggle"
                  data-el-toggle-active=".js-drop1-active"
                >
                  <span class="js-dropdown-title">
                    {{
                      currentCategory === "All" ? "Category" : currentCategory
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle"
                  :class="{ '-is-el-visible': currentDropdown === 'category' }"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in allCategories"
                      :key="i"
                      @click="() => selectCategory(elm)"
                      class="d-block js-dropdown-link cursor"
                      :class="{ activeMenu: currentCategory === elm }"
                    >
                      {{ elm }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                class="dropdown js-dropdown js-drop3-active"
                :class="{ '-is-dd-active': currentDropdown === 'difficulty' }"
              >
                <div
                  @click="() => toggleDropdown('difficulty')"
                  class="dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60"
                  data-el-toggle=".js-drop3-toggle"
                  data-el-toggle-active=".js-drop3-active"
                >
                  <span class="js-dropdown-title">
                    {{
                      currentdifficulty === "All"
                        ? "Difficulty"
                        : currentdifficulty
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle"
                  :class="{
                    '-is-el-visible': currentDropdown === 'difficulty',
                  }"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in difficulty"
                      :key="i"
                      @click="() => selectDifficulty(elm)"
                      class="d-block js-dropdown-link cursor"
                      :class="{ activeMenu: currentdifficulty === elm }"
                    >
                      {{ elm }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <nuxt-link
                to="/"
                class="button -md -purple-1 text-white"
              >
                Get Started Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { allCategories, difficulty } from "~/data/courses";

const currentCategory = ref("All");
const currentdifficulty = ref("All");
const currentDropdown = ref("");

const toggleDropdown = (dropdown) => {
  currentDropdown.value = currentDropdown.value === dropdown ? "" : dropdown;
};

const selectCategory = (category) => {
  currentCategory.value = category;
  currentDropdown.value = "";
};

const selectDifficulty = (diff) => {
  currentdifficulty.value = diff;
  currentDropdown.value = "";
};
</script>

<style scoped>
/* Add your styles here */
</style>
