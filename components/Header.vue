<template>
    <div class="xl:ml-[79px] xl:pt-[174px] w-full font-Montserrat font-normal xl:pb-[70px] xl:mb-[30px]">
        <div class="flex xl:space-x-[10px]">
            <div class="xl:w-[672px]">
                <h1 class="xl:w-full xl:h-[216px] xl:text-[60px] xl:leading-[72px] text-[31px] leading-[41.85px] text-headerColor">
                    Enjoy exceptional customer experience
                    with <span class="text-primary">ZIPNIP</span> 
                </h1>
                <p class="xl:w-[639px] xl:h-[75px] text-textgray w-[350px] h-[60px] font-light text-[14px] leading-[15.4px] xl:ml-[2px] xl:font-normal xl:text-[18px] xl:leading-[24.75px] xl:mt-[35px] mt-[30px]">
                    Our tool will increase the number of repeat sales and provide intelligent analytics on how the users are responding various products and services offered by the business.
                </p>
                <p class="hidden xl:block xl:w-[97px] xl:h-[16px] xl:ml-[2px] xl:text-[11.52px] xl:mt-[35px] xl:mb-[24px] xl:text-startedColor">getting started ?</p>
            </div>
            <div class="xl:w-[524.05px] xl:h-[429.16px]">
                    <div 
                        v-if="imageLoading" 
                        class="w-full h-full bg-gray-200 animate-pulse rounded-lg"
                    ></div>
                    <NuxtImg
                    v-show="!imageLoading"
                    class="w-full"
                    src="/img/heroImg.png"
                    @load="onImageLoad"
                    />
            </div>
        </div>
        <NuxtLink style="border-radius: 5px;"
            class="xl:w-[615px] w-[349px] text-white h-[54px] px-[113px] py-[18px] xl:h-[54px] xl:px-[246px] xl:py-[18px] bg-primary cursor-pointer">
                <span class="font-normal text-[16px]">sign up for free</span>
        </NuxtLink>
        
    </div>
</template>


<script setup>
    import { ref } from 'vue';
    const imageLoading = ref(true)
    const onImageLoad = ()=>{
        imageLoading.value = false
    }
</script>


