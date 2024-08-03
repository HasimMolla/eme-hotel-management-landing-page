import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import GalleryOne from "../../public/assets/images/GalleryOne.webp"
import GalleryTwo from "../../public/assets/images/GalleryTwo.webp"
import GalleryThree from "../../public/assets/images/GalleryThree.webp"
import GalleryFour from "../../public/assets/images/GalleryFour.webp"
import GalleryFive from "../../public/assets/images/GalleryFive.webp"
import GallerySix from "../../public/assets/images/GallerySix.webp"
import GallerySeven from "../../public/assets/images/GallerySeven.webp"
import GalleryEight from "../../public/assets/images/GalleryEight.webp"
export const StudentGallery = () => {
    return (
        <div id='gallery' className='w-full   mx-auto flex flex-col items-center pt-10'>
            <div className="flex flex-row items-center justify-center gap-x-2 text-[#042A76] text-[24px] leading-8 lg:leading-10 lg:text-5xl  font-bold ">
                <div>Student</div>
                <div className=" text-[#2251FF] lg:leading-10 lg:text-5xl  font-bold ">
                    <span className="text-[#E87D1A]">G</span>allery
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="9" viewBox="0 0 147 9" fill="none">
                            <path d="M0.824219 7.80176C40.8954 0.12483 96.3642 -0.514953 146.824 7.80176" stroke="#E87D1A" stroke-width="2.24694" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='w-full flex items-center justify-around flex-nowrap mx-auto overflow-hidden whitespace-nowrap flex-shrink-0 group md:py-10 space-x-8 md:space-x-16 '>

                <Marquee pauseOnHover autoFill >
                    <div className='w-full flex items-center justify-center gap-3 lg:gap-5 px-5'>

                        <div className='w-[300px] h-[300px] lg:w-[420px] lg:h-[500px] mx-[10px]'>
                            <Image
                                className="w-full  h-full object-cover object-center "
                                width={500}
                                height={500}
                                src={GalleryOne}
                                alt="student Img" />
                        </div>
                        <div className=' grid w-[405px] h-[300px] lg:w-[670px] lg:h-[500px] grid-cols-2 grid-rows-2 gap-y-[10px] place-content-between  lg:gap-[20px] '>
                            <div className='w-[405px] h-[145px] lg:w-[670px] lg:h-[240px] row-span-1 col-span-2'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GalleryTwo}
                                    alt="student Img" />
                            </div>
                            <div className='w-[200px] h-[150px] lg:w-[320px] lg:h-[250px] row-span-2 col-span-1'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GalleryThree}
                                    alt="student Img" />
                            </div>
                            <div className='w-[200px] h-[150px] lg:w-[320px] lg:h-[250px] row-span-2 col-span-1'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GalleryFour}
                                    alt="student Img" />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center gap-3 lg:gap-5 py-[60px]'>

                        <div className='w-[300px] h-[300px]  lg:w-[420px] lg:h-[500px] mx-[10px]'>
                            <Image
                                className="w-full  h-full object-cover object-center "
                                width={500}
                                height={500}
                                src={GalleryFive}
                                alt="student Img" />
                        </div>

                        <div className=' grid w-[405px] h-[300px] lg:w-[670px] lg:h-[500px]  grid-cols-2 grid-rows-2   gap-[20px]'>
                            <div className=' w-[405px] h-[145px] lg:w-[670px] lg:h-[240px] row-span-1 col-span-2'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GallerySix}
                                    alt="student Img" />
                            </div>
                            <div className='w-[200px] h-[150px] lg:w-[320px] lg:h-[250px] row-span-2 col-span-1'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GallerySeven}
                                    alt="student Img" />
                            </div>
                            <div className='w-[200px] h-[150px] lg:w-[320px] lg:h-[250px] row-span-2 col-span-1'>
                                <Image
                                    className="w-full  h-full object-cover object-center "
                                    width={500}
                                    height={500}
                                    src={GalleryEight}
                                    alt="student Img" />
                            </div>
                        </div>
                    </div>
                </Marquee>

            </div>
        </div>
    )
}
