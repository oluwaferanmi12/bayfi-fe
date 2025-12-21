import { Text } from "@/components/texts/text";
import { GInput } from "@/components/inputs/GInput";
import verifyBvn from "@/assets/svg/verify-badge.svg";
import { Button } from "@/components/buttons";
import { UIProfile } from "@/interfaces/interfaces";
import { Dispatch, SetStateAction } from "react";
import { useKycProfile } from "@/hooks/custom/profile/useKycProfile";

export const KycForm = () => {
  const { formData, setFormData } = useKycProfile();
  return (
    <div className="w-full">
      <div>
        <Text type="header-32" value="Complete Kyc" />
      </div>
      <div className="mt-1">
        <Text
          type="body-medium"
          value="Kindly complete the kyc to enable you perform more actions on Bayfi"
        />
      </div>
      <div className="mt-4 w-full">
        <div className="flex items-center gap-4 w-full">
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
          label="Bvn"
          placeholder="Enter your BVN number"
          setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
          icon={verifyBvn}
        />

        <Button
          loading={false}
          text="Save changes"
          type="bgGreen"
          fullWidth
          action={() => {
            // handleUpdateProfile();
          }}
        />
      </div>
    </div>
  );
};
