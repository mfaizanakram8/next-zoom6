import React from 'react';
import Image from 'next/image';
import homeImage from "@/components/images/home1.png"; 

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 md:w-3/2">
        <Image 
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
          src={homeImage} 
          alt="home" 
          width="384" 
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-xl font-medium">
              Welcome to my home sweet home&#44; where warmth and comfort greet you at every corner.
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
}

export default HomePage;
