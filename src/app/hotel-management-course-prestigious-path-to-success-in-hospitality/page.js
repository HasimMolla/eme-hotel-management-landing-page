import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import hotelmanagement from "../../../public/assets/images/blogImage.jpg";

export default function BlogPage() {
  // console.log(params);

  return (
    <div className="min-h-screen w-full flex justify-center items-start  bg-white text-black py-10">
      {/* The blog is {params.slug} */}
      <div className="w-full md:w-[70%] h-full mx-auto  flex flex-col px-5 md:px-0 gap-5">
        <Link
          href="/"
          className="flex items-center justify-start gap-1 hover:underline hover:cursor-pointer transition-all"
        >
          <MdArrowBackIosNew />
          <div className="text-sm ">Back to Home Page</div>
        </Link>
        <div className="text-xl font-bold">
          EME Academy&apos;s Hotel Management Course: Prestigious Path to
          Success in Hospitality
        </div>
        <div className="md:w-[70%]  mx-auto ">
          <Image
            className="w-full h-[400px] object-cover object-top"
            width={500}
            height={500}
            src={hotelmanagement}
            alt="Blog One image"
          />
        </div>

        <div className="w-full text-sm -tracking-tight text-black flex flex-col gap-5 pt-5">
          <div>
            Looking for the best way to kickstart your career? Your passion for
            the hospitality industry shall be rewarded well at EME Academy!
            Recognised as the{" "}
            <span className="text-black font-bold">
              best hotel management institute in Kolkata
            </span>
            , it offers top-notch courses tailored to equip you with the modern
            skills needed to thrive in this dynamic field.
          </div>
          <div>
            You can start right after 10th grade or try to advance your
            education after 12th - they have a course for all scenarios and all
            applicants.
          </div>
          <div className="text-lg text-black font-bold">
            Why Choose EME Academy?
          </div>
          <div>
            EME Academy is renowned for its comprehensive hotel management
            programs, making it one of the{" "}
            <span className="text-black font-bold">
              best hotel management colleges in Kolkata
            </span>
            . The academy&apos;s robust curriculum covers all aspects of
            hospitality management, ensuring students receive a thorough
            education that prepares them for the industry&apos;s ever-changing
            demands.
          </div>
          <div>
            The extensive training schedule includes every little bit of know
            how needed to survive magnificently in this industry. From front
            office operations to culinary arts, event planning, and more, all
            kinds of skillsets will be focussed upon, thus providing students a
            broad spectrum of knowledge and skills necessary for a successful
            career in hospitality.
          </div>
          <div>
            The academy offers a variety of courses tailored to meet diverse
            educational needs and career goals. Students can choose from
            certificates, diplomas, and degree programs, each designed to
            provide a well-rounded education. Whether aiming for entry-level
            positions or advanced roles in the hospitality sector, EME
            Academy&apos;s programs are structured to offer in-depth theoretical
            knowledge coupled with practical experience. What’s the benefit you
            ask? Graduates will be able to aim for entry-level positions or
            advanced roles in the hospitality sector. The academy ensures its
            students not just survive, but excel in the competitive hospitality
            industry.
          </div>
          <div className="text-lg text-black font-bold">Courses Offered</div>
          <div>
            The multitude of courses offered by EME Academy in the Hotel
            Management field are as follows:
          </div>

          <div className="text-sm text-black font-bold">
            A. Certification Courses and Diploma Programs
          </div>

          <div className="text-sm text-black font-bold ">
            1. Hotel Management Certificate (6 Months)
          </div>
          <div>
            A wildly popular course, the certificate program is a big hit
            amongst students trying to upskill for jobs in the shortest time
            possible. Communication and creativity will be key to making the
            most of this course.
          </div>

          <div>Some standout features are as follows:</div>
          <div className="flex flex-col gap-y-1">
            <li className="text-sm list-disc">Includes a 1-month internship</li>
            <li className="text-sm list-disc font-bold">
              1000+ guaranteed job placements
            </li>
            <li className="text-sm list-disc">Industry “Co-Op” program</li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">Cutting-edge curriculum</li>
          </div>

          <div className="text-sm text-black font-bold ">
            2. Hotel Management Diploma (1 Year)
          </div>

          <div>
            Going a step ahead, one could choose to complete a year-long diploma
            in the hospitality field, to better equip themselves with relevant
            skills, and etiquette training. Diplomas are preferred by MNCs, and
            other recruiters looking to find the best talents from Eastern
            India.
          </div>
          <div>Some standout features are as follows:</div>
          <div className="flex flex-col gap-y-1">
            <li className="text-sm list-disc">Includes a 1-month internship</li>
            <li className="text-sm list-disc">78% of students hired by MNCs</li>
            <li className="text-sm list-disc font-bold">
              1000+ guaranteed job placements
            </li>
            <li className="text-sm list-disc">
              Comprehensive industry “Co-Op” program
            </li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">Advanced curriculum</li>
          </div>
          <div className="text-sm text-black font-bold ">
            3. Hotel Management Diploma (2 Years)
          </div>

          <div>
            A 2-year long Diploma will help students stand tall alongside degree
            holders, in a competitive industry filled with many talents.
            Comprehensive theoretical and practical training through 24 months
            will hone the strengths and points of development more thoroughly.
          </div>
          <div>Some standout features are as follows:</div>
          <div className="flex flex-col gap-y-1">
            <li className="text-sm list-disc">Includes a 1-month internship</li>
            <li className="text-sm list-disc">80% of students hired by MNCs</li>
            <li className="text-sm list-disc font-bold">
              1000+ guaranteed job placements
            </li>
            <li className="text-sm list-disc">
              Comprehensive industry “Co-Op” program
            </li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">Detailed curriculum</li>
          </div>

          <div className="text-sm text-black font-bold">B. Degree Programs</div>

          <div className="text-sm text-black font-bold ">
            1. BSc in Hotel and Hospitality (4 Years)
          </div>
          <div>
            Moving beyond the fundamentals taught in the Diploma courses, the
            BSc Degree provides more in-depth theoretical knowledge to students.
            Add to that the extensive practical experience the academy offers,
            the degree prepares students for advanced roles. These span across
            leadership. strategic management, and innovative planning.
          </div>

          <div>Some standout features are as follows:</div>
          <div className="flex flex-col gap-y-1">
            <li className="text-sm list-disc">Includes a 1-month internship</li>
            <li className="text-sm list-disc">80% of students hired by MNCs</li>
            <li className="text-sm list-disc font-bold">
              1000+ guaranteed job placements
            </li>
            <li className="text-sm list-disc">Industry “Co-Op” program</li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">Extensive curriculum</li>
          </div>

          <div className="text-sm text-black font-bold ">
            2. MSc in Hotel and Hospitality (2 Years)
          </div>

          <div>
            The MSc in Hospitality at EME Academy is designed for those looking
            to elevate their expertise. It combines advanced coursework with
            incredible research opportunities. This degree sets itself apart by
            equipping graduates with the skills needed for high-level managerial
            positions and specialized areas within the global hospitality
            sector.
          </div>
          <div>Some standout features are as follows:</div>
          <div className="flex flex-col gap-y-1">
            <li className="text-sm list-disc">Includes a 1-month internship</li>
            <li className="text-sm list-disc">80% of students hired by MNCs</li>
            <li className="text-sm list-disc font-bold">
              1000+ guaranteed job placements
            </li>
            <li className="text-sm list-disc">Industry “Co-Op” program</li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">Comprehensive curriculum</li>
          </div>
          <div className="text-lg text-black font-bold">
            EME Academy Stands out from the rest: The Reasons
          </div>
          <div>
            <div>
              EME Academy is not just about education; we ensure you get the
              absolute best start in your career. A great start will only thirst
              you towards even better opportunities in the country and abroad.
              As a leading{" "}
              <span className="text-black font-bold">
                hotel management institute in Kolkata
              </span>
              , EME Academy offers:
            </div>

            <div className="flex flex-col gap-y-1 pl-5">
              <li className="text-sm list-disc font-bold">
                The best in training:
              </li>
              <div>
                EME Academy’s expert trainers are industry veterans who bring to
                you real-world experience and wisdom, into the confines of a
                classroom. They bring with them years of knowledge and
                strategies to combat various everyday struggles. It helps the
                students apply such skills to navigate complex obstacles and
                fresh new demanding situations involving patrons.
              </div>
              <div>
                Starting to experience the real-world needs of the sector sets
                apart EME Academy students from the rest.
              </div>
              <li className="text-sm list-disc font-bold">
                Modern Curriculum:
              </li>
              <div>
                EME Academy&apos;s curriculum is constantly updated to reflect
                current industry trends. The faculty is dedicated to ensuring
                that students receive relevant and cutting-edge education. Such
                a modern, innovative approach is rare to come by; that utilises
                adaptive learning methods, VR & AR etc. amongst the latest
                techniques, technologies, and practices in hospitality
                management.
              </div>
              <div>
                Students stay abreast of industry changes, and thus better
                prepared to meet the demands of the evolving job market.
              </div>
              <li className="text-sm list-disc font-bold">
                Modern Infrastructure:
              </li>
              <div>
                The Academy has state-of-the-art facilities you can access each
                day to gain hands-on experience. The modern, well-equipped labs
                and classrooms open up a whole pandora’s box of sensory
                experiences rarely found elsewhere.
              </div>
              <div>
                Practical skills become second nature with daily practice,
                repetition, and diligence.
              </div>
              <li className="text-sm list-disc font-bold">
                Placement Assistance:{" "}
              </li>
              <div>
                A robust placement cell, led by expert trainers and alumni,
                helps guarantee jobs in top companies and recruiters. The
                aligning of students to corresponding roles starts from day one.
              </div>
              <div>
                One is bound to and their dream role with EME Academy’s support.
              </div>
              <li className="text-sm list-disc font-bold">Learning Modules:</li>
              <div>
                EME offers a mix of flexible learning options, curated to the
                needs of its mix of students who prefer learning at their own
                pace. Students are open to choosing between online and offline
                classes, to better fit their lifestyles and schedules.
              </div>
              <div>
                Easy pace and convenience often translates into better
                comprehensive understanding and application.
              </div>
              <li className="text-sm list-disc font-bold">Financial Aid:</li>
              <div>
                EME Academy has a treasure trove of scholarships and financial
                aid programs available. The academy is committed to helping to
                make its courses and faculty accessible to everyone; make sure
                to avail scholarships and student credit facilities.
              </div>
              <div>
                The plethora of opportunities need to be researched and applied
                for right away, while getting admission.
              </div>
              <li className="text-sm list-disc font-bold">
                International Exposure:
              </li>
              <div>
                EME Academy offers students unique opportunities to work abroad
                and gain invaluable global experience. Such an exposure helps
                students understand diverse hospitality practices and cultural
                nuances, in turn significantly enhancing their professional
                growth.
              </div>
              <div>
                Working in international settings prepares graduates for a
                global career, making them highly competitive in the hospitality
                industry.
              </div>
              <li className="text-sm list-disc font-bold">
                Industry Connections:
              </li>
              <div>
                Students at EME Academy benefit from networking opportunities
                with top industry professionals. These connections provide
                insights into the latest industry trends, best practices, and
                potential career opportunities.
              </div>
              <div>
                Engaging with experienced professionals also allows students to
                build relationships that can lead to mentorships and future job
                placements.
              </div>
            </div>
          </div>
          <div className="text-lg text-black font-bold">
            Career Opportunities
          </div>
          <div>
            Graduates from EME Academy have gone on to work in some of the top
            hotels and resorts around the world. The strong network of alumni
            can be found in the most coveted roles across the globe, in hotpots
            of hospitality.
          </div>
          <div>
            With a diploma or degree from EME Academy, you’ll be prepared for
            roles such as:
          </div>
          <div className="flex flex-col gap-y-1 ml-5">
            <li className="text-sm list-disc">Hotel Manager</li>
            <li className="text-sm list-disc">Front Office Manager</li>
            <li className="text-sm list-disc font-bold">
              Food and Beverage Manager
            </li>
            <li className="text-sm list-disc">Event Planner</li>
            <li className="text-sm list-disc">Certification assistance</li>
            <li className="text-sm list-disc">
              Cruise Ship Hospitality Manager
            </li>
          </div>
          <div>
            These are just a few of the many more exciting opportunities
            awaiting you.
          </div>
          <div className="text-lg text-black font-bold">Affordable Fees</div>
          <div>
            EME Academy offers a{" "}
            <span className="font-bold">
              low-cost hotel management course in Kolkata.
            </span>
            This is to help aid students facing financial obstacles to higher
            study. The{" "}
            <span className="font-bold">
              hotel management course fees in Kolkata
            </span>{" "}
            are structured to be affordable. Yet, never so by compromising on
            the quality of education.
          </div>
          <div>
            For detailed information on the{" "}
            <span className="font-bold">
              hotel management course in Kolkata fees
            </span>
            , prospective students are encouraged to visit the academy’s website
            or contact the admissions office.
          </div>
          <div className="text-lg text-black font-bold">Placement Success</div>
          <div>
            EME Academy prides itself on its placement record. It is impeccable,
            with the strong placement assistance ensuring more than 80 percent
            of graduates immediately getting their dream roles or companies.
          </div>
          <div>
            The{" "}
            <span className="font-bold">
              hotel management course fees in Kolkata
            </span>{" "}
            with placement include comprehensive support to ensure you land a
            job as soon as you graduate. The Academy enjoys deep-rooted
            partnerships with leading hotels and hospitality businesses, across
            Eastern India. As such, EME Academy guarantees that its students are
            job-ready.
          </div>
          <div className="text-lg text-black font-bold">How to Enroll</div>
          <div>
            Enrollment at EME Academy is straightforward and accessible to all.
            Whether you&apos;re aiming for a diploma in{" "}
            <span className="font-bold">
              hotel management after the 10th in Kolkata
            </span>{" "}
            or a{" "}
            <span className="font-bold">
              hospitality management course in Kolkata after the 12th
            </span>
            , the academy offers a range of options tailored to meet different
            educational needs and career aspirations.
          </div>
          <div>
            Designed to be student-friendly and convenient, the admission
            process ensures that aspiring hospitality professionals can embark
            on their journey without any hassle. Simply hop onto the website, to
            learn about eligibility criteria and fees - and start your
            application right away. You could also contact us with more
            questions before taking the plunge into this exciting world. We
            offer clear guidance across every step, creating a seamless
            experience, students can easily navigate their way into the
            programs.
          </div>
          <div className="text-lg text-black font-bold">
            The Future is Bright
          </div>
          <div>
            Choosing EME Academy, recognized among the{" "}
            <span className="font-bold">
              top hotel management colleges in Kolkata
            </span>
            , means investing in a bright future.
          </div>
          <div>
            The academy’s commitment to excellence ensures that you receive the
            best education and the best start in your career. Whether you’re
            looking for a{" "}
            <span className="font-bold">
              diploma in hotel management in Kolkata with placement
            </span>
            or a degree that sets you apart, EME Academy has it all.
          </div>
          <div className="text-lg text-black font-bold">Conclusion</div>
          <div>
            Embarking on a career in hotel management opens doors to a world of
            opportunities. It is the start of a dynamic and rewarding pathway.
          </div>
          <div>
            At EME Academy, recognized as the{" "}
            <span className="font-bold">
              best hotel management institute in Kolkata
            </span>
            , students are equipped with the skills and knowledge needed to
            excel in the hospitality industry. The academy&apos;s comprehensive
            range of courses includes certificates, diplomas, and degrees, all
            designed to provide a well-rounded education that covers every
            aspect of hotel management. Students graduate well-prepared to meet
            the complex demands of the industry and succeed in their careers.
          </div>
          <div>
            EME Academy&apos;s commitment to excellence is evident in its expert
            trainers and state-of-the-art facilities. The faculty comprises
            industry veterans who bring real-world experience into the
            classroom, offering students invaluable insights and practical
            knowledge. The academy&apos;s modern facilities, including
            well-equipped labs and classrooms, provide an ideal learning
            environment where students can hone their skills. Moreover, EME
            Academy&apos;s strong placement support ensures that students are
            job-ready upon graduation, with many securing positions in top
            hotels and resorts both nationally and internationally.
          </div>
          <div>
            Don’t wait to start your journey towards a successful career in
            hotel management. By enrolling at EME Academy, you are choosing a
            path that promises growth, learning, and numerous opportunities in
            the global hospitality industry. Take the first step today and join
            a community of professionals dedicated to excellence. For more
            information on courses and how to enroll, visit the{" "}
            <span className="text-blue-500 underline">
              EME Academy Hotel Management Course page
            </span>
            .
          </div>

          <div className="text-lg text-black font-bold">FAQs</div>
          <div className="text-base text-black font-semibold">
            What are the hotel management course requirements in Kolkata?
          </div>
          <li className="text-sm list-disc ml-5">
            Basic eligibility criteria include passing 10th or 12th grade.
            Specific courses may have additional requirements. Please refer to
            our website for more details or set up a meeting with us to know
            more.
          </li>
          <div className="text-base text-black font-semibold">
            How do I find the hotel management course fees in West Bengal?
          </div>
          <li className="text-sm list-disc ml-5">
            Detailed fee structures are available on the academy’s website or by
            contacting the admissions office. You can schedule a counselor call,
            to take you through the details and intricacies gently.
          </li>
          <div className="text-base text-black font-semibold">
            Can I pursue a distance hotel management course in Kolkata?
          </div>
          <li className="text-sm list-disc ml-5">
            EME Academy offers flexible learning options, including online
            courses. Depending upon your schedule, other commitments, and
            lifestyle, you can opt for a module that best fits your learning
            style.
          </li>
          <div className="text-lg text-black font-bold">Contact Us</div>
          <div>Are you ready to build a better career?</div>
          <div>
            Contact EME Academy today for more information on courses, fees, and
            admissions. Call us at{" "}
            <span className="text-blue-500"> +91-9831284098</span> or email
            <span className="text-blue-500"> info@emeacademy.co.in</span>.
          </div>
          <div>Explore, learn, and grow with EME Academy.</div>
          <div>Its where your future in hospitality begins.</div>
        </div>
      </div>
    </div>
  );
}
