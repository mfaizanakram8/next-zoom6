import React from "react";
import Image from "next/image";
import aboutImage from "@/components/images/about1.png"; 

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={aboutImage}
          alt="about"
          width={384}
          height={512}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              I am a Full-Stack web developer based in Pakistan&#44; pursuing a degree in Computer Science.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">I am Muhammad Faizan Akram</div>
            <div className="text-slate-700 dark:text-slate-500">Full Stack Web Developer</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default AboutPage;
