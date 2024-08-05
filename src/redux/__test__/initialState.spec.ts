import tableReducer from "../table/slice"
import { Status } from "../table/types"

describe("TableSlice", () => {
  const initialState = {
    items: [],
    status: Status.LOADING,
    displayedItems: [],
  }
  it("should return the initial state", () => {
    expect(tableReducer(undefined, { type: "" })).toEqual(initialState)
  })
})
