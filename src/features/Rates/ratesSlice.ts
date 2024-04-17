import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppDispatch, AppRootStateType } from "../../app/store"
import { getRates, BaseResponseType } from "../../common/api/common-api"
import { AxiosError } from "axios"

const slice = createSlice({
  name: "rates",
  initialState: {
    amount: 1,
    base: "EUR",
    date: "2024-04-05",
    rates: {}
  } as BaseResponseType,
  selectors: {
    selectBase: (sliceState) => sliceState.base,
    selectDate: (sliceState) => sliceState.date,
    selectRates: (sliceState) => sliceState.rates
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const fetchRates = createAsyncThunk<BaseResponseType, string | null , {
  state: AppRootStateType, dispatch: AppDispatch, rejectWithValue: AxiosError | null
}>(`${slice.name}/fetchRates`, async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await getRates(arg)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const ratesReducer = slice.reducer
export const ratesThunks = { fetchRates }
export const { selectBase, selectDate, selectRates } = slice.selectors