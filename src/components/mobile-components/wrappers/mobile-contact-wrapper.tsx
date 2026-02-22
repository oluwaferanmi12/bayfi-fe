import { Beneficiary } from "@/types";
import { getInitials } from "@/utils/get-initials";

export const MobileContactWrapper = ({
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
      className="flex bg-transparent p-0 border-none"
    >
      <div className="bg-white p-4 w-25 rounded-lg flex flex-col items-center justify-center">
        <div className="bg-[#D1B2FF] aspect-square w-10 flex items-center justify-center h-10 rounded-full">
          <p className="text-[#5E1DBB] font-grotesk-bold">
            {getInitials(beneficiary.accountName)}
          </p>
        </div>
        <div className="flex flex-col items-center">
          {accountNameParts.map((namePart, index) => (
            <p
              key={`${namePart}-${index}`}
              className="text-text-color-500 font-grotesk-semi-bold text-center"
            >
              {namePart}
            </p>
          ))}
        </div>
      </div>
    </button>
  );
};
