<template>
  <div :class="`tabs__pane -tab-item-4 ${activeTab == 4 ? 'is-active' : ''} `">
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="row">
        <div class="col-12">
          <div class="text-16 fw-500 text-dark-1">
            Notifications - Choose when and how to be notified
          </div>
          <p class="text-14 lh-13 mt-5">
            Select push and email notifications you'd like to receive
          </p>
        </div>
      </div>

      <div class="pt-60">
        <div class="row y-gap-20 justify-between">
          <div class="col-auto">
            <div class="text-16 fw-500 text-dark-1">
              Choose when and how to be notified
            </div>
          </div>
        </div>

        <div class="pt-30">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">Subscriptions</div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top-light pt-20 mt-20">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">Recommended Courses</div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top-light pt-20 mt-20">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">
                Replies to my comments
              </div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top-light pt-20 mt-20">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">
                Activity on my comments
              </div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-60">
        <div class="row y-gap-20 justify-between">
          <div class="col-auto">
            <div class="text-16 fw-500 text-dark-1">Email notifications</div>
          </div>
        </div>

        <div class="pt-30">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">
                Send me emails about my Cursus activity and updates I requested
              </div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top-light pt-20 mt-20">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">
                Promotions, course recommendations, and helpful resources from
                Cursus.
              </div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top-light pt-20 mt-20">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="text-16 fw-500 text-dark-1">
                Announcements from instructors whose course(s) I’m enrolled in.
              </div>
              <p class="text-14 lh-13 mt-5">
                Notify me about activity from the profiles I'm subscribed to
              </p>
            </div>
            <div class="col-auto">
              <div class="form-switch">
                <div class="switch" data-switch=".js-switch-content">
                  <input type="checkbox" />
                  <span class="switch__slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row pt-30">
        <div class="col-12">
          <button class="button -md -purple-1 text-white">Save Changes</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(["activeTab"]);
const handleSubmit = () => {
  // Implement form submission logic
};
</script>

<style lang="scss" scoped></style>
