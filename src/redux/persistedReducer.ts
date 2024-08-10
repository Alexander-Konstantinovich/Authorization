import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit"
import registration from "../redux/signUp/slice"
import login from "../redux/signIn/slice"
import table from "../redux/table/slice"
import postTable from "../redux/tablePost/slice"
import editTable from "../redux/tableEdit/slice"

const persistConfig = {
  key: "root", // Ключ для сохранения состояния всего приложения, auth для авторизации, user - для пользователя
  storage,
  whitelist: ["login", "registration", "table", "postTable", "editTable"], // Указываем, какие редюсеры сохранять, есть ещё blackList
}

const rootReducer = combineReducers({
  registration,
  login,
  table,
  postTable,
  editTable,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
