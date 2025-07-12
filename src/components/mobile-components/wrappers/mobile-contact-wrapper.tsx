export const MobileContactWrapper = ({
  initials,
  name,
}: {
  initials?: string;
  name?: string;
}) => {
  return (
    <div className="flex">
      <div className="bg-white p-4 w-[100px] rounded-lg flex flex-col items-center justify-center">
        <div className="bg-[#D1B2FF] aspect-square w-[40px] flex items-center justify-center h-[40px] rounded-full">
          <p className="text-[#5E1DBB] font-grotesk-bold">{initials ?? "OA"}</p>
        </div>
        <p className="text-text-color-500 font-grotesk-semi-bold w-full overflow-hidden text-ellipsis text-center whitespace-nowrap">
          {name ?? "Olaitan aaaaa"}
        </p>
      </div>
    </div>
  );
};
