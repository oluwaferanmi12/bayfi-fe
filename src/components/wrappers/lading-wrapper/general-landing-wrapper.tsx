import { Col, Row } from "antd";
import React, { ReactNode } from "react";

function GeneralLandingPageWrapper({ children }: { children: ReactNode }) {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col xs={20}>{children}</Col>
    </Row>
  );
}

export default GeneralLandingPageWrapper;
