"use client";
import { apiConnector, handleResponse } from "./cors";

const admission = {
  SendAdmissionData: async (data) => {
    let response = null;
    // console.log(data);
    try {
      response = await apiConnector(
        "POST",
        "https://backend.emeacademy.co.in/api/v1/admission/email/send",
        {
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          course: data.course,
          email_sender: data.email_sender,
        }
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default admission;
