import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { ResTableItem } from "./types"
import { postAddProducts } from "./asyncActions"

interface InitialPostTable {
  title: string
  price: string
  category: string
  description: string
  image: string
  fetchingStatus: boolean
  responseItem: ResTableItem
}

const initialState: InitialPostTable = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
  fetchingStatus: false,
  responseItem: {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  },
}

const postTableSlice = createSlice({
  name: "postTable",
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
    setFetchingStatus(state, action: PayloadAction<boolean>) {
      state.fetchingStatus = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      postAddProducts.fulfilled,
      (state, action: PayloadAction<ResTableItem>) => {
        state.responseItem = action.payload
      },
    )
  },
})
export const { setTitle, setCategory, setDescription, setImage, setPrice, setFetchingStatus } =
  postTableSlice.actions

export default postTableSlice.reducer
