<template>
  <div :class="`header-menu js-mobile-menu-toggle ${activeMobileMenu ? '-is-el-visible' : ''
    }`">
    <div class="header-menu__content">
      <div class="mobile-bg js-mobile-bg"></div>

      <div class="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
        <NuxtLink to="/login" class="text-dark-1" :class="{
          activeMenu: $route.path === '/login',
          inActiveMenu: $route.path !== '/login',
        }">Log in</NuxtLink>
        <NuxtLink to="/signup" class="text-dark-1 ml-30" :class="{
          activeMenu: $route.path === '/signup',
          inActiveMenu: $route.path !== '/signup',
        }">Sign Up</NuxtLink>
      </div>

      <div v-if="activeMobileMenu" class="mobileMenu text-dark-1">
        <div v-for="(elm, i) in menuList" :key="i" class="submenuOne">
          

          <NuxtLink :class="{
            activeMenu: elm.title === menuItem,
            inActiveMenu: elm.title !== menuItem,
          }" :to="elm.href">
            {{ elm.title }}
          </NuxtLink>
 
        </div>
      </div>

      <!-- mobile footer start -->
      <!-- <MobileFooter /> -->
      <!-- mobile footer end -->
    </div>

    <div @click="closeMobileMenu" class="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
      <div class="size-40 d-flex items-center justify-center rounded-full bg-white">
        <div class="icon-close text-dark-1 text-16"></div>
      </div>
    </div>

    <div @click="closeMobileMenu" class="header-menu-bg"></div>
  </div>
</template>

<script setup>
import MobileFooter from "./MobileFooter";
import { menuList } from "../../../data/menu";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const menuNesting = ref([]);
const menuItem = ref("");
const submenu = ref("");
const route = useRoute();

watchEffect(() => {
  menuList.forEach((elm) => {
    elm?.links?.forEach((elm2) => {
      if (elm2.href?.split("/")[1] == route.path?.split("/")[1]) {
        menuItem.value = elm.title;
      } else {
        elm2?.links?.map((elm3) => {
          if (elm3.href?.split("/")[1] == route.path?.split("/")[1]) {
            menuItem.value = elm.title;
            submenu.value = elm2.title;
          }
        });
      }
    });
  });
});

const toggleMenu = (title) => {
  menuNesting.value = menuNesting.value[0] === title ? [] : [title];
};

const toggleSubMenu = (title) => {
  menuNesting.value =
    menuNesting.value[1] === title
      ? [menuNesting.value[0]]
      : [menuNesting.value[0], title];
};
const props = defineProps(["activeMobileMenu"]);
const emits = defineEmits(["setActiveMobileMenu"]);
const closeMobileMenu = () => {
  // Assuming setActiveMobileMenu is a prop
  emits("setActiveMobileMenu", false);
};
</script>

<style scoped>
/* Add your styles here */
</style>
