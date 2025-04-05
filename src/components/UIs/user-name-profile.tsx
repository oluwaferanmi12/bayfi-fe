import { Text } from "@/components/texts/text";

export const UserProfile = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-[#7D3CE0] h-[60px] w-[60px] rounded-full flex items-center justify-center">
        <Text type="text-small-white" value="OA" />
      </div>
      <div>
        <Text type="text-small-light" value="Olaitan" />
      </div>
      <div>
        <Text type="text-small-light" value="akinlade" />
      </div>
    </div>
  );
};
