import moment from "moment";

export const momentLocal = (utcTime: string) => {
  return moment.utc(utcTime).local();
};
