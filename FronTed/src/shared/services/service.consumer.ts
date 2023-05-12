import { api } from "./api";
import { debug, handleGetToken } from "./serviceUtils";

const { debugError, debugSuccess } = debug;
const environment = import.meta.env.VITE_ENVIRONMENT;

interface ResponsePromise {
  data: any | Array<any>;
  message: string;
  status: number;
}

export const serviceConsumer = {
  //Get Method
  executeGet: async function (url: string) {
    return await this.executeService("GET", url);
  },

  //Post Method
  executePost: async function (url: string, body: any | Array<any>) {
    return await this.executeService("POST", url, body);
  },

  //Put Method
  executePut: async function (url: string, body: any | Array<any>) {
    return await this.executeService("PUT", url, body);
  },

  //Delete Method
  executeDelete: async function (url: string) {
    return await this.executeService("DELETE", url);
  },

  executeService: function (
    method: "GET" | "POST" | "DELETE" | "PUT",
    url: string,
    data?: any | Array<any>,
  ): Promise<ResponsePromise> {
    let headers = {
      Authorization: "Bearer " + handleGetToken(),
      "Content-Type": "application/json",
    };

    let response;

    response = api({
      method,
      url,
      headers,
      data,
    })
      .then((res) => {
        const { data, status, statusText } = res;
        const successResponse: ResponsePromise = {
          data: data,
          status: status,
          message: statusText,
        };
        if (environment === "dev") {
          debugSuccess("-------- DEBUG - SUCCESS - START --------");
          console.log(successResponse);
          debugSuccess("-------- DEBUG - SUCCESS - END --------");
        }
        return successResponse;
      })
      .catch((err) => {
        const { message, status } = err;
        const errorResponse: ResponsePromise = {
          data: [],
          status: status,
          message: message,
        };
        if (environment === "dev") {
          debugError("-------- DEBUG - ERROR - START --------");
          console.log(errorResponse);
          debugError("-------- DEBUG - ERROR - END --------");
        }
        return errorResponse;
      });

    return response;
  },
};
