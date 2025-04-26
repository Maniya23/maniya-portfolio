import React from "react";
import profilePic from '../assets/profile.jpeg';


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
        <p className="text-lg text-gray-300">
          A passionate developer focused on creating clean, modern, and
          performant software solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;