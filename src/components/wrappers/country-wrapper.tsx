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
      <div className="border border-bayfi-green-200 p-1 rounded-full">
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
      </div>

      <p className="text-base font-grotesk-medium">{countryName}</p>
    </div>
  );
};
