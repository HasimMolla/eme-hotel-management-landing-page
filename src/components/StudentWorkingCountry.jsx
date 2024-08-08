
import Marquee from "react-fast-marquee";
function StudentWorkingCountry() {
  return (
      
          <div className="w-full bg-[#232D63] py-2 flex justify-center items-center gap-x-4 text-white text-xs md:text-base leading-5 md:leading-6 font-bold px-4 ">
              <div className="text-nowrap">
              Our students are present across the <span className="text-[#FF9A3A]">globe</span>  :
          </div>
          <Marquee autoFill>
              <div className="text-nowrap tracking-wider font-medium">
                  USA, Italy, Malaysia, Thailand, United Arab Emirates, Saudi Arabia, Qatar, New Zealand, Canada, Maldives, Australia, United Kingdom, Singapore,  Germany, Croatia, Japan  - Try to fit these countries somewhere
              </div>
          </Marquee>
          
          </div>
    
  )
}

export default StudentWorkingCountry