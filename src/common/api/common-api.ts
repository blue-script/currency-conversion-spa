import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.frankfurter.app/"
})

export type CurrenciesResponseType = {
  [key: string]: string
}

export function getCurrencies() {
  return instance.get<CurrenciesResponseType>("currencies")
}

export type RateType = {
  [key: string]: number
}
export type BaseResponseType = {
  amount: number
  base: string
  date: string
  rates: RateType
}

export function getRates(baseCurrency: string | null = "USD") {
  return instance.get<BaseResponseType>("latest", { params: { from: baseCurrency } })
}

type GetRateType = { amount: number, from: string, to: string }

export function getRate({ amount, from, to }: GetRateType) {
  return instance.get<BaseResponseType>("latest", { params: { amount, from, to } })
}

