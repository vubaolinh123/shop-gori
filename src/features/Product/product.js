import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { list, read } from "../../api/product";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const { data } = await list();
        return data
    }
)

export const getOneProducts = createAsyncThunk(
    "product/getOneProducts",
    async (params, thunkAPI) => {
        const { data } = await read(params);
        return data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(getOneProducts.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }


});

export default productSlice.reducer;