import React from "react";
import PrimaryButton from "../components/Button";
import InputForm from "../components/InputForm";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFigma,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Page Title */}
        <div className="text-white p-4 pl-20 text-xl flex justify-center">
          Contact Me
        </div>

        {/* Content */}
        <div className="flex">
          {/* Input form */}
          <div className="text-white border border-yellow-500 w-full">
            <div className="m-6">
              {/* Name, email, subject, message */}
              <InputForm suggestedName="Enter your name" />
              <InputForm suggestedName="Enter your email" />
              <InputForm suggestedName="Subject" />
              <InputForm suggestedName="Write me message" />
              {/* Button to send */}
              <div className="mt-4">
                <PrimaryButton
                  text="SEND"
                  // onClick={handleLinkClick}
                  backgroundColor="#FFFF00"
                  width="200px"
                />
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="w-full ml-8 text-white">
            <div>Get in Touch</div>
            {/* Icons: Github, LinkedIn, Instagram, Twitter, Figma */}
            <FaGithub className="mt-4" />
            <FaLinkedin className="mt-4" />
            <FaInstagram className="mt-4" />
            <FaTwitter className="mt-4" />
            <FaFigma className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage;
