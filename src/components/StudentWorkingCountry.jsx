import { QRCode } from 'antd';
import qatar from '../../public/assets/images/qatar.png'
import usa from '../../public/assets/images/usa.png'
import italy from '../../public/assets/images/italy.png'
import Malaysia from '../../public/assets/images/Malaysia.png'
import Thailand from '../../public/assets/images/Thailand.png'
import UAE from '../../public/assets/images/UAE.png'
import SaudiArabia from '../../public/assets/images/SaudiArabia.png'
import newZealand from '../../public/assets/images/newZealand.png'
import Canada from '../../public/assets/images/Canada.png'
import Maldives from '../../public/assets/images/Maldives.png'
import Australia from '../../public/assets/images/Australia.png'
import UK from '../../public/assets/images/UK.png'
import Singapore from '../../public/assets/images/Singapore.png'
import Germany from '../../public/assets/images/Germany.png'
import Japan from '../../public/assets/images/Japan.png'
import Image from 'next/image';
import Marquee from "react-fast-marquee";
function StudentWorkingCountry() {
    return (

        <div className="w-full bg-[#232D63] py-2 flex justify-center items-center gap-x-2 lg:gap-x-4 text-white text-xs md:text-base leading-5 md:leading-6 font-bold px-2 lg:px-4 ">
            <div className="hidden text-nowrap">
                Our students are present across the <span className="text-[#FF9A3A]">globe</span>  :
            </div>
            <div className=" text-nowrap">
                Global student <span className="text-[#FF9A3A]">presence</span>  :
            </div>
            <Marquee autoFill>
                <div className="hidden lg:inline-block text-nowrap tracking-wider font-medium">
                    USA, Italy, Malaysia, Thailand, United Arab Emirates, Saudi Arabia, Qatar, New Zealand, Canada, Maldives, Australia, United Kingdom, Singapore,  Germany, Croatia, Japan  - Try to fit these countries somewhere
                </div>

                <div className="lg:hidden text-nowrap tracking-wider font-medium flex items-center gap-x-2 mx-2">
                    <div className='flex items-center gap-x-2 '>
                        <div>USA</div>
                        <Image src={usa} />
                    </div>
                    <p>,</p>

                    <div className='flex items-center gap-x-2 '>
                        <div>Italy</div>
                        <Image src={italy} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Malaysia</div>
                        <Image src={Malaysia} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Thailand</div>
                        <Image src={Thailand} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>UAE</div>
                        <Image src={UAE} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Saudi Arabia</div>
                        <Image src={SaudiArabia} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Qatar</div>
                        <Image src={qatar} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>New Zealand</div>
                        <Image src={newZealand} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Canada</div>
                        <Image src={Canada} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Maldives</div>
                        <Image src={Maldives} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Australia</div>
                        <Image src={Australia} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>UK</div>
                        <Image src={UK} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Singapore</div>
                        <Image src={Singapore} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Germany</div>
                        <Image src={Germany} />
                    </div>
                    <p>,</p>
                    <div className='flex items-center gap-x-2 '>
                        <div>Japan</div>
                        <Image src={Japan} />
                    </div>
                   
                    

                    <div>
                        - Try to fit these countries somewhere.
                    </div>
                    



                </div>
            </Marquee>

        </div>

    )
}

export default StudentWorkingCountry