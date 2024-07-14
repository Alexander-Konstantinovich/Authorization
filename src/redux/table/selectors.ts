import type { RootState } from "../../redux/store";

export const selectTable = (state: RootState) => state.table;
export const selectTableDisplayedItems = (state: RootState) => state.table.displayedItems;
export const selectTableStatus = (state: RootState) => state.table.status;
// export const selectTableById = (id: number) => (state: RootState) =>
// 	state.table.items.find((obj) => obj.id === id);

