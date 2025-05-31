"use client";

import React, { useState, useEffect } from "react";
import {
  getTimeInItaly,
  getIsSleeping,
  getFormattedDate,
} from "@/utils/dateTimeItaly";

export default function ItalyClock() {
  const [timeData, setTimeData] = useState({
    timeInItaly: "",
    isSleeping: false,
    formattedDate: "",
  });

  const updateTime = () => {
    setTimeData({
      timeInItaly: getTimeInItaly(),
      isSleeping: getIsSleeping(),
      formattedDate: getFormattedDate(),
    });
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex flex-col space-y-2">
      <h1 className="text-sm text-gray-600">
        Current time in Italy: <strong>{timeData.timeInItaly}</strong>
      </h1>
      <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
        <div className="flex items-center space-x-1.5">
          {timeData.isSleeping ? (
            <div className="flex items-center space-x-1.5">
              <span className="rounded-full border-1 border-orange-500">
                <div className="w-2 h-2 m-[1px] rounded-full bg-orange-400 animate-pulse" />
              </span>
              <span className="text-xs md:text-sm">Developer sleeping</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1.5">
              <span className="rounded-full border-1 border-green-500">
                <div className="w-2 h-2 m-[1px] rounded-full bg-green-400 animate-pulse" />
              </span>
              <span className="text-xs md:text-sm m-0">1 developer online</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
