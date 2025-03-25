import { Col, Row } from "antd";
import { ReactNode } from "react";

export const GPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Row justify="center">
      <Col xs={22}>{children}</Col>
    </Row>
  );
};
