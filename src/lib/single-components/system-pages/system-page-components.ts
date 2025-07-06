import { SingleComponent } from "@/types/component";
import { Animated404 } from "@/components/components-pack/system-pages/animated-404/animated-404";
import { animated404Code } from "@/components/components-pack/system-pages/animated-404/animated-404-code";
import Matrix404 from "@/components/components-pack/system-pages/matrix-404/matrix-404";
import { matrix404Code } from "@/components/components-pack/system-pages/matrix-404/matrix-404-code";
import { Simple404 } from "@/components/components-pack/system-pages/simple-404/simple-404";
import { simple404Code } from "@/components/components-pack/system-pages/simple-404/simple-404-code";

const matrix404Component: SingleComponent = {
  title: "Matrix 404",
  desc: "Matrix theme 404 not found page with digital rain animation.",
  code: matrix404Code,
  slug: "matrix-404",
  preview: Matrix404,
};

const simple404Component: SingleComponent = {
  title: "Simple 404",
  desc: "Clean and modern 404 not found page with illustration.",
  code: simple404Code,
  slug: "simple-404",
  preview: Simple404,
};

const animated404Component: SingleComponent = {
  title: "Animated 404",
  desc: "Interactive 404 page with grid background, mouse tracking, and dark mode support.",
  code: animated404Code,
  slug: "animated-404",
  preview: Animated404,
};

export const systemPagesComponents: SingleComponent[] = [
  matrix404Component,
  animated404Component,
  simple404Component,
];
