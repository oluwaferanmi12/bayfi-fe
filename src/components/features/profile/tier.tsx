import Image from "next/image";
import tier1Icon from "@/assets/svg/tier-1.svg";
import tier2Icon from "@/assets/svg/tier-2.svg";
import tier3Icon from "@/assets/svg/tier-3.svg";
import { TierLevel } from "@/types";

const resolveTierLevel = (tier?: TierLevel | string) => {
  if (typeof tier === "string") {
    if (tier === "TIER1" || tier === "TIER2" || tier === "TIER3") return tier;
    const match = tier.match(/[1-3]/);
    if (match) return `TIER${match[0]}` as TierLevel;
  }

  return "TIER1";
};

const tierIconMap: Record<TierLevel, typeof tier1Icon> = {
  TIER1: tier1Icon,
  TIER2: tier2Icon,
  TIER3: tier3Icon,
};

export const Tier = ({ tier }: { tier?: TierLevel | string }) => {
  const resolvedTier = resolveTierLevel(tier);
  return (
    <div className="inline-flex items-center">
      <Image src={tierIconMap[resolvedTier]} alt={`Tier ${resolvedTier}`} />
    </div>
  );
};
