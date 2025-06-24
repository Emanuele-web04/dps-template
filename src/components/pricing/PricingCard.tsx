"use client";

import React from "react";
import { Pricing } from "@/types/pricing";
import {
  HiOutlineArrowSmRight,
  LuCheck,
  LuCirclePlus,
  TbCircleCheckFilled,
  TbCirclePlusFilled,
} from "@/utils/icons";
import BuyPrice from "@/components/ui/buy-price";
import { cn } from "@/lib/cn";

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
  const title = pricing.title;
  const isAll = title === "All";

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
        "ring-neutral-200 dark:ring-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 overflow-clip",
      inverseOuterCard:
        "ring-neutral-200 dark:ring-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 ",
      innerCard:
        "hover:bg-neutral-100 dark:hover:bg-neutral-950 bg-neutral-50 dark:bg-neutral-900 ring-neutral-200 dark:ring-neutral-800",
      contentCard:
        "bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800",
      inverseContentCard:
        "dark:bg-white bg-neutral-800 ring-1 dark:ring-neutral-300 ring-neutral-600",
      iconContainer:
        "ring-neutral-300 dark:ring-neutral-700 bg-neutral-100 dark:bg-neutral-900",
      button:
        "flex items-center w-full justify-between text-white dark:text-black p-4 py-2.5 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-300 dark:ring-neutral-800 ring-1 ring-neutral-700 rounded-xl",
      inverseButton:
        "flex items-center w-full justify-between dark:text-white text-black p-4 py-2.5 bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-800 from-white to-neutral-100 dark:ring-neutral-800 ring-1 dark:ring-neutral-700 rounded-xl",
      divider: "bg-neutral-500",
      dividerIcon: "text-neutral-500",
      checkIcon: "text-sky-500 dark:text-sky-400",
      textColor: "text-neutral-800 dark:text-neutral-300",
      descColor: "text-neutral-600 dark:text-neutral-400",
    };
  };

  const colors = getVariantClasses();

  return (
    <div
      className={`p-2 col-span-1 rounded-3xl ring-1 z-50 ${colors.outerCard} relative h-full ${filter === "all" ? "md:min-w-md sm:min-w-sm min-w-xs" : ""} flex flex-col`}
    >
      {isAll && (
        <div className="-z-1">
          {/* Pink Blur */}
          <span
            className="absolute bottom-0 left-4 w-32 h-35 animate-pulse bg-pink-500 opacity-40 blur-3xl rounded-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
          {/* Yellow Blur */}
          <span
            className="absolute -bottom-4 right-0 w-36 h-35 animate-pulse bg-amber-500 opacity-40 blur-3xl rounded-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
          {/* Green Blur */}
          <span
            className="absolute bottom-0 right-1/3 w-28 h-30 animate-pulse bg-green-500 opacity-40 blur-3xl rounded-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
          <span
            className="absolute bottom-0 right-1/2 w-28 h-25 animate-pulse bg-sky-500 opacity-40 blur-3xl rounded-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
          <span
            className="absolute top-0 left-0 w-30 h-40 animate-pulse bg-neutral-800 dark:bg-neutral-300 opacity-40 blur-3xl rounded-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </div>
      )}

      <div
        className={`flex p-3 md:p-4 ${colors.contentCard} shadow-md shadow-black/5 rounded-2xl flex-col gap-y-6 items-start flex-shrink-0`}
      >
        <div className="flex flex-col items-start w-full justify-between">
          {/* <div className={`ring-1 rounded-lg ${colors.iconContainer}`}>
            <Icon className="w-4 h-4 m-2" />
          </div> */}
          <h6
            className={cn(
              "h6-title",
            )}
          >
            {title}
          </h6>
          <p className={`${colors.textColor} font-medium`}>Lifetime Access</p>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex items-end">
            <p
              className={cn(
                "text-5xl md:text-6xl font-inter font-bold",
              )}
            >{`$${pricing.price}`}</p>
            
              <p className="text-neutral-400 line-through ml-2 font-semibold relative bottom-1 text-2xl">
                ${pricing.discountPrice}
              </p>
         
          </div>
          <p
            className={`${colors.descColor} text-sm font-inter relative bottom-2 tracking-tight`}
          >
            {pricing.desc}
          </p>
        </div>
        <div className={cn(colors.button)}>
          <p className="font-inter tracking-tight font-medium text-sm md:text-base">
            Get Access Now
          </p>
          <HiOutlineArrowSmRight className="w-5 h-5" />
        </div>
      </div>

      <div className="flex py-3 px-2 font-inter flex-col gap-y-3 flex-grow">
        <p className="text-neutral-500">Features</p>
        {pricing.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-x-3">
            <LuCheck
              className={`w-4 h-4  relative top-1 flex-shrink-0`}
            />
            <p
              className={cn(
                "text-sm md:text-base flex-1 text-left font-medium",
              )}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      {pricing.extra && (
        <div className="flex font-inter flex-col px-2 pb-2 gap-y-3 text-primary w-full">
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
            <p
              className={cn(
                "text-sm flex-1 text-left font-medium",
               
              )}
            >
              <>
                Everything in <strong>Components Bundle</strong>
              </>
            </p>
          </div>
          <div className="flex items-start gap-x-4">
            <TbCirclePlusFilled
              className={`w-4 h-4 ${colors.checkIcon} relative top-0.5 flex-shrink-0`}
            />
            <p
              className={cn(
                "text-sm flex-1 text-left font-medium",
              )}
            >
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
