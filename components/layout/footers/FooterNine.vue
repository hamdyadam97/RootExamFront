<template>
  <footer class="footer">
    <div class="container">
      <div class="py-30 border-top-light">
        <div class="row items-center justify-between">
          <div class="col-auto">
            <div class="text-13 lh-1">
              © {{ new Date().getFullYear() }} RootsExam. All Right Reserved.
            </div>
          </div>

          <!-- <div class="col-auto">
            <div class="d-flex items-center">
              <div class="d-flex items-center flex-wrap x-gap-20">
                <Links />
              </div>

              <button class="button -md -rounded bg-light-4 text-light-1 ml-30">
                English
              </button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Links from "../component/Links";
</script>

<style lang="scss" scoped></style>
