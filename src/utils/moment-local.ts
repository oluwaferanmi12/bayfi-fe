import moment from "moment";

export const momentLocal = (utcTime: string) => {
  return moment.utc(utcTime).local();
};

export const timeDefault = (date: string) => {
  return momentLocal(date).format("YYYY-MM-DD HH:mm");
};
