import axios from "axios";

const BASE_EXCHANGE_URL_API =
  "https://openexchangerates.org/api/latest.json?app_id=9877a004d0a74e01a5a9b5b4e4dfc14b";

export const api = axios.create({
  baseURL: BASE_EXCHANGE_URL_API,
});
