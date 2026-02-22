"use client";

import eyeIcon from "@/assets/svg/eyeIconWhite.svg";
import { Text } from "@/components/texts/text";
import { useProfileStore } from "@/store/userProfileStore";
import Image from "next/image";
import { useWalletStore } from "@/store/walletStore";
import { FormatNumber } from "@/utils/formatter";
import { useToggleWalletStatus } from "@/hooks/query";
import { useQueryClient } from "@tanstack/react-query";
export const DarkBalanceWrapper = () => {
  const queryClient = useQueryClient();
  const { wallet } = useWalletStore();
  const { profile } = useProfileStore();
  const mutateWalletStatus = useToggleWalletStatus((data) => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
  });
  return (
    <>
      <div className="bg-bayfi-black-700 p-4 lg:py-4   rounded-2xl">
        <div className="flex justify-center mb-2">
          <button
            disabled={mutateWalletStatus.isPending}
            className={`bg-[#FFFFFF1C] rounded-full flex gap-2 items-center px-6 py-1 ${mutateWalletStatus.isPending && "opacity-50"}`}
            onClick={() => {
              mutateWalletStatus.mutate(!profile?.isBalanceVisible);
            }}
          >
            <div className="relative">
              <Image src={eyeIcon} alt="" />
              {!profile?.isBalanceVisible && (
                <span className="absolute left-1/2 top-1/2 w-4 h-[1.5px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" />
              )}
            </div>
            <Text type="text-small-white" value="Available balance" />
          </button>
        </div>

        <div className="flex justify-center">
          {profile && wallet && (
            <Text
              type="number-small-white"
              value={
                profile.isBalanceVisible
                  ? `NGN  ${FormatNumber(wallet?.walletBalance ?? 0)}`
                  : "****"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};
