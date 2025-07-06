import { GradientWaitlist } from '@/components/components-pack/waitlists/gradient-waitlist/gradient-waitlist';
import { gradientWaitlistCode } from '@/components/components-pack/waitlists/gradient-waitlist/gradient-waitlist-code';
import { GrainMashWaitlist } from '@/components/components-pack/waitlists/grain-mash-waitlist/grain-mash-waitlist';
import { grainMashWaitlistCode } from '@/components/components-pack/waitlists/grain-mash-waitlist/grain-mash-waitlist-code';
import { 
  GradientWaitlistPreview,
  GrainMashWaitlistPreview,
} from '@/components/components-pack/waitlists/placeholders/placeholders';
import { SingleComponent } from '@/types/component';
import { MinimalWaitlist, minimalWaitlistCode } from '@/components/components-pack/waitlists/minimal-waitlist/minimal-waitlist';
import { MinimalWaitlistPreview } from '@/components/components-pack/waitlists/placeholders/placeholders';
import { SpacialWaitlist } from '@/components/components-pack/waitlists/spacial-waitlist/spacial-waitlist';
import { spacialWaitlistCode } from '@/components/components-pack/waitlists/spacial-waitlist/spacial-waitlist-code';
import { SpacialWaitlistPreview } from '@/components/components-pack/waitlists/placeholders/placeholders';

const gradientWaitlistComponent: SingleComponent = {
  title: "Gradient Waitlist",
  desc: "A modern waitlist page with a dark theme, gradient backgrounds, and an email signup form.",
  code: gradientWaitlistCode,
  slug: "gradient-waitlist",
  preview: GradientWaitlistPreview,
  realPreview: GradientWaitlist,
};

const grainMashWaitlistComponent: SingleComponent = {
  title: "Grain Mash Waitlist",
  desc: "A waitlist page with a grainy, gradient background and a clean, modern layout.",
  code: grainMashWaitlistCode,
  slug: "grain-mash-waitlist",
  preview: GrainMashWaitlistPreview,
  realPreview: GrainMashWaitlist,
};

const spacialWaitlistComponent: SingleComponent = {
  title: "Spacial Waitlist",
  desc: "A space themed waitlist with animated stars, indigo glow, and planet horizon.",
  code: spacialWaitlistCode,
  slug: "spacial-waitlist",
  preview: SpacialWaitlistPreview,
  realPreview: SpacialWaitlist,
};

export const waitlistComponents: SingleComponent[] = [
  gradientWaitlistComponent,
  grainMashWaitlistComponent,
  spacialWaitlistComponent,
]; 