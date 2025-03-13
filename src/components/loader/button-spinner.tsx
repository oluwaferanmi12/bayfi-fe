import { ButtonType } from "@/interfaces/interfaces";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export const ButtonSpinner = ({
  spinnerColor,
}: {
  spinnerColor: ButtonType;
}) => {
  return (
    <div>
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 20,
              color: spinnerColor === 'bgGreen' ? "#000" : spinnerColor === 'bgBlack' ? '#fff' : spinnerColor === 'bgWhite' ? "#000" : 'white',
            }}
            spin
          />
        }
      />
    </div>
  );
};
