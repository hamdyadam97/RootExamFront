<template>
  <header class="header -type-1">
    <div class="header__container">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <div class="header__logo">
              <nuxt-link to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/logo_roots.png"
                  alt="logo"
                />
              </nuxt-link>
            </div>
          </div>
        </div>

        <Menu :allClasses="'menu__nav text-white -is-active'" />
        <MobileMenu
          @setActiveMobileMenu="setActiveMobileMenu"
          :activeMobileMenu="activeMobileMenu"
        />

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              
              

              <div class="d-none xl:d-block ml-20">
                <button
                  @click="() => setActiveMobileMenu(true)"
                  class="text-white items-center"
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div
              class="header-right__buttons d-flex items-center ml-30 md:d-none"
            >
              <nuxt-link to="/login" class="button -underline text-white">
                Log in
              </nuxt-link>
              <nuxt-link
                to="/signup"
                class="button -sm -white text-dark-1 ml-30"
              >
                Sign up
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

import Menu from "../component/Menu.vue"; // Update the path based on your project structure
import MobileMenu from "../component/MobileMenu.vue"; // Update the path based on your project structure

const activeMobileMenu = ref(false);

function setActiveMobileMenu(value) {
  activeMobileMenu.value = value;
}
</script>
