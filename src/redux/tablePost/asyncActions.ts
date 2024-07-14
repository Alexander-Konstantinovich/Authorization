import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type{ TableItem } from "../table/types"

export const postAddProducts = createAsyncThunk(
  "tablePost/postAddProducts",
  async (params: TableItem) => {
    const { title, price, category, description, image } = params
    const {data} = await axios.post<TableItem>("https://fakestoreapi.com/products", {
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
    },)
    return data
  },
)
