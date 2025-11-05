<template>
  <div v-if="package_object && !loading">
    <section class="page-header -type-1 mt-60">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-50">

          <div class="col-lg-6 mx-auto">
            <div class="">
              <div class="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                <h5 class="px-30 text-20 fw-500">Your order</h5>

                <div v-if="package_object" :class="[
                  'd-flex justify-between',
                  'border-top-dark',
                  'px-30',
                ]">
                  <div class="py-15 text-grey">
                    <p class="linkCustom">
                      Package Subscribe : {{ package_object.name }}
                    </p>
                  </div>
                  <div class="py-15 text-grey">
                    {{ parseFloat(package_object.price).toFixed(2) }} د.إ
                  </div>
                </div>

                <div class="d-flex justify-between border-top-dark px-30">
                  <div class="py-15 fw-500">Subtotal</div>
                  <div class="py-15 fw-500">{{ subTotal.toFixed(2) }} د.إ </div>
                </div>

                <div class="d-flex justify-between border-top-dark px-30" v-if="discount">
                  <div class="py-15 fw-500 text-danger">Discount</div>
                  <div class="py-15 fw-500 text-danger">
                    {{ discount.toFixed(2) }} د.إ
                  </div>
                </div>

                <div class="d-flex justify-between border-top-dark px-30">
                  <div class="py-15 fw-500 text-success">Total</div>
                  <div class="py-15 fw-500 text-success">
                    {{ (total).toFixed(2) }} د.إ
                  </div>
                </div>
              </div>

              <div class="input-group my-3">

                <input type="text" class="form-control" placeholder="Enter coupon code" v-model="coupon" id="couponCode">
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button" @click="checkCouponHandler" id="checkCouponButton">Check
                    Coupon</button>
                </div>
              </div>

              <div class="mt-30">
                <button class="col-12 button -md -dark-1 text-white" @click="subscribeHandler">
                  Place order
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else>

    <section class="page-header -type-1 mt-60">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-50">

          <div class="col-6 mx-auto text-center">
            <div class="spinner-grow text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePackagesStore } from '~/store/packages';
const { checkCoupon, getPackage, subscribe } = usePackagesStore();

const route = useRoute();
const package_object = ref(null);


const loading = ref(false);
const coupon = ref(null);
const subTotal = ref(0);
const total = ref(0);
const discount = ref(0);
const package_id = ref(null);

onMounted(async () => {

  package_id.value = route.query.package_id;

  if (package_id.value) {

    let res = await getPackage(package_id.value);
    package_object.value = res.package;
    total.value = subTotal.value = parseFloat(package_object.value.price);
  }

});

const checkCouponHandler = async () => {
  if (!coupon.value) {
    useNuxtApp().$toastr.error('Please add coupon code to check');
    return false;
  }

  let data = await checkCoupon(package_object.value?.id, coupon.value);

  if (data.discount) {
    discount.value = data.discount;
    total.value = data.amount_after_discount;
  }
}


const subscribeHandler = async () => {
  try {
    loading.value = true;
    let res = await subscribe(package_id.value, coupon.value);
    if (res.url) {
      window.location = (res.url);
    }else{
      navigateTo('/user/subscriptions')
    }
  } catch ($e) {

  } finally {
    loading.value = false;
  }
}

</script>

<style lang="scss" scoped>
input.form-control {
  outline: none !important;
  background-color: transparent !important;
  border-radius: 8px !important;
  border: 1px solid #DDDDDD !important;
  font-size: 15px !important;
  line-height: 1.5 !important;
  padding: 15px 22px !important;
  transition: all 0.15s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
  box-sizing: border-box !important;
  height: 60px;
}

.text-success.spinner-grow {
  color: #6440FB !important;
  margin: 2em 0 !important;
  width: 4em;
  height: 4em;
}

#checkCouponButton {
  background-color: #6440FB !important;

}
</style>
