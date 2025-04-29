import React from "react";
import profilePic from '../assets/profile.jpeg';
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6">
      <div className="mt-8 md:mt-0 md:ml-12">
        <img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />
      </div>
      <div className="max-w-lg text-center md:text-left md:ml-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Manishka Fonseka
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate developer focused on creating clean, modern, and
          performant software solutions.
        </p>
        <div className="flex space-x-6 justify-center md:justify-start">
          <div className="group relative">
            <a
              href="https://github.com/Maniya23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <FaGithub size={40} />
            </a>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap">
              @Maniya23
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://linkedin.com/in/manishka-fonseka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <FaLinkedin size={40} />
            </a>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap">
              @manishka-fonseka
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://instagram.com/manishka_9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <FaInstagram size={40} />
            </a>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap">
              @manishka_9
            </span>
          </div>

          <div className="group relative">
            <a
              href="mailto:manishkafon@gmail.com"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <MdEmail size={40} />
            </a>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap">
              manishkafon@gmail.com
            </span>
          </div>

          <div className="group relative">
            <a
              href="tel:+94771676641"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <FaPhoneAlt size={30} />
            </a>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap">
              +94771676641
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;