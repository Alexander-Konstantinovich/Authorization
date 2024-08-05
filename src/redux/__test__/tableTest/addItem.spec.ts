import tableReducer, { addItem } from "../../table/slice"
import { Status } from "../../table/types"

describe("TableSlice", () => {
  const initialState = {
    items: [],
    status: Status.LOADING,
    displayedItems: [],
  }

  const state = {
    ...initialState,
    displayedItems: [],
  }
  it("check reducer addItem", () => {
    const newItem = {
      id: 21,
      title: "asd",
      price: "500",
      category: "fox",
      description: "sea",
      image: "https",
    }
    const action = addItem(newItem)
    const newState = tableReducer(state, action)
    expect(newState.displayedItems).toEqual([newItem])
  })
})
