import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function HMfaq() {
    const sapfaq = [
        {
            id: 1,
            title: "Why should I choose EME Academy for Hotel Management training?",
            decs: "EME Academy offers comprehensive Hotel Management training with a curriculum designed by industry experts, focusing on practical skills and real-world experience."
        },
        {
            id: 2,
            title: "What are the key areas covered in EME Academy's Hotel Management course?",
            decs: "Our course covers essential aspects such as front office operations, housekeeping management, food and beverage management, event management, and guest relations."
        },
        {
            id: 3,
            title: "How does EME Academy prepare students for careers in the hospitality industry?  ",
            decs: "We provide hands-on training through industry internships, practical sessions in hotel operations, and guest lectures by industry professionals, ensuring holistic development."
        },
        {
            id: 4,
            title: "What career opportunities can I pursue after completing EME Academy's Hotel Management course? ",
            decs: "Graduates can pursue careers as Hotel Managers, Front Desk Managers, Food and Beverage Managers, Event Planners, and more in hotels, resorts, and hospitality establishments worldwide."
        },
        {
            id: 5,
            title: "Does EME Academy provide placement assistance after completing the Hotel Management course?",
            decs: "Yes, we offer placement support through partnerships with leading hotels and hospitality organizations, career counseling, and interview preparation workshops."
        },
        {
            id: 6,
            title: "How does EME Academy ensure practical learning and industry readiness in Hotel Management?",
            decs: "Our curriculum includes practical simulations, live projects, and industry visits to provide students with hands-on experience and insights into hotel operations."
        },

    ]
    return (
        <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-center py-10 px-5 md:px-24">
            <div className=" flex flex-col md:flex-row items-start justify-center gap-5 md:gap-x-10">
                <div className="w-auto flex justify-center">
                    <div className="flex flex-col items-center justify-center gap-x-2 text-[#042A76] text-5xl leading-10 lg:leading-10 lg:text-5xl  font-bold ">
                        <div><span className="text-[#E87D1A]">F</span>AQ&apos;S</div>
                        
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="149" height="9" viewBox="0 0 149 9" fill="none">
                                <path d="M0.394531 7.80176C41.0146 0.12483 97.2433 -0.514953 148.395 7.80176" stroke="#E87D1A" stroke-width="2.24694" />
                            </svg>
                            </span>
                       
                    </div>
                </div>
                <div className="w-full mx-auto ">
                    <Accordion type="single" collapsible className="w-full flex flex-col gap-y-4">
                        {
                            sapfaq.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="bg-[#fff] w-full rounded-xl md:rounded-2xl px-3 md:px-6  shadow-sm border [&[data-state=open]]:border-2 [&[data-state=open]]:border-[#00A2E7] no-underline">
                                    <AccordionTrigger className="font-semibold text-[15px] text-start md:text-lg text-[#232D63] ">{faq.title}</AccordionTrigger>
                                    <AccordionContent className="font-normal text-sm lg:text-sm text-[#6F6C90]">
                                        {faq.decs}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }


                    </Accordion>
                </div>
            </div>
        </div>
      
    )
}
