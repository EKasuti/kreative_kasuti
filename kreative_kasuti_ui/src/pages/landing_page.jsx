import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profile_image.png";
import PrimaryButton from "../components/Button";

export default function LandingPage() {
  const [visibleText, setVisibleText] = useState("");
  const navigate = useNavigate();

  // Function to handle button click
  // And navigate to portfolio page
  const handleLinkClick = () => {
    navigate("/portfolio");
  };

  // useEffect phrases: Roles
  useEffect(() => {
    const phrases = [
      "Software Developer,",
      "Front-end Developer,",
      "Mobile Designer",
      "Pencil Artist.",
    ];

    let currentPhraseIndex = 0;
    let index = 0;
    let isTyping = true;

    const typingInterval = setInterval(() => {
      setVisibleText(phrases[currentPhraseIndex].slice(0, index));

      if (isTyping) {
        index++;
        if (index > phrases[currentPhraseIndex].length) {
          isTyping = false;
          setTimeout(() => {
            isTyping = true;
            index = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          }, 1000);
        }
      } else {
        if (index === 0) {
          isTyping = true;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        } else {
          index--;
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/*======== HomePage - Intro ========*/}
      <div className="flex justify-center items-center h-screen">
        <div className="text-primary-text-color">
          {/* Header */}
          <p className="text-6xl font-bold flex justify-center">Hi!</p>
          <p className="text-6xl font-bold mt-4">I'm Emmanuel Kasuti</p>
          <div
            className="text-2xl overflow-hidden whitespace-no-wrap mt-4 flex justify-center "
            style={{ height: "50px" }}
          >
            {visibleText}
          </div>
        </div>
      </div>

      {/*======== AboutMe - Section ========*/}
      <div className="flex justify-center pl-20 h-screen">
        {/* Green Rectangle & profile image */}
        <div className="mr-20">
          <div className="ml-auto w-150 h-150 bg-primary-button rounded-bl-full rounded-tl-full rounded-br-full">
            {/* Image on the left */}
            <img
              src={profileImage}
              alt="profile"
              className="w-100 h-150 rounded-bl-full rounded-br-full"
            />
          </div>
        </div>

        {/* Get to Know me paragraph */}
        <div className="text-primary-text-color flex flex-col pr-20 mt-20">
          <p className="text-3xl font-bold ">GET TO KNOW ME</p>
          <p className="text-xl mt-4" style={{ maxWidth: "600px" }}>
            My name is Emmanuel Kasuti. I am a Sophomore at Dartmouth College
            from Kenya. I’m currently pursuing a degree in Computer science
            modified with digital arts. With a focus on creative problem solving
            and innovation. I’m excited to learn more about how technology can
            be used to shape our world
          </p>

          {/* Button to view portfolio */}
          <div className="mt-4">
            <PrimaryButton
              text="View Portfolio"
              onClick={handleLinkClick}
              backgroundColor="#FFFF00"
              width="350px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
