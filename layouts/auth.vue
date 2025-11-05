<template>
    <div class="main-content">
        <HeaderAuth />
        <div class="content-wrapper js-content-wrapper overflow-hidden mt-60">

            <section class="page-header -type-1 mt-40">
                <div class="container">
                    <div class="page-header__content">
                        <div class="row justify-center text-center">
                            <div class="col-auto">
                                <slot />

                                <!-- <div>
                                    <h1 class="page-header__title">About Us</h1>
                                </div>

                                <div>
                                    <p class="page-header__text">
                                        We’re on a mission to deliver engaging, curated courses at a
                                        reasonable price.
                                    </p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </div>

</template>

<script setup>
 
import HeaderAuth from "@/components/layout/headers/HeaderFive";

onMounted(() => {
    // if (!process.dev) {
    //     document.addEventListener('copy', e => e.preventDefault());
    //     document.addEventListener('cut', e => e.preventDefault());
    //     document.addEventListener('paste', e => e.preventDefault());

    //     // منع الزر الأيمن
    //     document.addEventListener('contextmenu', e => e.preventDefault());

    //     // منع بعض اختصارات لوحة المفاتيح
    //     document.addEventListener('keydown', e => {
    //         // F12
    //         if (e.key === 'F12') {
    //             e.preventDefault();
    //         }

    //         // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
    //         if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) {
    //             e.preventDefault();
    //         }

    //         // Ctrl+U
    //         if (e.ctrlKey && e.key === 'u') {
    //             e.preventDefault();
    //         }
    //     });
    // }
})
</script>

<style lang="scss" scoped></style>