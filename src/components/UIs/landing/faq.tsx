import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import React, { useState } from "react";
import faqIcon from "@/assets/svg/faq.svg";
import Image from "next/image";
import minusCircle from "@/assets/svg/minus-circle.svg";
import plusCircle from "@/assets/svg/plus-circle.svg";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqs = [
    {
      question: "How do I set up my account?",
      answer:
        "You can set up your account by downloading the Bayfi app and creating an account in just 3 easy steps.",
    },
    {
      question: "How do I trade?",
      answer:
        "You can set up your account by downloading the Bayfi app and creating an account in just 3 easy steps.",
    },
    {
      question: "What happens if I make a transfer and it doesn’t go through",
      answer:
        "You can set up your account by downloading the Bayfi app and creating an account in just 3 easy steps.",
    },
  ];
  return (
    <div className="bg-white py-20">
      <GeneralLandingPageWrapper>
        <div className="flex items-center gap-2">
          <span>
            <Image src={faqIcon} alt="" />
          </span>
          <p className="text-[#505D18] font-inter-medium">Frequently Asked</p>
        </div>
        <div className="mt-8">
          {faqs.map((item, index) => {
            return (
              <div key={index} className="pb-6 border-b border-[#D6D6D6] mb-6">
                <div className="flex items-center gap-2">
                  <p
                    className={`text-3xl ${index === activeIndex ? "text-black" : "text-[#737373]"} font-jakarta-medium`}
                  >
                    {item.question}
                  </p>
                  <span
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={activeIndex === index ? minusCircle : plusCircle}
                      alt=""
                    />
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-[#242628] font-inter-light w-4/5 text-2xl mt-4 mb-6">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </GeneralLandingPageWrapper>
    </div>
  );
};
