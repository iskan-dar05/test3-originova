<template>
    <div class="w-full xl:flex md:flex block font-Montserrat">
        <img src="~/assets/img/person.png"
        class="xl:w-[50%] md:w-[50%] w-full"
        />
        <div class="xl:w-[50%] md:w-[50%] pb-[30px] xl:pb-0 md:pb-0 flex flex-col bg-primary xl:flex md:flex xl:flex-col md:flex-col justify-center items-center">
            <ClientOnly>
                        
                        <swiper-container ref="containerRef" class="xl:w-[75%] sm:w-[70%] w-[88%] pt-[60px] md:w-[75%] md:pt-[15px] xl:pt-[20%]">
                        
                        <swiper-slide
                            v-for="(slide, idx) in slides"
                            :key="idx"
                            class="xl:pb-[50px] md:pb-[30px] pb-[40px] w-full"
                        >
                        <div class="xl:text-start text-start sm:leading-[28px] leading-[23.44px] font-normal mb-[10px] md:text-start md:font-normal xl:font-normal xl:leading-[35.16px] md:mb-[15px] text-white xl:mb-[20px]">
                      
                            <p class="xl:text-[24px] sm:text-[18px] text-[16px] md:text-[16px]">{{ slide.text  }}</p>
                        </div>
                            <h3 class="text-white hidden md:block xl:font-semibold md:font-semibold xl:text-[21.3px] xl:leading-[31.2px]">{{ slide.name }}</h3>
                            <span class="xl:leading-[23.4px] hidden md:block xl:text-[15.97px] font-light text-white">{{ slide.subtext }}</span>
                        
                    </swiper-slide>
                    
                        </swiper-container>
                        
                     </ClientOnly>
            <div class="xl:flex md:flex md:w-[75%] w-[88%] flex justify-between md:justify-between xl:justify-between xl:w-[75%]">
                <img
                    src="~/assets/icons/east.svg"
                    @click="swiper.prev()"
                    class="cursor-pointer"
                />
                <img
                    src="~/assets/icons/west.svg"
                    @click="swiper.next()"
                    class="cursor-pointer"
                />
            </div>

        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const containerRef = ref(null)

const swiper = useSwiper(containerRef)

const slides = ref([
    {
        text: 'The ChatBot platform has become a key part of our proposition. It\'s fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.',
        name: "Joe Bush",
        subtext: "Co-founder of The Reel"
    },
    {
        text: 'The ChatBot platform has become a key part of our proposition. It\'s fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.',
        name: "Joe Bush",
        subtext: "Co-founder of The Reel"
    },
    {
        text: 'The ChatBot platform has become a key part of our proposition. It\'s fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.',
        name: "Joe Bush",
        subtext: "Co-founder of The Reel"
    },
    {
        text: 'The ChatBot platform has become a key part of our proposition. It\'s fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.',
        name: "Joe Bush",
        subtext: "Co-founder of The Reel"
    },
    {
        text: 'The ChatBot platform has become a key part of our proposition. It\'s fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.',
        name: "Joe Bush",
        subtext: "Co-founder of The Reel"
    },
])

</script>









