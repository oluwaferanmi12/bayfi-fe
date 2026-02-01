import Image from "next/image";
import bronzeMedal from "@/assets/svg/bronze-medal.svg";
import silverMedal from "@/assets/svg/silver-medal.svg";
import goldMedal from "@/assets/svg/gold-medal.svg";
import { TierLevel } from "@/types";

const resolveTierLevel = (tier?: TierLevel | string) => {
  if (typeof tier === "string") {
    if (tier === "TIER1" || tier === "TIER2" || tier === "TIER3") return tier;
    const match = tier.match(/[1-3]/);
    if (match) return `TIER${match[0]}` as TierLevel;
  }

  return "TIER1";
};

const tierMedalMap: Record<TierLevel, typeof bronzeMedal> = {
  TIER1: bronzeMedal,
  TIER2: silverMedal,
  TIER3: goldMedal,
};

export const TierVertical = ({ tier }: { tier?: TierLevel | string }) => {
  const resolvedTier = resolveTierLevel(tier);
  const tierLabel = `Tier ${resolvedTier.replace("TIER", "")}`;
  return (
    <div className="inline-flex flex-col items-center ">
      <Image
        src={tierMedalMap[resolvedTier]}
        alt={`Tier ${resolvedTier}`}
        width={36}
        height={48}
      />
      <p className="text-sm font-grotesk-semi-bold text-[#20242A]">
        {tierLabel}
      </p>
    </div>
  );
};
