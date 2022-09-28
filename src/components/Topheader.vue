<template>
  <div class="overlay" :class="{'show':overlay}"></div>
    <header class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px]">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">
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
              <li class="hidden"><a href="https://riseandlearn.ke/" class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px]">E.A HR Symposium</a></li>


            </ul>
          </nav>
          <div class="hidden xl:block" @click="myToogle">
            <button type="button"> <a class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-sky-700	 text-gray-100 hover:bg-gray-900 hover:text-white" href="https://riseandlearn.ke/">
              <span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-pop">E.A HR Symposium</span>
            </a>
          </button>
          </div>
        </div>
        <div class="burger-icon burger-icon-white menu__icon" :class="{'burger-close':isOpen}" @click="myToogle">
          <i class="fa fa-bars"></i>
        </div>
        <nav class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]" :class="{'opacity-0':isOpen,'pointer-events-none':isOpen}">
          <div class="p-[30px]" @click="myToogle">
           
            <div class="mt-8 border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <ul class="text-[15px]"> 
                <li class="py-[13px]">
                  <router-link :to="{name:'home'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Home</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'about'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">About Us</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'team'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Team</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'audit'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">HR Audit</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'hrmanagement'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">HR Management</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'recruitment'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Recruitment & Selection</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'organization'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Organization Development</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'expatriates'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Expatriates Management</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'secretatial'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Company Secretarial</router-link>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'learning'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Learning & Leadership Development</router-link>
                </li>
                
                <li class="py-[13px]">
                  <a href="https://riseandlearn.ke/" class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px]">E.A HR Symposium</a>
                </li>

                <li class="py-[13px]">
                  <router-link :to="{name:'contact'}" class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">Contact Us</router-link>
                </li>
                <!-- fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100] opacity-0 pointer-events-none -->
              </ul>
            </div>
          </div>
        </nav>
      </header>
</template>
<script>
  export default {
    data(){
      return {
        isOpen : true,
        overlay : false
      }
    },
    methods: {
    myToogle: function() {
      this.isOpen = !this.isOpen;
      // some code to filter users
    }
  }
  }
</script>