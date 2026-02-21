import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terms } from "./terms";
import { PrivacyPolicy } from "./privacy-policy";
import { Col, Row } from "antd";

export const Legal = () => {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");
  return (
    <section>
      <Row className="mb-5">
        <Col xs={24} lg={10} xl={8}>
          <div className="bg-[#F9F9F9] p-1 rounded-lg flex items-center gap-1 relative">
            <div
              className="flex-1 rounded-lg p-3 cursor-pointer relative z-10"
              onClick={() => setActiveTab("terms")}
              role="button"
              aria-pressed={activeTab === "terms"}
            >
              <p
                className={`${activeTab === "terms" ? "" : "text-[#868D96]"} whitespace-nowrap`}
              >
                Terms of use
              </p>
            </div>
            <div
              className="flex-1 rounded-lg p-3 cursor-pointer relative z-10"
              onClick={() => setActiveTab("privacy")}
              role="button"
              aria-pressed={activeTab === "privacy"}
            >
              <p
                className={`${activeTab === "privacy" ? "" : "text-[#868D96]"} whitespace-nowrap`}
              >
                Privacy policy
              </p>
            </div>
            <motion.div
              layoutId="legal-tab-indicator"
              className="absolute top-1 bottom-1 rounded-lg bg-[#BEDD3A]"
              initial={false}
              animate={{ left: activeTab === "terms" ? "0.25rem" : "50.25%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ width: "calc(50% - 0.5rem)" }}
            />
          </div>
        </Col>
      </Row>

      {activeTab === "terms" && <Terms />}
      {activeTab === "privacy" && <PrivacyPolicy />}
    </section>
  );
};
