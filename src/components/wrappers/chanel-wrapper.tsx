import bitcoinIcon from "@/assets/svg/bitcoin-small-icon.svg";
import giftCardIcon from "@/assets/svg/gift-card-chat-icon.svg";
import Image from "next/image";

export const ChannelWrapper = ({ type }: { type: "giftCard" | "bitcoin" }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Image src={type === "bitcoin" ? bitcoinIcon : giftCardIcon} alt="" />
        <p className="font-grotesk-medium">{type === "giftCard" ? "Gift card" : "Crypto"}</p>
      </div>
    </>
  );
};
