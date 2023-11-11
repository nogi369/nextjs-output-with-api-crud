import axios, { AxiosError } from "axios";

const BASE_API_URL = process.env.BASE_API_URL || "http://localhost";

// https://qiita.com/natuuu0831/items/2601dc9ade7e31bf2317
export const globalAxios = axios.create({
  baseURL: `${BASE_API_URL}/api/`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const isAxiosError = (error: any): error is AxiosError =>
  !!error.isAxiosError;
