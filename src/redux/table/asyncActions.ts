import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { TableItem } from "./types"

export const fetchAddProducts = createAsyncThunk(
  "table/fetchAddProducts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products?")
    return data
  },
)

export const updateProduct = createAsyncThunk(
  "table/updateProduct",
  async (product: TableItem) => {
    const response = await axios.put<TableItem>(
      `${"https://fakestoreapi.com/products?"}/${product.id}`,
    )
    return response.data
  },
)
