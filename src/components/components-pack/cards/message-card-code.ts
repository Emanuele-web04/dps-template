export const messageCardCode = `"use client";

import { TbMessageCircle } from "@/utils/icons";

const MessageCard = () => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-neutral-800 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
          <TbMessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
            New message from Alex
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            5 min ago
          </p>
        </div>
      </div>

      {/* Message Content */}
      <div className="mb-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Hi there! Just checking in about the project status.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 py-2.5 px-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
          Mark as read
        </button>
        <button className="flex-1 py-2.5 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-xl text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors cursor-pointer">
          Reply
        </button>
      </div>
    </div>
  );
};

export default MessageCard;

// Usage:
// <MessageCard />
// Clean message notification card with action buttons`; 