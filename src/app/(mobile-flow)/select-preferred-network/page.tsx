import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { CoinWrapper } from "@/components/wrappers/coin-wrapper";
import { CoinNetworkWrappr } from "@/components/wrappers/network-wrapper";

const SelectNetwork = () => {
  return (
    <>
      <PageTitle title="Buy crypto" />
      <CoinWrapper blackBg />
      <p className="text-text-color-900 font-grotesk-bold mb-4 text-sm">
        Select preferred network
      </p>
      <div>
        <CoinNetworkWrappr whiteBG />
        <CoinNetworkWrappr whiteBG />
        <CoinNetworkWrappr whiteBG />
        <CoinNetworkWrappr whiteBG />
      </div>
    </>
  );
};

export default SelectNetwork;
