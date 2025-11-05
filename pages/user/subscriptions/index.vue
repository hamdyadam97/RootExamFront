<template>
   <div class="dashboard__content bg-light-4">
      <!-- <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Subscriptions</h1>
        </div>
      </div> -->

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h1 class="text-17 lh-1 fw-500">Subscriptions</h1>
            </div>

            <div class="py-30 px-30">
                
              <button @click="navigateTo('/user/packages')" class="button h-50 px-30 -purple-1 text-white">
                Add a New Subscriptions
              </button>

              <div class="mt-40">
                <div class="px-30 py-20 bg-light-7 rounded-8">
                  <div class="row x-gap-10 text-center">
                    <div class="col-lg-4">
                      <div class="text-purple-1">Package</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">Started at</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">Ended At</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">Status</div>
                    </div>
                    <div class="col-lg-2">
                      <div class="text-purple-1">price</div>
                    </div>
                    <!-- <div class="col-lg-1">
                      <div class="text-purple-1">Subscribe</div>
                    </div> -->
                  </div>
                </div>

                <div
                  v-for="(elm, i) in subscriptions"
                  :key="i"
                  class="px-30 border-bottom-light text-center"
                >
                  <div class="row x-gap-10 items-center py-25">
                    <div class="col-lg-4">
                      <div>{{ elm.package_name }}</div>
                    </div>

                    <div class="col-lg-2">
                      <div>{{ elm.start_date }}</div>
                    </div> 

                    <div class="col-lg-2">
                      <div>{{ elm.end_date }}</div>
                    </div>
 

                    <div class="col-lg-2">
                      <div>{{ elm.status ? 'Active' : "Ended" }}</div>
                    </div>
 

                    <div class="col-lg-2">
                      <div>{{ elm.price }}</div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>

</template>

<script setup>
useSeoMeta({
  title: "Subscriptions",
});

import { usePackagesStore } from '~/store/packages';
const { subscription } = usePackagesStore();
// const router = useRouter();
const subscriptions = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    let subscriptions_res = await subscription();
    subscriptions.value = subscriptions_res;
  } catch ($e) {

  }
});

definePageMeta({
  layout: 'dashboard'
})
</script>

<style lang="scss" scoped></style>
