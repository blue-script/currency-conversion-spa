import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "../common/createAppAsyncThunk"

const initialState: string[] = []

const slice = createSlice({
  name: "currencies",
  initialState,
  reducers:{

  }
})

// thunks
const fetchCurrencies = createAppAsyncThunk<any, undefined>(`${slice.name}/fetchCurrencies`, async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await todolistsAPI.getTasks(todolistId)
    const tasks = res.data.items
    dispatch(appActions.setAppStatus({ status: "succeeded" }))
    return { tasks, todolistId }
  } catch (e) {
    handleServerNetworkError(e, dispatch)
    return rejectWithValue(null)
  }
})