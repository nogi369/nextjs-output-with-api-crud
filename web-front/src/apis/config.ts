// https://qiita.com/natuuu0831/items/2601dc9ade7e31bf2317

import axios, { AxiosError } from "axios";

const BASE_API_URL = process.env.BASE_API_URL || "http://localhost";

// axiosの新しいインスタンスを作成する
export const globalAxios = axios.create({
  // https://qiita.com/natuuu0831/items/a592c0c9cd0a673c2161#%E8%A9%B3%E7%B4%B0%E3%81%AB%E8%A8%AD%E5%AE%9A%E3%82%92%E6%B8%A1%E3%81%97%E3%81%A6%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88
  baseURL: `${BASE_API_URL}/api/`,
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

// https://zenn.dev/wintyo/articles/b417e310efc67e#axioserror%E3%81%AE%E5%88%A4%E5%AE%9A%E6%96%B9%E6%B3%95
// AxiosErrorの判定方法(type guardな判定メソッド)
export const isAxiosError = (error: any): error is AxiosError =>
  !!error.isAxiosError;
