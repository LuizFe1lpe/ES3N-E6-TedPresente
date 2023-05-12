import Cookies from "js-cookie";

export const handleGetToken = () => {
  const token = Cookies.get("@FTP-token")?.replace(/['"]+/g, "");
  return token;
};

export const debug = {
  debugError: function (msg: string) {
    console.log("%c" + msg, "color:" + "tomato" + ";font-weight:bold;");
  },
  debugWarning: function (msg: string) {
    console.log("%c" + msg, "color:" + "yellow" + ";font-weight:bold;");
  },
  debugSuccess: function (msg: string) {
    console.log("%c" + msg, "color:" + "green" + ";font-weight:bold;");
  },
};
