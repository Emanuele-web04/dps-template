export const accountDropdownCode = `"use client";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const person = people[3];

  // Handle opening/closing with animation
  const handleToggle = () => {
    if (!isOpen) {
      // Opening
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
      setIsOpen(true);
    } else {
      // Closing
      setIsAnimating(false);
      setTimeout(() => {
        setShouldRender(false);
        setIsOpen(false);
      }, 200);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsAnimating(false);
          setTimeout(() => {
            setShouldRender(false);
            setIsOpen(false);
          }, 200);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        onClick={handleToggle}
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
      {shouldRender && (
        <div 
          className={\`absolute top-full -left-20 w-65 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50 
            \${isAnimating ? 'animate-fadeInDown' : 'animate-fadeOutUp'}\`}
        >
          <div className="p-2">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className="w-full flex items-center justify-between px-2 py-2.5 hover:bg-neutral-100 rounded-2xl cursor-pointer dark:hover:bg-neutral-700/30 transition-colors text-left"
                  onClick={() => {
                    console.log(\`Clicked: \${item.label}\`);
                  }}
                >
                  <div className="flex  text-sm items-center gap-4">
                    <item.icon className="text-base text-black dark:text-white" />
                    <span className="text-black dark:text-white font-medium">
                      {item.label}
                    </span>
                  </div>
                  
                  {item.hasProBadge && (
                    <span className="bg-emerald-200 text-xxs flex items-center gap-1 ring-1 ring-emerald-700/35 text-emerald-900 text-xs font-bold px-2 py-1 rounded-md">
                      <TbBoltFilled className="text-emerald-900" />
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

      {/* CSS Animations */}
      <style jsx>{\`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.2s ease-out forwards;
        }
        
        .animate-fadeOutUp {
          animation: fadeOutUp 0.2s ease-out forwards;
        }
      \`}</style>
    </div>
  );
};

export default AccountDropdown;`.trim(); 