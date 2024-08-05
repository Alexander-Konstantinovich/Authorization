import tableReducer, { setRemoveItem } from "../../table/slice"
import { Status } from "../../table/types"

describe("TableSlice", () => {
  const initialState = {
    items: [],
    status: Status.LOADING,
    displayedItems: [],
  }

  const state = {
    ...initialState,
    displayedItems: [
      {
        id: 22,
        title: "asd",
        price: "500",
        category: "fox",
        description: "sea",
        image: "https",
      },
      {
        id: 23,
        title: "as",
        price: "5500",
        category: "fox`s",
        description: "sea and ocean",
        image: "http",
      },
    ],
  }
  it("check reducer setRemoveItem", () => {
    const action = setRemoveItem(23)
    const newState = tableReducer(state, action)
    expect(newState.displayedItems).toEqual([
      {
        id: 22,
        title: "asd",
        price: "500",
        category: "fox",
        description: "sea",
        image: "https",
      },
    ])
  })
})
