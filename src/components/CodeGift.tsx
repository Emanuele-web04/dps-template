import CodeBlock from "@/components/Codeblock";
import SimpleTable from "./SimpleTable";
import { LuGift } from "react-icons/lu";

// 1) Store your entire snippet in a string (with proper escapes if needed):
const fullTableCode = `
import React from "react";

const SimpleTable = () => {
  const users = [
    { name: "Sarah Chen", status: "Active", role: "Senior Designer" },
    { name: "Marcus Rodriguez", status: "Away", role: "Lead Developer" },
    { name: "Emma Thompson", status: "Offline", role: "Product Manager" },
    { name: "David Kim", status: "Busy", role: "Frontend Developer" },
    { name: "Lisa Zhang", status: "Active", role: "UX Researcher" },
    { name: "Alex Johnson", status: "Away", role: "Backend Developer" },
    { name: "Maya Patel", status: "Offline", role: "Marketing Lead" },
  ];

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
      <div className="backdrop-blur-2xl rounded-2xl shadow-lg border border-neutral-200/60 bg-white/80 overflow-hidden dark:border-neutral-700/60 dark:bg-neutral-900/80">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-neutral-50/80 dark:bg-neutral-800/80 border-b border-neutral-200 dark:border-neutral-700">
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

            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
              {users.map((user, i) => (
                <tr
                  key={i}
                  className="hover:bg-neutral-50/60 cursor-pointer transition-all duration-200 dark:hover:bg-neutral-800/40"
                >
                  <td className="p-3 sm:p-4 font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="p-3 sm:p-4 hidden md:block text-neutral-600 dark:text-neutral-400 text-sm sm:text-base whitespace-nowrap">
                    {user.role}
                  </td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">
                    <span
                      className={\`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium \${getStatusStyle(user.status)}\`}
                    >
                      <div className={\`w-2 h-2 rounded-full \${getStatusDot(user.status)}\`}></div>
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

export default function CodeGift() {
  return (
    <div className="section-container xl:max-w-7xl!">
      <div className="text-section mb-8">
        <span className="relative">
          <span className="absolute -top-5 rotate-30 -right-7 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-400 backdrop-blur-2xl ring-2 ring-sky-500 rounded-full">
            <LuGift className="text-lg md:text-2xl text-sky-500 m-2" />
          </span>
          <h1 className="title">A little gift for you!</h1>
        </span>
        <p className="p-section mt-2 font-inter">
          Here's a quick snippet showing a table with users name, role and
          status, full responsive, with light and dark mode.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:max-h-130 max-h-full">
        <div className="col-span-1">
          <SimpleTable />
        </div>
        <div className="max-w-full code-scrollbar col-span-1">
          <CodeBlock className="language-jsx">{fullTableCode}</CodeBlock>
        </div>
      </div>
    </div>
  );
}
