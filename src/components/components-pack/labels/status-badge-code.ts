export const statusBadgeCode = `import React from "react";
import { LuCheck, TbX, IoIosAlert, LuCircleCheck } from "@/utils/icons";
import { cn } from "@/lib/cn";

type StatusType = "success" | "error" | "warning" | "info";

interface StatusBadgeProps {
  status?: StatusType;
  text?: string;
  className?: string;
}

const statusConfig = {
  success: {
    icon: LuCheck,
    text: "Success",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-400",
    iconColor: "text-green-600 dark:text-green-400",
  },
  error: {
    icon: TbX,
    text: "Error",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    textColor: "text-red-700 dark:text-red-400",
    iconColor: "text-red-600 dark:text-red-400",
  },
  warning: {
    icon: IoIosAlert,
    text: "Warning",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    textColor: "text-yellow-700 dark:text-yellow-400",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  info: {
    icon: LuCircleCheck,
    text: "Info",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-400",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
};

export default function StatusBadge({
  status = "success",
  text,
  className,
}: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;
  const displayText = text || config.text;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-4 h-4 rounded-full bg-current/10",
        config.iconColor
      )}>
        <Icon className="w-3 h-3" />
      </div>
      {displayText}
    </div>
  );
}`; 