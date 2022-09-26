<template>
    <header class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px]">
        <div class="px-[14px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">
            <router-link :to="{name:'home'}" class="flex"><img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]" src="../assets/logo.svg" alt="logo image"></router-link>
          <nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block"> 
            <ul class="navbar flex flex-col justify-center font-pop gap-[34px] lg:flex-row">
              <li><router-link :to="{name:'home'}" class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px]">Home</router-link></li>
              <li class="flex items-center group">
                <router-link :to="{name:'about'}" class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px]">About Us</router-link><i><img class="icon-caret group-hover:filter-green" src="../assets/icons/icon-caret.svg" alt="caret"></i>
                <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"><router-link :to="{name:'team'}" class="flex items-center text-[14px]">Our Team</router-link></li>
                </ul>
              </li>
              <li class="flex items-center group"><a class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mx-[7px]" href="#">Services</a><i><img class="icon-caret group-hover:filter-green" src="../assets/icons/icon-caret.svg" alt="caret"></i>
                <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'audit'}" class="flex items-center text-[14px]">HR Audit</router-link></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'hrmanagement'}" class="flex items-center text-[14px]">HR Management</router-link></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'recruitment'}" class="flex items-center text-[14px]">Recruitment & Selection</router-link></li>
                  <li class="hr px-[22px]"> <span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'organization'}" class="flex items-center text-[14px]">Organization Development</router-link></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'expatriates'}" class="flex items-center text-[14px]">Expatriates Management</router-link></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'secretatial'}" class="flex items-center text-[14px]">Company Secretarial </router-link></li>
                  <li class="menu-child-item font-pop group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1"><router-link :to="{name:'learning'}" class="flex items-center text-[14px]">Learning & Leadership Development</router-link></li>
                  
                </ul>
              </li>

              <li><router-link :to="{name:'contact'}" class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px]">Contact Us</router-link></li>


            </ul>
          </nav>
        </div>
        <div class="burger-icon burger-icon-white menu__icon">
          <i class="fa   fa-bars"></i>
        </div>
        <nav class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile opacity-0 pointer-events-none transition-all duration-200 w-[380px] z-[100]">
          <div class="p-[30px]">
            <ul class="font-pop font-medium text-[16px] leading-[16px]">
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Home</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="hp1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="#">Homepage 01</a></li>
                  <li class="text-md py-[10px]" id="hp2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-2.html">Homepage 02</a></li>
                  <li class="text-md py-[10px]" id="hp3"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-3.html">Homepage 03</a></li>
                  <li class="text-md py-[10px]" id="hp4"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-4.html">Homepage 04</a></li>
                  <li class="text-md py-[10px]" id="hp5"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-5.html">Homepage 05</a></li>
                  <li class="text-md py-[10px]" id="hp6"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-6.html">Homepage 06</a></li>
                  <li class="text-md py-[10px]" id="hp7"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-7.html">Homepage 07</a></li>
                  <li class="text-md py-[10px]" id="hp8"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="home-8.html">Homepage 08</a></li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>About</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="ab1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="about-1.html">About 01</a></li>
                  <li class="text-md py-[10px]" id="ab2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="about-2.html">About 02</a></li>
                  <li class="text-md py-[10px]" id="ab3"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="about-3.html">About 03</a></li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Services</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="sv1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="services-1.html">Services 01</a></li>
                  <li class="text-md py-[10px]" id="sv2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="services-2.html">Services 02</a></li>
                  <li class="text-md py-[10px]" id="p1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="pricing-1.html">Pricing 01</a></li>
                  <li class="text-md py-[10px]" id="p2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="pricing-2.html">Pricing 02</a></li>
                  <li class="text-md py-[10px]" id="faqs1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="faqs-1.html">FAQS 01</a></li>
                  <li class="text-md py-[10px]" id="faqs2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="faqs-2.html">FAQS 02</a></li>
                  <li class="text-md py-[10px]" id="career"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="career.html">Career</a></li>
                  <li class="text-md py-[10px]" id="career-details"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="career-details.html">Career Detials</a></li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Pages</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="contact"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="contact.html">Contact</a></li>
                  <li class="text-md py-[10px]" id="singup"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="signup.html">Sign Up</a></li>
                  <li class="text-md py-[10px]" id="login"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="login.html">Log In</a></li>
                  <li class="text-md py-[10px]" id="rp"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="reset-password.html">Reset Password</a></li>
                  <li class="text-md py-[10px]" id="error404"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="error-404.html">Error 404</a></li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Blog</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="b1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="blog-1.html">Blog 01</a></li>
                  <li class="text-md py-[10px]" id="b2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="blog-2.html">Blog 02</a></li>
                  <li class="text-md py-[10px]" id="single"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="single.html">Blog Single</a></li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Shop</p><img class="w-[18px] h-[18px]" src="./assets/images/icons/icon-angle-down-fill.svg" alt="angle icon">
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="s1"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="shop-1.html">Shop 01</a></li>
                  <li class="text-md py-[10px]" id="s2"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="shop-2.html">Shop 02</a></li>
                  <li class="text-md py-[10px]" id="product"><a class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="single-product.html">Product Details</a></li>
                </ul>
              </li>
            </ul>
            <div class="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <p class="font-bold text-heading-6 mb-[10px]">Your Account</p>
              <ul class="text-[15px]"> 
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">Profile</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">Work Preferences</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">My Boosted Shots</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">My Collections</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">Account Settings</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">Go Pro</a></li>
                <li class="py-[13px]"><a class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#">Sign Out</a></li>
              </ul>
            </div>
            <div class="text-gray-400 font-pop text-[13px]">Copyright 2022 © Agon - Agency Template.<br><span>Designed by</span><a class="text-green-900" href="#">&nbsp;Samuel Fredricl</a></div>
          </div>
        </nav>
      </header>
</template>