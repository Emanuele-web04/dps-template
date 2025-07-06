import { ComponentType } from "@/types/component";
import Image from "next/image";
import StackIcons from "../ui/stack-icons";
import Link from "next/link";
const ShowcaseComponent = ({
  title,
  desc,
  price,
  stack,
  slug,
  image,
  components,
}: ComponentType) => {
  const count = components.length;
  return (
    <Link
      href={`/components-pack/${slug}`}
      className="p-1.5 rounded-3xl ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800 bg-neutral-100"
    >
      <div className="col-span-1 h-full group cursor-pointer font-inter tracking-tight hover:bg-neutral-100 bg-neutral-50 dark:hover:bg-neutral-950 dark:bg-neutral-900 overflow-clip rounded-[18px] ring-1 ring-neutral-200 dark:ring-neutral-800">
        <div className="overflow-clip aspect-video bg-white">
          <Image
            className="group-hover:scale-120 h-full min-h-[14rem] w-full object-cover transition-all"
            src={image}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col text-primary p-4 w-full gap-y-3">
          <div className="flex h-full w-full justify-between items-center">
            <div className="font-semibold text-lg">{title}</div>
            <div className="flex items-center gap-x-3">
              <p className="px-2 text-sm py-1 ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-lg">
                {count}
              </p>
              <p className="font-medium text-lg">${price}</p>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 h-full text-sm">
            {desc}
          </p>
          <StackIcons stack={stack} />
        </div>
      </div>
    </Link>
  );
};

export default ShowcaseComponent;
