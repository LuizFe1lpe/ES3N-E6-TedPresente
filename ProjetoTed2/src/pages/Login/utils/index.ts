export const getMail = () => {
  return localStorage.getItem("@InfoUser:mail")
    ? `${localStorage.getItem("@InfoUser:mail")}`
    : "";
};

export const getPassword = () => {
  return localStorage.getItem("@InfoUser:password")
    ? `${localStorage.getItem("@InfoUser:password")}`
    : "";
};

export interface FormHookType {
  msg?: string;
  error?: boolean;
  value: string;
}
