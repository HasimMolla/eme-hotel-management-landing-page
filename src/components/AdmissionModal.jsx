"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Modal, ConfigProvider } from "antd";
import API from "@/api";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import sucess from '../../public/assets/images/AnimationSuccess.gif'


export default function AdmissionModal(_this) {
    const router = useRouter();

    const [admissionResult, setAdmissionResult] = useState(true);
    const [formVisible, setFormVisible] = useState(true);
    const [admissiondata, setAdmissionData] = useState({
        name: "",
        email: "",
        mobile: "",
        course: _this.Courses,
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

    // *************** Download brochure funcation ***********************
    const downloadBrochure = () => {
        const link = document.createElement("a");
        link.href = "/assets/docs/hotel-management-brochure.pdf"; // Public path to your brochure PDF
        link.download = "hotel-management-brochure.pdf"; // Name of the downloaded file
        link.click();
    };

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
        if (!validateEmail(admissiondata.email)) {
            return toast.error("Please enter valid email.")
        }
        if (!validatePhone(admissiondata.mobile)) {
            return toast.error("Please enter valid mobile number.")
        }


        setFormVisible(false);
        API.admission
            .SendAdmissionData(admissiondata)
            .then((response) => {
                if (response) {
                    setAdmissionResult(true);
                    downloadBrochure();
                    router.push('/thank-you');
                } else if (!response) {
                    setAdmissionResult(false);
                }
            })
            .finally(() => {
                _this.setIsModalOpen(false);
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
        <>
         
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            headerBg: "#CAE5FF",
                            contentBg: "#CAE5FF",
                        },
                    },
                }}
            >

                <Modal
                    title={
                        <div className="w-full flex flex-col justify-start items-center gap-[5px] bg-[#CAE5FF]">
                            <h1 className="text-[24px] font-[500] leading-5 text-[#000]">
                                Admission Open
                            </h1>
                            {/* <p className="text-[14px] font-[500] leading-5 text-[#000]">
                Deadline : 31st May
              </p> */}
                        </div>
                    }
                    width={320}
                    centered={true}
                    open={_this.isModalOpen}
                    clo
                    onCancel={() => _this.setIsModalOpen(false)}
                    footer={<div></div>}
                    className="color-[#bdd8f5] border-2 border-[#00A2E7] bg-[#CAE5FF] rounded-lg"
                >
                    <div className=" max-h-[320px] py-5  bg-[#CAE5FF]">
                        <div className="w-full h-full flex justify-center items-center">
                            {
                                formVisible
                                    ?
                                    (
                                        <form
                                            onSubmit={handleAdmissionDataSubmit}
                                            className="w-full flex flex-col justify-start items-center gap-[20px]"
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
                                                className="rounded-[4px] h-10 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#b5b5b5]   px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#000] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
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
                                                className="rounded-[4px] h-10 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#b5b5b5]   px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#000] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
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
                                                className="rounded-[4px] h-10 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#b5b5b5]   px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#000] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
                                            />
                                            {/* 
                                                <select
                                                    className="hidden rounded-[4px] h-10 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] text-[14px] outline outline-1 outline-[#b5b5b5]   px-2 py-[6px] w-full     bg-[#fff] placeholder:text-[#000] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
                                                    placeholder="Select Courses"
                                                    value={admissiondata.course}
                                                    onChange={(e) => {
                                                    setAdmissionData((prev) => ({
                                                        ...prev,
                                                        course: e.target.value,
                                                    }));
                                                    }}>
                                                    <option
                                                    value=""
                                                    selected
                                                    disabled

                                                    >
                                                    Select Program
                                                    </option>
                                                    {_this?.Courses && _this?.Courses.map((course, index) => (
                                                    <option key={index} value={course}>{course}</option>
                                                    ))}
                                                    
                                                </select> 
                                                */}
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
                                                    <p>Message sent successfully</p>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col justify-center items-center h-full">
                                                    <Image src='https://res.cloudinary.com/dcvkhy83l/image/upload/v1718969899/EME%20Academy/Images/x9jvjayk0djbexwgefhp.gif' width={500} height={100} alt="Error" className="w-[100px]" />
                                                    <p>Something went wrong</p>
                                                </div>
                                            )}
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>
        </>
    );
}