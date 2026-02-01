import {
  changeCardStatus,
  createCard,
  deleteCard,
  editCard,
  getCards,
  giftcardCountries,
  giftcardRates,
  initiateGiftCardTxn,
  manageCard,
} from "@/services/card.service";
import {
  CreateCardInterface,
  EditCardInterface,
  InitiateCardTxn,
  ManageCardInterface,
} from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSaveCard = (sc: (data: any) => void) => {
  return useMutation({
    mutationFn: (payload: CreateCardInterface) => {
      return createCard(payload);
    },
    onSuccess: (data) => {
      sc(data);
    },
  });
};

export const useGetCards = (payload: { page: number; pageSize: number }) => {
  return useQuery({
    queryFn: () => {
      return getCards(payload);
    },
    queryKey: ["get-cards"],
  });
};

export const useChangeCardStatus = (sc: (data: any) => void) => {
  return useMutation({
    mutationFn: (payload: { id: string; status: boolean }) => {
      return changeCardStatus(payload);
    },
    onSuccess: (data) => {
      sc(data);
    },
  });
};

export const useDeleteCard = (sc: (data: any) => void) => {
  return useMutation({
    mutationFn: (id: string) => {
      return deleteCard(id);
    },
    onSuccess: (data) => {
      sc(data);
    },
  });
};

export const useEditCard = (sc: (data: any) => void) => {
  return useMutation({
    mutationFn: (payload: EditCardInterface) => {
      return editCard(payload);
    },
    onSuccess: (data) => {
      sc(data);
    },
  });
};

export const useManageCard = (sc: (vaL: any) => void) => {
  return useMutation({
    mutationFn: (payload: ManageCardInterface) => {
      return manageCard(payload);
    },
    onSuccess: (val) => {
      sc(val);
    },
  });
};

export const useInitiateCardTxn = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: InitiateCardTxn) => {
      return initiateGiftCardTxn(payload);
    },
    onSuccess: (val) => {
      sc(val);
    },
  });
};

export const useGetCardCountries = (id: string) => {
  return useQuery({
    queryFn: () => giftcardCountries(id),
    queryKey: ["giftcard-country", id],
    enabled: !!id,
  });
};

export const useGetUserRates = () => {
  return useQuery({
    queryFn: giftcardRates,
    queryKey: ["user-rates"],
  });
};
