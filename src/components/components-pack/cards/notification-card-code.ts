export const notificationCardCode = `"use client";

import { BsGear, BsPerson, BsThreeDots } from "react-icons/bs";
import { LuTarget, LuMessageSquare } from "lucide-react";

const NotificationCard = () => {
  return (
    <div className="relative w-[320px] h-[400px] mx-auto">
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Notifications
          </h3>
          <button className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
            <BsGear className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          </button>
        </div>

        {/* Notification Items */}
        <div className="space-y-4 mb-6">
          {/* New Lead Generated */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center relative">
              <BsPerson className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-neutral-900"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white mb-1">
                New Lead Generated
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                John Smith submitted web form
              </p>
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                10 minutes ago
              </span>
            </div>
          </div>

          {/* Campaign Milestone */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center relative">
              <LuTarget className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white mb-1">
                    Campaign Milestone
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                    Black Friday campaign hit 150% target
                  </p>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    3 days ago
                  </span>
                </div>
                <button className="ml-2 p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                  <BsThreeDots className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat Interaction */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <LuMessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white mb-1">
                Live Chat Interaction
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                John Smith submitted web form
              </p>
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                4 days ago
              </span>
            </div>
          </div>
        </div>

        {/* Archive All Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
            Archive All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;`; 