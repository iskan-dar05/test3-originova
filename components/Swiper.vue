<template>
    <div class="w-full overflow-hidden lg:flex lg:items-center font-Montserrat bg-primary py-[60px] xl:py-[60px]">
        <div class="lg:w-[90%] mx-auto lg:text-left lg:rounded-custom-small lg:py-[40px] xl:py-[70px] bg-white">
            <div class="lg:w-full w-[95%] md:w-[75%] sm:w-[70%] mx-auto text-center lg:text-left">
            <div class="lg:w-[75%] md:w-[75%] w-[90%] mx-auto lg:mx-0 lg:pl-[70px] pt-[20px] xl:pl-[85px]">
                <h2 class="w-full text-[18px] sm:text-[22px] sm:font-semibold leading-[24.48px] lg:text-[25px] md:text-[22px] md:font-semibold lg:font-semibold text-textgray font-normal xl:font-semibold xl:text-[31px] xl:leading-[38.13px]">Open a direct channel of engagement with customers, across sales, marketing, and support</h2>
            </div>
            <div class="xl:mt-[60px] mt-[61px] lg:pl-[70px] xl:pl-[85px]">
                <nav class="lg:w-[70%] xl:h-[31px] hidden lg:block mx-auto lg:mx-0 lg:flex lg:justify-start">
                    <ul class="flex space-x-[20px]">
                        <li
                            v-for="(slide, idx) in slides"
                            :key="idx"
                            @click="goToSlide(idx)"
                            :class="{'border-b-[3px] border-primary xl:pb-[3px]': activeSlide === idx}"                         
                        >
                            <button>{{ slide }}</button>
                        </li>
                    </ul>
                </nav>
                <div class="lg:hidden w-full">
                    <ClientOnly>
                        <swiper-container :slides-per-view="4" ref="containerRef2" class="w-full mb-[40px]">
                        <swiper-slide
                            v-for="(slide, idx) in slides"
                            :key="idx"
                            :class="{'font-bold': activeSlide === idx}"                         
                
                            class="text-[12.67px] sm:text-[15px] md:text-[15px] leading-[17.42px] mx-auto"
                        >
                        <button @click="goToSlide2(idx)">{{ slide }}</button>
                    </swiper-slide>
                        </swiper-container>
                     </ClientOnly>

                     
                </div>

                <div class="lg:flex items-center xl:space-x-[100px] w-full">
                    
                    <div class="lg:w-[45%] flex flex-col justify-center">
                    <div class="flex w-full items-center lg:justify-start xl:space-x-0 justify-center space-x-[10px]">
                        <img
                            src="~/assets/icons/left.svg"
                            alt="Left Icon"
                            class="w-[24px] h-[24px] xl:w-[40px] lg:hidden"
                            @click="swiper.prev()"
                        />  
                    <ClientOnly>
                        
                        <swiper-container ref="containerRef" class="w-[80%] lg:w-full">
                        
                        <swiper-slide
                            v-for="(slide, idx) in slides"
                            :key="idx"
                            class="lg:flex mt-[20px] xl:pb-[50px] w-full"
                        >
                      
                        <div>
                            
                            <div class="xl:w-[305px] m-auto lg:m-0 h-[46px] xl:h-[80px] xl:mt-[15px] lg:text-start text-center w-[230px] font-semibold text-textgray">
                                <h1 class="w-full xl:text-[31px] text-[18px] leading-[23.4px] h-[46px] xl:leading-[40.3px]">Connect with your 
                                    customers easily.
                                </h1>
                            </div>
                            <p class="lg:w-[100%] w-[304px] h-[105px] mx-auto lg:m-0 text-[14px] text-textgray leading-[20.51px] font-light xl:h-[104px] mt-[25px] xl:text-[18px] xl:leading-[26.37px] lg:mt-[40px] xl:font-normal xl:mt-[50px]">Reach your customers wherever they are, no plug-ins required. Give your agents a truly channel agnostic platform: one screen with voice, email, social media, and messaging.</p>
                           
                            <button style="border-radius: 6px"
                                class="flex justify-center items-center whitespace-nowrap gap-2  mt-[30px] py-[14px] px-[90px] mx-auto lg:m-0 text-[12.51px] leading-[13.77px] xl:mt-[20px] border-[0.78px] lg:px-[23.24px] lg:py-[14px] bg-primary text-white xl:text-[12.51px] xl:leading-[13.77px]">
                                    learn more <img src="~/assets/icons/arrow.svg" class="w-[12px]" />
                            </button>
                        </div>
                       

                        
                    </swiper-slide>
                    
                        </swiper-container>
                        
                     </ClientOnly>
                     <img
                            src="~/assets/icons/right.svg"
                            alt="Right Icon"
                            class="w-[24px] h-[24px] xl:w-[40px] lg:hidden"
                            @click="swiper.next()"
                        />
                    </div>
                  
                    </div>
                    <div class="xl:w-[357.48px] mt-[20px] xl:mt-0 mx-auto w-[266.25px] h-[257.85px] xl:h-[337px]">
                            <img
                                src="~/assets/img/slideimg.png"
                                class="xl:w-[357.48px] xl:h-[337px] w-[266.25px] h-[257.85px]"
                            />
                     </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
       
    </div>
    
</template>


<script setup>
import { ref, onMounted } from 'vue'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const containerRef = ref(null)
const containerRef2 = ref(null)

const swiper = useSwiper(containerRef)
const swiper2 = useSwiper(containerRef)

const activeSlide = ref(0)

const slides = ref([
  "Connectivity",
  "Animation",
  "Chatbot",
  "Integrations",
  "Marketing",
  "Message",
  "QA",
])


const goToSlide = (index) => {
    swiper.to(index)
    // console.log(swiper)
    activeSlide.value = index
}

const goToSlide2 = (index) => {
    swiper2.to(index)
    // console.log(swiper)
    activeSlide.value = index
}

onMounted(() => {
  console.log(swiper.instance)
})


</script>






