<template>
    <div class="section" id="contactSection">
        <div class="banner-contact-us" style="background-image: url(/assets/img/contact-bg.png)">
            <div class="container">
                <div class="row no-gutters">
                    <div
                        class="col-sm-6 col-lg-6 order-2 order-sm-1 mt-3 mt-md-0 text-center text-md-right d-flex align-items-end">
                        <img src="/assets/img/banner-callus.png" alt="" class="shift-left">
                    </div>
                    <div class="col-sm-6 col-lg-6 order-1 order-sm-2 d-flex">
                        <div class="pt-2 pt-lg-6">
                            <h2 data-title="Looking for a Certified Doctor?"><span>Looking for <br class="d-lg-none"> a
                                    <span class="theme-color">Certified Doctor?</span></span></h2>
                            <p>We believe in providing the best possible care to all our existing patients and welcome new
                                patients to sample.</p>
                            <form class="contact-form" id="contactForm" method="post" novalidate="novalidate">
                                <div class="successform">
                                    <p>Your message was sent successfully!</p>
                                </div>
                                <div class="errorform">
                                    <p>Something went wrong, try refreshing and submitting the form again.</p>
                                </div>
                                <div>
                                    <input type="text" class="form-control" name="name" placeholder="Your name*">
                                </div>
                                <div class="row row-sm-space mt-15">
                                    <div class="col-sm-6"><input type="text" class="form-control" name="phone"
                                            placeholder="Your Phone"></div>
                                    <div class="col-sm-6 mt-15 mt-sm-0"><input type="text" class="form-control" name="email"
                                            placeholder="Email*"></div>
                                </div>
                                <div class="mt-15">
                                    <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                </div>
                                <div class="mt-2 mt-lg-4 text-center text-md-left">
                                    <button type="submit" class="btn">
                                        <i class="icon-arrow-right"></i>
                                        <span>Send request</span>
                                        <i class="icon-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
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
body {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    min-height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}

.section {
    margin-top: 110px;
}

.banner-contact-us {
    background-position: center center;
    background-repeat: no-repeat;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;

    [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
}

.banner-contact-us .order-2 {
    position: relative;
    z-index: 1;
}

.banner-contact-us img.shift-left {
    position: absolute;
    margin-left: -150px;
    display: block;
}

.banner-contact-us .order-1 {
    position: relative;
    z-index: 0;
}

@media (min-width: 1024px) {

    .pt-lg-6,
    .py-lg-6 {
        padding-top: 60px !important;
    }
}

.banner-contact-us [data-title] {
    margin-bottom: 26px;
    display: inline-flex;
    position: relative;
    z-index: 0;

    span {
        position: relative;
        z-index: 1;
    }

    [data-title]:after {
        position: absolute;
        z-index: 0;
        right: -.8em;
        top: -.52em;
        font-size: 120px;
        line-height: 1em;
        color: #f6f7f5;
        white-space: nowrap;
        content: attr(data-title);
    }
}

.banner-contact-us [data-title]:after {
    position: absolute;
    z-index: 0;
    right: -.8em;
    top: -.52em;
    font-size: 120px;
    line-height: 1em;
    color: #f6f7f5;
    white-space: nowrap;
    content: attr(data-title);
}

p {
    font-size: 16px;
    line-height: 27px;
    margin-bottom: 27px;
}

.banner-contact-us .contact-form {
    margin-bottom: 60px;
}

.successform {
    color: green;
}

.successform,
.errorform {
    margin-top: 15px;
}

.successform,
.errorform {
    display: none;
    min-height: 50px;
}

.errorform {
    color: #c0392b;
}

.contact-form .form-control {
    font-size: 14px;
    min-height: 45px;
}

.form-control {
    display: block;
    width: 100%;
    padding: 10px 12px;
    font-size: 16px;
    line-height: 19px;
    color: #424242;
    background-color: #fff !important;
    background-image: none !important;
    background-clip: padding-box !important;
    border: 1px solid #e5e5e5 !important;
    border-radius: 5px !important;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s !important;
}

.banner-contact-us .contact-form .form-control {
    min-height: 42px;
    padding-top: 9px;
    padding-bottom: 9px;
    line-height: 18px;
}

.row.row-sm-space {
    margin-left: -8px;
    margin-right: -8px;

    [class*='col'] {
        padding-left: 8px;
        padding-right: 8px;
    }
}

.mt-15,
.my-15 {
    margin-top: 15px !important;
}

@media (min-width: 576px) {

    .mt-sm-0,
    .my-sm-0 {
        margin-top: 0 !important;
    }
}

.banner-contact-us .contact-form textarea.form-control {
    min-height: 125px;
}

@media (min-width: 768px) {
    .text-md-left {
        text-align: left !important;
    }
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
    color: #6440FB;
    border: 2px solid #6440FB;
    border-radius: 26px;
    background: transparent;
    text-transform: none;
    letter-spacing: .05em;
    transition: 0.3s;
}

.btn,
.btn:focus {
    font-weight: 500;
    color: #fff;
    background: #6440FB;
    border: 1px solid transparent;
    box-shadow: none !important;
}

.btn,
.btn:focus {
    font-weight: 500;
    color: #fff;
    background: #6440FB;
    border: 1px solid transparent;
    box-shadow: none !important;
}

@media (min-width: 1024px) {

    .btn:not(.btn-xs):not(.btn-sm):not(.btn-lg),
    .btn:focus:not(.btn-xs):not(.btn-sm):not(.btn-lg) {
        font-size: 14px;
        line-height: 22px;
        padding: 15px 30px;
    }
}


.btn {
    font-weight: 500;
    color: #fff;
    background: #6440FB;
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

.btn [class*='icon'],
body:not(.touch) .btn:focus [class*='icon'] {
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

.btn:hover {
    background: #7883ac;
    color: #fff;
    border: 1px solid transparent;
}</style>