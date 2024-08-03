"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Autoplay, Zoom, Navigation, Keyboard } from 'swiper/modules';
import StarNew from '../../public/assets/images/StarNew.svg'
import Star from '../../public/assets/images/Star.svg'
import SUTAPASARKAR from '../../public/assets/images/SUTAPASARKAR.jpg'
import GrandHyattGoa from '../../public/assets/images/GrandHyattGoa.png'
import NASIRHASSAN from '../../public/assets/images/NASIRHASSAN.jpg'
import SOMNATHPATRA from '../../public/assets/images/SOMNATHPATRA.jpg'
import NURULHOSEN from '../../public/assets/images/NURULHOSEN.jpg'
import baker from '../../public/assets/images/baker.png'
import Image from 'next/image'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HMStudentTestimonials() {
    const breakpoints = {

        300: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        370: {
            slidesPerView: 1,
            spaceBetween: 40
        },


        480: {
            slidesPerView: 1,
            spaceBetween: 40
        },


        640: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        },


    };
    return (
        <div className='w-full   flex  items-start gap-[40px]  '>
            <div className="w-full flex flex-col gap-[20px]">


               
                  
                

                <div className="w-full  flex items-center justify-center gap-x-5 py-[40px] overflow-hidden pt-[40px]">
                    <button className="swiper-button-next-custom bg-[#2251FF] p-4  flex justify-center items-center  rounded-full cursor-pointer">
                        <FaArrowLeftLong  className='text-white' />
                    </button>

                    <Swiper
                        // slidesPerView={3}

                        //   centeredSlides={true}

                        breakpoints={breakpoints}
                        grabCursor={true}
                        zoom={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}

                        navigation={{
                            nextEl: '.swiper-button-prev-custom',
                            prevEl: '.swiper-button-next-custom',
                        }}
                        modules={[Autoplay, Zoom, Navigation, Keyboard]}
                        className="mySwiper"
                    >



                        <SwiperSlide className='py-[20px] swiper-zoom-container'>
                            <div className="max-w-[350px] h-[500px] flex flex-col gap-[40px] items-start bg-[#F6F7F8] rounded-3xl shadow-lg px-[10px] py-[20px] cursor-grab border border-[#D0D0D0]">
                                <div className="w-full flex justify-between">
                                    <div className=' w-[60px] h-[60px] rounded-full overflow-hidden'>
                                        <Image
                                            width={500}
                                            height={500}
                                            className=' w-full h-full object-cover object-top'
                                            src={SUTAPASARKAR}
                                            alt="profile image" />
                                    </div>
                                    <div className='flex'>
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={Star}
                                            alt="" />
                                    </div>

                                </div>
                                <div className='flex flex-col min-h-[250px]  items-start'>
                                    <div className='text-[#0057E2] leading-[40px] text-[75px]  font-[400]'>“</div>
                                    <div className='text-[#191919]  text-[15px]  font-[400] leading-5 text-start'>
                                        Many thanks to EME Academy. Best college for hotel management. I got the same support as they said they would help me to get a job when I was admitted. Now I am currently working in the GRAND HYATT GOA AS A Hotel Receptionist.
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between '>
                                    <div className=' flex gap-[10px] justify-start'>
                                        <div className='w-[2px] h-[45px] bg-[#0f0f0f33]'></div>
                                        <div>
                                            <div className='text-[#000]  text-[17px] text-start font-[400] leading-6 '>
                                                Sunanda Sarkar
                                            </div>
                                            <div className='text-[#191919] text-start text-[12px]  font-[400] leading-5'>
                                                Hotel Receptionist

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={GrandHyattGoa} width={120} height={120} alt='company image' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='py-[20px] swiper-zoom-container'>
                            <div className="max-w-[350px] h-[500px] flex flex-col gap-[40px] items-start bg-[#F6F7F8] rounded-3xl shadow-lg px-[10px] py-[20px] cursor-grab border border-[#D0D0D0]">
                                <div className="w-full flex justify-between">
                                    <div className=' w-[60px] h-[60px] rounded-full overflow-hidden'>
                                        <Image
                                            width={500}
                                            height={500}
                                            className=' w-full h-full object-cover object-top'
                                            src={NASIRHASSAN}
                                            alt="profile image" />
                                    </div>
                                    <div className='flex'>
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={Star}
                                            alt="" />
                                    </div>

                                </div>
                                <div className='flex flex-col min-h-[250px]  items-start'>
                                    <div className='text-[#0057E2] leading-[40px] text-[75px]  font-[400]'>“</div>
                                    <div className='text-[#191919]  text-[15px]  font-[400] leading-5 text-start'>
                                        Love this institution very much.I got my education from here and it&apos;s really feels like my another family... really love it..
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between '>
                                    <div className=' flex gap-[10px] justify-start'>
                                        <div className='w-[2px] h-[45px] bg-[#0f0f0f33]'></div>
                                        <div>
                                            <div className='text-[#000]  text-[17px] text-start font-[400] leading-6 '>
                                                Nasir Hassan
                                            </div>
                                            <div className='text-[#191919] text-start text-[12px]  font-[400] leading-5'>
                                                Food and beverage manager
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={baker} width={80} height={80} alt='company image' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='py-[20px] swiper-zoom-container'>
                            <div className="max-w-[350px] h-[500px] flex flex-col gap-[40px] items-start bg-[#F6F7F8] rounded-3xl shadow-lg px-[10px] py-[20px] cursor-grab border border-[#D0D0D0]">
                                <div className="w-full flex justify-between">
                                    <div className=' w-[60px] h-[60px] rounded-full overflow-hidden'>
                                        <Image
                                            width={500}
                                            height={500}
                                            className=' w-full h-full object-cover object-top'
                                            src={SOMNATHPATRA}
                                            alt="profile image" />
                                    </div>
                                    <div className='flex'>
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={Star}
                                            alt="" />
                                    </div>

                                </div>
                                <div className='flex flex-col min-h-[250px]  items-start'>
                                    <div className='text-[#0057E2] leading-[40px] text-[75px]  font-[400]'>“</div>
                                    <div className='text-[#191919]  text-[15px]  font-[400] leading-5 text-start'>
                                        Love this institution very much.I got my education from here and it&apos;s really feels like my another family... really love it..
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between '>
                                    <div className=' flex gap-[10px] justify-start'>
                                        <div className='w-[2px] h-[45px] bg-[#0f0f0f33]'></div>
                                        <div>
                                            <div className='text-[#000]  text-[17px] text-start font-[400] leading-6 '>
                                                Somnath Patra
                                            </div>
                                            <div className='text-[#191919] text-start text-[12px]  font-[400] leading-5'>
                                                Hotel Receptionist
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={GrandHyattGoa} width={120} height={120} alt='company image' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='py-[20px] swiper-zoom-container'>
                            <div className="max-w-[350px] h-[500px] flex flex-col gap-[40px] items-start bg-[#F6F7F8] rounded-3xl shadow-lg px-[10px] py-[20px] cursor-grab border border-[#D0D0D0]">
                                <div className="w-full flex justify-between">
                                    <div className=' w-[60px] h-[60px] rounded-full overflow-hidden'>
                                        <Image
                                            width={500}
                                            height={500}
                                            className=' w-full h-full object-cover object-top'
                                            src={NURULHOSEN}
                                            alt="profile image" />
                                    </div>
                                    <div className='flex'>
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={StarNew}
                                            alt="" />
                                        <Image
                                            className=" w-[20px] h-[20px] "
                                            width={400}
                                            height={300}
                                            src={Star}
                                            alt="" />
                                    </div>

                                </div>
                                <div className='flex flex-col min-h-[250px]  items-start'>
                                    <div className='text-[#0057E2] leading-[40px] text-[75px]  font-[400]'>“</div>
                                    <div className='text-[#191919]  text-[15px]  font-[400] leading-5 text-start'>
                                        Love this institution very much.I got my education from here and it&apos;s really feels like my another family... really love it..
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between '>
                                    <div className=' flex gap-[10px] justify-start'>
                                        <div className='w-[2px] h-[45px] bg-[#0f0f0f33]'></div>
                                        <div>
                                            <div className='text-[#000]  text-[17px] text-start font-[400] leading-6 '>
                                                Nurul Hosen Laskar
                                            </div>
                                            <div className='text-[#191919] text-start text-[12px]  font-[400] leading-5'>
                                                Food and beverage manager
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={baker} width={80} height={80} alt='company image' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>


                    <button className="swiper-button-prev-custom bg-[#2251FF] rounded-full flex justify-center items-center p-4 cursor-pointer">
                        <FaArrowRightLong className='text-white' />
                    </button>




                </div>
            </div>
        </div>
    )
}
