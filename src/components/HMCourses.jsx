
"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import courseOne from '../../public/assets/images/courseOne.jpg'
import courseTwo from '../../public/assets/images/courseTwo.jpg'
import courseThree from '../../public/assets/images/courseThree.jpg'
import courseFour from '../../public/assets/images/courseFour.jpg'
import courseFive from '../../public/assets/images/courseFive.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Zoom, Navigation, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import CourseData from '@/data/course.json'

import AdmissionModal from './AdmissionModal';

export default function HMCourses() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = CourseData?.HotelManagement
    const email_sender = "HOTEL_MANAGEMENT"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    const HMCourses = [
        {
            name: 'Hotel Management Certificate',
            id: 1,
            student: '100% Job Assistance ',
            job: '2000+ Successful students',
            duration: '6 Months',
            time: 'Incl. 1 mo internship',
            assistance: "‘0’cost EMI available",
            decsOne: '80% Students Hired by 5 star Organisations',
            decsTwo: '100% Placement Support',
            decsThree: '2000+ Successful Students',
            src: courseOne
        },
        {
            name: 'Hotel Management Diploma (1 Year) ',
            id: 2,
            student: '100% Job Assistance ',
            job: '2000+ Successful students',
            duration: '1 Year',
            time: 'Incl. 1 mo internship',
            assistance: "‘0’cost EMI available",
            decsOne: '80% Students Hired by 5 star Organisations',
            decsTwo: '100% Placement Support',
            decsThree: '2000+ Successful Students',
            src: courseTwo
        },
        {
            name: 'Hotel Management Diploma (2 Years)',
            id: 3,
            student: '100% Job Assistance ',
            job: '2000+ Successful students',
            duration: '2 Year',
            time: 'Incl. 1 mo internship',
            assistance: "‘0’cost EMI available",
            decsOne: '80% Students Hired by 5 star Organisations',
            decsTwo: '100% Placement Support',
            decsThree: '2000+ Successful Students',
            src: courseThree
        },
        {
            name: 'BSc Hotel and Hospitality Management ',
            id: 4,
            student: '100% Job Assistance ',
            job: '2000+ Successful students',
            duration: '4 Years',
            time: 'Incl. 1 mo internship',
            assistance: "‘0’cost EMI available",
            decsOne: '80% Students Hired by 5 star Organisations',
            decsTwo: '100% Placement Support',
            decsThree: '2000+ Successful Students',
            src: courseFour
        },
        {
            name: 'MSc Hotel and Hospitality Management ',
            id: 5,
            student: '100% Job Assistance ',
            job: '2000+ Successful students',
            duration: '2 Years',
            time: 'Incl. 1 mo internship',
            assistance: "‘0’cost EMI available",
            decsOne: '80% Students Hired by 5 star Organisations',
            decsTwo: '100% Placement Support',
            decsThree: '2000+ Successful Students',
            src: courseFive
        },

    ]
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
        <div className='w-full  max-w-[1380px] mx-auto flex flex-col items-center gap-y-5 py-10 px-[20px] md:px-24 bg-[linear-gradient(to_right,#4f4f4f23_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f23_1px,transparent_1px)] bg-[size:60px_60px] 2xl:bg-[size:80px_60px]'>
            <AdmissionModal {..._this} />
            <div className="w-full flex justify-center   ">
                <div className="flex flex-row items-center justify-center gap-x-2 text-[#2251FF] text-[24px] leading-8 lg:leading-10 lg:text-5xl  font-bold ">
                    <div><span className="text-[#E87D1A]">O</span>ur</div>
                    <div className=" text-[#042A76] lg:leading-10 lg:text-5xl  font-bold  ">
                        Courses
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="178" height="10" viewBox="0 0 178 10" fill="none">
                            <path d="M0.405273 8.19779C48.9391 0.108794 116.122 -0.565329 177.239 8.19779" stroke="#E87D1A" stroke-width="2.24694" />
                        </svg></span>
                    </div>

                </div>
            </div>
            {/* 
          ===============================================
                  All Sap Course in Mobile view  
          ==============================================
          */}


            <div className=' w-full h-full flex lg:hidden flex-col  '>
                <div className='w-full  flex  pb-[40px] overflow-hidden'>
                    <Swiper
                        // slidesPerView={3}

                        // centeredSlides={true}

                        breakpoints={breakpoints}
                        keyboard={{
                            enabled: true,
                        }}
                        zoom={true}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.swiper-button-prev-custom_course',
                            prevEl: '.swiper-button-next-custom_course',
                        }}
                        modules={[Zoom, Navigation, Keyboard]}
                        className="mySwiper"
                    >
                        {
                            HMCourses.map((course) => (
                                <SwiperSlide key={course.id} className='swiper-zoom-container'>
                                    <div className='w-[300px] lg:w-[350px] lg:min-h-[380px] border-[1.5px] border-[#121112] rounded-lg overflow-hidden bg-white z-[20]'>
                                        <div className='h-[60px] w-full flex justify-center items-center bg-[#31C874] border-b-[1.5px] border-[#121112]'>
                                            <div className=' text-[16px] lg:text-[18px] font-[700]  text-[#121112]'>
                                                {course.name}
                                            </div>
                                        </div>
                                        <div className='flex  flex-col items-center justify-center gap-[22px] py-[20px] lg:py-[30px] '>
                                            <div className='flex flex-col  w-full px-5 gap-[20px] items-center justify-between '>
                                                <div className='w-full  flex items-center justify-start gap-[5px] '>
                                                    <div className='bg-[#0057E2] rounded-[4px] p-[4px] w-[29px] h-[28px] flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                            <path d="M8.62502 2.10833L3.60835 5.38333C2.00002 6.43333 2.00002 8.78333 3.60835 9.83333L8.62502 13.1083C9.52502 13.7 11.0083 13.7 11.9083 13.1083L16.9 9.83333C18.5 8.78333 18.5 6.44167 16.9 5.39167L11.9083 2.11667C11.0083 1.51667 9.52502 1.51667 8.62502 2.10833Z" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.94168 10.9L4.93335 14.8083C4.93335 15.8667 5.75002 17 6.75002 17.3333L9.40835 18.2167C9.86668 18.3667 10.625 18.3667 11.0917 18.2167L13.75 17.3333C14.75 17 15.5667 15.8667 15.5667 14.8083V10.9417" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M18.0833 12.5V7.5" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-start '>
                                                        {course.student}
                                                    </div>
                                                </div>

                                                <div className='w-full  flex items-center justify-start gap-[5px]'>
                                                    <div className='bg-[#0057E2] rounded-[4px] p-[4px] w-[29px] h-[28px] flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                            <path d="M7.41667 18.8333H14.0833C17.4333 18.8333 18.0333 17.4917 18.2083 15.8583L18.8333 9.19167C19.0583 7.15833 18.475 5.5 14.9167 5.5H6.58333C3.025 5.5 2.44166 7.15833 2.66666 9.19167L3.29166 15.8583C3.46666 17.4917 4.06666 18.8333 7.41667 18.8333Z" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.41669 5.5V4.83333C7.41669 3.35833 7.41669 2.16666 10.0834 2.16666H11.4167C14.0834 2.16666 14.0834 3.35833 14.0834 4.83333V5.5" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M12.4166 11.3333V12.1667C12.4166 12.175 12.4166 12.175 12.4166 12.1833C12.4166 13.0917 12.4083 13.8333 10.75 13.8333C9.09998 13.8333 9.08331 13.1 9.08331 12.1917V11.3333C9.08331 10.5 9.08331 10.5 9.91665 10.5H11.5833C12.4166 10.5 12.4166 10.5 12.4166 11.3333Z" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M18.7917 9.66667C16.8667 11.0667 14.6667 11.9 12.4167 12.1833" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.93335 9.89167C4.80835 11.175 6.92502 11.95 9.08335 12.1917" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-[13px] font-[400] leading-[14px] text-start text-[#121112] '>
                                                        {course.job}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='flex w-full px-5  items-center justify-start'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <div className='bg-[#0057E2] rounded-[4px] p-[4px] w-[29px] h-[28px] flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                            <path d="M3.79999 9.18333V13.325C3.79999 14.8417 3.79999 14.8417 5.23332 15.8083L9.17499 18.0833C9.76665 18.425 10.7333 18.425 11.325 18.0833L15.2667 15.8083C16.7 14.8417 16.7 14.8417 16.7 13.325V9.18333C16.7 7.66666 16.7 7.66666 15.2667 6.69999L11.325 4.42499C10.7333 4.08333 9.76665 4.08333 9.17499 4.42499L5.23332 6.69999C3.79999 7.66666 3.79999 7.66666 3.79999 9.18333Z" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M14.8334 6.35833V4.16666C14.8334 2.49999 14 1.66666 12.3334 1.66666H8.16669C6.50002 1.66666 5.66669 2.49999 5.66669 4.16666V6.29999" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.775 9.15833L11.25 9.89999C11.325 10.0167 11.4916 10.1333 11.6166 10.1667L12.4666 10.3833C12.9916 10.5167 13.1333 10.9667 12.7916 11.3833L12.2333 12.0583C12.15 12.1667 12.0833 12.3583 12.0916 12.4917L12.1416 13.3667C12.175 13.9083 11.7916 14.1833 11.2916 13.9833L10.475 13.6583C10.35 13.6083 10.1416 13.6083 10.0166 13.6583L9.19998 13.9833C8.69998 14.1833 8.31665 13.9 8.34998 13.3667L8.39998 12.4917C8.40831 12.3583 8.34165 12.1583 8.25831 12.0583L7.69998 11.3833C7.35831 10.9667 7.49998 10.5167 8.02498 10.3833L8.87498 10.1667C9.00831 10.1333 9.17498 10.0083 9.24165 9.89999L9.71665 9.15833C10.0166 8.70833 10.4833 8.70833 10.775 9.15833Z" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                        {course.assistance}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[90%] h-[1px] bg-[#585858] mx-auto'></div>

                                        <div className='flex flex-col px-[22px] py-[20px] justify-start items-start gap-[10px]'>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    {course?.decsOne}
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    {course.decsTwo}
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    {course.decsThree}
                                                </div>
                                            </div>

                                        </div>
                                        <div className='w-full flex justify-end items-center px-[22px] pb-[10px]'>
                                            <div className='flex justify-center items-center gap-[4px] p-[8px] rounded-[4px] bg-[#00AB50] border-r-2 border-b-2 border-[#FFCD1F]' onClick={() => { _this?.setIsModalOpen(true) }}>
                                                <div className='text-[12px] lg:text-[14px] font-[600] lg:font-[700] text-[#FAF9F9] '>
                                                    Explore Now
                                                </div>
                                                <div>
                                                    <svg className="w-[20px] h-[20px] lg:w-[25px] lg:h-[24px]" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                        <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#FAF9F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11.24 15.53L14.76 12L11.24 8.47" stroke="#FAF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>



                </div>

                {/* <div className='w-full pb-[20px]  flex justify-center  gap-[10px]'>
                    <div className="swiper-button-next-custom_course bg-[#0057E2] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px] cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            className=' w-[20px] h-[20px]'
                            src={leftArrow}
                            alt="" />
                    </div>
                    <div className="swiper-button-prev-custom_course bg-[#0057E2] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px] cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            className=' w-[20px] h-[20px]'
                            src={rightArrow}
                            alt="" />
                    </div>
                </div> */}

            </div>
            {/* 
          ===============================================
                  All Sap Course in Labtop view  
          ==============================================
          */}

            <div className='hidden w-full h-full  lg:flex  flex-col'>
                <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-[30px] py-[40px] '>
                    {
                        HMCourses.map((course) => (
                            <div key={course.id} className='w-[300px] lg:w-[320px] lg:min-h-[380px] border rounded-lg overflow-hidden bg-white '>
                                <Image className='w-full h-[170px] object-cover object-right-top'
                                    width={200}
                                    height={200}
                                    src={course.src}
                                    alt='course Image'

                                />

                                <div className='w-full px-3 py-4 flex flex-col gap-y-4'>
                                    <div className='text-[#232D63] font-bold text-base'>
                                        {course.name}
                                    </div>
                                    <div className='w-full flex flex-col gap-y-2'>
                                        <div className='w-full flex items-center gap-x-2'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                                    <path d="M9.12526 2.30599L4.10859 5.58099C2.50026 6.63099 2.50026 8.98099 4.10859 10.031L9.12526 13.306C10.0253 13.8977 11.5085 13.8977 12.4085 13.306L17.4002 10.031C19.0002 8.98099 19.0002 6.63933 17.4002 5.58933L12.4085 2.31433C11.5085 1.71433 10.0253 1.71433 9.12526 2.30599Z" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M5.44192 11.0977L5.43359 15.006C5.43359 16.0644 6.25026 17.1977 7.25026 17.531L9.90859 18.4144C10.3669 18.5644 11.1252 18.5644 11.5919 18.4144L14.2502 17.531C15.2502 17.1977 16.0669 16.0644 16.0669 15.006V11.1394" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M18.583 12.6978V7.69775" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className='text-xs text-[#121112] leading-3'>{course.decsOne}</div>
                                        </div>
                                        <div className='w-full flex items-center gap-x-2'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                                    <path d="M4.2998 9.38104V13.5227C4.2998 15.0394 4.2998 15.0394 5.73313 16.006L9.6748 18.281C10.2665 18.6227 11.2331 18.6227 11.8248 18.281L15.7665 16.006C17.1998 15.0394 17.1998 15.0394 17.1998 13.5227V9.38104C17.1998 7.86437 17.1998 7.86437 15.7665 6.8977L11.8248 4.6227C11.2331 4.28104 10.2665 4.28104 9.6748 4.6227L5.73313 6.8977C4.2998 7.86437 4.2998 7.86437 4.2998 9.38104Z" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15.3337 6.55617V4.3645C15.3337 2.69783 14.5003 1.8645 12.8337 1.8645H8.66699C7.00032 1.8645 6.16699 2.69783 6.16699 4.3645V6.49783" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M11.2745 9.35605L11.7495 10.0977C11.8245 10.2144 11.9911 10.331 12.1161 10.3644L12.9661 10.581C13.4911 10.7144 13.6328 11.1644 13.2911 11.581L12.7328 12.256C12.6495 12.3644 12.5828 12.556 12.5911 12.6894L12.6411 13.5644C12.6745 14.106 12.2911 14.381 11.7911 14.181L10.9745 13.856C10.8495 13.806 10.6411 13.806 10.5161 13.856L9.69949 14.181C9.19949 14.381 8.81616 14.0977 8.84949 13.5644L8.89949 12.6894C8.90782 12.556 8.84116 12.356 8.75782 12.256L8.19949 11.581C7.85782 11.1644 7.99949 10.7144 8.52449 10.581L9.37449 10.3644C9.50782 10.331 9.67449 10.206 9.74116 10.0977L10.2162 9.35605C10.5161 8.90605 10.9828 8.90605 11.2745 9.35605Z" stroke="#00A2E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className='text-xs text-[#121112] leading-3'>{course.decsTwo}</div>
                                        </div>

                                        <div className='w-full flex items-center gap-x-2'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                    <path d="M7.91637 19.5311H14.583C17.933 19.5311 18.533 18.1895 18.708 16.5561L19.333 9.88942C19.558 7.85608 18.9747 6.19775 15.4164 6.19775H7.08303C3.5247 6.19775 2.94136 7.85608 3.16636 9.88942L3.79136 16.5561C3.96636 18.1895 4.56636 19.5311 7.91637 19.5311Z" stroke="#00A2E7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7.91699 6.19784V5.53117C7.91699 4.05617 7.91699 2.8645 10.5837 2.8645H11.917C14.5837 2.8645 14.5837 4.05617 14.5837 5.53117V6.19784" stroke="#00A2E7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.9163 12.0311V12.8645C12.9163 12.8728 12.9163 12.8728 12.9163 12.8811C12.9163 13.7895 12.908 14.5311 11.2497 14.5311C9.59968 14.5311 9.58301 13.7978 9.58301 12.8895V12.0311C9.58301 11.1978 9.58301 11.1978 10.4163 11.1978H12.083C12.9163 11.1978 12.9163 11.1978 12.9163 12.0311Z" stroke="#00A2E7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.292 10.3645C17.367 11.7645 15.167 12.5978 12.917 12.8811" stroke="#00A2E7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M3.43359 10.5894C5.30859 11.8727 7.42526 12.6477 9.58359 12.8894" stroke="#00A2E7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className='text-xs text-[#121112] leading-3'>{course.decsThree}</div>
                                        </div>
                                    </div>

                                    <div className='w-28 capitalize text-sm bg-[#0057E2] rounded-sm px-5 py-2 text-white'>
                                        enroll now
                                    </div>
                                </div>




                            </div>
                        ))
                    }


                </div>
            </div>


        </div>
    )
}
