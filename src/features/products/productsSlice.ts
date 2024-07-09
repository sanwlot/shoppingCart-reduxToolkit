import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProducts } from "./productsAPI"

const initialState = {
  products: [],
  status: "idle",
}

export const fetchAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts()
    return response.data
  },
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchAsync.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
  },
})

export default productsSlice.reducer
