<!-- components/Menu.vue -->
<template>
  <div :class="`header-menu js-mobile-menu-toggle ${headerPosition || ''}`">
    <div class="header-menu__content">
      <div class="mobile-bg js-mobile-bg"></div>

      <div class="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
        <nuxt-link to="/login" class="text-dark-1">Log in</nuxt-link>
        <nuxt-link to="/signup" class="text-dark-1 ml-30">Sign Up</nuxt-link>
      </div>

      <div class="menu js-navList">
        <ul :class="`${allClasses || ''}`">
           
          <li>
            <nuxt-link data-barba to="/" :class="{
              activeMenu: pathname === '/',
              inActiveMenuTwo: pathname !== '/',
            }">
              Home
            </nuxt-link>
          </li>
           
          <li>
            <nuxt-link data-barba to="/packages" :class="{
              activeMenu: pathname === '/packages',
              inActiveMenuTwo: pathname !== '/packages',
            }">
              Packages
            </nuxt-link>
          </li>

           
          <li>
            <nuxt-link data-barba to="/blogs" :class="{
              activeMenu: pathname === '/blogs',
              inActiveMenuTwo: pathname !== '/blogs',
            }">
              Blogs
            </nuxt-link>
          </li>


          <li>
            <nuxt-link data-barba to="/#about" :class="{
              activeMenu: pathname === '/#about',
              inActiveMenuTwo: pathname !== '/#about',
            }">
              About Us
            </nuxt-link>
          </li>

          <li>
            <nuxt-link data-barba to="/contact" :class="{
              activeMenu: pathname === '/contact',
              inActiveMenuTwo: pathname !== '/contact',
            }">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- mobile footer start -->
      <MobileFooter />
      <!-- mobile footer end -->
    </div>

    <div class="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
      <div class="size-40 d-flex items-center justify-center rounded-full bg-white">
        <div class="icon-close text-dark-1 text-16"></div>
      </div>
    </div>

    <div class="header-menu-bg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { menuList } from "~/data/menu";
import MobileFooter from "./MobileFooter.vue";
const route = useRoute();
const headerPosition = defineProps(["headerPosition", "allClasses"]);

const menuItem = ref("");
const submenu = ref("");
const pathname = ref("");

onMounted(() => {
  pathname.value = route.path;

  menuList.forEach((elm) => {
    elm?.links?.forEach((elm2) => {
      if (elm2.href?.split("/")[1] === pathname.split("/")[1]) {
        menuItem.value = elm.title;
      } else {
        elm2?.links?.map((elm3) => {
          if (elm3.href?.split("/")[1] === pathname.split("/")[1]) {
            menuItem.value = elm.title;
            submenu.value = elm2.title;
          }
        });
      }
    });
  });
});

watch(route, async (newroute) => {
  pathname.value = newroute.path;
})
</script>
