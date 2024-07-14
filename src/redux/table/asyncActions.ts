import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAddProducts = createAsyncThunk(
  "table/fetchAddProducts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products?")
    return data
  },
)
