import moment from "moment";

export const FormatNumber = (val: number, hideZeroDecimals = false) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: hideZeroDecimals ? 0 : 2,
    maximumFractionDigits: 2,
  });
};

export const messageDateFormatter = (val: string) => {
  return moment(val).format("MMM Do, YYYY hh:mm:ss A");
};

export const numberFormatter = (val: string): string => {
  const num_formatter = new Intl.NumberFormat("en-US");
  const sanitizedVal = +stripCommas(val);
  if (sanitizedVal > 0) {
    return num_formatter.format(sanitizedVal);
  }
  return "";
};

export const stripCommas = (val: string) => {
  return val.replace(/[^\d]/g, "");
};
