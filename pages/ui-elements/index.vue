<template>
  <div class="main-content">
    <!-- <Header /> -->
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />
      <PageHeading />
      <section class="layout-pb-lg">
        <div class="container">
          <div class="row y-gap-50">
            <Accordions />
            <Tabs />
            <Table />
            <MessageBoxes />
          </div>
          <Buttons />
          <Form />
          <div class="row y-gap-30 justify-between mt-50">
            <Tooltips />
            <ProgressBars />
          </div>
          <Typography />
        </div>
      </section>

      <!-- <FooterOne /> -->
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "UI Elements || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import PageLinks from "@/components/common/PageLinks";

import Accordions from "@/components/uiElements/Accordions";
import Buttons from "@/components/uiElements/Buttons";
import Form from "@/components/uiElements/Form";
import MessageBoxes from "@/components/uiElements/MessageBoxes";
import PageHeading from "@/components/uiElements/PageHeading";
import ProgressBars from "@/components/uiElements/ProgressBars";
import Table from "@/components/uiElements/Table";
import Tabs from "@/components/uiElements/Tabs";
import Tooltips from "@/components/uiElements/Tooltips";
import Typography from "@/components/uiElements/Typography";
</script>

<style lang="scss" scoped></style>
