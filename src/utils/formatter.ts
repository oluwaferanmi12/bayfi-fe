import moment from "moment";

export const FormatNumber = (val: number) => {
  const numberValue = val.toFixed(2);
  return numberValue.toLocaleString();
};

export const messageDateFormatter = (val: string) => {
  return moment(val).format("MMM Do, YYYY hh:mm:ss A");
};
