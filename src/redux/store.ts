import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/es/persistStore"
import persistedReducer from "./persistedReducer"

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
