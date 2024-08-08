import taj from '../../public/assets/images/taj.png'
import westin from '../../public/assets/images/westin.png'
import Novotel from '../../public/assets/images/Novotel.png'
import hyatt from '../../public/assets/images/hyatt.png'
import itc from '../../public/assets/images/itc.png'
import indigo from '../../public/assets/images/indigo.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
function StudentWorking() {
    return (
        <div className="w-full  max-w-[1380px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-[40px] py-5 md:py-8  px-[20px] md:px-24 ">
            <div className="w-full md:w-[20%]  text-[#042A76] lg:leading-5 text-xl  font-bold flex flex-row md:flex-col gap-2 justify-center items-center">
                <div>
                    Our Students are
                </div>
                <div className="text-[#2251FF] lg:leading-5 lg:text-xl  font-bold">
                    <span className="text-[#E87D1A]">W</span>orking In
                </div>
            </div>
            <div className='w-full md:w-[80%]  '>
                <Marquee speed={20} autoFill>
                    <div className=' flex items-center justify-center gap-x-5 mx-5'>
                        <Image
                        className='company-img'
                            width={100}
                            height={100}
                            src={taj}
                            alt='taj' />
                    <Image
                        className='company-img'
                            width={120}
                            height={120}
                            src={westin}
                            alt='taj' />
                    <Image
                        className='company-img'
                            width={120}
                            height={120}
                            src={hyatt}
                            alt='taj' />
                    <Image
                        className='company-img'
                            width={120}
                            height={120}
                            src={Novotel}
                            alt='taj' />
                    <Image
                        className='company-img'
                            width={100}
                            height={100}
                            src={itc}
                            alt='taj' />
                    <Image
                        className='company-img'
                            width={100}
                            height={100}
                            src={indigo}
                            alt='taj' />
                    </div>
                </Marquee>
            </div>
           
           
        </div>
    )
}

export default StudentWorking