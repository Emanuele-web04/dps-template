import { Framework } from "@/types/framework";
import { RiNextjsLine } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiLucide } from "react-icons/si";

export const frameworks: Framework[] = [
    {icon: RiNextjsLine, name: "Next.js"},
    {icon: GrSwift, name: "SwiftUI"},
    {icon: FaReact, name: "React"},
    {icon: SiTailwindcss, name: "TailwindCSS"},
    {icon: BiLogoTypescript, name: "TypeScript"},
    {icon: TbBrandFramerMotion, name: "Framer Motion"},
    {icon: SiLucide, name: "Lucide Icons"},
] 