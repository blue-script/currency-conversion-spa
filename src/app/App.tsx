import React from "react"
import "./App.css"
import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import Error404 from "../common/Error404"
import { ConverterCurrency } from "../features/ConverterCurrency"
import { CurrentExchangeRates } from "../features/CurrentExchangeRates"
import { S } from "../common/_styles"

export const PATH = {
  CONVERTER_CURRENCY: "ConverterCurrency",
  CURRENT_EXCHANGE_RATES: "CurrentExchangeRates"
} as const

function App() {
  return (
    <>
      <S.HeaderWrapper>
        HEADER
        <S.NavWrapper><NavLink to={"ConverterCurrency"}>CONVERTER_CURRENCY</NavLink></S.NavWrapper>
        <S.NavWrapper><NavLink to={PATH.CURRENT_EXCHANGE_RATES}>CURRENT_EXCHANGE_RATES</NavLink></S.NavWrapper>
        <select>
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <Routes>
          <Route path={"/"} element={<Navigate to={PATH.CURRENT_EXCHANGE_RATES} />} />
          <Route path={PATH.CONVERTER_CURRENCY} element={<ConverterCurrency />} />
          <Route path={PATH.CURRENT_EXCHANGE_RATES} element={<CurrentExchangeRates />} />

          <Route path={"/*"} element={<Error404 />} />
        </Routes>
      </S.BodyWrapper>
    </>
  )
}

export default App
