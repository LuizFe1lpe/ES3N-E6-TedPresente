import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: baseURL,
});

export const HTTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULLFILED: "FULLFILED",
  REJECTED: "REJECTED",
});
