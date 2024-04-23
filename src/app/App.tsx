import React, { useEffect } from "react"
import "./App.css"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import Error404 from "../common/Error404"
import ConverterCurrency from "../features/Converter/ConverterCurrency"
import CurrentExchangeRates from "../features/Rates/CurrentExchangeRates"
import { CommonStyles } from "../common/_styles"
import { useSelector } from "react-redux"
import { appThunks, selectIsInitialized, selectStatus } from "./appSlice"
import { CircularProgress, LinearProgress } from "@mui/material"
import { useActions } from "../common/hooks/useActions"
import Header from "../features/Header/Header"

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
      <Header />
      {status === "loading" && <LinearProgress />}
      <CommonStyles.BodyWrapper>
        <Routes>
          <Route path={"/"} element={<Navigate to={PATH.CURRENT_EXCHANGE_RATES} />} />
          <Route path={PATH.CONVERTER_CURRENCY} element={<ConverterCurrency />} />
          <Route path={PATH.CURRENT_EXCHANGE_RATES} element={<CurrentExchangeRates />} />

          <Route path={"/*"} element={<Error404 />} />
        </Routes>
      </CommonStyles.BodyWrapper>
    </HashRouter>
  )
}

export default App
