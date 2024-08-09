"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Autoplay, Zoom, Navigation } from 'swiper/modules';
import Image from 'next/image'
import SoumyaRanjan from '../../public/assets/images/SoumyaRanjan.webp'
import RahulSingh from '../../public/assets/images/RahulSingh.webp'
import AitrikBanerjee from '../../public/assets/images/AitrikBanerjee.webp'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export const StudentTetimonials = () => {
    const TestimonialsData = [
        {
            id: 1,
            Name: 'Soumya Ranjan Patra',
            src: SoumyaRanjan
        },
        {
            id: 2,
            Name: 'Rahul Singh',
            src: RahulSingh
        },
        {
            id: 3,
            Name: 'Aitrik Banerjee',
            src: AitrikBanerjee
        },
        {
            id: 4,
            Name: 'Rahul Singh',
            src: RahulSingh
        },

    ]
    const breakpoints = {

        300: {
            slidesPerView: 1,
            spaceBetween: 60
        },

        370: {
            slidesPerView: 1,
            spaceBetween: 60
        },


        480: {
            slidesPerView: 1,
            spaceBetween: 60
        },


        640: {
            slidesPerView: 2,
            spaceBetween: 60
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 60
        },


    };
    return (
        <div id='testimonials' className='w-full  max-w-[1380px] mx-auto flex flex-col items-center pt-5 md:pt-10 px-5 md:px-10'>
            <div className="flex flex-row items-start justify-center gap-x-2 text-[#2251FF] text-3xl lg:leading-10 lg:text-5xl  font-bold ">
                <div><span className="text-[#E87D1A]">S</span>tudents</div>
                <div className=" text-[#042A76] text-3xl lg:leading-10 lg:text-5xl  font-bold  ">
                    Testimonials
                    <span> <svg className='w-[176px] md:w-[261px]' xmlns="http://www.w3.org/2000/svg" width="261" height="9" viewBox="0 0 261 9" fill="none">
                        <path d="M0.905273 7.30273C72.2649 -0.374194 171.045 -1.01398 260.905 7.30273" stroke="#E87D1A" stroke-width="2.24694" />
                    </svg></span>
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-3 lg:gap-[30px] pt-10 md:pt-14'>

                <button className="swiper-button-prev-custom-course bg-white drop-shadow-md  border rounded-full flex justify-center items-center p-2 lg:p-3 cursor-pointer ">
                    <ChevronLeft className='text-[#2251FF] ' />
                </button>

                <Swiper
                    zoom={true}
                    //   centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={breakpoints}
                    navigation={{
                        nextEl: '.swiper-button-next-custom-course',
                        prevEl: '.swiper-button-prev-custom-course',
                    }}
                    grabCursor={true}
                    modules={[Autoplay, Zoom, Navigation]}
                    className="mySwiper w-full  flex  items-center justify-center   mx-auto"
                >
                    {
                        TestimonialsData.map((data) => (
                            <SwiperSlide key={data.key} className='swiper-zoom-container'>
                                <div className='flex flex-col items-center justify-center w-[250px] h-[350px] lg:w-[350px] lg:h-[400px] rounded-md overflow-hidden relative'>
                                    <Image
                                        className="w-full  h-full object-cover object-center "
                                        width={500}
                                        height={500}
                                        src={data?.src}
                                        alt="student Img" />
                                    <div className='absolute bottom-5 lg:bottom-[30px] left-2 lg:left-[20px] flex flex-col gap-[5px] lg:gap-[10px] text-[14px] lg:text-[20px] text-start font-[400] text-[#fff] z-[21]'>
                                        <div>
                                            {data?.Name}
                                        </div>
                                        <div className='h-[1px] lg:h-[2px] bg-white'>

                                        </div>
                                        <div>
                                            “Thanks to EME Academy”
                                        </div>
                                    </div>

                                    <div className="w-full  h-full object-cover object-center bg-black/40 absolute z-[20]">

                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }

                </Swiper>

                <button className="swiper-button-next-custom-course bg-white drop-shadow-md  rounded-full flex justify-center items-center p-2 lg:p-3 cursor-pointer group hover:drop-shadow-lg border">
                    <ChevronRight className='text-[#2251FF] ' />
                </button>


            </div>
        </div>
    )
}
