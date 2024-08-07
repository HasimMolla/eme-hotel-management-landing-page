"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Autoplay, Zoom, Navigation } from 'swiper/modules';
import Image from 'next/image'
import advisorOne from '../../public/assets/images/advisorOne.webp'
import MemberOne from '../../public/assets/images/masterFacultyTwo.png'
import advisorTwo from '../../public/assets/images/advisorTwo.webp'
import advisorThree from '../../public/assets/images/advisorThreeNew.webp'
import advisorFour from '../../public/assets/images/advisorFour.png'
import advisorSix from '../../public/assets/images/advisorSix.png'
import advisorNine from '../../public/assets/images/advisorNine.webp'
import advisorEight from '../../public/assets/images/advisorEight.webp'
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export const BoardofAdvisor = () => {
    const facultyMember = [
        {
            id: 1,
            img: advisorFour,
            Name: "Dipankar Das",
            position: 'Co-founder & Partner at Haven Consultants Pvt. Ltd',
        },
        {
            id: 2,
            img: MemberOne,
            Name: "Saikat Maitra",
            position: "Former Honble Vice Chancellor of MAKAUT, W.B."
        },

        {
            id: 4,
            img: advisorTwo,
            Name: "Prodip Mukhopadhyay",
            position: 'Former Managing Director Webel & Sr. Advisor - MAKAUT',
        },
        {
            id: 6,
            img: advisorSix,
            Name: "Imran Khan",
            position: 'CEO of CROX',
        },
        {
            id: 7,
            img: advisorThree,
            Name: "Subhasis Maity",
            position: 'Director of NSHM Knowledge Campus',
        },
        {
            id: 8,
            img: advisorNine,
            Name: "Noor Alam",
            position: 'MD & CEO of Startup Pedia',
        },
        {
            id: 9,
            img: advisorEight,
            Name: "Faizan Khan",
            position: 'MD & CEO of Onqanet Group of Companies',
        },
        {
            id: 10,
            img: advisorOne,
            Name: "Suranjan Dasgupta",
            position: 'Former Secretary of the Kolkata High Court Bar Association',
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
        <div id='advisors' className='w-full  max-w-[1380px] mx-auto flex flex-col items-center pt-10 px-[10px] md:px-10'>
            <div className="flex flex-row items-center justify-center gap-x-2 text-[#2251FF] text-3xl leading-10 lg:leading-10 lg:text-5xl  font-bold ">
                <div>Meet Our</div>
                <div className=" text-[#042A76] lg:leading-10 lg:text-5xl  font-bold ">
                    <span className="text-[#E87D1A]">B</span>oard of Advisors
                    <span>
                        <svg className='w-[164px] md:w-[369px]' xmlns="http://www.w3.org/2000/svg" width="369" height="9" viewBox="0 0 369 9" fill="none">
                            <path d="M1 7.80176C101.727 0.12483 241.159 -0.514953 368 7.80176" stroke="#E87D1A" stroke-width="2.24694" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='w-full flex  justify-center items-center mx-auto pt-10 gap-x-5  md:py-14'>
                <button className="swiper-button-next-custom bg-white drop-shadow-md  border rounded-full flex justify-center items-center p-2 lg:p-3 cursor-pointer group hover:drop-shadow-lg">
                    <ChevronLeft className='text-[#2251FF] ' />
                </button>
                <Swiper
                    zoom={true}
                    //   centeredSlides={true}
                    breakpoints={breakpoints}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-prev-custom',
                        prevEl: '.swiper-button-next-custom',
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Zoom, Navigation]}
                    className="mySwiper w-full  flex  items-center justify-center   mx-auto"
                >
                    {
                        facultyMember.map((member) => (
                            <SwiperSlide key={member.id} className='swiper-zoom-container'>
                                <div className='w-[280px] h-[350px] lg:w-[300px]  lg:h-[400px] bg-white border border-[#DCDCDC] rounded-xl relative flex flex-col justify-start items-center py-3 lg:py-5 gap-y-4'>
                                    <div className='w-[220px] h-[200px] lg:w-[260px]  lg:h-[250px] bg-white  '>
                                        <Image
                                            className="w-full  h-full object-cover object-right-top  "
                                            width={400}
                                            height={400}
                                            src={member.img}
                                            alt="student Img" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 items-center'>
                                        <div className='text-lg font-[700]  text-[#282828] '>
                                            {member.Name}
                                        </div>
                                        <div className='text-xs leading-3 font-[400]  text-[#232D63]  px-2'>
                                            {member.position}
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items-center gap-x-4 '>
                                        <div className='bg-[#0057e2] p-2 rounded-full'>
                                            <FaXTwitter  className='text-white'/>
                                        </div>
                                        <div className='bg-[#0057e2] p-2 rounded-full'>
                                            <AiOutlineLinkedin className='text-white' />
                                        </div>
                                        <div className='bg-[#0057e2] p-2 rounded-full'>
                                            <GoMail className='text-white' />
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                <button className="swiper-button-prev-custom bg-white drop-shadow-md  rounded-full flex justify-center items-center  p-2 lg:p-3 cursor-pointer group hover:drop-shadow-lg border">
                    <ChevronRight className='text-[#2251FF] ' />
                </button>



            </div>
        </div>
    )
}
