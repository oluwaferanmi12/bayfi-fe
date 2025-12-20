import { useEffect, useState } from "react";

type HeightPreset = "short" | "medium" | "full";

const vhMap: Record<HeightPreset, number> = {
  short: 50,
  medium: 70,
  full: 100,
};

export function useBottomDrawerSize(open: boolean, height: HeightPreset = "short") {
  const [sizePx, setSizePx] = useState<number>(0);

  useEffect(() => {
    if (!open) return;

    const update = () => {
      const vh = vhMap[height];
      const px = Math.round(window.innerHeight * (vh / 100));
      setSizePx(px);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [open, height]);

  return sizePx || undefined; // undefined lets antd fallback
}
