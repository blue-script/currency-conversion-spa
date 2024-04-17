import React, { useEffect } from "react"
import "./App.css"
import { BrowserRouter, HashRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import Error404 from "../common/Error404"
import ConverterCurrency from "../features/Converter/ConverterCurrency"
import CurrentExchangeRates from "../features/Rates/CurrentExchangeRates"
import { s } from "../common/_styles"
import { useSelector } from "react-redux"
import { appThunks, selectIsInitialized, selectStatus } from "./appSlice"
import { CircularProgress, LinearProgress } from "@mui/material"
import { useActions } from "../common/hooks/useActions"

export const PATH = {
  CONVERTER_CURRENCY: "CONVERTER-CURRENCY",
  CURRENT_EXCHANGE_RATES: "CURRENT-EXCHANGE-RATES"
} as const

function App() {
  const status = useSelector(selectStatus)
  const isInitialized = useSelector(selectIsInitialized)
  const { fetchCurrencies } = useActions(appThunks)

  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  if (!isInitialized) {
    return (
      <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%", height: "100%" }}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <HashRouter>
      <s.AppContainer>
        <s.HeaderWrapper>
          <s.NavWrapper><NavLink to={PATH.CONVERTER_CURRENCY}>CONVERTER_CURRENCY</NavLink></s.NavWrapper>
          <s.NavWrapper><NavLink to={PATH.CURRENT_EXCHANGE_RATES}>CURRENT_EXCHANGE_RATES</NavLink></s.NavWrapper>
        </s.HeaderWrapper>
        {status === "loading" && <LinearProgress />}
        <s.BodyWrapper>
          <Routes>
            <Route path={"/"} element={<Navigate to={PATH.CURRENT_EXCHANGE_RATES} />} />
            <Route path={PATH.CONVERTER_CURRENCY} element={<ConverterCurrency />} />
            <Route path={PATH.CURRENT_EXCHANGE_RATES} element={<CurrentExchangeRates />} />

            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </s.BodyWrapper>
      </s.AppContainer>
    </HashRouter>
  )
}

export default App
