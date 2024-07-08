import type { RootState } from "../../redux/store";

export const selectTable = (state: RootState) => state.table.items;
