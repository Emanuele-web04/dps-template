import { HeroLabel } from "@/types/type";
import { TbDownload } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export const heroLabels: HeroLabel[] = [
    { icon: TbDownload, text: "Save" },
    { icon: BiCommand, text: "Paste" },
    { icon: HiOutlineRocketLaunch, text: "Ship" },
]