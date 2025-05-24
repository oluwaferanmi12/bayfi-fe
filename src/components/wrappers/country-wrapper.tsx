import Image from "next/image";

export const CountryWrapper = ({
  flag,
  countryName,
}: {
  flag: string;
  countryName: string;
}) => {
  return (
    <div className="bg-bayfi-grey-300 flex items-center gap-3 rounded-xl p-3">
      <span className="p-1 rounded-full border border-bayfi-green-200">
        <Image src={flag} alt="" />
      </span>
      <p className="text-sm">{countryName}</p>
    </div>
  );
};
