"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { people } from "@/lib/images";

import {
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { TbBoltFilled } from "react-icons/tb";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const person = people[3];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      icon: HiOutlineUser,
      label: "Profile",
      hasProBadge: false,
      isDivider: false,
    },
    {
      icon: HiOutlineUserGroup,
      label: "Community",
      hasProBadge: false,
      isDivider: false,
    },
    {
      icon: HiOutlineCreditCard,
      label: "Subscription",
      hasProBadge: true,
      isDivider: false,
    },
    {
      icon: HiOutlineCog6Tooth,
      label: "Settings",
      hasProBadge: false,
      isDivider: true,
    },
    {
      icon: HiOutlineQuestionMarkCircle,
      label: "Help center",
      hasProBadge: false,
      isDivider: false,
    },
    {
      icon: HiOutlineArrowRightOnRectangle,
      label: "Sign out",
      hasProBadge: false,
      isDivider: false,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Avatar Button with Gradient Border */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-1 rounded-full "
      >
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500 cursor-pointer transition-all duration-300 p-0.5">
          <Image
            src={person.src}
            alt={person.name}
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-1/2 transform md:-translate-0 -translate-x-1/2 md:-left-52 w-55 md:w-65 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50 
            opacity-0 animate-fadeInDown`}
        >
          <div className="p-2">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className="w-full flex items-center justify-between px-2 py-2.5 hover:bg-neutral-100 rounded-2xl cursor-pointer dark:hover:bg-neutral-700/30 transition-colors text-left"
                  onClick={() => {
                    console.log(`Clicked: ${item.label}`);
                  }}
                >
                  <div className="flex  text-xs md:text-sm items-center gap-4">
                    <item.icon className="text-base text-black dark:text-white" />
                    <span className="text-black dark:text-white font-medium">
                      {item.label}
                    </span>
                  </div>

                  {item.hasProBadge && (
                    <span className="bg-emerald-200 dark:bg-emerald-900/30 text-xxs flex items-center gap-1 ring-1 ring-emerald-700/35 text-emerald-900 dark:text-emerald-200 text-xs font-bold px-2 py-1 rounded-md">
                      <TbBoltFilled />
                      PRO
                    </span>
                  )}
                </button>

                {item.isDivider && (
                  <div className="border-b border-gray-100 dark:border-neutral-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Simple CSS Animation */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AccountDropdown;
