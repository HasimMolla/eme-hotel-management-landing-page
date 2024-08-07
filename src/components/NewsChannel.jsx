import abp from '../../public/assets/images/abpnews.png'
import insot from '../../public/assets/images/insot.png'
import tv9 from '../../public/assets/images/tv9.png'
import timesofindia from '../../public/assets/images/timesofindia.png'
import kolomT from '../../public/assets/images/kolomT.png'
import republic from '../../public/assets/images/text.svg'
import dailyhunt from '../../public/assets/images/testTwo.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function NewsChannel() {
  return (
      <div className="w-full  max-w-[1380px] mx-auto flex items-center justify-center      px-[20px] md:px-24 ">
          <div className='w-full '>
              <Marquee>
                  <div className='w-ful flex items-center justify-center  gap-x-12'>

                      <Image
                          width={100}
                          height={100}
                          src={republic}
                          alt='republic'
                      />


                      <Image
                          width={100}
                          height={100}
                          src={dailyhunt}
                          alt='republic'
                      />

                      <Image
                          width={150}
                          height={100}
                          src={abp}
                          alt='abp'
                      />


                      <Image
                          width={50}
                          height={50}
                          src={insot}
                          alt='abp'
                      />


                      <Image
                          width={60}
                          height={60}
                          src={tv9}
                          alt='abp'
                      />


                      <Image
                          width={150}
                          height={100}
                          src={timesofindia}
                          alt='abp'
                      />


                      <Image
                          width={100}
                          height={100}
                          src={kolomT}
                          alt='abp'
                      />

                  </div>
              </Marquee>
          </div>

         
      </div>
  )
}

export default NewsChannel