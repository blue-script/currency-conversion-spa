import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from "react"
import { useSelector } from "react-redux"
import { selectCurrencies } from "../../app/appSlice"
import { rateThunks, selectAmount, selectBase, selectRate } from "./rateSlice"
import { useActions } from "../../common/hooks/useActions"

const ConverterCurrency: React.FC = () => {
  const currencies = useSelector(selectCurrencies)
  const base = useSelector(selectBase)
  const amount = useSelector(selectAmount)
  const rate = useSelector(selectRate)
  const { fetchRate } = useActions(rateThunks)
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>(null)


  const keyDownHandler = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    setError("")
    if (e.key === "Enter") {
      const fields = title.trim().replace("in ", "").split(" ")
      console.log(fields)
      if (fields.length < 3) {
        setError("неправильный формат ввода")
        return
      }
      fields.forEach(el => {
        if (!el) {
          setError("неправильный формат ввода")
          return
        }
      })
      console.log(fields)
      fetchRate({ amount: +fields[0], from: fields[1], to: fields[2] }).unwrap().catch((err) => setError(err.message))
    }
  }
  const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (
    <div>
      <div>Введите текст в формате "15 usd in SGD"</div>

      <input type="text" style={{ width: "120px", height: "20px" }} onKeyDown={keyDownHandler} value={title}
             onChange={changeInputValueHandler} />
      {
        Object.keys(rate).length > 0 && !error &&
        <div>Result: {`${amount} ${base} = ${Object.entries(rate)[0][1]} ${Object.entries(rate)[0][0]}`}</div>
      }
      {error && <div style={{ color: "red" }}>{error}</div>}

      <h3>Справочно</h3>
      {Object.entries(currencies).map(([abbreviation, fullName], index, arr) => index === arr.length - 1
        ? <span key={abbreviation}>{`${abbreviation} - ${fullName}`}</span>
        : <span key={abbreviation}>{`${abbreviation} - ${fullName}, `}</span>
      )}
    </div>
  )
}

export default ConverterCurrency

// const debounce = (callback, delay) => {
//   let timeoutId
//   return (...args) => {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       timeoutId = null
//       callback(...args)
//     }, delay)
//   }
// }