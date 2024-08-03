

function Featured() {
  return (
      <div className="w-full  max-w-[1380px] mx-auto flex items-center justify-between  gap-[40px] py-5 md:py-[70px]  px-[20px] md:px-24 ">
          <div className="w-1/2  flex gap-x-2 text-[#042A76] lg:leading-10 lg:text-5xl  font-bold  ">
              <div><span className="text-[#E87D1A]">F</span>eatured
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="156" height="10" viewBox="0 0 156 10" fill="none">
                      <path d="M0.28125 8C42.9554 0.323072 102.028 -0.316711 155.765 8" stroke="#E87D1A" stroke-width="2.24694" />
                  </svg></span></div>
              <span className='  text-[#2251FF] lg:leading-10 lg:text-5xl  font-bold '>In
                  
              </span>
              
              
          </div>
          <div className="w-1/2 text-base font-medium">
              We take pride in our exceptional achievements and high student success rate. Check out our achievements below.
          </div>
      </div>
  )
}

export default Featured