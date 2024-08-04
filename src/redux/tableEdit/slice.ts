import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { updateProduct } from "./asyncActions"
import type { TableItem } from "../table/types"
import type { InitialEditTable } from "./types"



const initialState:InitialEditTable = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
  responseItem: {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  },
}

const editTableSlice = createSlice({
  name: "editTable",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      updateProduct.fulfilled,
      (state, action: PayloadAction<TableItem>) => {
        state.responseItem = action.payload
      },
    )
  },
})

export const { setTitle, setPrice, setCategory, setDescription, setImage } =
  editTableSlice.actions

export default editTableSlice.reducer