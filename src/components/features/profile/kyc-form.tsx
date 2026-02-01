"use client";
import { Text } from "@/components/texts/text";
import { GInput } from "@/components/inputs/GInput";
import verifyBvn from "@/assets/svg/verify-badge.svg";
import { Button } from "@/components/buttons";
import { useKycProfile } from "@/hooks/custom/profile/useKycProfile";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDoKycBvn, useDoKycNin } from "@/hooks/query";
import { useQueryClient } from "@tanstack/react-query";
import checkIcon from "@/assets/svg/check-circle-green.svg";
import Image from "next/image";

export const KycForm = () => {
  const queryClient = useQueryClient();
  const { formData, setFormData, bvn, setBvn, profile, nin, setNin } =
    useKycProfile();
  const router = useRouter();
  const doKycBvn = useDoKycBvn(() => {
    toast.success("KYC completed successfully");
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    router.push("/dashboard");
  });
  const doKycNin = useDoKycNin(() => {
    toast.success("KYC completed successfully");
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    router.push("/dashboard");
  });
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <div>
          <Text type="header-32" value="Complete Kyc" />
        </div>
        <div className="mt-1">
          <Text
            type="body-medium"
            value="Kindly complete the kyc to enable you perform more actions on Bayfi"
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <div className="flex lg:flex-row flex-col items-center lg:gap-4 w-full">
          <GInput
            label="First name"
            placeholder="Enter first name"
            inputVal={formData.firstName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                firstName: val,
              }))
            }
          />
          <GInput
            label="Last name"
            placeholder="Enter last name"
            inputVal={formData.lastName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                lastName: val,
              }))
            }
          />
        </div>
        <div className="flex items-center gap-2 ">
          <GInput
            value={nin}
            onChange={(e) => {
              setNin(e.target.value);
            }}
            label="NIN"
            placeholder="Enter your NIN number"
            setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
            icon={verifyBvn}
            disabled={profile?.tierLevel !== "TIER1"}
          />
          {profile?.tierLevel === "TIER2" && (
            <div>
              <Image src={checkIcon} alt="Verified" />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 ">
          <GInput
            value={bvn}
            onChange={(e) => {
              setBvn(e.target.value);
            }}
            label="Bvn"
            placeholder="Enter your BVN number"
            setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
            icon={verifyBvn}
            disabled={profile?.tierLevel !== "TIER2"}
          />
          {profile?.tierLevel === "TIER3" && (
            <div>
              <Image src={checkIcon} alt="Verified" />
            </div>
          )}
        </div>

        {profile?.tierLevel !== "TIER3" && (
          <Button
            loading={doKycBvn.isPending}
            text="Save changes"
            type="bgGreen"
            fullWidth
            action={() => {
              // handleUpdateProfile();
              if (profile?.tierLevel === "TIER1") {
                doKycNin.mutate({
                  nin,
                });
                return;
              } else {
                doKycBvn.mutate({
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  bvn,
                });
              }
            }}
          />
        )}
      </div>
    </div>
  );
};
