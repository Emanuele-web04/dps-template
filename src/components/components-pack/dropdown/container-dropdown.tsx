"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiOutlineTrash, HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { TbPencil } from "react-icons/tb";
import { TbLock } from "react-icons/tb";

const ContainerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      icon: TbPencil,
      label: "Edit",
      isDanger: false,
    },
    {
      icon: TbLock,
      label: "Block",
      isDanger: false,
    },
    {
      icon: HiOutlineTrash,
      label: "Delete",
      isDanger: true,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Three Dots Trigger Button - GRAY BACKGROUND */}
      <button
        onClick={handleToggle}
        className="p-2 cursor-pointer rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      >
        <HiOutlineEllipsisHorizontal className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      </button>

      {/* Dropdown Menu - GRAY BACKGROUND */}
      {shouldRender && (
        <div
          className={`absolute top-full right-0 mt-2 w-44 bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden z-[9999] 
            ${isAnimating ? "animate-fadeInDown" : "animate-fadeOutUp"}`}
        >
          <div className="p-0.5 space-y-0.5">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors rounded-2xl bg-white dark:bg-neutral-950 hover:shadow-md ${
                  item.isDanger
                    ? "text-red-700 dark:text-red-400"
                    : "text-neutral-800 dark:text-neutral-100"
                }`}
                onClick={() => {
                  console.log(`Clicked: ${item.label}`);
                  handleToggle(); // Close after action
                }}
              >
                <item.icon
                  className={`w-4 h-4 ${
                    item.isDanger
                      ? "text-red-700 dark:text-red-400"
                      : "text-neutral-800 dark:text-neutral-100"
                  }`}
                />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default ContainerDropdown;
