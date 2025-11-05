<template>
  <div class="col-lg-6">
    <div class="text-18 lh-1 text-dark-1 fw-500 mb-30">Message Boxes</div>

    <div class="row y-gap-20">
      <div v-for="(elm, i) in infoItems" :key="i" class="col-12">
        <div
          :class="`d-flex items-center justify-between ${elm.bgClass} pl-30 pr-20 py-30 rounded-8`"
        >
          <div :class="`${elm.textClass} lh-1 fw-500`">
            Info: User pending action
          </div>
          <div :class="`${elm.textClass} size-20`">
            <FontAwesomeIcon :icon="faX" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { infoItems } from "@/data/messageBoxItems";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
</script>
