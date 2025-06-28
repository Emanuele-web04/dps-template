"use client";

import Image from "next/image";

const SoftBento = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:items-start gap-4 w-full max-w-7xl mx-auto">
        {/* Mobile/Tablet: All cards stacked. Desktop: Left Column - 2 cards stacked */}
        <div className="flex flex-col gap-4 md:col-span-2 xl:col-span-1">
          {/* Card 1: Main Feature - Cashflow */}
          <div className="bg-gray-100 h-full flex flex-col justify-between rounded-3xl p-4 md:p-6 shadow-sm">
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                CASHFLOW
              </span>
              <h3 className="font-bold text-xl md:text-2xl text-black mt-2 mb-2">
                Real-time balance tracking.
              </h3>
              <p className="text-gray-600 text-sm mb-4 md:mb-6">
                Know exactly when to invest and when to hold back.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="mb-4">
                <span className="text-xs text-gray-500">
                  Outstanding balance
                </span>
                <div className="text-2xl md:text-3xl font-bold text-black">
                  $5,650,490
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$12M outstanding</span>
                  <span>$2.8M available</span>
                  <span>$0.88k</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Jun, 2</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Purchase</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Now</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Processing</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Jun, 14</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Paid</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      On time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Funding */}
          <div className="bg-gray-100 h-full flex flex-col justify-between rounded-3xl p-4 md:p-6 shadow-sm md:col-span-2 xl:col-span-1">
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                FUNDING
              </span>
              <h3 className="font-bold text-lg md:text-xl text-black mt-2 mb-2">
                Capital decisions based on performance metrics.
              </h3>
              <p className="text-gray-600 text-sm mb-4 md:mb-6">
                Not outdated credit reports.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-base md:text-lg">
                  Emma's Shop
                </h4>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 text-sm text-gray-600 mt-1">
                  <span>EU-West 1</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Synced</span>
                  </div>
                  <span>Last run: 06/16/25 2:40PM</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-500 font-medium">
                    100% Operational
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-200 via-blue-400 to-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Continues stacking. Desktop: Right Column - 3 cards stacked */}
        <div className="flex flex-col md:col-span-2 xl:col-span-1 gap-4">
          {/* Card 4: Integrations */}
          <div className="bg-gray-100 h-52 md:h-60 flex flex-col justify-between rounded-3xl p-4 md:p-6 shadow-sm">
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                INTEGRATIONS
              </span>
              <h3 className="font-bold text-lg md:text-xl text-black mt-2 mb-4">
                Integrated with all the tools you already love.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">₿</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">≈</span>
              </div>
              <div className="w-12 h-12 bg-blue-800 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
            </div>
          </div>
          {/* Card 3: Gradient Card */}
          <div className="flex flex-col w-full md:flex-row md:col-span-2 xl:flex-col xl:col-span-1 gap-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-900 w-full h-52 md:h-60 flex flex-col justify-between rounded-3xl p-4 md:p-6 shadow-sm">
              <div>
                <span className="text-xs font-medium text-slate-300 dark:text-slate-400 uppercase tracking-wider">
                  SIMPLICITY
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                  Less is more.
                </h3>
                <p className="text-slate-200 dark:text-slate-300 text-sm max-w-xs mx-auto">
                  Clean design meets powerful functionality.
                </p>
              </div>
            </div>

            {/* Card 5: Performance */}
            <div className="bg-gradient-to-br w-full from-blue-600 to-blue-800 h-52 md:h-60 flex flex-col justify-between rounded-3xl p-4 md:p-6 shadow-sm">
              <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                PERFORMANCES
              </span>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  55<span className="text-3xl">%</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                  Accelerate your business.
                </h3>
                <p className="text-blue-200 text-sm">
                  Smart capital meets performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftBento;
