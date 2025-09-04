import Cookies from "js-cookie";

export const cookieSaver = (key: string, val: string) => {
  Cookies.set(key, val);
};

export const cookieGetter = (key: string) => {
  try {
    const result = JSON.parse(Cookies.get(key) ?? "");
    return result;
  } catch (e) {
    return null;
  }
};

export const cookieRemover = (key: string) => {
  Cookies.remove(key);
};
