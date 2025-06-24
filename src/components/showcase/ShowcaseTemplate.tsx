import React from "react";
import AddToCart from "@/components/ui/add-to-cart";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { TemplateType } from "@/types/template";
import StackIcons from "../ui/stack-icons";
import Link from "next/link";

const ShowcaseTemplate = ({
  title,
  desc,
  images,
  stack,
  price,
  slug,
}: TemplateType) => {
  const newImages = (images || []).slice(0, 3);
  return (
    <Link
      href={`/templates/${slug}`}
      className="flex flex-col fade-in-up gap-y-6 col-span-7 hover:-translate-y-3 transition-all ease-in-out hover:shadow-lg hover:scale-[101%] rounded-3xl lg:p-4 "
    >
      <div className="w-full flex justify-between">
        <div className="flex gap-y-2 flex-col">
          <div className="flex w-full items-center justify-between">
            <h3 className="h3-title text-primary">{title}</h3>
            <span className="md:hidden block">
              <StackIcons stack={stack} />
            </span>
          </div>
          <p className="p-card md:max-w-sm! max-w-full! text-base! text-left!">
            {desc}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-x-4">
          <StackIcons stack={stack} />
          <AddToCart
            price={price}
            text="Buy now"
            padding="py-2 h-fit px-4 w-fit"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2">
        {newImages.map((img, i) => (
          <Image
            className={cn(
              "w-full h-full ring-1 shadow-lg dark:ring-neutral-600 ring-neutral-200 rounded-2xl col-span-1 object-contain",
              i > 0 && "hidden md:block" // hide all except the first on mobile
            )}
            key={i}
            src={img}
            alt=""
            width={1000}
            height={1000}
          />
        ))}
      </div>
      <AddToCart
        price={price}
        text="Buy now"
        padding="py-1.5 w-full! md:hidden block"
      />
    </Link>
  );
};

export default ShowcaseTemplate;
