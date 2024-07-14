import type { RootState } from "../store"

export const selectPostTable = (state: RootState) => state.postTable
export const selectTableResponseItem = (state: RootState) =>
  state.postTable.responseItem
