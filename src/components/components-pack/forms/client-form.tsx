"use client";

import type React from "react";

import { useState } from "react";

export default function ClientForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    payment: "0",
    planDuration: "0",
    level: "Beginner",
    startDate: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client data:", formData);
    // Handle form submission here
  };

  return (
    <div className="w-full flex-1 flex items-center justify-center transition-colors duration-300">
      <div className="w-full lg:max-w-4xl bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-8 transition-colors duration-300">
        {/* Header */}
        <div className="flex flex-1 items-center w-full justify-between mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white transition-colors duration-300">
            Add Client
          </h1>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Client Fullname Section */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
              Client Fullname
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Payment and Plan Duration Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div>
              <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
                Payment
              </label>
              <input
                type="number"
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
                Plan Duration (Weeks)
              </label>
              <input
                type="number"
                name="planDuration"
                value={formData.planDuration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Level and Start Date Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div>
              <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
                Level
              </label>
              <div className="relative">
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  title="Select level"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white appearance-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-neutral-500 dark:text-neutral-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Client Email */}
          <div className="w-full">
            <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
              Client Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Client Phone */}
          <div className="w-full">
            <label className="block text-sm font-semibold mb-3 text-neutral-900 dark:text-white transition-colors duration-300">
              Client Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="123456789"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6 w-full">
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
