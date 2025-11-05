<template>
  <div class="row pt-60 lg:pt-40">
    <div class="col-12">
      <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Typography</div>

      <div class="text-18 lh-1 text-dark-1 fw-500 mb-10">
        Course Description
      </div>
      <p>
        Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
        Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
        Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this
        is a text link libero tempus congue.
      </p>
      <p class="mt-20">
        Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
        sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
        egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer tristique elit lobortis purus bibendum, quis dictum metus
        mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
        massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl
        massa, at interdum mauris sollicitudin et.
      </p>
    </div>
  </div>

  <div class="row pt-60 lg:pt-40">
    <div class="col-lg-9">
      <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">What you'll learn</div>
      <div class="row x-gap-100 justfiy-between">
        <div class="col-md-6">
          <div class="y-gap-20">
            <div
              v-for="(elm, i) in learnList.slice(0, 6)"
              :key="i"
              class="d-flex items-center"
            >
              <div
                class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
              >
                <i class="icon-check text-6"></i>
              </div>
              <p>{{ elm }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="y-gap-20">
            <div
              v-for="(elm, i) in learnList.slice(6)"
              :key="i"
              class="d-flex items-center"
            >
              <div
                class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
              >
                <i class="icon-check text-6"></i>
              </div>
              <p>{{ elm }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row pt-60 lg:pt-40">
    <div class="col-12">
      <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Requirements</div>
      <ul class="ul-list y-gap-15">
        <li v-for="(elm, i) in eventContent" :key="i">{{ elm }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { learnList, eventContent } from "@/data/events";
</script>
