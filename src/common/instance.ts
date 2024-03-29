import axios from "axios"

export const instance = axios.create({
  baseURL: "https://currate.ru/api/?get=currency_list&key=68c6c679a86cae0fb2b8e507894d67b6",
  withCredentials: true,
  headers: {
    "API-KEY": "68c6c679a86cae0fb2b8e507894d67b6"
  }
})
