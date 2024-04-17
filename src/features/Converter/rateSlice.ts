import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BaseResponseType, getRate } from "../../common/api/common-api"
import { AppDispatch, AppRootStateType } from "../../app/store"
import { AxiosError } from "axios"

const slice = createSlice({
  name: "rate",
  initialState:
    {
      amount: 1,
      base: "EUR",
      date: "2024-04-05",
      rates: {}
    } as BaseResponseType,
  selectors: {
    selectAmount: (sliceState) => sliceState.amount,
    selectBase: (sliceState) => sliceState.base,
    selectRate: (sliceState) => sliceState.rates
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRate.fulfilled, (state, action) => {
        return action.payload
      })
  }
})

export const fetchRate = createAsyncThunk<BaseResponseType, { amount: number, from: string, to: string }, {
  state: AppRootStateType, dispatch: AppDispatch, rejectWithValue: AxiosError | null
}>(`${slice.name}/fetchRates`, async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await getRate(arg)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const rateReducer = slice.reducer
export const rateThunks = { fetchRate }
export const { selectBase, selectAmount, selectRate } = slice.selectors