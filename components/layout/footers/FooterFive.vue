<template>
  <footer class="footer -type-1  bg-dark-1">
    <div class="container">

      <div class="py-30 border-top-light-15">
        <div class="row justify-between items-center y-gap-20">
          <div class="col-auto">
            <div class="footer-header-socials d-flex justify-between items-center">
              <!-- <div class="footer-header-socials__title text-white">
                Follow us on social media
              </div> -->
              <div class="footer-header-socials__list">
                <Socials />
              </div>
            </div>
          </div>

          <div class="col-auto">
            <div class="d-flex items-center h-100 text-white">
              © {{ new Date().getFullYear() }} RootsExam. All Right Reserved.
            </div>
          </div>

          <div class="col-auto">
            <div class="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
              <div>
                <div class="d-flex x-gap-15 text-white">
                  <Links />
                </div>
              </div>

              <!-- <div>
                <a
                  href="#"
                  class="button px-30 h-50 -dark-6 rounded-200 text-white"
                >
                  <i class="icon-worldwide text-20 mr-15"></i>
                  <span class="text-15">English</span>
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Links from "../component/Links.vue";
import FooterLinks from "../component/FooterLinks.vue";
import Socials from "~/components/common/Socials.vue";

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>

<style >
.bg-purple-1 {
    background-color: var(--color-dark-1);
}

.footer-header-socials__title {
  font-size: 17px;
  line-height: 26px;
  margin-right: 20px;
}

.footer-header-socials__list {
  display: flex;

  a {
    align-items: center;
    border-radius: 100%;
    display: flex;
    font-size: 14px;
    height: 40px;
    justify-content: center;
    transition: all .2s cubic-bezier(.215, .61, .355, 1);
    width: 40px;
  }
}
</style>