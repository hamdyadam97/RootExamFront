<template>
  <div class="sidebar -dashboard">
    <div v-for="(elm, i) in sidebarItems" :key="i" :class="{ '-is-active': pathname === elm.href }" class="sidebar__item">
      <nuxt-link :to="elm.href" class="d-flex items-center text-17 lh-1 fw-500">
        <i :class="`${elm.iconClass} mr-15`"></i>
        {{ elm.text }}
      </nuxt-link>

    </div>

    <div key="resetExam" class="sidebar__item">

      <a href="javascript:;" @click="resetExamDataHandler" class="d-flex items-center text-17 lh-1 fw-500">
        <i class="text-20 fa fa-trash mr-15"></i>
        Reset Exam Data
      </a>
    </div>

    <div key="logout" class="sidebar__item">

      <a href="javascript:;" @click="logoutHandler" class="d-flex items-center text-17 lh-1 fw-500">
        <i class="text-20 icon-power mr-15"></i>
        Logout
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { sidebarItems } from "@/data/dashBoardSidebar";
import { useRoute } from "vue-router";
import { useAuthStore } from '~/store/auth';
import { useExamsStore } from '~/store/exam';
const { logUserOut } = useAuthStore();
const { reset } = useExamsStore();
const { authenticated } = storeToRefs(useAuthStore());

const pathname = ref("");
const route = useRoute();
const router = useRouter();

onMounted(() => {
  pathname.value = router.currentRoute.value.path;
});

watch(route, async (newroute) => {
  pathname.value = newroute.path;
})

watch(authenticated, () => {
  if (!authenticated.value) {
    router.push('/')
  }
})


const resetExamDataHandler = async () => {
  useNuxtApp().$sweetalert2.fire({
    title: "Are you sure you want to reset the exams data?",
    animation: true,
    showDenyButton: true,
    showConfirmButton: true,
    icon: "question",
    confirmButtonText: "Yes",
    confirmButtonColor: "#140342",
    preConfirm: async () => {
      reset();
    }
  })
};

const logoutHandler = async () => {
  await logUserOut();

};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
