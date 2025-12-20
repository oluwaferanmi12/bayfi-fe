import { useEffect, useState } from "react";

export const useDebounce = (val: string, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(val);
    }, delay);
    return () => clearTimeout(timeout);
  }, [val, delay]);
  //   The returned value is what i would basically have to use to actually perform an action ,note that basicalyt he returned value is reactive
  return debouncedValue;
};
