import tableReducer, { setUpdateProduct } from "../../table/slice"
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
  it("check reducer setUpdateProduct", () => {
    const updateItem = {
			id: 23,
			title: "askFM",
			price: "5200",
			category: "fox`s",
			description: "ocean",
			image: "http",
		}
    const action = setUpdateProduct(updateItem)
    const newState = tableReducer(state, action)
    expect(newState.items).toEqual([
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
				title: "askFM",
				price: "5200",
				category: "fox`s",
				description: "ocean",
				image: "http",
			}
		])
		expect(newState.displayedItems).toEqual([
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
				title: "askFM",
				price: "5200",
				category: "fox`s",
				description: "ocean",
				image: "http",
			}
		])
  })
})
