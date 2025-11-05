<template>
  <div class="row x-gap-60 y-gap-30 mt-50">
    <div class="col-12">
      <div class="text-18 lh-1 text-dark-1 fw-500">Form</div>
    </div>

    <div class="col-lg-6">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Input</label>

        <div>
          <input required type="text" placeholder="Text..." />
        </div>
      </form>

      <label class="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-30"
        >Select boxes</label
      >

      <div class="select js-select js-liveSearch" data-select-value="">
        <button class="select__button js-button">
          <span class="js-button-title">Default</span>
          <i class="select__icon" data-feather="chevron-down"></i>
        </button>

        <div class="select__dropdown js-dropdown">
          <input
            required
            type="text"
            placeholder="Search"
            class="select__search js-search"
          />
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
        >Multiple Select Boxes, Hover</label
      >

      <div class="select js-multiple-select" data-select-value="">
        <button @click="toggleDropdown" class="select__button js-button">
          <span class="js-button-title">
            {{ ddElements.length > 0 ? ddElements.join(", ") : "Default" }}
          </span>
          <FontAwesomeIcon :icon="faChevronDown" />
        </button>

        <div
          :class="{
            '-is-visible': ddOpen,
            'select__dropdown js-dropdown': true,
          }"
        >
          <div class="select__options js-options">
            <div
              @click="() => handleSelectedElement(elm.label)"
              v-for="(elm, i) in options"
              :key="i"
              :class="{
                '-is-choosen': ddElements.includes(elm.label),
                'select__options__button js-target-title': true,
              }"
            >
              <div class="form-checkbox pointer-events-none">
                <input
                  required
                  :checked="ddElements.includes(elm.label)"
                  type="checkbox"
                />
                <div class="form-checkbox__mark">
                  <div class="form-checkbox__icon icon-check"></div>
                </div>
              </div>

              <span class="ml-10">{{ elm.label }}</span>
            </div>
          </div>

          <select
            class="select__select js-select-tag"
            name="name2"
            multiple="multiple"
          >
            <option value="banking">Banking</option>
            <option value="digital & creative">Digital & Creative</option>
            <option value="retail">Retail</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
          </select>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="col-12">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Textarea</label>

          <textarea required placeholder="Description..." rows="7"></textarea>
        </div>
      </form>
    </div>

    <div class="col-lg-6">
      <div class="row">
        <div class="col-md-4">
          <div class="text-16 lh-12 text-dark-1 fw-500 mb-30">Radiobox</div>
          <div class="row y-gap-15">
            <div class="col-12">
              <div class="form-radio d-flex items-center">
                <div class="radio">
                  <input type="radio" />
                  <div class="radio__mark">
                    <div class="radio__icon"></div>
                  </div>
                </div>
                <div class="lh-1 text-14 text-dark-1 ml-12">items</div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-radio d-flex items-center">
                <div class="radio">
                  <input type="radio" />
                  <div class="radio__mark">
                    <div class="radio__icon"></div>
                  </div>
                </div>
                <div class="lh-1 text-14 text-dark-1 ml-12">items</div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-radio d-flex items-center">
                <div class="radio">
                  <input type="radio" />
                  <div class="radio__mark">
                    <div class="radio__icon"></div>
                  </div>
                </div>
                <div class="lh-1 text-14 text-dark-1 ml-12">items</div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-radio d-flex items-center">
                <div class="radio">
                  <input type="radio" />
                  <div class="radio__mark">
                    <div class="radio__icon"></div>
                  </div>
                </div>
                <div class="lh-1 text-14 text-dark-1 ml-12">items</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="text-16 lh-12 text-dark-1 fw-500 mb-30">Checkbox</div>

          <div class="d-flex items-center">
            <div class="form-checkbox">
              <input type="checkbox" />
              <div class="form-checkbox__mark">
                <div class="form-checkbox__icon icon-check"></div>
              </div>
            </div>
            <div class="text-14 lh-12 text-dark-1 ml-15">Items</div>
          </div>

          <div class="d-flex items-center mt-15">
            <div class="form-checkbox">
              <input type="checkbox" />
              <div class="form-checkbox__mark">
                <div class="form-checkbox__icon icon-check"></div>
              </div>
            </div>
            <div class="text-14 lh-12 text-dark-1 ml-15">Items</div>
          </div>

          <div class="d-flex items-center mt-15">
            <div class="form-checkbox">
              <input type="checkbox" />
              <div class="form-checkbox__mark">
                <div class="form-checkbox__icon icon-check"></div>
              </div>
            </div>
            <div class="text-14 lh-12 text-dark-1 ml-15">Items</div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="text-16 lh-12 text-dark-1 fw-500 mb-30">Switch</div>
          <div class="form-switch d-flex items-center">
            <div class="switch">
              <input type="checkbox" />
              <span class="switch__slider"></span>
            </div>
            <div class="text-13 lh-1 text-dark-1 ml-10">Items</div>
          </div>

          <div class="form-switch d-flex items-center mt-20">
            <div class="switch">
              <input type="checkbox" defaultChecked />
              <span class="switch__slider"></span>
            </div>
            <div class="text-13 lh-1 text-dark-1 ml-10">Items</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { options } from "@/data/ddOptions";

const ddOpen = ref(false);
const ddElements = ref([]);

const handleSubmit = (e) => {
  e.preventDefault();
};

const toggleDropdown = () => {
  ddOpen.value = !ddOpen.value;
};

const handleSelectedElement = (elm) => {
  if (ddElements.value.includes(elm)) {
    ddElements.value = ddElements.value.filter((el) => el !== elm);
  } else {
    ddElements.value = [...ddElements.value, elm];
  }
};
</script>
