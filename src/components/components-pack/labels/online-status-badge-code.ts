export const onlineStatusBadgeCode = `
import React from "react";

interface OnlineStatusBadgeProps {
  isOnline?: boolean;
  userCount?: number;
  label?: string;
}

const OnlineStatusBadge = ({ 
  isOnline = true, 
  userCount = 1, 
  label 
}: OnlineStatusBadgeProps) => {
  const defaultLabel = isOnline 
    ? \`\${userCount} \${userCount === 1 ? 'developer' : 'developers'} online\`
    : 'Developer offline';

  return (
    <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300">
      <div className="flex items-center space-x-1.5">
        <span className={\`rounded-full border-1 \${
          isOnline ? 'border-green-500' : 'border-orange-500'
        }\`}>
          <div className={\`w-2 h-2 m-[1px] rounded-full animate-pulse \${
            isOnline ? 'bg-green-400' : 'bg-orange-400'
          }\`} />
        </span>
        <span className="text-xs md:text-sm">
          {label || defaultLabel}
        </span>
      </div>
    </div>
  );
};

export default OnlineStatusBadge;
`; 