import Image from "next/image";
import tier1Icon from "@/assets/svg/tier-1.svg";
import tier2Icon from "@/assets/svg/tier-2.svg";
import tier3Icon from "@/assets/svg/tier-3.svg";

export type TierLevel = 1 | 2 | 3;

const resolveTierLevel = (tier?: TierLevel | string) => {
  if (typeof tier === "number") {
    if (tier === 1 || tier === 2 || tier === 3) return tier;
    return 1;
  }

  if (typeof tier === "string") {
    const match = tier.match(/[1-3]/);
    if (match) return Number(match[0]) as TierLevel;
  }

  return 1;
};

const tierIconMap: Record<TierLevel, typeof tier1Icon> = {
  1: tier1Icon,
  2: tier2Icon,
  3: tier3Icon,
};

export const Tier = ({ tier }: { tier?: TierLevel | string }) => {
  const resolvedTier = resolveTierLevel(tier);
  return (
    <div className="inline-flex items-center">
      <Image src={tierIconMap[resolvedTier]} alt={`Tier ${resolvedTier}`} />
    </div>
  );
};
