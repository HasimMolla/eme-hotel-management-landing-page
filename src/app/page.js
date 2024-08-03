import Awards from "@/components/Awards";
import { BoardofAdvisor } from "@/components/BoardofAdvisor";
import CareerProspect from "@/components/CareerProspect";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HMCourses from "@/components/HMCourses";
import HMfaq from "@/components/HMfaq";
import HMStudentTestimonials from "@/components/HMStudentTestimonials";
import InfiniteCall from "@/components/InfiniteCall";
import { News } from "@/components/News";
import NewsChannel from "@/components/NewsChannel";
import { StudentGallery } from "@/components/StudentGallery";
import { StudentTetimonials } from "@/components/StudentTestimonials";
import StudentWorking from "@/components/StudentWorking";
import StudentWorkingCountry from "@/components/StudentWorkingCountry";
import WhyEme from "@/components/WhyEme";


export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen bg-[#CAE5FF]">
      <Header />

      <div className="w-full">
        <InfiniteCall />
      </div>
      <div className="w-full">
        <StudentWorkingCountry />
      </div>
      <div className="w-full bg-[#CAE5FF]">
        <StudentWorking />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <HMCourses />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Featured />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <NewsChannel />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <WhyEme />
      </div>
      <div className="flex w-full  bg-[#fff] ">
        <StudentTetimonials />
      </div>
      <div className="flex w-full  bg-[#fff] ">
        <CareerProspect />
      </div>
      <div className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Awards />
      </div>
      <div className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <News />
      </div>
      <div className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <BoardofAdvisor />
      </div>

      <div className="flex w-full  bg-[#fff] ">
        <StudentGallery />
      </div>

      <div className="flex  w-full  bg-[#fff] ">
        <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-start gap-[40px] py-[70px]  px-[20px] md:px-10 ">
          <div className="w-full flex flex-col justify-center items-center gap-[20px]">
            <div className="flex flex-row items-center justify-center gap-x-2 text-[#042A76] text-[24px] leading-8 lg:leading-10 lg:text-5xl  font-bold ">
              <div>What Our</div>
              <div className=" text-[#2251FF] lg:leading-10 lg:text-5xl  font-bold ">
                <span className="text-[#E87D1A]">S</span>tudents Say
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="273"
                    height="9"
                    viewBox="0 0 273 9"
                    fill="none"
                  >
                    <path
                      d="M0.999023 7.80176C75.3777 0.12483 178.337 -0.514953 271.999 7.80176"
                      stroke="#E87D1A"
                      stroke-width="2.24694"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <HMStudentTestimonials />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <HMfaq />
      </div>

      <Footer />
    </main>
  );
}
