"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineExclamationTriangle,
  HiOutlineChevronDown,
  HiOutlineRectangleStack,
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlineEye,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const AccentDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Outstanding invoices");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    {
      icon: HiOutlineRectangleStack,
      label: "All Invoices",
    },
    {
      icon: HiOutlineExclamationTriangle,
      label: "Outstanding invoices",
    },
    {
      icon: HiOutlineClock,
      label: "Overdue",
    },
    {
      icon: HiOutlineCalendarDays,
      label: "Scheduled",
    },
    {
      icon: HiOutlineEye,
      label: "Paid",
    },
    {
      icon: HiOutlineCheckCircle,
      label: "In Progress",
    },
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selectedItem = menuItems.find((item) => item.label === selectedOption);

  return (
    <div
      ref={dropdownRef}
      className="w-full max-w-sm"
      style={{
        minHeight: isOpen ? "400px" : "auto",
        transition: "min-height 0.3s ease-out",
        width: "320px",
        minWidth: "320px",
      }}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {selectedItem && (
            <selectedItem.icon
              className={`w-5 h-5 ${
                selectedItem.label === "Outstanding invoices"
                  ? "text-orange-500"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            />
          )}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium text-sm">
            {selectedOption}
          </span>
        </div>
        <HiOutlineChevronDown
          className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu - NO OVERLAY, extends container */}
      {isOpen && (
        <div className="w-full mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden animate-fadeInDown">
          <div className="py-2">
            {menuItems.map((item) => {
              const isSelected = item.label === selectedOption;
              return (
                <div key={item.label} className="px-3 py-1">
                  <button
                    type="button"
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors rounded-lg ${
                      isSelected
                        ? "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    }`}
                    onClick={() => handleOptionSelect(item.label)}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        isSelected
                          ? "text-orange-500"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                </div>
              );
            })}
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

        .animate-fadeInDown {
          animation: fadeInDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AccentDropdown;
