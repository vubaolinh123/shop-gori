import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { read } from "../../api/category"

export const getProductInCategory = createAsyncThunk(
    "category/getProductInCategory",
    async (IdCategory, thunkAPI) => {
        const { data } = await read(IdCategory);
        return data
    }
)

const proInCateSlice = createSlice({
    name: "proInCate",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProductInCategory.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(getProductInCategory.rejected, (state, action) => {

        })


    }
})

export default proInCateSlice.reducer