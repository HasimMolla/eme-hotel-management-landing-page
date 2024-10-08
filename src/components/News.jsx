"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import Image from "next/image";
import { Autoplay, Zoom, Navigation } from 'swiper/modules';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import republic from '../../public/assets/images/republic.svg'
import abp from '../../public/assets/images/abpnews.png'
import kolomT from '../../public/assets/images/kolomT.png'
import Dailyhunt from '../../public/assets/images/Dailyhunt.png'
import newsOne from '../../public/assets/images/newsOne.webp'
import newsTwo from '../../public/assets/images/newsTwo.webp'
import newsThree from '../../public/assets/images/newsThree.webp'
import newsFour from '../../public/assets/images/newsFour.webp'
import TAASIRHOWRAH from '../../public/assets/images/TAASIRHOWRAH.jpg'
import taasirNews from '../../public/assets/images/taasirNews.png'
import CTAButton from './CTAButton';


export const News = () => {
    const NewsData = [
        {
            id: 1,
            src: newsOne,
            channel: abp,
            link: 'https://bengali.abplive.com/brand-wire/eme-academy-is-guiding-force-for-employment-by-conducting-professional-courses-1045489',
        },
        {
            id: 2,
            src: newsFour,
            channel: republic,
            link: 'https://www.republicbharat.com/india/eme-academy-professional-courses-make-bright-future-of-students/',
        },
        {
            id: 3,
            src: newsTwo,
            channel: Dailyhunt,
            link: 'http://dhunt.in/SHbMS',
        },
        {
            id: 4,
            src: newsThree,
            channel: kolomT,
            link: 'https://www.puberkalom.com/eme-academic-special-honors/',
        },
        {
            id: 5,
            src: newsTwo,
            channel: Dailyhunt,
            link: 'http://dhunt.in/SHbMS'
        },
        {
            id: 6,
            src: TAASIRHOWRAH,
            channel: taasirNews,
            link: 'http://dhunt.in/SHbMS'
        },
    ]
    const breakpoints = {

        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        370: {
            slidesPerView: 1,
            spaceBetween: 20
        },


        480: {
            slidesPerView: 1,
            spaceBetween: 40
        },


        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }


    };
    return (
        <div id='news' className='w-full  max-w-[1380px] mx-auto flex flex-col items-center py-10 px-5 md:px-10 '>
            <div className="flex flex-row items-start justify-center gap-x-2 text-[#2251FF] text-3xl lg:leading-10 lg:text-5xl  font-bold ">
                <div>In The</div>
                <div className=" text-[#042A76] lg:leading-10 lg:text-5xl  font-bold ">
                    <span className="text-[#E87D1A]">N</span>ews
                    <span>
                        <svg className='w-[115px] md:w-[158px]' xmlns="http://www.w3.org/2000/svg" width="158" height="9" viewBox="0 0 158 9" fill="none">
                            <path d="M0.905273 7.68164C43.721 0.00471247 102.989 -0.63507 156.905 7.68164" stroke="#E87D1A" stroke-width="2.24694" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='w-full flex  justify-center items-center gap-x-3  md:gap-x-5   '>
                <button className="swiper-button-next-custom bg-white drop-shadow-md  border rounded-full flex justify-center items-center p-2 md:p-3 cursor-pointer ">
                    <ChevronLeft className='text-[#2251FF] ' />
                </button>
                <Swiper


                    // centeredSlides={true}
                    zoom={true}
                    breakpoints={breakpoints}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-prev-custom',
                        prevEl: '.swiper-button-next-custom',
                    }}
                    modules={[Autoplay, Zoom, Navigation]}
                    className='mySwiper w-full flex  items-center self-center  mx-auto '
                >
                    {
                        NewsData.map((data) => (

                            <SwiperSlide key={data.id} className='swiper-zoom-container my-10  shadow-lg  rounded-xl'>

                                <a className="flex flex-col items-center justify-start  w-[280px] h-[320px] lg:w-[270px] lg:h-[320px]  rounded-xl  p-3 bg-white    " href={data.link} target='_blank'>
                                    <Image
                                        className="w-full  h-[250px] object-cover object-center  "
                                        width={500}
                                        height={500}
                                        src={data?.src}
                                        alt="student Img" />
                                    <div className=' flex justify-center items-center  w-full h-10  '>
                                        <Image
                                            className="w-[120px]  object-contain object-center   "
                                            width={500}
                                            height={500}
                                            src={data?.channel}
                                            alt="student Img" />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                <button className="swiper-button-prev-custom bg-white drop-shadow-md  rounded-full flex justify-center items-center p-2 md:p-3 cursor-pointer group hover:drop-shadow-lg border">
                    <ChevronRight className='text-[#2251FF] ' />
                </button>
                



            </div>
            <div>
                <CTAButton/>
            </div>

        </div>
    )
}
