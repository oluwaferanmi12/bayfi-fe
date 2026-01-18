"use client";

import React, { useState } from "react";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import addCircle from "@/assets/svg/add-circle.svg";
import { TableInput } from "@/components/inputs/table-input";
import { TablePagination } from "@/components/pagination/table-pagination";
import { Col, Row } from "antd";
import { ChatContainer } from "@/components/chat/chat-container";
import { TransactionTable } from "@/components/tables/transaction-table";
import { SupportTable } from "@/components/tables/support-table";
import { SideDrawer } from "@/components/side-drawers/side-drawer";
import { GInput } from "@/components/inputs/GInput";

function Support() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <SideDrawer
        open={showCreateModal}
        title="Create new ticket"
        onClose={() => {
          setShowCreateModal(false);
        }}
      >
        <div className="mt-4">
          <GInput label="Ticket channel" placeholder="Select a channel" />
          <GInput
            label="How urgent is this issue"
            placeholder="Select a priority (High, Low , Medium)"
          />
          <GInput label="Message" placeholder="Describe issue" />
          <Button
            loading={false}
            text="Send a message"
            type="bgGreen"
            fullWidth
          />
        </div>
      </SideDrawer>
      <Row gutter={12}>
        <Col xs={18}>
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
                  action={() => {
                    setShowCreateModal(true);
                  }}
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
            <div className="py-3 flex items-center justify-between">
              <TableInput handleSearch={() => {}} placeholder="Search" />
              <TablePagination
                handleNext={() => {}}
                handlePrevious={() => {}}
                handleRefetchData={() => {}}
                pageSize={9}
              />
            </div>
            <div>
              <SupportTable />
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <ChatContainer chatType="support" />
        </Col>
      </Row>
    </>
  );
}

export default Support;
