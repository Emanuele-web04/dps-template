"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiOutlineCommandLine,
  HiOutlineUserGroup,
  HiOutlinePlus,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const MinimalDropdown = () => {
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

  const accountSection = [
    {
      icon: HiOutlineUser,
      label: "Profile",
      shortcut: "⌘P",
      hasArrow: true,
    },
    {
      icon: HiOutlineCreditCard,
      label: "Billing",
      shortcut: "⌘B",
    },
    {
      icon: HiOutlineCog6Tooth,
      label: "Settings",
      shortcut: "⌘S",
    },
    {
      icon: HiOutlineCommandLine,
      label: "Keyboard shortcuts",
      shortcut: "⌘K",
    },
  ];

  const teamSection = [
    {
      icon: HiOutlineUserGroup,
      label: "Invite users",
      hasArrow: true,
    },
    {
      icon: HiOutlinePlus,
      label: "New Team",
      shortcut: "⌘+T",
    },
  ];

  const bottomSection = [
    {
      label: "GitHub",
    },
    {
      label: "Support",
    },
    {
      label: "API",
      isDisabled: true,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-white cursor-pointer dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {shouldRender ? "Close Menu" : "Open Menu"}
      </button>

      {/* Dropdown Menu - Opens Upward */}
      {shouldRender && (
        <div
          className={`absolute bottom-full -left-20 md:left-0 mb-2 w-70 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden z-[9999] 
            ${isAnimating ? "animate-fadeInUp" : "animate-fadeOutDown"}`}
        >
          <div className="p-2">
            {/* Header */}
            <div className="px-4 py-2 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                My Account
              </h3>
            </div>

            {/* Account Section */}
            <div className="py-2">
              {accountSection.map((item, index) => (
                <button
                  key={item.label}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-2 text-left hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => {
                    console.log(`Clicked: ${item.label}`);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.shortcut && (
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        {item.shortcut}
                      </span>
                    )}
                    {item.hasArrow && (
                      <HiOutlineChevronRight className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 dark:border-neutral-800"></div>

            {/* Team Section */}
            <div className="py-2">
              <div className="px-4 py-1">
                <h4 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                  Team
                </h4>
              </div>
              {teamSection.map((item, index) => (
                <button
                  key={item.label}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-2 text-left hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => {
                    console.log(`Clicked: ${item.label}`);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.shortcut && (
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        {item.shortcut}
                      </span>
                    )}
                    {item.hasArrow && (
                      <HiOutlineChevronRight className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 dark:border-neutral-800"></div>

            {/* Bottom Section */}
            <div className="py-2">
              {bottomSection.map((item, index) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center px-4 py-2 text-left transition-colors ${
                    item.isDisabled
                      ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                      : "text-neutral-700 cursor-pointer dark:text-neutral-300 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
                  }`}
                  onClick={() => {
                    if (!item.isDisabled) {
                      console.log(`Clicked: ${item.label}`);
                    }
                  }}
                  disabled={item.isDisabled}
                >
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 dark:border-neutral-800"></div>

            {/* Log Out */}
            <div className="py-2">
              <button
                className="w-full flex items-center cursor-pointer justify-between px-4 py-2 text-left hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800 transition-colors"
                onClick={() => {
                  console.log("Clicked: Log out");
                  handleToggle();
                }}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineArrowRightOnRectangle className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Log out
                  </span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  ⌘Q
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.2s ease-out forwards;
        }

        .animate-fadeOutDown {
          animation: fadeOutDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MinimalDropdown;
