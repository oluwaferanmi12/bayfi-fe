import { axiosInstance } from "@/axios";
import { AccountLookUpInterface, Beneficiary } from "@/types";

export const getBeneficiary = async (): Promise<Beneficiary[]> => {
  const { data } = await axiosInstance.get(`/bank/beneficiaries`);
  return data.data;
};

export const saveBeneficiary = async (payload: Beneficiary) => {
  const { data } = await axiosInstance.post(`/bank/beneficiaries`);
  return data;
};

export const deleteBeneficiary = async (beneficiaryId: string) => {
  const { data } = await axiosInstance.delete(
    `/bank/beneficiaries/${beneficiaryId}`
  );
  return data;
};

export const bankSearch = async (query: string) => {
  const { data } = await axiosInstance.get(
    `/payment/banks/search?query=${query}`
  );
  return data.data;
};

export const bankList = async () => {
  const { data } = await axiosInstance.get(`/payment/banks/search`);
  return data.data;
};

export const accountNameLookup = async ({
  bankCode,
  accountNumber,
}: AccountLookUpInterface) => {
  const { data } = await axiosInstance.get(
    `/payment/account/name/lookup?bankCode=${bankCode}&accountNumber=${accountNumber}`
  );
  return data.data;
};
