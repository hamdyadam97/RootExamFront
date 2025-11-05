<template>
  <div class="row y-gap-30 pt-50">
    <div class="col-12">
      <div class="text-18 lh-1 text-dark-1 fw-500">Buttons</div>
    </div>

    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10">
        <div class="col-auto">
          <button class="button -md -purple-1 text-white">Button 1</button>
        </div>
        <div class="col-auto">
          <button class="button -md -outline-purple-1 text-purple-1">
            Button 1 Hover
          </button>
        </div>
      </div>
    </div>

    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10">
        <div class="col-auto">
          <button class="button -md -green-1 text-dark-1">Button 2</button>
        </div>
        <div class="col-auto">
          <button class="button -md -outline-green-1 text-green-1">
            Button 2 Hover
          </button>
        </div>
      </div>
    </div>

    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10">
        <div class="col-auto">
          <button class="button -md -dark-1 text-white">Button 3</button>
        </div>
        <div class="col-auto">
          <button class="button -md -outline-dark-1 text-dark-1">
            Button 3 Hover
          </button>
        </div>
      </div>
    </div>

    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10</nuxt-link>">
        <div class="col-auto">
          <button class="button -md -purple-3 text-purple-1">Button 4</button>
        </div>
        <div class="col-auto">
          <button class="button -md -purple-1 text-white">
            Button 4 Hover
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row y-gap pt-30">
    <div class="col-auto">
      <nuxt-link
        to="/"
        class="button -icon -purple-3 text-purple-1"
      >
        View All Instructors
        <i class="icon-arrow-top-right text-13 ml-10"></i>
      </nuxt-link>
    </div>
    <div class="col-auto">
      <nuxt-link
        to="/"
        class="button -icon -purple-1 text-white"
      >
        View All Instructors
        <i class="icon-arrow-top-right text-13 ml-10"></i>
      </nuxt-link>
    </div>
    <div class="col-auto">
      <nuxt-link
        to="/"
        class="button -icon -outline-purple-1 text-purple-1"
      >
        View All Instructors
        <i class="icon-arrow-top-right text-13 ml-10"></i>
      </nuxt-link>
    </div>
    <div class="col-auto">
      <nuxt-link
        to="/"
        class="button -icon -purple-1 text-white"
      >
        View All Instructors
        <i class="icon-arrow-top-right text-13 ml-10"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
