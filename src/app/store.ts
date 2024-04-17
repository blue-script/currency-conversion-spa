import { configureStore } from "@reduxjs/toolkit"
import { ratesReducer } from "../features/Rates/ratesSlice"
import { appReducer } from "./appSlice"
import { rateReducer } from "../features/Converter/rateSlice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    rate: rateReducer,
    rates: ratesReducer
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch