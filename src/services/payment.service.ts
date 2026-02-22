import { axiosInstance } from "@/axios";
import {
  AccountLookUp,
  AccountLookUpInterface,
  Bank,
  Beneficiary,
  Disburse,
  DisburseResponse,
  SaveBeneficiary,
} from "@/types";

export const getBeneficiary = async (): Promise<Beneficiary[]> => {
  const { data } = await axiosInstance.get(`/bank/beneficiaries`);
  return data.data;
};

export const saveBeneficiary = async (payload: SaveBeneficiary) => {
  const { data } = await axiosInstance.post(`/bank/beneficiaries`, payload);
  return data;
};

export const deleteBeneficiary = async (beneficiaryId: string) => {
  const { data } = await axiosInstance.delete(
    `/bank/beneficiaries/${beneficiaryId}`,
  );
  return data;
};

export const bankSearch = async (query: string): Promise<Bank[]> => {
  const { data } = await axiosInstance.get(
    `/payment/banks/search?query=${query}`,
  );
  return data.data;
};

export const bankList = async (): Promise<Bank> => {
  const { data } = await axiosInstance.get(`payment/bank/list`);
  return data.data;
};

export const accountNameLookup = async ({
  bankCode,
  accountNumber,
}: AccountLookUpInterface): Promise<AccountLookUp> => {
  const { data } = await axiosInstance.get(
    `/payment/account/name/lookup?bankCode=${bankCode}&accountNumber=${accountNumber}`,
  );
  return data.data;
};

export const disburse = async (
  payload: Disburse,
): Promise<DisburseResponse> => {
  const { key, ...rest } = payload;
  const { data } = await axiosInstance.post(`/payment/disbursement`, rest, {
    headers: {
      "Idempotency-Key": key,
    },
  });
  return data.data;
};
