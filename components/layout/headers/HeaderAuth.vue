<template>
  <header class="header -base js-header">
    <div class="header__container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <!-- <div class="header__logo">
              <nuxt-link data-barba to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/img/general/logo.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div> -->
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <Menu :allClasses="'menu__nav text-dark-1 -is-active'" />
            <MobileMenu
              :activeMobileMenu="activeMobileMenu"
              @setActiveMobileMenu="setActiveMobileMenu"
            />

            <div class="mr-30">
              <div class="d-none xl:d-block ml-20">
                <button
                  class="text-dark-1 items-center"
                  data-el-toggle=".js-mobile-menu-toggle"
                  @click="() => setActiveMobileMenu(true)"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div class="header-right__buttons md:d-none">
              <nuxt-link
                to="signup"
                class="button -sm -rounded -dark-1 text-white"
              >
                Sign Up
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Menu from "../component/Menu.vue"; // Update the path based on your project structure
import MobileMenu from "../component/MobileMenu.vue"; // Update the path based on your project structure
import { ref } from "vue";

// If you're using Nuxt 3, use 'nuxt/image' instead of 'nuxt' for NuxtImg

const activeMobileMenu = ref(false);

function setActiveMobileMenu(value) {
  activeMobileMenu.value = value;
}
</script>
