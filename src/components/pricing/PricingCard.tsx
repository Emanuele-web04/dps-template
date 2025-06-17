"use client";

import React from "react";
import { Pricing } from "@/types/pricing";
import {
  HiOutlineArrowSmRight,
  LuCirclePlus,
  TbCircleCheckFilled,
  TbCirclePlusFilled,
} from "@/utils/icons";
import BuyPrice from "@/components/ui/buy-price";

interface PricingCardProps {
  pricing: Pricing;
  variant?: "neutral" | "orange";
  filter: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  pricing,
  variant = "neutral",
  filter,
}) => {
  const Icon = pricing.icon;

  // Color variants for consistent theming
  const getVariantClasses = () => {
    if (variant === "orange") {
      return {
        outerCard:
          "ring-orange-200 dark:ring-orange-900 bg-orange-50 dark:bg-orange-950/20",
        innerCard:
          "hover:bg-orange-100 dark:hover:bg-orange-950/30 bg-orange-50/50 dark:bg-orange-900/20 ring-orange-200 dark:ring-orange-800",
        contentCard:
          "bg-white dark:bg-orange-950 ring-orange-200 dark:ring-orange-700",
        iconContainer:
          "ring-orange-300 dark:ring-orange-700 bg-orange-100 dark:bg-orange-900",
        divider: "bg-orange-600 dark:bg-orange-400",
        dividerIcon: "text-orange-600 dark:text-orange-400",
        checkIcon: "text-orange-500 dark:text-orange-700",
        textColor: "text-neutral-800 dark:text-neutral-300",
        descColor: "text-neutral-600 dark:text-neutral-400",
      };
    }

    return {
      outerCard:
        "ring-neutral-200 dark:ring-neutral-800 bg-neutral-50 dark:bg-neutral-900/50",
      innerCard:
        "hover:bg-neutral-100 dark:hover:bg-neutral-950 bg-neutral-50 dark:bg-neutral-900 ring-neutral-200 dark:ring-neutral-800",
      contentCard:
        "bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800",
      iconContainer:
        "ring-neutral-300 dark:ring-neutral-700 bg-neutral-100 dark:bg-neutral-900",
      divider: "bg-neutral-400 dark:bg-neutral-400",
      dividerIcon: "text-neutral-600 dark:text-neutral-400",
      checkIcon: "text-sky-500 dark:text-sky-400",
      textColor: "text-neutral-800 dark:text-neutral-300",
      descColor: "text-neutral-600 dark:text-neutral-400",
    };
  };

  const colors = getVariantClasses();

  return (
    <div
      className={`p-2 col-span-1 rounded-3xl ring-1 ${colors.outerCard} h-full ${filter === "all" ? "md:min-w-md sm:min-w-sm min-w-xs" : ""} flex flex-col`}
    >
      <div
        className={`flex p-3 md:p-4 ${colors.contentCard} shadow-md shadow-black/5 rounded-2xl flex-col gap-y-6 items-start flex-shrink-0`}
      >
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <div className={`ring-1 rounded-lg ${colors.iconContainer}`}>
            <Icon className="w-4 h-4 m-2" />
          </div>
          <h6 className="h6-title">{pricing.title}</h6>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="text-5xl md:text-6xl font-inter font-bold">{`$${pricing.price}`}</p>
          <div className="flex items-start flex-col">
            <p className={`${colors.textColor} font-medium`}>Lifetime Access</p>
            <p
              className={`${colors.descColor} text-sm font-inter tracking-tight`}
            >
              {pricing.desc}
            </p>
          </div>
        </div>
        <div className="flex items-center w-full justify-between text-white dark:text-black md:p-4 md:py-2.5 px-3 py-1.5 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-300 dark:ring-neutral-800 ring-1 ring-neutral-700 rounded-xl">
          <p className="font-inter tracking-tight font-medium text-sm md:text-base">Get Access Now</p>
          <HiOutlineArrowSmRight className="w-5 h-5"/>
        </div>
      </div>

      <div className="flex py-3 px-2 font-mono tracking-tight flex-col gap-y-3 flex-grow">
        <p className="text-neutral-500">Features</p>
        {pricing.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-x-3">
            <TbCircleCheckFilled
              className={`w-4 h-4 ${colors.checkIcon} relative top-0.5 flex-shrink-0`}
            />
            <p className="text-sm flex-1 text-left text-primary font-medium">
              {feature}
            </p>
          </div>
        ))}
      </div>

      {pricing.extra && (
        <div className="flex font-mono flex-col px-2 pb-2 gap-y-3 text-primary w-full">
          <div className="flex items-center py-1 gap-3">
            <span
              className={`w-full flex-1 flex h-px ${colors.divider}`}
            ></span>
            <LuCirclePlus className={`${colors.dividerIcon} w-4 h-4`} />
            <p className={`${colors.dividerIcon}`}>Plus</p>
            <span
              className={`w-full flex-1 flex h-px ${colors.divider}`}
            ></span>
          </div>
          <div className="flex items-start gap-x-4">
            <TbCirclePlusFilled
              className={`w-4 h-4 ${colors.checkIcon} relative top-0.5 flex-shrink-0`}
            />
            <p className="text-sm flex-1 text-left text-primary font-medium">
              <>
                Everything in <strong>Components Bundle</strong>
              </>
            </p>
          </div>
          <div className="flex items-start gap-x-4">
            <TbCirclePlusFilled
              className={`w-4 h-4 ${colors.checkIcon} relative top-0.5 flex-shrink-0`}
            />
            <p className="text-sm flex-1 text-left text-primary font-medium">
              <>
                Everything in <strong>Templates Bundle</strong>
              </>
            </p>
          </div>
        </div>
      )}

      <div className="p-2">
       
        {/* <BuyPrice
          text="Get Access Now"
          price={pricing.price}
          fontSize="font-semibold"
          padding={"px-3 py-1.5 mt-4 w-full!"}
        /> */}
      </div>
    </div>
  );
};

export default PricingCard;
