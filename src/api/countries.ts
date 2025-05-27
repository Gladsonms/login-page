import axios from "axios";
import type { AxiosResponse } from "axios";
import { COUNTRIES_URL } from "../constants";
import type { Country } from "../types/home";

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCountries = async (): Promise<Country[]> => {
  const response: AxiosResponse<Country[]> = await apiClient.get(COUNTRIES_URL);
  return response.data;
};
