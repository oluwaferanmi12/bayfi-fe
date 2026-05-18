import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useProfileStore } from "@/store/userProfileStore";
import { usePinStore } from "@/store/usePinStore";
import { DisburseResponse } from "@/types";
import { v4 as uuidv4 } from "uuid";
import {
  useAccountLookup,
  useDeleteBeneficiary,
  useDisburse,
  useGetBankList,
  useGetBeneficiary,
} from "@/hooks/query/usePayment";
import { BankOption } from "@/interfaces/interfaces";
import { stripCommas } from "@/utils/formatter";
import { toast } from "sonner";

export const useWithdraw = () => {
  const queryClient = useQueryClient();
  const [showWithdrawOtp, setShowWithdrawOtp] = useState(false);
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState<BankOption | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [showReciept, setShowReciept] = useState(false);
  const { data: originalBankList, isLoading: originalBankListLoading } =
    useGetBankList();
  const [payloadError, setPayloadError] = useState({
    accountName: "",
    accountNumber: "",
    amount: "",
    bankName: "",
  });
  const { profile } = useProfileStore();
  const { showPinModal, setShowPinModal } = usePinStore();
  const [disburseResponse, setDisburseResponse] =
    useState<DisburseResponse | null>(null);
  const { data: beneficiaries, isPending } = useGetBeneficiary();
  const deleteBeneficiary = useDeleteBeneficiary(() => {
    toast.success("Beneficiary removed");
    queryClient.invalidateQueries({ queryKey: ["get-beneficiary"] });
  });
  const disburse = useDisburse((data) => {
    setDisburseResponse(data);
    setShowReciept(true);
    queryClient.invalidateQueries({ queryKey: ["get-wallet"] });
    queryClient.invalidateQueries({ queryKey: ["user-transaction"] });
  });
  const activeKey = uuidv4();
  const { data: bankAccount, isLoading: accountLookupLoading } =
    useAccountLookup({
      accountNumber,
      bankCode: selectedBank?.value ?? "",
    });
  const handleValidate = () => {
    let validated = true;
    if (+stripCommas(amount) <= 0) {
      setPayloadError((prev) => ({
        ...prev,
        amount: "Invalid amount entered",
      }));
      validated = false;
    } else if (+stripCommas(amount) < 200) {
      setPayloadError((prev) => ({
        ...prev,
        amount: "Only an amount greater than 200 can be withdrawn",
      }));
      validated = false;
    } else {
      setPayloadError((prev) => ({
        ...prev,
        amount: "",
      }));
    }
    if (!accountNumber) {
      setPayloadError((prev) => ({
        ...prev,
        accountNumber: "Account number is required",
      }));
      validated = false;
    } else if (accountNumber.length !== 10) {
      setPayloadError((prev) => ({
        ...prev,
        accountNumber: "Account number is invalid",
      }));
      validated = false;
    } else {
      setPayloadError((prev) => ({
        ...prev,
        accountNumber: "",
      }));
    }
    if (!bankAccount?.accountName && !selectedBank?.value) {
      setPayloadError((prev) => ({
        ...prev,
        bankName: "Kindly select a bank",
      }));
      validated = false;
    } else {
      setPayloadError((prev) => ({
        ...prev,
        bankName: "",
      }));
    }

    if (!bankAccount?.accountName) {
      setPayloadError((prev) => ({
        ...prev,
        accountName: "Account name isn't valid",
      }));
      toast.error("Account name isn't valid");
      validated = false;
    } else {
      setPayloadError((prev) => ({
        ...prev,
        accountName: "",
      }));
    }
    return validated;
  };

  const bankOptions = useMemo(() => {
    const list = originalBankList ?? [];
    const query = searchedValue.trim().toLowerCase();
    const filtered = query
      ? list.filter((b) => b.name.toLowerCase().includes(query))
      : list;

    const sorted = [...filtered].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    );

    const groups: Record<string, { label: string; value: string }[]> = {};
    for (const b of sorted) {
      const letter = b.name[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push({ label: b.name, value: b.bankCode });
    }

    return Object.entries(groups).map(([letter, options]) => ({
      label: letter,
      options,
    }));
  }, [originalBankList, searchedValue]);

  const handleShowOtp = () => {
    // handleValidation first here
    if (!handleValidate()) {
      return;
    }
    if (profile?.isPinCreated) {
      setShowWithdrawOtp(true);
    } else {
      setShowPinModal(true);
    }
  };
  const handleWithdraw = () => {
    disburse.mutate({
      accountName: bankAccount?.accountName ?? "",
      accountNumber,
      amount: +stripCommas(amount),
      bankCode: selectedBank?.value ?? "",
      key: activeKey,
      pin,
    });
  };

  const handleDeleteBeneficiary = (beneficiaryId: number) => {
    deleteBeneficiary.mutate(String(beneficiaryId));
  };

  return {
    showWithdrawOtp,
    setAmount,
    payloadError,
    searchedValue,
    selectedBank,
    setSearchedValue,
    setSelectedBank,
    bankListLoading: originalBankListLoading,
    bankAccount,
    accountLookupLoading,
    handleShowOtp,
    showReciept,
    disburseResponse,
    handleWithdraw,
    disburse,
    setAccountNumber,
    bankOptions,
    amount,
    setPin,
    pin,
    beneficiaryLoading: isPending,
    beneficiaries,
    accountNumber,
    handleDeleteBeneficiary,
    deletingBeneficiary: deleteBeneficiary.isPending,
  };
};
