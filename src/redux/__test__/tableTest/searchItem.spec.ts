import tableReducer, { searchItem } from "../../table/slice"
import { Status } from "../../table/types"

describe("TableSlice", () => {
  const initialState = {
    items: [],
    status: Status.LOADING,
    displayedItems: [],
  }

  const state = {
    ...initialState,
		items: [
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
    displayedItems: [
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
		],
  }
  it("check reducer searchItem", () => {
    
    const action = searchItem('Ocean')
    const newState = tableReducer(state, action)
    expect(newState.displayedItems).toEqual([
			{
        id: 22,
        title: "Ocean",
        price: "500",
        category: "fox",
        description: "sea",
        image: "https",
      },
		])
		const actionEmpty = searchItem("")
		const newStateEmpty = tableReducer(state, actionEmpty)
		expect(newStateEmpty.displayedItems).toEqual(state.items)
  })
})