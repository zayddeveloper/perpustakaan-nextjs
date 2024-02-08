import axios from "axios";

export type APIResponse = {
  message: string;
  code: number;
  data?: any;
};

export const BaseURL: string = "https://perpustakaan.ppksbogor.com";

export const URLPetugas = axios.create({
  baseURL: `${BaseURL}/api/v1/petugas`,
});
