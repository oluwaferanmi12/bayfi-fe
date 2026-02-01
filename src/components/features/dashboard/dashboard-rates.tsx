import { Loader } from "@/components/loader/general-loader";
import { useGetUserRates } from "@/hooks/query";
import { FormatNumber } from "@/utils/formatter";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import sliderActiveIndicator from "@/assets/svg/slider-active-indicator.svg";
import sliderInactiveIndicator from "@/assets/svg/slider-inactive-indicator.svg";

export const DashboardRatesCard = () => {
  const { data, isLoading } = useGetUserRates();
  const rates = useMemo(() => data ?? [], [data]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!rates.length) return;
    setActiveIndex(0);
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rates.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [rates.length]);

  useEffect(() => {
    if (!rates.length) return;
    setIsAnimating(true);
    const timeoutId = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timeoutId);
  }, [activeIndex, rates.length]);

  const activeRate = rates[activeIndex];
  const displayAmount =
    activeRate?.amount ??
    activeRate?.minimumPrice ??
    activeRate?.maximumPrice ??
    0;
  return (
    <div className="bg-[#000000] relative flex items-center p-4 pb-8 h-full border rounded-2xl border-[#EBF1FF]">
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <Loader />
        </div>
      ) : activeRate ? (
        <div
          className={`flex items-center justify-between w-full transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
        >
          <div>
            <div className="flex">
              <div className="bg-[#F5F5F5] flex items-center gap-2 rounded-full px-4 py-1">
                <div className="w-2.5 relative h-2.5">
                  <Image
                    src={activeRate.countryAvatar}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-[#000000] font-grotesk-semi-bold">
                  {activeRate.countryName}
                </p>
              </div>
            </div>

            <p className="text-[#EDEEEF] text-2xl font-grotesk-semi-bold my-2">
              {activeRate.cardName ?? "Google name"}
            </p>
            <p className="text-[#EDEEEF] text-base font-grotesk-semi-bold">
              ${FormatNumber(displayAmount)} at {FormatNumber(activeRate.rate)}
              /$
            </p>
          </div>
          <div className="relative w-18 h-18">
            <Image
              layout="fill"
              src={activeRate.cardAvatar}
              alt={activeRate.cardAvatar ?? "Card image"}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      ) : (
        <p className="text-[#EDEEEF] text-base font-grotesk-semi-bold">
          No rates available
        </p>
      )}
      {rates.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          {rates.map((rate, index) => {
            const isActive = index === activeIndex;
            return (
              <Image
                key={rate.id ?? index}
                src={isActive ? sliderActiveIndicator : sliderInactiveIndicator}
                alt=""
                className={`transition-all duration-300 ${isActive ? "opacity-100 scale-105" : "opacity-60 scale-100"}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
