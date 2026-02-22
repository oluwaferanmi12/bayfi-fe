import { Text } from "@/components/texts/text";
import { Beneficiary } from "@/types";
import { getInitials } from "@/utils/get-initials";

export const UserProfile = ({
  beneficiary,
  click,
}: {
  beneficiary: Beneficiary;
  click: (val: Beneficiary) => void;
}) => {
  const accountNameParts = beneficiary.accountName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  return (
    <button
      type="button"
      onClick={() => click(beneficiary)}
      className="flex justify-center flex-col items-center bg-transparent p-0 border-none"
    >
      <div className="bg-[#7D3CE0] h-15 w-15 rounded-full flex items-center justify-center">
        <Text
          type="text-small-white"
          value={getInitials(beneficiary.accountName)}
        />
      </div>
      <div className="flex flex-col items-center">
        {accountNameParts.map((namePart, index) => (
          <Text
            key={`${namePart}-${index}`}
            type="text-small-light"
            value={namePart}
          />
        ))}
      </div>
    </button>
  );
};
