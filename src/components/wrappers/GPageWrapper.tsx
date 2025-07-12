import { Col, Row } from "antd";
import { ReactNode } from "react";

export const GPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Row justify="center">
      <Col lg={22} xs={24}>{children}</Col>
    </Row>
  );
};
