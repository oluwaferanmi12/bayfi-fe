export const PriorityWrapper = ({
  type,
}: {
  type: "low" | "medium" | "high";
}) => {
  return (
    <div className="flex items-center justify-center">
      <span
        className={`border ${type === "low" ? "border-[#E9D7FE] text-[#6941C6]" : type === "medium" ? "text-[#B54708] border border-[#FFFAEB] bg-[#FFFAEB]" : ""}  px-4 py-1 rounded-lg font-grotesk-medium`}
      >
        {type === "low" ? "Low" : type === "medium" ? "Medium" : "High"}
      </span>
    </div>
  );
};
