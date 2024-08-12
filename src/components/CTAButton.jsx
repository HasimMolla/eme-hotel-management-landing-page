'use client'
import { useState } from "react";

import CourseData from '@/data/course.json'
import AdmissionModal from "./AdmissionModal";

export default function CTAButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = "Hotel Management Course"
    const email_sender = "HOTEL_MANAGEMENT"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    return (
        <div className="w-full flex justify-center items-center">
            <AdmissionModal {..._this} />
            <div className="text-[#fff] text-sm leading-5   font-[600] bg-[#0057E2] hover:bg-[#0057E2] px-5 hover:cursor-pointer py-2 rounded-md" onClick={() => { _this?.setIsModalOpen(true) }}>
                Enquire Now
            </div>
        </div>
    )
}

