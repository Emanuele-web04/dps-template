export const frameLabelCode = `import React from "react";

interface FrameLabelProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

const FrameLabel = ({ children, text = "Label", className = "" }: FrameLabelProps) => {
  return (
    <span className={\`border border-dotted relative border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-neutral-900 backdrop-blur-2xl px-3 py-2 inline-block \${className}\`}>
      {/* Corner dots */}
      <span className="inline-flex absolute -top-1.5 -left-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      
      {/* Content */}
      <span className="italic font-light text-sm text-gray-700 dark:text-gray-300">
        {children || text}
      </span>
    </span>
  );
};

export default FrameLabel;

// Usage examples:
// <FrameLabel text="Custom Label" />
// <FrameLabel>Components</FrameLabel>
// <FrameLabel className="text-blue-500">Special Label</FrameLabel>
`.trim();

export const fullTableCode = `
{/* Import people.ts from the folder you've put it in */}
{/* eg. import { people } from @/lib/people */}
import React from "react";
import Image from "next/image";

const SimpleTable = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800";
      case "Away":
        return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800";
      case "Busy":
        return "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
      case "Offline":
        return "bg-neutral-50 text-neutral-600 border border-neutral-200 dark:bg-neutral-800/50 dark:text-neutral-400 dark:border-neutral-700";
      default:
        return "bg-neutral-50 text-neutral-600 border border-neutral-200 dark:bg-neutral-800/50 dark:text-neutral-400 dark:border-neutral-700";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500";
      case "Away":
        return "bg-amber-500";
      case "Busy":
        return "bg-red-500";
      case "Offline":
        return "bg-neutral-400";
      default:
        return "bg-neutral-400";
    }
  };

  return (
    <div className="w-full h-full">
      <div className="backdrop-blur-2xl rounded-2xl shadow-lg border border-neutral-200/60 bg-white overflow-hidden dark:border-neutral-700/60 dark:bg-neutral-900/80">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-neutral-50/80 font-inter tracking-tight dark:bg-neutral-800/80 border-b border-neutral-200 dark:border-neutral-700">
              <tr>
                <th className="text-left p-3 sm:p-4 font-semibold text-neutral-800 dark:text-neutral-200 text-sm sm:text-base tracking-wide">
                  Name
                </th>
                <th className="text-left hidden md:block p-3 sm:p-4 font-semibold text-neutral-800 dark:text-neutral-200 text-sm sm:text-base tracking-wide">
                  Role
                </th>
                <th className="text-left p-3 sm:p-4 font-semibold text-neutral-800 dark:text-neutral-200 text-sm sm:text-base tracking-wide">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y font-inter tracking-tight divide-neutral-100 dark:divide-neutral-700/60">
              {people.map((user, i) => (
                <tr
                  key={i}
                  className="hover:bg-neutral-100 cursor-pointer transition-all duration-200 dark:hover:bg-neutral-800/40"
                >
                  <td className="p-3 sm:p-4 font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base whitespace-nowrap">
                    <div className="flex gap-2 items-center">
                      <Image
                        width={80}
                        height={80}
                        src={user.src}
                        alt={user.name}
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 object-cover"
                      />
                      {user.name}
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 hidden md:block text-neutral-600 dark:text-neutral-400 text-sm sm:text-base whitespace-nowrap">
                    {user.role}
                  </td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">
                    <span
                      className={\`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium \${getStatusStyle(
                        user.status
                      )}\`}
                    >
                      <div
                        className={\`w-2 h-2 rounded-full \${getStatusDot(
                          user.status
                        )}\`}
                      ></div>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
`.trim();