import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
import { Col, Row } from "antd";
import bgImage from "@/assets/svg/walletCardImage.svg";
import Image from "next/image";
import eyeIcon from "@/assets/svg/eye-icon-black.svg";
import { Text } from "@/components/texts/text";

const Dashboard = () => {
  return (
    <>
      <GPageWrapper>
        <Row gutter={12}>
          <Col xs={16}>
            <div className="bg-white relative py-12 flex justify-center items-center flex-col rounded-xl p-4 ">
              <span className="absolute left-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <span className="absolute right-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <div>
                <div className="bg-bayfi-green-100 rounded-full px-4 py-1 flex items-center gap-2">
                  <span>
                    <Image src={eyeIcon} alt="" />
                  </span>
                  <Text type="text-plain-dark-16" value="Wallet balance" />
                </div>
                <div className="py-4">
                  <Text type="number-big" value="NGN 200,000.00" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={8}></Col>
        </Row>
      </GPageWrapper>
    </>
  );
};

export default Dashboard;
