import type { PayloadAction } from "@reduxjs/toolkit"
import { fetchAddProducts } from "../../table/asyncActions"
import tableExtraReducer from "../../table/slice"
import { Status } from "../../table/types"

describe("TableSliceExtraReducers", () => {
  const initialState = {
    items: [],
    status: Status.LOADING,
    displayedItems: [],
  }

  it("check extraReducer fetchAddProducts pending", () => {
    const action = { type: fetchAddProducts.pending.type }
    const newState = tableExtraReducer(initialState, action)
    expect(newState.status).toEqual(Status.LOADING)
    expect(newState.items).toEqual([])
  })

  it("check extraReducer fetchAddProducts fulfilled", () => {
    const data = [
      {
        id: 22,
        title: "Ocean",
        price: "500",
        category: "fox",
        description: "sea",
        image: "https",
      },
      {
        id: 23,
        title: "Placeholder",
        price: "5500",
        category: "fox`s",
        description: "sea and ocean",
        image: "http",
      },
    ]
    const action: PayloadAction<typeof data> = {
      type: fetchAddProducts.fulfilled.type,
      payload: data,
    }
    const newState = tableExtraReducer(initialState, action)
    expect(newState.status).toEqual(Status.SUCCESS)
    expect(newState.items).toEqual(data)
    expect(newState.displayedItems).toEqual(data)
  })

	it("check extraReducer fetchAddProducts rejected", () => {
    const action = { type: fetchAddProducts.rejected.type }
    const newState = tableExtraReducer(initialState, action)
    expect(newState.status).toEqual(Status.ERROR)
    expect(newState.items).toEqual([])
  })
})
