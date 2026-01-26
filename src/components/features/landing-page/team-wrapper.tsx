"use client";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import ceoPlaceholder from "@/assets/svg/ceo-placeholder.svg";
import { useGetTeams } from "@/hooks/query";
import { Loader } from "@/components/loader/general-loader";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";

export const TeamWrapper = () => {
  const { data, isLoading } = useGetTeams();
  console.log(data);
  return (
    <Row>
      {isLoading ? (
        <Loader />
      ) : data && data.length ? (
        data.map((item) => {
          return (
            <Col key={item.id} xs={24} lg={8} className="mb-8 lg:mb-16">
              <div className="relative lg:w-90 w-full  h-100">
                <Image
                  layout="fill"
                  src={item.image_url}
                  alt=""
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  {item.name}
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  {item.role}
                </p>
              </div>
            </Col>
          );
        })
      ) : (
        <GenericEmptyState />
      )}
    </Row>
  );
};
