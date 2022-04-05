import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { search } from "../../api/product";

export const getProductSearch = createAsyncThunk(
    "productSearch/getProductSearch",
    async (keyword, thunkAPI) => {
        const { data } = await search(keyword);
        return data
    }
)

const productSearchSlice = createSlice({
    name: "productSearch",
    initialState: {
        value: [
            {
                _id: "624af4337513812673a699a0",
                name: "Chưa search sản phẩm",
                price: 0,
                oldPrice: 0
            }
        ]
    },
    extraReducers: (builder) => {
        builder.addCase(getProductSearch.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default productSearchSlice.reducer

