<template>
    <div class="section" id="servicesSection">
        <div class="container">
            <div class="title-wrap text-center">
                <h2 class="h1">Our Services</h2>
                <div class="h-decor"></div>
            </div>

            <div class="row js-service-card-style2-carousel">
                <div class="col-md-6 col-lg-4">
                    <div class="service-card-style2">
                        <div class="service-card-icon">
                            <i class="fa fa-doctor"></i>
                        </div>
                        <h5 class="service-card-name">Diverse Exam Preparation</h5>
                        <!-- <p>MedAll Centre provides the following healthcare services:</p> -->
                        <ul class="marker-list-md">
                            <li>Wide Range of Medical Exams Covered</li>
                            <li>Specialty-Specific Q Banks for Targeted Study</li>
                            <li>Realistic Question Formats to Mirror Actual Exams</li>
                            <li>Up-to-Date Content Reflecting Latest Medical Guidelines</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-card-style2">
                        <div class="service-card-icon">
                            <!-- <i class="icon-genetics"></i> -->
                            <i class="fa fa-doctor"></i>

                        </div>
                        <h5 class="service-card-name">Flexible Subscription Plans</h5>
                        <!-- <p>You should feel your best no matter the season. </p> -->
                        <ul class="marker-list-md">
                            <li>Monthly, Quarterly, and Annual Plans Available</li>
                            <li>Unlimited Access to All Q Banks</li>
                            <li>Affordable Pricing for All Budgets</li>
                            <li>Easy Subscription Management and Renewal</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-card-style2">
                        <div class="service-card-icon">
                            <!-- <i class="icon-farmalogy"></i> -->
                            <i class="fa fa-doctor"></i>
                        </div>
                        <h5 class="service-card-name">Comprehensive Learning Resources</h5>
                        <!-- <p>A lifestyle of holistic wellness rewards you with enhanced health</p> -->
                        <ul class="marker-list-md">
                            <li>In-Depth Explanations for Every Question</li>
                            <li>Performance Analytics to Track Progress</li>
                            <li>Customizable Practice Tests and Mock Exams</li>
                            <li>Evidence-Based Content to Strengthen Core Concepts</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.section {
    margin-top: 110px;
}

.title-wrap {
    position: relative;
}

.text-center {
    text-align: center !important;
}

.h-decor {
    display: inline-block;
    height: 3px;
    width: 53px;
    background-color: var(--color-dark-1);
}  
.title-wrap+* {
    margin-top: 34px;
}
 

.slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
}

.slick-track:before,
.slick-track:after {
    display: table;
    content: '';
}

.slick-track:after {
    clear: both;
}

.slick-initialized .slick-slide {
    display: block;
}

.slick-slide {
    max-width: none !important;
}

.service-card-style2 {
    height: 100%;
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 33px 40px;
    border: 5px solid #f6f7f5;
    transition: 0.2s;
}
.service-card-style2:hover {
    border: 5px solid var(--color-dark-1);
}
.service-card-style2 .service-card-icon {
    font-size: 48px;
    line-height: 1em;
    color: var(--color-dark-1);
}


.service-card-style2 .service-card-name {
    font-size: 20px;
    line-height: 1em;
}

.service-card-style2>*:not(:first-child) {
    margin-top: 22px;
}
.service-card-style2 > ul.marker-list-md:not(:first-child) {
    margin-top: 15px;
}
.service-card-style2 ul.marker-list-md li:not(:last-child) {
    margin-bottom: 16px;
}
ul.marker-list-md li {
    position: relative;
    padding-left: 24px;
}
.layout-landing ul.marker-list-md li {
    padding-left: 30px;
}
.service-card-style2 ul.marker-list-md li {
    font-size: 16px;
}
.layout-landing ul.marker-list-md li:before {
    left: 3px;
}
ul.marker-list-md li:before {
    content: '\e953';
    font-size: 10px;
    font-family: 'icomoon';
    position: absolute;
    left: 0;
    top: 1px;
    color: var(--color-dark-1);
}

</style>