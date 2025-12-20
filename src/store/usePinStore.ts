import { create } from "zustand";
type PinType = {
  showPinModal: boolean;
  setShowPinModal: (val: boolean) => void;
};

export const usePinStore = create<PinType>((set) => {
  return {
    showPinModal: false,
    setShowPinModal: (showPinModal) => {
      set({ showPinModal });
    },
  };
});
