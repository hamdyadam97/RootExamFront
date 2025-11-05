<template>
  <header data-add-bg class="header -type-4 -shadow bg-white js-header">
    <div class="header__container border-bottom-light py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left d-flex items-center">
            <div class="header__logo pr-30 xl:pr-20 md:pr-0">
              <nuxt-link to="/">
                <nuxt-img
                  width="100%"
                  height="50"
                  src="/logo_roots.png"
                  alt="logo"
                />
              </nuxt-link>
            </div>
 
            <Menu headerPosition="pl-30 xl:pl-20" allClasses="menu__nav text-dark-1 -is-active" />
            <MobileMenu :activeMobileMenu="activeMobileMenu" @setActiveMobileMenu="setActiveMobileMenu" />
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              
              <div class="d-none xl:d-block pl-20 sm:pl-15">
                <button @click="() => setActiveMobileMenu(true)" class="text-dark-1 items-center"
                  data-el-toggle=".js-mobile-menu-toggle">
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div class="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none" v-if="!authenticated">
              <nuxt-link to="/login" class="button -underline text-purple-1">
                Log in
              </nuxt-link>
              <nuxt-link to="/signup" class="button h-50 px-30 -purple-1 -rounded text-white ml-20">
                Sign up
              </nuxt-link>
            </div>

            <div class="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none" v-else>
              <nuxt-link to="/user" class="button h-50 px-30 -purple-1 -rounded text-white ml-20">
                Dashboard
              </nuxt-link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

import Menu from "../component/Menu.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly

import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { checkIsLogin } =useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs


const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};

onMounted(() => {
  checkIsLogin();
});
</script>
