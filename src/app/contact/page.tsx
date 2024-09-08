import React from "react";
import Image from "next/image";
import contactImage from "@/components/images/contact.png"; // Ensure path is correct

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="bg-white rounded-xl p-4 md:flex md:p-8 md:w-1/2">
        <Image
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={contactImage}
          alt="contact"
          width={384}
          height={512}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">&#9993; mfaizanakram536@gmail.com</div>
            <div className="text-slate-700 dark:text-slate-500">&#128241; 03106800495</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default ContactPage;
