import type { PayloadAction } from "@reduxjs/toolkit"
import {  createSlice } from "@reduxjs/toolkit"
import type { TableInitial, TableItem } from "./types"
import { Status } from "./types"
import { fetchAddProducts } from "./asyncActions"


const initialState: TableInitial = {
  items: [],
  status: Status.LOADING,
}

const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setRemoveItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
		},
  },
  extraReducers: builder => {
    builder.addCase(fetchAddProducts.pending, state => {
      state.items = []
      state.status = Status.LOADING
    })
    .addCase(fetchAddProducts.fulfilled, (state, action: PayloadAction<TableItem[]>) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    .addCase(fetchAddProducts.rejected, state => {
      state.items = []
      state.status = Status.ERROR
    })
  },
})
export const {setRemoveItem} = TableSlice.actions

export default TableSlice.reducer
