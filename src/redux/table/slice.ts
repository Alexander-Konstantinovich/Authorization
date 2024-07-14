import type { PayloadAction } from "@reduxjs/toolkit"
import {  createSlice } from "@reduxjs/toolkit"
import type { TableInitial, TableItem } from "./types"
import { Status } from "./types"
import { fetchAddProducts } from "./asyncActions"


const initialState: TableInitial = {
  items: [],
  status: Status.LOADING,
  displayedItems: [],
}

const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {

    addItem(state, action: PayloadAction<TableItem>) {
      state.displayedItems.push(action.payload)
    },
    setRemoveItem(state, action: PayloadAction<number>) {
			state.displayedItems  = state.displayedItems .filter(obj => obj.id !== action.payload);
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
      state.displayedItems = state.items
    })
    .addCase(fetchAddProducts.rejected, state => {
      state.items = []
      state.status = Status.ERROR
    })
  },
})
export const {setRemoveItem, addItem} = TableSlice.actions

export default TableSlice.reducer
