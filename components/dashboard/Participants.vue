<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Participants</h1>

          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Page Head</h2>
            </div>

            <div class="py-30 px-30">
              <div class="border-light rounded-8">
                <div class="d-flex items-center py-25 px-30">
                  <div class="text-dark-1 mr-15">Match</div>

                  <div
                    id="dd16button"
                    @click="() => toggleDropdown('dd16button', 'dd16content')"
                    class="dropdown js-dropdown js-category-active"
                  >
                    <div
                      class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10"
                    >
                      <span class="js-dropdown-title">Any</span>
                      <i class="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd16content"
                      class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div class="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Animation
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Business
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-dark-1 ml-15">of the following:</div>
                </div>

                <div class="px-30 py-30 border-top-light">
                  <div class="bg-light-4 rounded-8 py-10 md:py-20 px-30">
                    <div class="row y-gap-20 justify-between items-center">
                      <div class="col-md-auto">
                        <div class="row x-gap-20 y-gap-10 items-center">
                          <div class="col-auto">
                            <div class="text-dark-1">Match</div>
                          </div>
                          <div class="col-md-auto">
                            <div
                              id="dd17button"
                              @click="
                                () =>
                                  toggleDropdown('dd17button', 'dd17content')
                              "
                              class="dropdown js-dropdown js-category-active"
                            >
                              <div
                                class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-10 h-50"
                              >
                                <span class="js-dropdown-title">Any</span>
                                <i
                                  class="icon text-9 ml-40 icon-chevron-down"
                                ></i>
                              </div>

                              <div
                                id="dd17content"
                                class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                              >
                                <div class="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Animation
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Design
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Illustration
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Business
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-auto">
                            <div
                              id="dd18button"
                              @click="
                                () =>
                                  toggleDropdown('dd18button', 'dd18content')
                              "
                              class="dropdown js-dropdown js-category-active"
                            >
                              <div
                                class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-10 h-50"
                              >
                                <span class="js-dropdown-title">Any</span>
                                <i
                                  class="icon text-9 ml-40 icon-chevron-down"
                                ></i>
                              </div>

                              <div
                                id="dd18content"
                                class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                              >
                                <div class="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Animation
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Design
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Illustration
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Business
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <a href="#" data-feather="x"></a>
                      </div>
                    </div>
                  </div>

                  <div class="bg-light-4 rounded-8 py-10 md:py-20 px-30 mt-10">
                    <div class="row y-gap-20 justify-between items-center">
                      <div class="col-md-auto">
                        <div class="row x-gap-20 y-gap-10 items-center">
                          <div class="col-auto">
                            <div class="text-dark-1">Match</div>
                          </div>
                          <div class="col-md-auto">
                            <div
                              id="dd19button"
                              @click="
                                () =>
                                  toggleDropdown('dd19button', 'dd19content')
                              "
                              class="dropdown js-dropdown js-category-active"
                            >
                              <div
                                class="dropdown__button d-flex items-center text-14 bg-white border-light -dark-bg-dark-1 rounded-8 px-10 h-50"
                              >
                                <span class="js-dropdown-title">Any</span>
                                <i
                                  class="icon text-9 ml-40 icon-chevron-down"
                                ></i>
                              </div>

                              <div
                                id="dd19content"
                                class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                              >
                                <div class="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Animation
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Design
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Illustration
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Business
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-auto">
                            <div
                              id="dd20button"
                              @click="
                                () =>
                                  toggleDropdown('dd20button', 'dd20content')
                              "
                              class="dropdown js-dropdown js-category-active"
                            >
                              <div
                                class="dropdown__button d-flex items-center text-14 bg-white border-light -dark-bg-dark-1 rounded-8 px-10 h-50"
                              >
                                <span class="js-dropdown-title">Any</span>
                                <i
                                  class="icon text-9 ml-40 icon-chevron-down"
                                ></i>
                              </div>

                              <div
                                id="dd20content"
                                class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                              >
                                <div class="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Animation
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Design
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Illustration
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      class="d-block js-dropdown-link"
                                    >
                                      Business
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <a href="#" data-feather="x"></a>
                      </div>
                    </div>
                  </div>

                  <div class="row y-gap-20 justify-between items-center pt-30">
                    <div class="col-auto">
                      <a href="#" class="text-purple-1 fw-500 underline">
                        + Add condition
                      </a>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex x-gap-20 y-gap-20 flex-wrap">
                        <div>
                          <button
                            class="button h-50 px-25 -dark-1 -dark-button-white text-white"
                          >
                            Apply Filters
                          </button>
                        </div>
                        <div>
                          <button
                            class="button h-50 px-25 -outline-dark-1 text-dark-1"
                          >
                            Cancel Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-18 fw-500 text-dark-1 lh-12 mt-30">
                First name
              </div>
              <div class="d-flex x-gap-10 y-gap-10 flex-wrap pt-20">
                <div>
                  <div class="py-8 pr-5 d-flex justify-center items-center">
                    All
                  </div>
                </div>

                <div
                  v-for="(letter, index) in letters"
                  :key="index"
                  style="cursor: pointer"
                  @click="() => (currentLetter = letter)"
                >
                  <div
                    :class="[
                      'size-35',
                      'd-flex',
                      'justify-center',
                      'items-center',
                      'border-light',
                      'rounded-4',
                      {
                        'bg-dark-1': currentLetter === letter,
                        '-dark-bg-dark-2 text-white': currentLetter === letter,
                      },
                    ]"
                  >
                    {{ letter }}
                  </div>
                </div>
              </div>

              <div class="mt-40">
                <div class="px-30 py-20 bg-light-7 -dark-bg-dark-2 rounded-8">
                  <div class="row x-gap-10">
                    <div class="col-lg-5">
                      <div class="text-purple-1">First name / Surname</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">Roles</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">Groups</div>
                    </div>
                    <div class="col-lg-3">
                      <div class="text-purple-1">Last access to course</div>
                    </div>
                  </div>
                </div>

                <div
                  v-for="(participant, index) in partcipents"
                  :key="index"
                  class="px-30 border-bottom-light"
                >
                  <div class="row x-gap-10 items-center py-15">
                    <div class="col-lg-5">
                      <div class="d-flex items-center">
                        <nuxt-img
                        width="44"
                        height="44"
                          :src="participant.imgSrc"
                          :alt="participant.name"
                          class="size-40 fit-cover"
                        />
                        <div class="ml-10">
                          <div class="text-dark-1 lh-12 fw-500">
                            {{ participant.name }}
                          </div>
                          <div class="text-14 lh-12 mt-5">
                            {{ participant.date }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-2">{{ participant.role }}</div>
                    <div class="col-lg-2">{{ participant.team }}</div>
                    <div class="col-lg-3">{{ participant.duration }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import { partcipents } from "@/data/dashboard";
import { letters } from "@/data/dictionary";

const currentLetter = ref("A");

import FooterNine from "../layout/footers/FooterNine";

import PageLinksTwo from "../common/PageLinksTwo";
const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
