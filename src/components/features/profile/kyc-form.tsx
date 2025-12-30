"use client";
import { Text } from "@/components/texts/text";
import { GInput } from "@/components/inputs/GInput";
import verifyBvn from "@/assets/svg/verify-badge.svg";
import { Button } from "@/components/buttons";
import { useKycProfile } from "@/hooks/custom/profile/useKycProfile";
import { useDoKyc } from "@/hooks/query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const KycForm = () => {
  const { formData, setFormData, bvn, setBvn } = useKycProfile();
  const router = useRouter();
  const doKyc = useDoKyc(() => {
    toast.success("KYC completed successfully");
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
        <GInput
          value={bvn}
          onChange={(e) => {
            setBvn(e.target.value);
          }}
          label="Bvn"
          placeholder="Enter your BVN number"
          setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
          icon={verifyBvn}
        />

        <Button
          loading={doKyc.isPending}
          text="Save changes"
          type="bgGreen"
          fullWidth
          action={() => {
            // handleUpdateProfile();
            doKyc.mutate({
              firstName: formData.firstName,
              lastName: formData.lastName,
              bvn,
            });
          }}
        />
      </div>
    </div>
  );
};
