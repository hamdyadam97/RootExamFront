<template>
  <div class="pagination -buttons">
    <button class="pagination__button -prev" @click="handlePrevious">
      <i class="icon icon-chevron-left"></i>
    </button>

    <div class="pagination__count">
      <a
        @click="() => setPageNumber(1)"
        :class="{ '-count-is-active': pageNumber === 1 }"
      >
        1
      </a>

      <span v-if="startPage > 2">...</span>
      <template v-for="page in visiblePages" :key="page">
        <a
          v-if="page !== 1 && page !== totalPages"
          @click="() => setPageNumber(page)"
          :class="{ '-count-is-active': pageNumber === page }"
        >
          {{ page }}
        </a>
      </template>

      <!-- <template v-for="page in totalPages" :key="page">
        <a
          v-if="page !== 1 && page !== totalPages"
          @click="() => setPageNumber(page)"
          :class="{ '-count-is-active': pageNumber === page }"
        >
          {{ page }}
        </a> 
      </template> -->

      <span v-if="endPage < totalPages - 1">...</span>
<!-- 
      <span v-if="pageNumber < totalPages - 2">...</span> -->
      <a
        v-if="totalPages > 1"
        @click="() => setPageNumber(totalPages)"
        :class="{ '-count-is-active': pageNumber === totalPages }"
      >
        {{ totalPages }}
      </a>
      <!-- <a
        v-if="totalPages > 1"
        @click="() => setPageNumber(totalPages)"
        :class="{ '-count-is-active': pageNumber === totalPages }"
      >
        {{ totalPages }}
      </a>
        -->
    </div>

    <button @click="handleNext" class="pagination__button -next">
      <i class="icon icon-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  pagination: Object,  // Pass pagination object from Laravel API
});

const pageNumber = computed(() => props.pagination?.current_page);  // Current Page
const totalPages = computed(() =>props.pagination?.total_pages);   // Total Pages
const perPage = computed(() =>props.pagination?.per_page);         // Per Page
const total = computed(() =>props.pagination?.total);              // Total Items

const dataLength = ref(50);
const pageCapacity = ref(5);

const startPage = computed(() => Math.max(pageNumber.value - 2, 2));
const endPage = computed(() => Math.min(pageNumber.value + 2, totalPages.value - 1));

const visiblePages = computed(() => {
  const pages = [];
  for (let i = startPage.value; i <= endPage.value; i++) {
    pages.push(i);
  }
  return pages;
});


const emit = defineEmits(['pageChange']);

const setPageNumber = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    pageNumber.value = page;
    emitPageChange(page);
  }
};

const handlePrevious = () => {
  if (pageNumber.value > 1) {
    setPageNumber(pageNumber.value - 1);
  }
};

const handleNext = () => {
  if (pageNumber.value < totalPages.value) {
    setPageNumber(pageNumber.value + 1);
  }
};
const emitPageChange = (page) => {
  emit('pageChange', page);
};

</script>

<style scoped>
a{cursor: pointer;}
/* Add your component-specific styles here */
@media (max-width:550px) {
  .pagination.-buttons > * + *{
    margin-left: 10px !important;

  }

 
}
</style>
