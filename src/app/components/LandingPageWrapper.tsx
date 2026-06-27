import { useEffect } from "react";
import FrameLanding from "@/imports/Frame";

export function LandingPageWrapper({ onEnter }: { onEnter: () => void }) {
  useEffect(() => {
    // Intercept clicks on all anchors and certain elements to trigger onEnter
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href], button');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        onEnter();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [onEnter]);

  return <FrameLanding />;
}
