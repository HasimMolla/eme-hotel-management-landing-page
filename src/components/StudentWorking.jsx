import taj from '../../public/assets/images/taj.png'
import westin from '../../public/assets/images/westin.png'
import Novotel from '../../public/assets/images/Novotel.png'
import hyatt from '../../public/assets/images/hyatt.png'
import itc from '../../public/assets/images/itc.png'
import indigo from '../../public/assets/images/indigo.png'
import Image from 'next/image'
function StudentWorking() {
    return (
        <div className="w-full  max-w-[1380px] mx-auto flex items-center justify-between  gap-[40px] py-5 md:py-8  px-[20px] md:px-24 ">
            <div className="  text-[#042A76] lg:leading-5 lg:text-xl  font-bold">
                <div>
                    Our Students are
                </div>
                <div className="text-[#2251FF] lg:leading-5 lg:text-xl  font-bold">
                    <span className="text-[#E87D1A]">W</span>orking In
                </div>
            </div>

            <div className='flex items-center justify-center gap-x-8'>
                <Image
                    width={80}
                    height={80}
                    src={taj}
                alt='taj'/>
                <Image
                    width={120}
                    height={120}
                    src={westin}
                alt='taj'/>
                <Image
                    width={120}
                    height={120}
                    src={hyatt}
                alt='taj'/>
                <Image
                    width={120}
                    height={120}
                    src={Novotel}
                alt='taj'/>
                <Image
                    width={80}
                    height={80}
                    src={itc}
                alt='taj'/>
                <Image
                    width={100}
                    height={100}
                    src={indigo}
                alt='taj'/>
            </div>
        </div>
    )
}

export default StudentWorking