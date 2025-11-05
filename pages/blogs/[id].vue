<template>
 
  <BlogDetails :id="id" class="mt-40" :blog="blog" :default_image="default_image"/>

  <!-- <RelatedBlogs /> -->
 
</template>

<script setup>
useSeoMeta({
  title: "RootExams",
  description:"RootExams e-learning platforms.",
});
const blog = ref(null);
const default_image = ref(null);

onMounted(() => {
  getBlog();
});


const route = useRoute();
const id = route.params.id;
// import RelatedBlogs from "@/components/blogs/RelatedBlogs";
 
 
const getBlog =  async () =>{
  const { data, message } = await useNuxtApp().$api('/blogs/'+ id, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (data) {
    blog.value = data.blog;
    default_image.value = data.default_image;
  }
}

import BlogDetails from "@/components/blogs/BlogDetails";
</script>

<style lang="scss" scoped></style>
