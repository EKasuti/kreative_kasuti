import React, { useState } from "react";
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
  // State variable to keep track whether the message has been sent or not
  const [messageSent, setMessageSent] = useState(false);

  // Function to handle sending the message
  const handleMessageSend = () => {
    setMessageSent(true);
  };

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Page Title */}
        <div className="text-primary-text-color p-4 sm:pl-20 text-xl flex justify-center">
          CONTACT ME
        </div>

        {/* Content */}
        <div className="sm:flex">
          {/* Used flex to have items on theh left and items on the right */}
          <div className="pl-20"></div>{" "}
          {/* Empty div to add space on the left */}
          {/* Input form */}
          <div className="text-primary-text-color flex border border-primary-button w-full ">
            <div className="m-6 w-full">
              {/* Name, email, subject, message */}
              <InputForm suggestedName="Enter your name" />
              <InputForm suggestedName="Enter your email" />
              <InputForm suggestedName="Subject" />
              <div className="h-20">
                <InputForm suggestedName="Write me message" height="20" />
              </div>

              {/* Button to send */}
              <div className="mt-4 items-right">
                {/* Had the message pop up once you click the send button for now */}
                {/* Will implement the input form restrictions and link the forms to my email later */}
                {messageSent ? (
                  <div className="text-green-600">
                    Thank you for the feedback. Will get back to you shortly.
                  </div>
                ) : (
                  <PrimaryButton
                    text="SEND"
                    onClick={handleMessageSend} // Call handleMessageSend function on click
                    backgroundColor="#FFFF00"
                    width="200px"
                  />
                )}
              </div>
            </div>
          </div>
          {/* Get in Touch */}
          <div className="w-full sm:ml-10 text-primary-text-color ">
            <div className="text-4xl mt-4">Get in Touch</div>
            {/* Address, Phone number, Email, Location */}
            <div className="mt-4 text-sm">Address</div>
            <div className="text-xl">62 college street</div>
            <div className="mt-4 text-sm">Phone Number</div>
            <div className="text-xl">603-349-0400</div>
            <div className="mt-4 text-sm">Email</div>
            <div className="text-x">emmanuel.k.makau.jr.26@dartmouth.edu</div>

            {/* Icons: Github, LinkedIn, Instagram, Twitter, Figma */}
            <div className="flex space-x-4 text-xl">
              {/* Github link */}
              <a
                href="https://github.com/EKasuti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mt-4" />
              </a>
              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/emmanuel-kasuti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mt-4" />
              </a>

              {/* Instagram link */}
              <a
                href="https://www.instagram.com/_kasuti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mt-4" />
              </a>

              <FaTwitter className="mt-4" />
              <FaFigma className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage;
