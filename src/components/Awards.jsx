import rewardOne from '../../public/assets/images/reward.png'
import rewardTwo from '../../public/assets/images/rewardFour.webp'
import Image from 'next/image'

function Awards() {
  return (
      <div className='w-full  max-w-[1380px] mx-auto flex flex-col items-center pt-10 px-5 md:px-24'>
          <div className="w-full h-[350px]  bg-white  border rounded-xl flex items-center justify-between overflow-hidden">
              <div className="w-[30%] flex flex-col gap-y-2 px-14 py-2 justify-center items-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <path d="M26.25 42.5833H21C18.4333 42.5833 16.3333 44.6833 16.3333 47.25V47.8333H14C13.0433 47.8333 12.25 48.6267 12.25 49.5833C12.25 50.54 13.0433 51.3333 14 51.3333H42C42.9567 51.3333 43.75 50.54 43.75 49.5833C43.75 48.6267 42.9567 47.8333 42 47.8333H39.6667V47.25C39.6667 44.6833 37.5667 42.5833 35 42.5833H29.75V37.24C29.1667 37.31 28.5833 37.3333 28 37.3333C27.4167 37.3333 26.8333 37.31 26.25 37.24V42.5833Z" fill="#00A2E7" />
                      <path d="M43.1203 27.16C44.6603 26.5767 46.0136 25.62 47.087 24.5467C49.257 22.1433 50.6803 19.2733 50.6803 15.9133C50.6803 12.5533 48.0436 9.91666 44.6836 9.91666H43.377C41.8603 6.81332 38.687 4.66666 35.0003 4.66666H21.0003C17.3136 4.66666 14.1403 6.81332 12.6236 9.91666H11.317C7.95698 9.91666 5.32031 12.5533 5.32031 15.9133C5.32031 19.2733 6.74365 22.1433 8.91365 24.5467C9.98698 25.62 11.3403 26.5767 12.8803 27.16C15.307 33.1333 21.1403 37.3333 28.0003 37.3333C34.8603 37.3333 40.6936 33.1333 43.1203 27.16ZM34.627 19.7167L33.1803 21.49C32.947 21.7467 32.7836 22.26 32.807 22.61L32.947 24.8967C33.0403 26.2967 32.037 27.02 30.7303 26.5067L28.607 25.6667C28.2803 25.55 27.7203 25.55 27.3936 25.6667L25.2703 26.5067C23.9636 27.02 22.9603 26.2967 23.0536 24.8967L23.1936 22.61C23.217 22.26 23.0536 21.7467 22.8203 21.49L21.3736 19.7167C20.4636 18.6433 20.8603 17.4533 22.2136 17.1033L24.4303 16.5433C24.7803 16.45 25.2003 16.1233 25.387 15.82L26.6236 13.9067C27.3936 12.7167 28.607 12.7167 29.377 13.9067L30.6136 15.82C30.8003 16.1233 31.2203 16.45 31.5703 16.5433L33.787 17.1033C35.1403 17.4533 35.537 18.6433 34.627 19.7167Z" fill="#00A2E7" />
                  </svg> 
                  <div className=" text-[#2251FF] lg:leading-10 lg:text-5xl  font-bold ">
                      <span className="text-[#E87D1A]">A</span>wards
                      <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="158" height="9" viewBox="0 0 158 9" fill="none">
                              <path d="M0.905273 7.68164C43.721 0.00471247 102.989 -0.63507 156.905 7.68164" stroke="#E87D1A" stroke-width="2.24694" />
                          </svg>
                      </span>
                  </div>
                  <div className="text-[#232D63] text-sm font-bold text-center">
                      Best <span className="text-[#2251FF]">Placement Institute</span> of the year - 2024
                  </div>
              </div>

              <div className='w-[70%] h-full relative'>
                  <Image
                      className="w-full h-full object-cover object-center  relative z-10"
                      width={500}
                      height={500}
                      src={rewardOne}
                      alt="student Img" />
                  
                  <Image
                      className="absolute bottom-0 right-0 w-[250px] rounded-md object-cover object-center  z-20"
                      width={500}
                      height={500}
                      src={rewardTwo}
                      alt="student Img" />
                  
              </div>
          </div>
      </div>
  )
}

export default Awards