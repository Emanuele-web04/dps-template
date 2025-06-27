import { SingleComponent } from "@/types/component";
import FullNavGlass from "@/components/components-pack/navbars/mobile-accordion-navbar";
import { mobileAccordionNavbarCode } from "@/components/components-pack/navbars/mobile-accordion-navbar-code";
import FloatingCrestNavbar from "@/components/components-pack/navbars/floating-crest-navbar";
import { floatingCrestNavbarCode } from "@/components/components-pack/navbars/floating-crest-navbar-code";
import { fullTableCode } from "../code";
import KhronaHero from "@/components/hero-sections/KhronaHero";
import SearchNavbar from "@/components/components-pack/navbars/search-navbar";
import { searchNavbarCode } from "@/components/components-pack/navbars/search-navbar-code";


const searchNavbar: SingleComponent = {
  title: "Floating Glass Navbar",
  desc: "Floating navbar with a searchbar, shortcuts and glass effect.",
  code: searchNavbarCode,
  slug: "search-navbar",
  preview: SearchNavbar,
};

const fullNavbarGlass: SingleComponent = {
  title: "Full Navbar Glassmorphism",
  desc: "Full width navbar with glassmorphism and accordion mobile menu.",
  code: mobileAccordionNavbarCode,
  slug: "full-navbar-glass",
  preview: FullNavGlass,
};
const floatingCrest: SingleComponent = {
  title: "Floating Crest Navbar",
  desc: "Floating dark navbar with a crest logo.",
  code: floatingCrestNavbarCode,
  slug: "floating-crest-navbar",
  preview: FloatingCrestNavbar,
};

export const navbarComponents: SingleComponent[] = [
  fullNavbarGlass,
  floatingCrest,
  searchNavbar,
];

