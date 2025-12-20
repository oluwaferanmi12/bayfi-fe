import moment from "moment";

export const FormatNumber = (val: number) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const messageDateFormatter = (val: string) => {
  return moment(val).format("MMM Do, YYYY hh:mm:ss A");
};
