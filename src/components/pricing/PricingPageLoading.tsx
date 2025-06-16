import React from "react";

const PricingPageLoading: React.FC = () => {
  return (
    <div className="bg-clean min-h-screen flex flex-col items-center justify-center mx-auto sm:p-12 p-6 w-full">
      <div className="flex flex-col mt-10 max-w-7xl gap-12">
        {/* Header */}
        <div className="flex flex-col w-full text-center gap-8">
          <div>
            <h1 className="title bg-gradient-to-b py-3 pr-0.5 bg-clip-text text-transparent from-neutral-950 via-neutral-900 to-neutral-600 dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-500">
              Pricing
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Find the best price for your necessity.
            </p>
          </div>

          {/* Loading Segmented Picker */}
          <div className="flex justify-center">
            <div className="relative inline-flex bg-white shadow-md dark:bg-neutral-900 ring-neutral-200 dark:ring-neutral-800 ring-1 rounded-xl p-1">
              <div className="flex gap-2">
                <div className="w-20 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
                <div className="w-20 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
                <div className="w-20 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Pricing Content */}
        <div className="flex font-inter text-primary tracking-tight flex-col gap-3">
          <h3 className="h6-title text-center">Loading...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-2 col-span-1 rounded-3xl ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-950 h-full"
              >
                <div className="flex flex-col flex-1 h-full p-2 gap-y-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 min-h-[500px] animate-pulse">
                  <div className="flex p-4 bg-white dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 rounded-xl flex-col gap-y-4 items-start">
                    <div className="flex items-center gap-x-4">
                      <div className="ring-1 ring-neutral-300 dark:ring-neutral-700 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-8 h-8"></div>
                      <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
                    </div>
                    <div className="h-16 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex items-start flex-col gap-2">
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-32"></div>
                      </div>
                      <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPageLoading;
