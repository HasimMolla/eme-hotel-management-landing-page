"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import API from "@/api";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useRouter } from 'next/navigation';
import sucess from '../../public/assets/images/AnimationSuccess.gif'

export default function AdmissionForm(_this) {
    const router = useRouter();

    const [admissionResult, setAdmissionResult] = useState(true);
    const [formVisible, setFormVisible] = useState(true);
    const [admissiondata, setAdmissionData] = useState({
        name: "",
        email: "",
        mobile: "",
        course: "",
        email_sender: _this.email_sender
    });

    function validateEmail(email) { //Validates the email address
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) { //Validates the phone number
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        return phoneRegex.test(phone);
    }

    const handleAdmissionDataSubmit = (event) => {
        event.preventDefault();
        if (
            admissiondata.name === "" ||
            admissiondata.email === "" ||
            admissiondata.mobile === "" ||
            admissiondata.course === ""
        ) {
            return toast.error("All field are required!", {
                duration: 2000,
            });
        }
        if (!validatePhone(admissiondata.mobile)) {
            return toast.error("Please enter valid mobile number.")
        }
        if (!validateEmail(admissiondata.email)) {
            return toast.error("Please enter valid email.")
        }

        setFormVisible(false);
        API.admission
            .SendAdmissionData(admissiondata)
            .then((response) => {
                if (response) {
                    console.log(response);
                    setAdmissionResult(true);
                    router.push('/thank-you');
                } else if (!response) {
                    console.log(response);
                    setAdmissionResult(false);
                }
            })
            .finally(() => {

                setAdmissionData({
                    name: "",
                    email: "",
                    mobile: "",
                    course: "",
                });
                setFormVisible(true);
                setAdmissionResult(true);
            });
    };
    return (
        <div className=" w-[300px] min-h-[250px] lg:max-w-[300px] lg:min-h-[350px] px-6 py-[20px] lg:py-5 flex flex-col border-double border-4 border-[#00A2E7]  rounded-2xl justify-start items-center gap-[20px]">
            <div className="w-full flex flex-col justify-start items-center gap-[5px]">
                <h1 className="text-[24px] font-[500] leading-5 text-[#000] pb-2">Admission Open</h1>
                {/* <p className="text-[14px] font-[500] leading-5 text-[#000]"></p> */}
            </div>
            {formVisible
                ?
                (
                    <form
                        onSubmit={handleAdmissionDataSubmit}
                        className="w-full flex flex-col justify-start items-center gap-y-4 lg:gap-y-5 lg:pt-8"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            value={admissiondata.name}
                            onChange={(e) => {
                                setAdmissionData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }));
                            }}
                            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]   px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={admissiondata.email}
                            onChange={(e) => {
                                setAdmissionData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }));
                            }}
                            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]    px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={admissiondata.mobile}
                            onChange={(e) => {
                                setAdmissionData((prev) => ({
                                    ...prev,
                                    mobile: e.target.value,
                                }));
                            }}
                            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]    px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
                        />

                        <div className="w-full hidden">
                            <Select
                                value={admissiondata.course}
                                onValueChange={(value) => {
                                    setAdmissionData((prev) => ({
                                        ...prev,
                                        course: value,
                                    }));
                                }}




                            >
                                <SelectTrigger >
                                    <SelectValue placeholder="Select Program" />
                                </SelectTrigger>
                                <SelectContent>
                                    {_this?.Courses && _this?.Courses.map((course, index) => (
                                        <SelectItem key={index} value={course}>{course}</SelectItem>
                                    ))}

                                </SelectContent>
                            </Select>
                       </div>



                        <button
                            type="submit"
                            className="w-full text-[#fff] text-[15px] font-[700] bg-[#00A2E7] hover:bg-[#00A2E7]/90 transition-colors rounded-md border border-[#FFCD1F] px-[40px] py-2"
                        >
                            Apply Now
                        </button>
                    </form>
                ) :
                (
                    <div>
                        {admissionResult ? (
                            <div className="flex flex-col justify-center items-center h-full">
                                <Image src={sucess} width={500} height={100} alt="Success" />
                                <p className="text-black">Message sent successfully</p>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center h-full">
                                <Image src="https://res.cloudinary.com/dcvkhy83l/image/upload/v1718969899/EME%20Academy/Images/x9jvjayk0djbexwgefhp.gif" width={500} height={100} alt="Error" className="w-[100px]" />
                                <p>Something went wrong</p>
                            </div>
                        )}
                    </div>
                )}

        </div>
    )
}

