<template>
  <div class="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">

    <div class="full-width banner-hero bg-bg-6 banner-2">
    <Carousel :items-to-show="1" :autoplay="10000" :wrapAround="true">
            <Slide v-for="carousel in carousel" :key="carousel">
              <div class="slider-image bg-cover">
                <img :src="carousel.image" alt="" srcset="">
              </div>
              <div class="caption">
                <div class="hero__content mt-50">
                  <h2 class="font-bebas font-bold text-6xl">{{carousel.caption}}</h2>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="navigation" />
            </template>
          </Carousel>
  </div>

    <!-- service start here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/audit_img.svg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"> Human Resource Audit</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">It's a comprehensive method, that objectively and systematically verify current practices, documentation, policies and procedures in the Human Resource and in the entire organization.</p>
            <div class="">
              <p class="py-4 text-gray-400">What sets us apart</p>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Our HR Audit is done through a system</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Saves time, get Audit Report from weeks to just a few days</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Covers 10 critical agenda in your organization</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Gives you, immediate feedback on way forward</h4>
              </div>
            </div>
            <button type="button">
              <router-link :to="{name:'audit'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <!-- service start here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/hrmgt_img.svg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"> Human Resource Management</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">Our Human Resource team becomes the HR focal point on behalf of your Organization. We manage your employee’s performance, exit management, payroll and statutory remittance and more...</p>
            <div class="">
              <p class="py-4 text-gray-400">What's the Added Value</p>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Focus on the core of your business</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Reduced head count cost</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Access to improved Human Resource IT systems</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium"> Access to Human Resource expertise not available internally</h4>
              </div>
            </div>
            <button type="button">
              <router-link :to="{name:'hrmanagement'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <!-- service start here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/recruitment_img.jpg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"> Recruitment & Selection</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">We are equipped to better provide a recruitment and selection service. Whenever you need someone to effectively cover a vacancy at your company, be it one or many vacancies every role require a careful attention. We have the tools and the resources to guide and enable a smoother process.</p>
            <div class="">
              <p class="py-4 text-gray-400">Our recruitment at a glimpse</p>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium">We do bulk recruitment</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium">We do Headhunt</h4>
              </div>
            </div>
            <button type="button">
              <router-link :to="{name:'recruitment'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <!-- service start here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/orgDev_img.jpg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"> Organization Development</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">An outstanding organization on the outlook, is a result of careful structuring process. We work with our customers to develop a sound organization.</p>
            <div class="">
              <p class="py-4 text-gray-400">What sets us apart</p>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium">Strategic HR is the core of our business, Organization Development is a strategic agenda</h4>
              </div>
              <div class="flex items-center mb-[17px]">
                <i class="fa fa-check-double mr-2"></i>
                <h4 class="text-heading-6 font-pop font-medium">We have a vast experience, with an average of four (4) Organization restructuring annually</h4>
              </div>
            </div>
            <button type="button">
              <router-link :to="{name:'organization'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <!-- service start here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/expatMgt_img.svg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"> Expartriates Management</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">Working with Expatriates at your organization should be easier, we handle Expatriates paper work on your behalf with ease. Serving your business more time to focus on the core of your business.</p>
            <button type="button">
              <router-link :to="{name:'expatriates'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/compSecr_img.svg" alt="Audit">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">Company Secretarial Services</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">We work on behalf of your company, effectively offering you ‘Company Secretarial Services’ which are routine tasks but consume considerable amount of time to work out.</p>
            <router-link :to="{name:'secretatial'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <div class="container lg:mx-auto md:mx-2">
      <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="lg:grid lg:grid-cols-2 gap-[50px]">
          <img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="../assets/img/learning.svg" alt="Learning">
          <div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
            <h3 class="font-bebas font-bold lg:text-8xl md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">Learning & Leadership Development</h3>
            <p class="text-pop md:text-lead-lg text-gray-600 mb-[20px]">Ensuring your workforce is equipped with competitive new skills, frequent training and leadership development is inevitably important to consider. Our customers enjoy carefully planned and well-organized training which equip their teams with competitive leading age skills.</p>
            <router-link :to="{name:'learning'}" class="flex my-4 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit">
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span>
                <i>
                  <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="@/assets/icons/icon-right.svg" alt="arrow right icon">
                </i>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- service ends here -->
    <div class="clients">
      <h2 class="font-bold font-pop mt text-[25px] leading-[30px] md:text-heading-3 text-center mt-[60px] md:mb-[60px] lg:mt-[84px]">Trusted by the world’s leading companies</h2>
      <div>
        <div class="brand">
          <Carousel :items-to-show="6" :settings="settings" :breakpoints="breakpoints" :autoplay="2000">
            <template #slides>
              <Slide v-for="clients in clients" :key="clients">
                <img v-bind:src="clients" alt="" class="brand__item">
              </Slide>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  
  </template>
  <style scoped>
    .brand__item {
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
    }
  
    .brand__item:hover {
      filter: none;
      -webkit-filter: grayscale(0);
    }
  </style>
  <script>
    import 'vue3-carousel/dist/carousel.css';
    import {
      Carousel,
      Slide,
      Pagination,
      Navigation
    } from 'vue3-carousel';
    import img1 from "@/assets/img/brand/p1.png"
    import img2 from "@/assets/img/brand/p2.png"
    import img3 from "@/assets/img/brand/p3.png"
    import img4 from "@/assets/img/brand/p4.png"
    import img5 from "@/assets/img/brand/p5.png"
    import img6 from "@/assets/img/brand/p6.png"
    import img7 from "@/assets/img/brand/p7.png"
    import img8 from "@/assets/img/brand/p8.png"
    import img9 from "@/assets/img/brand/p9.png"
    import img10 from "@/assets/img/brand/p10.png"
    // slider images
    // import slider1 from "@/assets/img/slider/genobackground.jpg"
    import slider2 from "@/assets/img/slider/east.jpg"
    import slider3 from "@/assets/img/slider/madam.jpg"
    export default {
      components: {
        Carousel,
        Slide,
        Navigation,
      },
      data: () => ({
        carousel: [{
          "image": slider2,
          "caption": ""
        }, 
        {
          "image": slider3,
          "caption": "Your Reliable HR Partner for People, Policies, Process & Systems Solutions."
        }, 
      ],
        clients: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
        // carousel: [slider1, slider2, slider3],
        // carousel setting
        settings: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
          // 700px and up
          700: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
          // 1024 and up
          1024: {
            itemsToShow: 8,
            snapAlign: 'start',
          },
        },
      }),
    }
  </script>
  <style>
    .navigation {
      margin: 0 30px;
    }
  
    .slider-image {
      position: relative;
      text-align: center;
      color: white;
      width: 100%;
      display: block;
    }
  
    .caption {
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
    }
  
    .fullwidth {
      height: 680px;
      width: 100% !important;
    }
  
    .text-white {
      color: #fff;
    }
  
    .brand__item {
      margin: 30px 0;
    }
  
    ol>li {
      margin: 40px 0;
    }
  </style>