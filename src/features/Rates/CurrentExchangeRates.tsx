import React, { ChangeEvent, FC, useEffect } from "react"
import { ratesThunks, selectBase, selectDate, selectRates } from "./ratesSlice"
import { useSelector } from "react-redux"
import { useActions } from "../../common/hooks/useActions"
import { selectCurrencies } from "../../app/appSlice"

const CurrentExchangeRates: FC = () => {
  const baseCurrency = useSelector(selectBase)
  const date = useSelector(selectDate)
  const rates = useSelector(selectRates)
  const currencies = useSelector(selectCurrencies)
  const { fetchRates } = useActions(ratesThunks)

  useEffect(() => {
    fetchRates(baseCurrency)
  }, [fetchRates, baseCurrency])

  const selectCurrencyHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    fetchRates(e.target.value)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{date}</h1>
      <h2>{baseCurrency}</h2>
      <div>
        <select value={baseCurrency} onChange={selectCurrencyHandler}>
          {Object.entries(currencies).map(([c, currency]) => (
            <option key={c} value={c}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <ol>
        {Object.entries(rates).map(el => <li key={el[0]}>{`${el[0]} = ${el[1]}`}</li>)}
      </ol>
    </div>
  )
}

export default CurrentExchangeRates