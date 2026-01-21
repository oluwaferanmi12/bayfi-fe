import { useState } from "react";
import debounce from "lodash/debounce";

export const usePagination = () => {
  const [searchPayload, setSearchPayload] = useState({
    category: "",
    page: 1,
    pageSize: 20,
    search: "",
    status: "",
  });
  const handleNext = () => {
    setSearchPayload((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const handlePrevious = () => {
    setSearchPayload((prev) => ({ ...prev, page: prev.page - 1 }));
  };
  const handleRefetch = () => {
    setSearchPayload({
      category: "",
      page: 1,
      pageSize: 20,
      search: "",
      status: "",
    });
  };

  const handleSearch = debounce((val: string) => {
    setSearchPayload((prev) => ({ ...prev, search: val }));
  }, 500);

  return {
    searchPayload,
    handleNext,
    handlePrevious,
    handleRefetch,
    handleSearch,
  };
};
