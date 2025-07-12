import Image from "next/image";

export const CountryWrapper = ({
  flag,
  countryName,
  action,
}: {
  flag: string;
  countryName: string;
  action?: () => void;
}) => {
  return (
    <div
      onClick={action}
      className="bg-bayfi-grey-300 mb-2 flex items-center gap-3 rounded-xl p-3"
    >
      <span className="p-1 rounded-full border border-bayfi-green-200">
        <Image src={flag} alt="" />
      </span>
      <p className="text-sm font-grotesk-medium">{countryName}</p>
    </div>
  );
};
