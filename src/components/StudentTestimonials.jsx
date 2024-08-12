"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Autoplay, Zoom, Navigation } from 'swiper/modules';
import Image from 'next/image'
import SUTAPASARKAR from '../../public/assets/images/SUTAPASARKAR.png'
import NASIRHASSAN from '../../public/assets/images/NASIRHASSAN.png'
import SOMNATHPATRA from '../../public/assets/images/SOMNATHPATRA.png'
import NURULHOSEN from '../../public/assets/images/NURULHOSEN.png'
import RABIUSSAINI from '../../public/assets/images/RABIUSSAINI.png'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export const StudentTetimonials = () => {
    const TestimonialsData = [
        {
            id: 1,
            Name: 'Sutapa Sarkar',
            decs: '“EME Academy helped me become a Hotel Receptionist at Grand Hyatt Goa, fulfilling their job support promise.”',
            src: SUTAPASARKAR
        },
        {
            id: 2,
            Name: 'Nasir Hassan',
            decs: '“The hands-on experience at EME Academy was invaluable. I’m now excelling in my hotel management role.”',
            src: NASIRHASSAN
        },
        {
            id: 3,
            Name: 'Rabius Saini',
            decs: '“EME Academy’s course gave me the tools and support to succeed in the competitive hospitality industry.”',
            src: RABIUSSAINI
        },
        {
            id: 4,
            Name: 'Nurul Hosen',
            decs: "“Thanks to EME Academy, I'm confident and prepared for the challenges of the hotel industry.”",
            src: NURULHOSEN
        },
        {
            id: 5,
            Name: 'Somnath Patra',
            decs: "“EME Academy's hotel management course opened doors for me.Now, I'm successfully building my hospitality career.”",
            src: SOMNATHPATRA
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
                                    <div className='absolute bottom-3 lg:bottom-4  pr-2 left-2 flex flex-col gap-[5px] lg:gap-[10px] text-sm lg:text-lg text-start font-normal text-[#fff] z-[21]'>
                                        <div>
                                            {data?.Name}
                                        </div>
                                        <div className='h-[1px] lg:h-[2px] bg-white'>

                                        </div>
                                        <div className='text-xs lg:text-sm'>
                                            {data.decs}
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
