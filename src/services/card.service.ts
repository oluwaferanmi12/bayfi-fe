import { axiosInstance } from "@/axios";
import {
  CardInterface,
  CreateCardInterface,
  EditCardInterface,
  InitiateCardTxn,
  ManageCardInterface,
} from "@/types";

export const getCards = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<CardInterface[]> => {
  const { data } = await axiosInstance.get(
    `/admin/giftcards?page=${page}&pageSize=${pageSize}`
  );
  return data.data.contents;
};

export const createCard = async (payload: CreateCardInterface) => {
  const { data } = await axiosInstance.post(`/admin/giftcards`, payload);
  return data;
};

export const changeCardStatus = async ({
  id,
  status,
}: {
  id: string;
  status: boolean;
}) => {
  const { data } = await axiosInstance.patch(
    `/admin/giftcards/${id}/${status}`
  );
  return data.data;
};

export const deleteCard = async (id: string) => {
  const { data } = await axiosInstance.delete(`/admin/giftcards/${id}`);
  return data;
};

export const editCard = async (payload: EditCardInterface) => {
  const { data } = await axiosInstance.put(
    `/admin/giftcards/${payload.id}`,
    payload
  );
  return data;
};

export const manageCard = async (payload: ManageCardInterface) => {
  const { data } = await axiosInstance.patch(
    `/admin/giftcards/${payload.id}/status?status=${payload.status}`
  );
  return data.data;
};

export const initiateGiftCardTxn = async (payload: InitiateCardTxn) => {
  const { data } = await axiosInstance.post(
    `/giftcards/initiate/chat/transaction`,
    payload
  );
  return data.data;
};
