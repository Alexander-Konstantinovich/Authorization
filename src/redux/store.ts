import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import registration from "../redux/signUp/slice"
import login from "../redux/signIn/slice"
import table from '../redux/table/slice'
import postTable from "../redux/tablePost/slice"

export const store = configureStore({
  reducer: {
    registration,
    login,
    table,
    postTable,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
