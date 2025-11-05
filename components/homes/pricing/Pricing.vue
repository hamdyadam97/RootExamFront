<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-3">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Simple Pricing</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div class="d-flex justify-center items-center pt-60 lg:pt-30">
            <div class="text-14 text-dark-1">Monthly</div>
            <div class="form-switch px-20">
              <div class="switch" data-switch=".js-switch-content">
                <input v-model="isYearly" type="checkbox" />
                <span class="switch__slider"></span>
              </div>
            </div>
            <div class="text-14 text-dark-1">
              Annually <span class="text-purple-1">Save 30%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 lg:pt-50">
        <div class="col-lg-4 col-md-6">
          <div
            class="priceCard -type-1 rounded-16 overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div class="priceCard__header py-40 pl-50 bg-dark-2">
              <div class="priceCard__type text-18 lh-11 fw-500 text-white">
                {{ pricingData[0].type }}
              </div>
              <div
                class="priceCard__price text-45 lh-11 fw-700 text-white mt-8"
              >
                {{ pricingData[0].price ? pricingData[0].price : "Free" }}
              </div>
              <div class="priceCard__period text-white mt-5">
                {{ pricingData[0].period }}
              </div>
            </div>

            <div class="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
              <div class="priceCard__text">
                Standard listing submission, active for 30 days
              </div>

              <div class="priceCard__list mt-30">
                <div v-for="(elm, i) in pricingData[0].features" :key="i">
                  <span
                    class="pr-8 text-purple-1"
                    style="font-size: 12px; font-weight: 300"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon :icon="faCheck" />
                  </span>
                  {{ elm }}
                </div>
              </div>

              <div class="priceCard__button mt-30">
                <router-link
                  class="button -md -purple-3 text-purple-1"
                  to="/"
                >
                  Get Started Now
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div
            class="priceCard -type-1 rounded-16 overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div class="priceCard__header py-40 pl-50 bg-purple-1">
              <div class="priceCard__type text-18 lh-11 fw-500 text-white">
                {{ pricingData[1].type }}
              </div>
              <div
                class="priceCard__price text-45 lh-11 fw-700 text-white mt-8"
              >
                $
                {{
                  isYearly
                    ? (pricingData[1].price * 12 * 0.7).toFixed(2)
                    : pricingData[1].price
                }}
              </div>
              <div class="priceCard__period text-white mt-5">
                {{ isYearly ? "per year" : pricingData[1].period }}
              </div>
            </div>

            <div class="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-purple-1">
              <div class="priceCard__text text-white">
                Standard listing submission, active for 30 days
              </div>

              <div class="priceCard__list mt-30">
                <div
                  v-for="(elm, i) in pricingData[1].features"
                  :key="i"
                  class="text-white"
                >
                  <span
                    class="pr-8 text-white"
                    style="font-size: 12px; font-weight: 300"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon :icon="faCheck" />
                  </span>
                  {{ elm }}
                </div>
              </div>

              <div class="priceCard__button mt-30">
                <router-link
                  class="button -md -white text-purple-1"
                  to="/"
                >
                  Get Started Now
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div
            class="priceCard -type-1 rounded-16 overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div class="priceCard__header py-40 pl-50 bg-dark-2">
              <div class="priceCard__type text-18 lh-11 fw-500 text-white">
                {{ pricingData[2].type }}
              </div>
              <div
                class="priceCard__price text-45 lh-11 fw-700 text-white mt-8"
              >
                $
                {{
                  isYearly
                    ? (pricingData[2].price * 12 * 0.7).toFixed(2)
                    : pricingData[2].price
                }}
              </div>
              <div class="priceCard__period text-white mt-5">
                {{ isYearly ? "per year" : pricingData[2].period }}
              </div>
            </div>

            <div class="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
              <div class="priceCard__text">
                Standard listing submission, active for 30 days
              </div>

              <div class="priceCard__list mt-30">
                <div v-for="(elm, i) in pricingData[2].features" :key="i">
                  <span
                    class="pr-8 text-purple-1"
                    style="font-size: 12px; font-weight: 300"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon :icon="faCheck" />
                  </span>
                  {{ elm }}
                </div>
              </div>

              <div class="priceCard__button mt-30">
                <router-link
                  class="button -md -purple-3 text-purple-1"
                  to="/"
                >
                  Get Started Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { pricingData } from "../../../data/pricing";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const isYearly = ref(false);

const handleCheckboxChange = (event) => {
  isYearly.value = event.target.checked;
};
</script>
