<template>
  <div class="w-full flex items-center bg-primary xl:h-[102px] h-[74px] lg:h-[90px] md:h-[80px]">
    <div class="font-Montserrat w-[90%] mx-auto justify-between flex items-center">
      <div class="xl:w-[131px] w-[127.07px] h-[32.32px] lg:w-[120px] h-[33.32px] bg-white flex justify-center items-center">
        <NuxtImg 
          src="/img/logo.png" 
          class="xl:w-[115.15px] xl:h-[19.61px] lg:w-[105px] w-[111.7px] h-[19.02px] object-contain"
        />
      </div>
      <ul class="hidden text-white font-normal xl:space-x-[50px] lg:flex lg:space-x-[30px] items-center">
        <li class="relative"
        @mouseleave="showDropdownProduct = false"
        >
                <div 
                class="group cursor-pointer"
                 @mouseover="showDropdownProduct = true" 
                  
                >
                  <span class="mr-[1px]">Product</span>
                    <NuxtImg
                    src="/icons/vector.svg"
                    class="inline xl:w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px] md:w-[7px] md:h-[5px] ml-1"
                    />
                </div>
                <ul 
                :class="{
                  'opacity-100 translate-y-0 scale-100': showDropdownProduct,
                  'opacity-0 translate-y-2 scale-95': !showDropdownProduct
              }"  
                class="absolute w-[150px] bg-purple-500 p-4 rounded-l transform transition-all duration-300 ease-in-out">
                  <li class="mb-3">Pricing</li>
                  <li class="mb-3">Benifits</li>
                  <li class="mb-3">Features</li>
                  <li class="mb-3">Product Demo</li>
                  <li class="mb-3">Visual Builder</li>
                  <li class="mb-3 leading-[18px]">Dynamic Responses</li>
                  <li class="mb-3 leading-[18px]">Artificial Inteligence</li>
                  <li class="mb-3">Analystics</li>
                </ul>
            
        </li>
        <li>
            <NuxtLink class="cursor-pointer">
                <span class="">Pricing</span>
            </NuxtLink>
        </li>
        <li class="relative"
        @mouseleave="showDropdownIntegrations = false"
        >
                <div 
                class="group cursor-pointer"
                 @mouseover="showDropdownIntegrations = true" 
                  
                >
                  <span class="mr-[1px]">Integrations</span>
                    <NuxtImg
                    src="/icons/vector.svg"
                    class="inline xl:w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px] md:w-[7px] md:h-[5px] ml-1"
                    />
                </div>
                <ul 
                :class="{
                  'opacity-100 translate-y-0 scale-100': showDropdownIntegrations,
                  'opacity-0 translate-y-2 scale-95': !showDropdownIntegrations
              }"  
                class="absolute w-[150px] bg-purple-500/100 p-4 rounded-l transform transition-all duration-300 ease-in-out">
                  <li class="mb-3">Pricing</li>
                  <li class="mb-3">Benifits</li>
                  <li class="mb-3">Features</li>
                  <li class="mb-3">Product Demo</li>
                  <li class="mb-3">Visual Builder</li>
                  <li class="mb-3 leading-[18px]">Dynamic Responses</li>
                  <li class="mb-3 leading-[18px]">Artificial Inteligence</li>
                  <li class="mb-3">Analystics</li>
                </ul>
            
        </li>
        <li class="relative"
        @mouseleave="showDropdownResources = false"
        >
                <div 
                class="group cursor-pointer"
                 @mouseover="showDropdownResources = true" 
                  
                >
                  <span class="mr-[1px]">Resources</span>
                    <NuxtImg
                    src="/icons/vector.svg"
                    class="inline xl:w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px] md:w-[7px] md:h-[5px] ml-1"
                    />
                </div>
                <ul 
                :class="{
                  'opacity-100 translate-y-0 scale-100': showDropdownResources,
                  'opacity-0 translate-y-2 scale-95': !showDropdownResources
              }"  
                class="absolute w-[150px] bg-purple-500/100 p-4 rounded-l transform transition-all duration-300 ease-in-out">
                  <li class="mb-3">Pricing</li>
                  <li class="mb-3">Benifits</li>
                  <li class="mb-3">Features</li>
                  <li class="mb-3">Product Demo</li>
                  <li class="mb-3">Visual Builder</li>
                  <li class="mb-3 leading-[18px]">Dynamic Responses</li>
                  <li class="mb-3 leading-[18px]">Artificial Inteligence</li>
                  <li class="mb-3">Analystics</li>
                </ul>
            
        </li>
      </ul>
      <div class="hidden md:flex space-x-[5px]">
        <button style="border-radius: 3.91px;" class="xl:w-[142.93px] xl:h-[34px] lg:w-[130px] text-[12.51px] lg:h-[30px] px-3 md:w-[120px] md:h-[25px] md:text-[12px] bg-signblack text-white">sign up for free</button>
        <button style="border-radius: 3.91px;" class="xl:w-[81.93px] xl:h-[34px] lg:h-[30px] lg:w-[81.93px] md:h-[25px] md:text-[12px] md:w-[60px] bg-white text-[12.51px]">log in</button>
      </div>
      <div class="lg:hidden">
          <NuxtImg 
            src="/icons/menu.svg"
            class="w-[33.5px] h-[16.54px] cursor-pointer"
            @click="toggleNavbar"
          />
      </div>
      <div
      id="menu"
      class="xl:hidden fixed right-0 top-0 md:right-0 h-screen w-[200px] bg-primary md:w-[350px] transform transition-transform duration-500 ease-in-out"
      :class="isNavbarOpen ? 'translate-x-0' : 'translate-x-full'"
    >
    <button @click="toggleNavbar" class="text-white p-2">Close</button>
    <ul class="text-white font-normal ml-[7px]">
  <!-- Product Dropdown -->
  <li class="mb-[8px]">
    <NuxtLink class="cursor-pointer" @click="showSliderProduct = !showSliderProduct">
      <span class="mr-[1px]">Product</span>
      <NuxtImg 
        src="/icons/vector.svg"
        class="inline xl:w-[9px] h-[5px] w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px]"
      />
    </NuxtLink>
    <transition name="slide-down">
      <ul
        v-show="showSliderProduct"
        class="w-[150px] bg-purple-500 p-4 rounded-l"
      >
        <li class="mb-3">Pricing</li>
        <li class="mb-3">Benefits</li>
        <li class="mb-3">Features</li>
        <li class="mb-3">Product Demo</li>
        <li class="mb-3">Visual Builder</li>
        <li class="mb-3 leading-[18px]">Dynamic Responses</li>
        <li class="mb-3 leading-[18px]">Artificial Intelligence</li>
        <li class="mb-3">Analytics</li>
      </ul>
    </transition>
  </li>

  <!-- Pricing -->
  <li class="mb-[8px]">
    <NuxtLink class="cursor-pointer">
      <span class="mr-[1px]">Pricing</span>
    </NuxtLink>
  </li>

  <!-- Integrations -->
  <li class="mb-[8px]">
    <NuxtLink class="cursor-pointer">
      <span class="mr-[1px]">Integrations</span>
      <NuxtImg 
        src="/icons/vector.svg"
        class="inline xl:w-[9px] h-[5px] w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px]"
      />
    </NuxtLink>
  </li>

  <!-- Resources -->
  <li class="mb-[8px]">
    <NuxtLink class="cursor-pointer">
      <span class="mr-[1px]">Resources</span>
      <NuxtImg 
        src="/icons/vector.svg"
        class="inline xl:w-[9px] h-[5px] w-[9px] xl:h-[5px] lg:w-[7px] lg:h-[4px]"
      />
    </NuxtLink>
  </li>
</ul> 
    </div>
    </div>
  </div>
    
  </template>

  <script setup>
  import { ref } from 'vue';
  const isNavbarOpen = ref(false)
  const showDropdownProduct = ref(false);
  const showDropdownIntegrations = ref(false);
  const showDropdownResources = ref(false);

  const showSliderProduct = ref(false)


  const toggleNavbar = ()=>{
    console.log("salam")
    isNavbarOpen.value = !isNavbarOpen.value
    console.log(isNavbarOpen.value)
  }
</script>




