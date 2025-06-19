import React from "react";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import addCircle from "@/assets/svg/add-circle.svg";

function Support() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between border-b border-gray-200 pb-3">
        <div>
          <Text value="Support" type="header-text-20" />
          <p className="text-bayfi-black-500 text-xs">
            Raise and get your issues resolved with bayfi customer service
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            loading={false}
            smallerType
            lessRounded
            type="bgGreen"
            iconPosition="left"
            text="Create new ticket"
            icon={addCircle}
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
