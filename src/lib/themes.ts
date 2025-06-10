import { Theme } from "@/types/theme";
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import { PiOption } from "react-icons/pi";
import { BsShift } from "react-icons/bs";

export const themes: Theme[] = [
    { icon: LuMonitor, themeName: "System", shortcutIcons: [PiOption, BsShift], key:"S"},
    { icon: LuSun, themeName: "Light", shortcutIcons: [PiOption, BsShift], key:"L"},
    { icon: LuMoon, themeName: "Dark", shortcutIcons: [PiOption, BsShift], key:"D"}
]