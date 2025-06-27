"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { LuTarget } from "react-icons/lu";
import { RiUser6Line } from "react-icons/ri";

export default function NotificationsCard() {
  const notifications = [
    {
      id: 1,
      icon: <RiUser6Line className="sm:w-5 sm:h-5 w-4 h-4 text-blue-500" />,
      title: "New Lead Generated",
      description: "John Smith submitted web form",
      time: "10 minutes ago",
      hasMenu: false,
      hasArrow: false,
      hasDot: false,
    },
    {
      id: 2,
      icon: <LuTarget className="sm:w-5 sm:h-5 w-4 h-4 text-yellow-500" />,
      title: "Campaign Milestone",
      description: "Black Friday campaign hit 150% target",
      time: "3 days ago",
      hasMenu: true,
      hasArrow: true,
      hasDot: true,
    },
    {
      id: 3,
      icon: (
        <HiOutlineChatBubbleLeftRight className="sm:w-5 sm:h-5 w-4 h-4 text-purple-500" />
      ),
      title: "Live Chat Interaction",
      description: "John Smith submitted web form",
      time: "4 days ago",
      hasMenu: false,
      hasArrow: false,
      hasDot: false,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-4 space-y-2">
        {/* Header */}
        <div className="flex items-center border-b border-neutral-200 dark:border-neutral-700 pb-1 border-dashed justify-between mb-4">
          <h2 className="font-medium text-neutral-800 dark:text-white sm:text-base text-sm">
            Notifications
          </h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <IoSettingsOutline className="md:w-5 md:h-5 w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-6">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <div className="flex items-start sm:px-2 px-1 gap-4 p-1 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors">
                {/* Icon */}
                <div className="flex-shrink-0 sm:w-10 sm:h-10 w-8 h-8 bg-white shadow-md dark:bg-gray-700 rounded-full flex items-center justify-center">
                  {notification.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 -space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-white text-xs sm:text-base">
                          {notification.title}
                        </h3>
                        {notification.hasDot && (
                          <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 sm:text-sm text-xs mt-1">
                        {notification.description}
                      </p>
                      <p className="text-gray-400 dark:text-gray-500 sm:text-xs text-xxs mt-2">
                        {notification.time}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {notification.hasMenu && (
                        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                          <HiOutlineEllipsisHorizontal className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive All Button */}
        <div className="pt-4 mt-2">
          <button className="w-full py-1.5 px-4 ring-1 shadow-sm ring-neutral-200 dark:ring-neutral-700 text-neutral-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-lg text-xs md:text-sm transition-colors font-medium">
            Archive All
          </button>
        </div>
      </div>
    </div>
  );
}
