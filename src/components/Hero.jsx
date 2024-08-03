import hotelChef from '../../public/assets/images/hotelChef.png'
import Image from 'next/image'
import AdmissionForm from './AdmissionForm'
import CourseData from '@/data/course.json'
function Hero() {
  const Courses = CourseData?.HotelManagement
  const email_sender = "HOTEL_MANAGEMENT"
  const _this = {
    Courses,
    email_sender,
  };
  return (
    <div className="w-full min-h-[80vh] max-w-[1380px] mx-auto flex items-center justify-between  gap-x-5 py-5 md:py-5  px-[20px] md:px-24 ">
      <div className='w-[30%]  '>
        <Image className='w-[500px] h-[500px] object-cover object-center'
          width={500}
          height={500}
          src={hotelChef}
          alt='hotel chef'
        />
      </div>
      <div className='w-[40%] flex flex-col gap-y-5 items-center justify-center'>
        <div>
          <div className=' text-[#042A76] lg:leading-10 lg:text-3xl  font-bold text-nowrap'>
            <span className="text-[#E87D1A]">E</span>astern India’s <span className="text-[#E87D1A]">Top 10</span> Ranked

          </div>
          <div className=' text-[#00A2E7] lg:leading-10 lg:text-3xl  font-bold'>Hotel Management Institute</div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className=' text-black text-sm  font-semibold flex items-center gap-x-4'>
            <div>
              <span className='text-[#00A2E7]'>✦</span> Expert Certified Trainers </div> 
            <div>
              <span className='text-[#00A2E7]'>✦</span>  Salary: 3.6 LPA to 12 LPA
            </div>
          </div>
          <div className=' text-black text-sm  font-semibold flex items-center gap-x-5'>
            <div>
              <span className='text-[#00A2E7]'>✦</span> EMI at ‘0’ Cost </div> 
            <div>
              <span className='text-[#00A2E7]'>✦</span> 100% Job Support
            </div>
          </div>
          <div className=' text-black text-sm  font-semibold '>
            <span className='text-[#00A2E7]'>✦</span> Earning Opportunity Upto 12k During Training Period
          </div>
        </div>
      </div>
      
      <div className='w-[30%] '>
        <AdmissionForm {..._this} />
      </div>
    </div>
  )
}

export default Hero