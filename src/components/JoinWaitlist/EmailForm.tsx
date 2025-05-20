"use client";

import { SetStateAction, useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  return (
    <div className="p-2 bg-white/90 ring-2 ring-neutral-200/50 rounded-2xl flex items-center transition-all shadow-lg shadow-neutral-300/50 focus-within:outline-none focus-within:ring-5 focus:ring-gray-300/70 ">
      <input
        type="text"
        inputMode="text"
        value={email}
        placeholder="Enter your email"
        onChange={handleEmail}
        className="w-fit sm:w-[300px] text-sm md:text-base font-sans tracking-tight px-3 text-left text-gray-800 placeholder-gray-400 focus:outline-none "
      />
      {/* button */}
      <button className="bg-gradient-to-b border-2 border-neutral-800/60 w-fit py-2.5 from-neutral-700 to-black p-3 rounded-xl shadow-md shadow-black/70 ring-2 ring-neutral-800/80">
        <p className="font-inter text-xs sm:text-sm tracking-tight text-white/90 font-medium">
          Join the Waitlist
        </p>
      </button>
    </div>
  );
};

export default EmailForm;
