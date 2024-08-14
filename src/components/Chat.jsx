import callIcon from '../../public/assets/images/call.gif'
import whatsapp from '../../public/assets/images/whatsapp.gif'
import Image from 'next/image'
export default function Chat() {
    return (
        <>
            <div className="fixed right-[5px] bottom-[10px] lg:right-[20px] lg:bottom-[20px] z-[99999]">
                <div className=" flex flex-col gap-[10px] items-end group ">
                    <div className="">
                        <div className=' group-hover:flex flex-col    py-[0px] justify-center items-center rounded-xl  '>

                            <div className='flex flex-col  gap-[5px] justify-center items-center'>

                                <a href="https://wa.me/919831284098" target="_blank" className="cursor-pointer z-[999] flex rounded-full items-center gap-[10px] justify-center  transition-colors  " >
                                    <Image className='w-[60px] h-[60px]' width={400} height={400} src={whatsapp} alt='call icon' />

                                </a>

                                <a href="tel:+919831284098" className="   cursor-pointer z-[999] flex rounded-full items-center gap-[10px] justify-center  transition-colors " >
                                    <Image className='w-[60px] h-[60px]' width={400} height={400} src={callIcon} alt='call icon' />

                                </a>
                            </div>

                        </div >

                    </div>



                </div>

            </div>
        </>
    )
}
