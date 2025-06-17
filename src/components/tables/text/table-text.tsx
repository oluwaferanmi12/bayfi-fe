export const TableText = ({
  text,
  headerType,
  variant,
}: {
  text: string | number;
  headerType?: boolean;
  variant?: "redType";
}) => {
  return (
    <p
      className={` ${variant === "redType" ? "text-[#D80027]" : "text-[#475467]"} ${headerType && "text-base"} font-grotesk-medium text-base text-center ${!headerType && "py-4"}`}
    >
      {text}
    </p>
  );
};
