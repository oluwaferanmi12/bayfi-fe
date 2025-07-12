import Image from "next/image";

export const FullCardDetails = ({
  flag,
  cardName,
  country,
  cardIcon,
  bgWhite,
}: {
  flag: string;
  cardName: string;
  country: string;
  cardIcon: string;
  bgWhite?: boolean;
}) => {
  return (
    <div
      className={`${bgWhite ? "bg-white" : "bg-bayfi-grey-300"}  flex rounded-lg justify-between items-center`}
    >
      <div className="flex items-center gap-3 rounded-xl p-3">
        <span className="p-1 rounded-full border border-bayfi-green-200">
          <Image src={flag} alt="" />
        </span>
        <div>
          <p className="text-base font-grotesk-bold">{cardName}</p>
          <p className="text-xs">{country}</p>
        </div>
      </div>
      <div>
        <Image src={cardIcon} alt="" />
      </div>
    </div>
  );
};
