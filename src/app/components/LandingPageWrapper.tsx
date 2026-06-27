import { ValurHomepage } from "./ValurHomepage";

// The landing page renders the Knattspyrna Akademian homepage from the design kit
// (design-kit/landing/valur-homepage.html), ported faithfully in ValurHomepage.
// Its CTAs call onEnter to advance into the app.
export function LandingPageWrapper({ onEnter }: { onEnter: () => void }) {
  return <ValurHomepage onEnter={onEnter} />;
}
