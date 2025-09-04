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
        <div className="bg-[#FFFFFF] p-[6px] rounded-full border-[0.35px] border-bayfi-green-50">
          <div className="w-[24px] rounded-full relative h-[24px] border ">
            <Image
              className="object-cover  rounded-full aspect-square"
              fill
              src={flag}
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-base font-grotesk-bold">{cardName}</p>
          <p className="text-xs">{country}</p>
        </div>
      </div>
      <div className="relative w-[50px] h-[30px]">
        <Image src={cardIcon} fill alt="" className="w-full rounded-sm" />
      </div>
    </div>
  );
};
