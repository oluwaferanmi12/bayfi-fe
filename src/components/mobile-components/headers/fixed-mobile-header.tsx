export const FixedMobileHeader = ({
  header,
  subText,
}: {
  header: string;
  subText: string;
}) => {
  return (
    <div className="bg-white fixed-background fixed top-0 left-0 right-0 min-h-[100px] p-4">
      <p className="text-bayfi-black-900 font-grotesk-medium text-2xl">{header} </p>
      <p className=" text-text-color-600 text-base font-grotesk-regular">
        {subText}
      </p>
    </div>
  );
};
