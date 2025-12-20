<template>
  <header :class="`header -type-5 js-header ${scrollPosition > 40 || !is_home_route ? 'bg-dark-1' : ''
    }`">
   

    <div class="container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <div class="header__logo">
              <nuxt-link to="/">
                <nuxt-img width="140" height="40" src="/logo_roots.png" alt="logo" />
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <Menu :allClasses="'menu__nav text-white -is-active'" />
            <MobileMenu :activeMobileMenu="activeMobileMenu" @setActiveMobileMenu="setActiveMobileMenu" />

            <div class="header-right__icons text-white d-flex items-center ml-30">
              <!-- <SearchToggle /> -->
              <!-- 
              <CartToggle
                :parentClassess="'relative ml-30 xl:ml-20'"
                :allClasses="'d-flex items-center text-white'"
              /> -->

              <div class="d-none xl:d-block ml-20">
                <button class="text-white items-center" @click="() => setActiveMobileMenu(true)"
                  data-el-toggle=".js-mobile-menu-toggle">
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div class="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none" v-if="!authenticated">
              <nuxt-link to="/login" class="button -underline text-white">
                Log in
              </nuxt-link>
              <nuxt-link to="/signup" class="button px-25 h-50 -white text-dark-1 -rounded ml-30 xl:ml-20">
                Sign up
              </nuxt-link>
            </div>
            <div class="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none" v-else>
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
import { ref, onMounted, onUnmounted, onBeforeUpdate } from "vue";
import Socials from "@/components/common/Socials.vue"; // Adjust the path accordingly
// import SearchToggle from "../component/SearchToggle.vue"; // Adjust the path accordingly
// import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly
import Menu from "../component/Menu.vue"; // Adjust the path accordingly

import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { checkIsLogin } =useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs



const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};
const scrollPosition = ref(0);
const route = useRoute();
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

const is_home_route = computed(() => route.path == '/');
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  checkIsLogin();

});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>

.header .header-menu .mobile-bg{
  width: 30vw;
}
</style>