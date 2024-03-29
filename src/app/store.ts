import { AnyAction, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {

  }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store