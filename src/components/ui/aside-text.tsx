import { ComponentType } from "@/types/component";
import { TemplateType } from "@/types/template";
import Link from "next/link";

interface TemplateProps {
    array: TemplateType[],
    title: string,
    type: 'template'
}

interface ComponentProps {
    array: ComponentType[],
    title: string,
    type: 'component'
}

type AsideTextProps = TemplateProps | ComponentProps;

const AsideText = (props: AsideTextProps) => {
  const { array, title, type } = props;
  
  return (
    <>
      <strong className="text-base text-primary font-semibold">{title}</strong>
      {type === 'template' ? 
        array.map((t, i) => (
          <Link key={i} href={`/templates/${t.slug}`}>
            <p className="aside-text font-normal! cursor-pointer ml-0 transition-all hover:ml-2 hover:text-black dark:hover:text-white dark:text-neutral-300 text-neutral-800">
              {t.title}
            </p>
          </Link>
        ))
        :
        array.map((t, i) => (
          <Link key={i} href={`/templates/${t.slug}`}>
            <p className="aside-text font-normal! cursor-pointer ml-0 transition-all hover:ml-2 hover:text-black dark:hover:text-white dark:text-neutral-300 text-neutral-800">
              {t.title}
            </p>
          </Link>
        ))
      }
    </>
  );
};

export default AsideText