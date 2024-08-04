import axios from "axios"
import type { TableItem } from "../table/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const updateProduct = createAsyncThunk(
  "table/updateProduct",
  async (product: TableItem) => {
    const { title, price, category, description, image } = product
    const response = await axios.put<TableItem>(
      `${"https://fakestoreapi.com/products?"}/${product.id}`, {
        title: title,
        price: price,
        category: category,
        description: description,
        image: image,
      }
    )
    return response.data
  },
)