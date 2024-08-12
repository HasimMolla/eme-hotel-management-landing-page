'use client'
import { useState } from "react";
import logo from "../../public/assets/images/emeFooterLogo.svg"
import Image from "next/image";
import Link from "next/link"
import call from "../../public/assets/images/call.svg"
import sms from "../../public/assets/images/sms.svg"
import fb from "../../public/assets/images/fb.svg"
import insta from "../../public/assets/images/insta.svg"
import yt from "../../public/assets/images/yt.svg"
import AdmissionModal from "./AdmissionModal";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = "Hotel Management Course"
    const email_sender = "HOTEL_MANAGEMENT"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    return (
        <div className="w-full bg-[#232D63] border-t-2 border-[#FAF9F9]">
            <AdmissionModal {..._this} />
            <div
                className="bg-[#232D63] text-[#fff] w-full max-w-[1380px]  mx-auto    lg:h-auto py-[20px] px-[20px] lg:py-[60px] lg:px-24">

                <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-10'>
                    <div className='flex flex-col justify-start items-start gap-[20px] lg:gap-[40px] '>
                        <Image
                            className=" w-[100px]  lg:w-[120px]   "
                            width={500}
                            height={500}
                            src={logo}
                            alt="EME Logo" />
                        <div className='text-[13px] lg:text-[15px] font-[400] border-b w-[300px] pb-[10px]'>
                            Explore, learn, and grow with us today. With a diverse range of courses, expert instructors, and a supportive community, we&apos;re here to empower you on your educational journey.

                        </div>
                        <div className='flex justify-start items-start gap-[20px] lg:gap-[30px]'>
                            <a href='https://www.facebook.com/emeacademy.Official' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={fb}
                                    alt="EME Logo" />
                            </a>

                            <a href='https://www.instagram.com/emeacademy.co.in/'>
                                <Image
                                    className=" w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={insta}
                                    alt="EME Logo" />
                            </a>

                            <a href='https://www.youtube.com/@emeacademy' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={yt}
                                    alt="EME Logo" />
                            </a>
                        </div>
                    </div>



                    <div>
                        <ul className=' flex flex-col  gap-[20px] lg:gap-[40px]'>
                            <li className='text-[15px] lg:text-[24px] font-[700] leading-[20px] lg:leading-[28px] text-white text-nowrap'>Resources</li>
                            <div className='flex flex-col justify-start items-start gap-[10px] text-[13px] lg:text-[14px] font-[400] leading-[20px] lg:leading-[24px] text-white/80'>

                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Hotel Management Certificate</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Hotel Management Diploma (1 Year)</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Hotel Management Diploma (2 Years)</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>BSc Hotel and Hospitality Management</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>MSc Hotel and Hospitality Management</div>
                                    </li>
                                </div>

                            </div>
                        </ul>
                    </div>
                    
                    <div>
                        <ul className='flex flex-col   gap-[20px] lg:gap-[40px]'>
                            <li className='text-[15px] lg:text-[24px] font-[700] leading-[20px] lg:leading-[28px] text-white'>
                                Contact Us
                            </li>
                            <div className='text-[13px] lg:text-[14px] font-[400] leading-[20px] lg:leading-[24px] text-white/80'>
                                <li className='flex justify-start items-center'>
                                    {/* <img src={location_icon} alt="" /> */}
                                    Globsyn Crystals, 5th Floor,</li>
                                <li>TOWER-1, 505, EP Block,</li>
                                <li> Sector V, Bidhannagar,</li>
                                <li>West Bengal, India 700091</li>


                                <li className='flex items-center gap-2 mt-[15px] lg:mt-[25px]'>
                                    <Image
                                        className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                                        width={500}
                                        height={500}
                                        src={call}
                                        alt="call icon" />
                                    <a href="tel:+91-9831284098">9831284098</a>
                                </li>
                                <li className='flex items-center  gap-2 mt-[3px]'>

                                    <Image
                                        className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                                        width={500}
                                        height={500}
                                        src={sms}
                                        alt="call icon" />
                                    <a href="mailto:info@emeacademy.co.in"
                                        className=' font-[400]  '>
                                        info@emeacademy.co.in
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

            <div className='w-full bg-[#fff]'>
                <div className='w-full bg-white mx-auto max-w-[1380px]   px-[20px]  lg:px-24  py-5  '>
                    <div className="w-full flex text-black flex-col md:flex-row justify-center items-center gap-[10px]  md:items-center  md:justify-between   text-[11px] lg:text-xs xl:text-sm font-normal leading-3 lg:leading-4">
                        <div className='text-sm lg:text-base'> © 2024 <span className='text-[#508ef8]'>EME Academy</span>  | All Rights Reserved. </div>
                        <div className='text-sm lg:text-base'>Design & Developed by <a href="https://martiancorporation.com/" className='text-sm lg:text-lg  font-[600] text-[#508ef8]'>Martian Corporation</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
