<template>
    <div class="section">
		<div class="container-fluid px-0 text-image-block">
			<div class="row no-gutters">
				<div class="col-md-6 image-col"><img src="/assets/img/why-choose-us.png" alt=""></div>
				<div class="col-md-6 text-col">
					<div class="title-wrap">
						<div class="h-sub theme-color">See the Difference</div>
						<h2 class="h1" data-title="Why Choose Us?"><span>Why Choose Us?</span></h2>
					</div>
					<div class="mt-2 mt-lg-4"></div>
					<ul class="numbered-list-xl">
						<li data-num="01.">
							<h5>Ace Your Exams with Confidence:</h5>
							RootsExams gives you the edge you need to succeed. Our comprehensive question bank covers every specialty and topic, so you'll be fully prepared for whatever your exam throws at you. 
						</li>
						<li data-num="02.">
							<h5>Learn Smarter, Not Harder:</h5>
							Say goodbye to endless, inefficient studying. Our high-yield questions, detailed explanations, and diverse question formats help you master the most important information quickly and effectively.
						</li>
						<li data-num="03.">
							<h5>Stay Ahead of the Curve:</h5>
							We constantly update our Qbanks with the latest medical guidelines and exam patterns, ensuring you have the most current and relevant knowledge at your fingertips.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped>
.section{
    margin-top: 110px;
}
.text-image-block {
    background-color: #f6f7f5;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.text-image-block .image-col {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}


@media (min-width: 1024px) {
    .layout-landing .text-image-block .text-col {
        padding: 115px 15px 90px;
        max-width: 570px;
    }
}

@media (min-width: 1024px) {
    .layout-landing .text-image-block .text-col {
        padding: 115px 15px 90px;
        max-width: 570px;
    }
}
.text-image-block .text-col {
    position: relative;
    z-index: 1;
    padding: 100px 15px;
    max-width: 570px;
}

.title-wrap {
    position: relative;
}

 
.text-image-block .h-sub {
    position: relative;
    z-index: 1;
}
.text-image-block .h-sub {
    position: relative;
    z-index: 1;
}
.h-sub {
    margin-bottom: 17px;
    font-size: 17px;
    line-height: 1.2em;
    font-weight: 500;
    font-family: "Poppins", serif;
    letter-spacing: 1px;
}
.theme-color {
    color: var(--color-dark-1);
}
.layout-landing h1, .layout-landing .h1 {
    line-height: 1.167em;
}

.text-image-block [data-title] {
    display: inline-flex;
    position: relative;
    z-index: 0;
}
.text-image-block [data-title] span {
    position: relative;
    z-index: 1;
}
 
ol, ul, dl {
    margin-top: 0;
    margin-bottom: 1rem;
}
ul.numbered-list-xl {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    counter-reset: li;
    list-style-type: none;
    font-size: 16px;
    line-height: 27px;
} 


ul.numbered-list-xl li:not(:last-child) {
    margin-bottom: 40px;
} 
ul.numbered-list-xl li {
    position: relative;
    padding: 0 0 0 110px;
}
ul.numbered-list-xl li:before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    line-height: 1em;
    font-weight: 700;
    font-family: "Poppins", serif;
    content: attr(data-num);
    counter-increment: li;
    height: 83px;
    width: 83px;
    padding-left: 2px;
    border-radius: 50%;
    color: var(--color-dark-1);
    left: 0;
    top: -6px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(101, 81, 46, 0.1);
    transition: 0.2s;
}
.text-image-block [data-title]:after {
    position: absolute;
    z-index: 0;
    right: -7px;
    top: -.52em;
    font-size: 120px;
    line-height: 1em;
    color: #fff;
    white-space: nowrap;
    content: attr(data-title);
}
</style>