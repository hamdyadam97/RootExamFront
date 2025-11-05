<template>
  <div class="col-lg-5">
    <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Tabs</div>
    <div class="tabs -pills js-tabs">
      <div class="tabs__controls d-flex x-gap-10 js-tabs-controls">
        <div @click="() => setCurrentTabOne(1)">
          <button
            :class="{
              'is-active': currentTabOne === 1,
              'tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button': true,
            }"
            type="button"
          >
            All Categories
          </button>
        </div>

        <div @click="() => setCurrentTabOne(2)">
          <button
            :class="{
              'is-active': currentTabOne === 2,
              'tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button': true,
            }"
            type="button"
          >
            Animation
          </button>
        </div>

        <div @click="() => setCurrentTabOne(3)">
          <button
            :class="{
              'is-active': currentTabOne === 3,
              'tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button': true,
            }"
            type="button"
          >
            Design
          </button>
        </div>

        <div @click="() => setCurrentTabOne(4)">
          <button
            :class="{
              'is-active': currentTabOne === 4,
              'tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button': true,
            }"
            type="button"
          >
            Illustration
          </button>
        </div>
      </div>

      <div class="tabs__content mt-20 js-tabs-content">
        <div
          :class="{
            'is-active': currentTabOne === 1,
            'tabs__pane -tab-item-1': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>

        <div
          :class="{
            'is-active': currentTabOne === 2,
            'tabs__pane -tab-item-2': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>

        <div
          :class="{
            'is-active': currentTabOne === 3,
            'tabs__pane -tab-item-3': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>

        <div
          :class="{
            'is-active': currentTabOne === 4,
            'tabs__pane -tab-item-4': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>
      </div>
    </div>

    <div class="tabs -active-purple-2 mt-30 js-tabs">
      <div class="tabs__controls d-flex items-center js-tabs-controls">
        <div @click="() => setCurrentTabTwo(1)">
          <button
            :class="{
              'is-active': currentTabTwo === 1,
              'text-light-1 lh-12 tabs__button mr-30 js-tabs-button': true,
            }"
            type="button"
          >
            items 1
          </button>
        </div>

        <div @click="() => setCurrentTabTwo(2)">
          <button
            :class="{
              'is-active': currentTabTwo === 2,
              'text-light-1 lh-12 tabs__button mr-30 js-tabs-button': true,
            }"
            type="button"
          >
            items 2
          </button>
        </div>

        <div @click="() => setCurrentTabTwo(3)">
          <button
            :class="{
              'is-active': currentTabTwo === 3,
              'text-light-1 lh-12 tabs__button mr-30 js-tabs-button': true,
            }"
            type="button"
          >
            items 3
          </button>
        </div>
      </div>

      <div class="tabs__content mt-20 js-tabs-content">
        <div
          :class="{
            'is-active': currentTabTwo === 1,
            'tabs__pane -tab-item-1': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>

        <div
          :class="{
            'is-active': currentTabTwo === 2,
            'tabs__pane -tab-item-2': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>

        <div
          :class="{
            'is-active': currentTabTwo === 3,
            'tabs__pane -tab-item-3': true,
          }"
        >
          <p>
            Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
            nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
            urna lobortis sagittis sed pretium. Morbi sed arcu proin quis tortor
            non risus.
          </p>
          <p class="mt-20">
            Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
            faucibus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTabOne = ref(1);
const currentTabTwo = ref(1);

const setCurrentTabOne = (tab) => {
  currentTabOne.value = tab;
};

const setCurrentTabTwo = (tab) => {
  currentTabTwo.value = tab;
};
</script>
