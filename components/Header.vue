<template>
    <div class="w-full">
    <div class="w-[90%] md:text-center pb-[70px] lg:text-left sm:text-center sm:pb-[40px] xl:text-left mx-auto pt-[50px] md:pb-[40px] font-Montserrat font-normal xl:pb-[40px]">
        <div class="xl:flex lg:flex lg:mt-[40px] xl:mt-[60px] lg:justify-between xl:justify-between mx-auto">
            <div class="w-full lg:w-[600px] xl:w-[60%] mb-[20px]">
                <h1 class="xl:w-full lg:w-full lg:text-[40px] xl:h-[216px] xl:text-[60px] md:text-[50px] md:leading-[60px] xl:leading-[72px] sm:text-[40px] sm:leading-[50px] text-[31px] leading-[41.85px] text-headerColor">
                    Enjoy exceptional customer experience
                    with <span class="text-primary">ZIPNIP</span> 
                </h1>
                <p class="xl:w-[639px] md:text-[18px] lg:text-[16px] lg:font-semibold sm:text-[16px] sm:leading-[20px] sm:font-light lg:leading-[25px] md:leading-[22px] xl:h-[75px] text-textgray md:font-semibold font-light text-[14px] leading-[15.4px] xl:ml-[2px] xl:font-normal xl:text-[18px] xl:leading-[24.75px] xl:mt-[35px] mt-[30px]">
                    Our tool will increase the number of repeat sales and provide intelligent analytics on how the users are responding various products and services offered by the business.
                </p>
                <p class="hidden lg:block xl:w-[97px] xl:h-[16px] lg:ml-[2px] xl:text-[11.52px] lg:mt-[30px] lg:mb-[20px] xl:mt-[35px] xl:mb-[24px] lg:text-startedColor">getting started ?</p>
                <NuxtLink style="border-radius: 5px;"
                class="hidden lg:block xl:w-[615px] w-[349px] text-white h-[54px] px-[113px] py-[18px] xl:h-[54px] xl:px-[246px] xl:py-[18px] bg-primary cursor-pointer">
                    <span class="font-normal text-[16px]">sign up for free</span>
                </NuxtLink>
            </div>
            <div class="xl:w-[524.05px] lg:self-end sm:mx-auto sm:w-[600px] xl:h-[429.16px] pb-[40px]">
                    <div 
                        v-if="imageLoading"
                        class="sm:w-full sm:h-full bg-gray-200 animate-pulse rounded-lg"
                    ></div>
                    <img
                    v-show="!imageLoading"
                    class="w-full"
                    src="~/assets/img/heroImg.png"
                    @load="onImageLoad"
                    />
            </div>
            
        </div>
        <NuxtLink style="border-radius: 5px;"
            class="lg:hidden xl:w-[615px] w-[349px] text-white h-[54px] px-[113px] py-[18px] xl:h-[54px] xl:px-[246px] xl:py-[18px] bg-primary cursor-pointer">
                <span class="font-normal text-[16px]">sign up for free</span>
            </NuxtLink>
        
    </div>
</div>
</template>


<script setup>
    import { ref } from 'vue';
    const imageLoading = ref(true)
    const onImageLoad = ()=>{
        imageLoading.value = false
    }
</script>


