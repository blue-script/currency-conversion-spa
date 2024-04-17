import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, AppRootStateType } from "./store"
import { AxiosError } from "axios"
import { CurrenciesResponseType, getCurrencies } from "../common/api/common-api"

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const initialState = {
  isInitialized: false,
  status: "idle" as RequestStatusType,
  currencies: {} as { [key: string]: string }
}

const slice = createSlice({
  name: "app",
  initialState,
  selectors: {
    selectStatus: (sliceState) => sliceState.status,
    selectIsInitialized: (sliceState) => sliceState.isInitialized,
    selectCurrencies: (sliceState) => sliceState.currencies
  },
  reducers: {
    changeIsInitialized: (state, action: PayloadAction) => {
      state.isInitialized = true
    },
  },
   extraReducers: builder => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload
    })
      .addMatcher(isPending, (state) => {
        state.status = "loading"
      })
      .addMatcher(isFulfilled, (state) => {
        state.status = "succeeded"
      })
      .addMatcher(isRejected, (state) => {
        state.status = "failed"
      })
   }
})

const fetchCurrencies = createAsyncThunk<CurrenciesResponseType, void, {
  state: AppRootStateType, dispatch: AppDispatch, rejectWithValue: AxiosError | null
}>(`${slice.name}/fetchCurrencies`, async (_, thunkAPI)=> {
  const {rejectWithValue, dispatch} = thunkAPI
  try {
    const res = await getCurrencies()
    dispatch(appActions.changeIsInitialized())
    return res.data
  } catch(err) {
    return rejectWithValue(err)
  }
} )

export const appReducer = slice.reducer
export const { selectIsInitialized, selectStatus, selectCurrencies } = slice.selectors
export const appThunks = {fetchCurrencies}
export const appActions = slice.actions