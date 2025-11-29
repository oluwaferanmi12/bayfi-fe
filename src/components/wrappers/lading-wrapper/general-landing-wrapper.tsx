import { Col, Row } from "antd";
import React, { ReactNode } from "react";

function GeneralLandingPageWrapper({ children }: { children: ReactNode }) {
  return (
    <Row justify={"center"} align={"middle"} className="w-full h-full">
      <Col xs={20}>{children}</Col>
    </Row>
  );
}

export default GeneralLandingPageWrapper;
