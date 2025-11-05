<template>
    <div class="section">
        <div class="container-fluid px-0">
            <div class="block-full-appointment bg-cover"
                style="background-image: url(/assets/img/online-appointment-bg.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="box-progress">
                                <div class="box-progress-number">15<sup>K</sup></div>
                                <div class="box-progress-text">
                                    <h5>Questions Solved</h5>
                                    <p>Join thousands of users who have successfully solved these questions to sharpen their clinical skills and ace their exams.</p>
                                </div>
                            </div>
                            <div class="box-progress">
                                <div class="box-progress-number">100<sup>%</sup></div>
                                <div class="box-progress-text">
                                    <h5>Satisfaction Rate</h5>
                                    <p>Our content is continually updated to ensure you are learning from the best.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mt-5 mt-md-0 text-center text-md-right">
                            <h2 class="text1">Online Learning<br>
                                and Assessments</h2>
                            <div class="text2">Sign up now and explore our free question sets and resources!</div>
                            <!-- <div class="text2">You can now book a limited amount of doctors’ appointments online</div> -->
                            <nuxt-link to="signup" class="btn mt-2 mt-sm-3 mt-lg-4">
                                <i class="icon-arrow-right"></i>
                                <span>Join For Free</span>
                                <i class="icon-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
.section {
    margin-top: 110px;
}

.block-full-appointment {
    padding-top: 150px;
    padding-bottom: 150px;
    color: #ffffff;
}

.bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}

.box-progress {
    display: flex;

    h5 {
        font-size: 18px;
        line-height: 24px;
        color: #ffffff;
        font-family: "Poppins", serif;
        margin-bottom: 20px;
        font-weight: 600;
    }

    .box-progress-number {
        font-size: 48px;
        line-height: 1em;
        font-weight: 600;
        font-family: "Poppins", serif;
        color: var(--color-dark-1);;
        min-width: 125px;
        padding-right: 15px;

        sup {
            font-size: 28px;
            top: -18px;
        }
    }

    .box-progress-text {
        flex: 1;
        max-width: 380px;

        p {
            color: #ffffff;
        }

        p:last-child {
            margin-bottom: 0;
        }
    }
}

.box-progress+.box-progress {
    margin-top: 42px;
}


.block-full-appointment .text1 {
    font-size: 36px;
    line-height: 52px;
    color: #ffffff;
    font-family: "Poppins", serif;
    margin-bottom: 10px;
    font-weight: 600;
}

.block-full-appointment .text2 {
    font-size: 14px;
    line-height: 24px;
    font-family: "Poppins", serif;
    text-align: right !important;
    color: #ffffff;

}

.btn,
body:not(.touch) .btn:focus {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-shadow: none;
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    font-family: "Poppins", serif;
    padding: 15px 25px;
    color: var(--color-dark-1);;
    border: 2px solid var(--color-dark-1);;
    border-radius: 26px;
    background: transparent;
    text-transform: none;
    letter-spacing: .05em;
    transition: 0.3s;
}

@media (min-width: 1024px) {

    .btn:not(.btn-xs):not(.btn-sm):not(.btn-lg) {
        font-size: 14px;
        line-height: 22px;
        padding: 15px 30px;
    }
}

@media (min-width: 1024px) {
    .btn:not(.btn-xs):not(.btn-sm):not(.btn-lg) {
        font-size: 14px;
        line-height: 22px;
        padding: 15px 30px;
    }
}

.btn {
    font-weight: 500;
    color: #fff;
    background: var(--color-dark-1);;
    border: 1px solid transparent;
    box-shadow: none !important;
}

.mt-lg-4,
.my-lg-4 {
    margin-top: 40px !important;
}

.btn:not(.btn-noanimate) [class*='icon']:first-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:first-child {
    transform: translateX(-55px);
    opacity: 0;
    width: 0;
}

.btn:not(.btn-noanimate) [class*='icon']:last-child,
body:not(.touch) .btn:focus:not(.btn-noanimate) [class*='icon']:last-child {
    padding-left: 10px;
}

.btn .icon-right-arrow,
.btn:focus .icon-right-arrow {
    font-size: 10px;
}
.btn [class*='icon'], body:not(.touch) .btn:focus [class*='icon'] {
    position: relative;
    display: inline-block;
    top: 0;
    font-size: 14px;
    transition: 0.3s;
}
body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:first-child {
    width: auto;
    padding-right: 10px;
    transform: translateX(0);
    opacity: 1;
}
body:not(.touch) .btn:not(.btn-noanimate):hover [class*='icon']:last-child {
    width: 0;
    padding-left: 0;
    transform: translateX(55px);
    opacity: 0;
}
.btn:hover  {
    background: #7883ac;
    color: #fff;
    border: 1px solid transparent;
}

</style>