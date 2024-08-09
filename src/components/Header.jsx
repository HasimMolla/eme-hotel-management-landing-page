"use client";
import { Link } from 'react-scroll';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MainLogo from "../../public/assets/images/emeLogo.png"
import rightArrow from "../../public/assets/images/rightArrow.svg"
import AdmissionModal from './AdmissionModal';
import CourseData from '@/data/course.json'


export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = CourseData?.HotelManagement
    const email_sender = "HOTEL_MANAGEMENT"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={color ? 'fixed top-0   transition-all backdrop-blur-md w-full z-[99] bg-black/5 drop-shadow-2xl  py-1  lg:py-2  animate-fade-in-down ' : 'fixed top-0  w-full z-[99]  bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100% transition-all  py-1  lg:py-2 2xl:py-2 '}>
            <AdmissionModal {..._this} />
            <div
                className='   flex items-center justify-between max-w-[1380px] mx-auto px-[20px] lg:px-24 '>
                <div className=" flex flex-col justify-center items-center  cursor-pointer">
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className='z-[30]'>
                        <Image
                            className="w-[100px] lg:w-[130px]   "
                            width={150}
                            height={150}
                            src={MainLogo}
                            alt="EME Logo" />
                    </Link>
                    <div className=' text-[10px]  text-[#252C65] font-bold text-nowrap'>
                        <span className='text-[#E87D1A]'>8</span> Years of Excellence
                    </div>

                </div>
                <button
                    className="hamburger flex lg:hidden flex-col justify-center items-center gap-[5px] bg-transparent z-[30] focus:outline-none"
                    onClick={toggleMenu}>
                    <span
                        className={`block bg-[#252C65] h-[2px] w-[25px] rounded-md origin-left transition-all
          ${isOpen ? 'rotate-45 opacity-1' : ''}`}>
                    </span>
                    <span
                        className={`block bg-[#252C65] h-[2px]  w-[25px] rounded-md origin-center transition-all 
          ${isOpen ? 'opacity-0 mb-[4px]' : ''}`}>
                    </span>
                    <span
                        className={`block bg-[#252C65] h-[2px] w-[25px] rounded-md origin-left transition-all ${isOpen ? '-rotate-[45deg] opacity-1' : ''}`}></span>

                </button>

                {/* ===================================
                        All Navber Menu list 
                    ======================================
                */}

                <div
                    className={isOpen ?
                        ' flex lg:hidden flex-col items-start gap-[15px] text-[18px] font-[500] absolute pt-[120px] top-[0px] left-0 w-full h-screen  px-6 py-[10px] bg-white  backdrop-blur-3xl animate-fade-in-left z-[28] transition-all ' :
                        'hidden lg:flex flex-row items-center justify-center gap-[36px] lg:text-[15px] 2xl:text-[18px]  text-[#191919] font-[400] 2xl:font-[400]  '}>
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className={'text-[#191919] cursor-pointer hover:text-blue-500'}
                        onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={2000}
                        className={'text-[#191919] cursor-pointer hover:text-blue-500'}
                        onClick={() => setIsOpen(false)}>
                        About
                    </Link>

                    <Link to="awards"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className={'text-[#191919] cursor-pointer hover:text-blue-500'}
                        onClick={() => setIsOpen(false)}>
                        Awards
                    </Link>


                    <Link to="course"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        className={'text-[#191919] cursor-pointer hover:text-blue-500'}
                        onClick={() => setIsOpen(false)}>
                        Courses
                    </Link>

                    <Link to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className={'text-[#191919] cursor-pointer hover:text-blue-500'}
                        onClick={() => setIsOpen(false)}>
                        Testimonials
                    </Link>




                    <button className="lg:hidden text-[#002C6D] text-[14px] rounded-md bg-[#F0F0F0]  px-[24px] py-[12px] flex justify-center items-center gap-2 group" onClick={() => { setIsModalOpen(true) }}>
                        <div>
                            Prospectus
                        </div>
                        <Image
                            className=" w-[10px] lg:w-[16px] lg:h-[16px]  group-hover:translate-x-1 transition-all"
                            width={500}
                            height={500}
                            src={rightArrow}
                            alt="EME Logo" />

                    </button>

                </div>
                <div className="hidden lg:block" >

                    <button className=" flex text-[#002C6D]  text-[14px] rounded-md bg-[#F0F0F0] hover:bg-[#fff]/90 px-[24px] py-[12px]  justify-center items-center gap-2 font-[600] group" onClick={() => { setIsModalOpen(true) }}>
                        <div>
                            Prospectus
                        </div>
                        <svg className="group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4345 8.1L7.7169 2.3832L8.2833 1.8168L14.9657 8.5L8.2833 15.1832L7.7169 14.6176L13.4345 8.9H1.6001V8.1H13.4345Z" fill="#002C6D" />
                        </svg>

                    </button>
                </div>
            </div>

        </div>
    )
}
