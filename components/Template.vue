<template>
    <div class="xl:w-full md:w-full font-Montserrat">
        <div class="xl:w-[95%] md:w-[95%] sm:w-[95%] w-[90%] mx-auto text-center pt-[30px] md:mx-auto md:text-center md:pt-[20px] xl:mx-auto xl:text-center xl:pt-[30px]">
        <div class="xl:w-[60%] md:w-[60%] w-[90%] mx-auto md:mx-auto xl:mx-auto">
            <h3 class="xl:font-bold font-normal text-[25px] md:font-bold md:text-[30px] xl:text-[48px]">Get Started with templates</h3>
            <p class="xl:font-normal font-light leading-[17.6px] text-[16px] md:font-normal md:text-[15px] xl:text-[24px] xl:leading-[35.16px]">Build your first AI chatbots with ready-to-use templates. Customize them to fit your business needs, and bring your chatbots to life within minutes.</p>
        </div>
        <div class="xl:mt-[40px] mt-[20px] md:mt-[30px]">
            <div class="xl:flex md:flex flex md:justify-center justify-center justify-between md:justify-between xl:justify-center xl:justify-between">
                <img src="~/assets/icons/gauch.svg" @click="swiper.prev()" />
            <ClientOnly>
                        

                <swiper-container ref="containerRef" :breakpoints="swiperBreakpoints" class="md:w-[90%] sm:w-[85%] xl:w-[90%] lg:w-[90%] w-[77%]">
                        <swiper-slide
                            v-for="(slide, idx) in slides"
                            :key="idx"
                            class="xl:py-[30px] lg:py-[20px]"
                        >
                            <div class="flex flex-col items-center justify-around sm:px-[5px] xl:px-[5px] md:px-[5px] border-[1px] rounded-md border-primary xl:min-h-[350px] lg:min-h-[300px] min-h-[318px] md:min-h-[300px] pb-3 sm:min-h-[250px] sm:mb-3 xl:pb-4 md:pb-3">
                                <!-- Image Section -->
                    
                                <div class="flex flex-col items-center flex-grow justify-center md:space-y-[10px]">
                                    <!-- Image Section -->
                                    <div class="xl:aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] aspect-[4/3] sm:max-w-[70px] w-full max-w-[100px] max-w-[94px] md:max-w-[90px] xl:mb-[10px]">
                                    <img :src="slide.img" class="w-full h-full object-contain" />
                                    </div>
                                    <!-- Title -->
                                    <h3 class="xl:font-bold sm:w-[50%] sm:font-bold sm:text-[18px] xl:w-[50%] md:w-[50%] w-[50%] font-bold text-[23.38px] leading-[31.94px] md:font-bold md:text-[20px] xl:leading-[34.13px] lg:text-[20px] xl:text-[25px] text-center">
                                    {{ slide.title }}
                                    </h3>
                                </div>
                                
                                <!-- Button -->
                                <button class="md:px-[70px] rounded-button-custom sm:px-[40px] sm:text-[12px] py-[9.35px] px-[70.15px] whitespace-nowrap xl:px-[75px] xl:py-[10px] xl:text-[16px] xl:leading-[17.6px] py-[9.35px] bg-primary text-white font-normal text-[14.96px] leading-[16.46px]">
                                    more details
                                </button>
                             </div>
                    </swiper-slide>
                    
                        </swiper-container>
                        
                     </ClientOnly>
                    <img src="~/assets/icons/droit.svg" @click="swiper.next()" />
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import free4 from "@/assets/icons/free4.svg";
import free3 from "@/assets/icons/free3.svg";
import free2 from "@/assets/icons/free2.svg";
import free1 from "@/assets/icons/free1.svg";
import { ref } from 'vue'
    const containerRef = ref(null)

const swiper = useSwiper(containerRef)
const slides = ref([
    { title: "Call Scheduling Template", img: free4 },
    { title: "Sales Template", img: free3 },
    { title: "Customer Satisfaction Template", img: free2 },
    { title: "FAQ Template", img: free1 },
    { title: "Call Scheduling Template", img: free4 },
    { title: "Call Scheduling Template", img: free3 },
]);
    const swiperBreakpoints = ref({
    1536: { slidesPerView: 4, spaceBetween: 20 },
    1280: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    600: { slidesPerView: 3, spaceBetween: 10 },
    0: { slidesPerView: 1, spaceBetween: 0 },
});
</script>





