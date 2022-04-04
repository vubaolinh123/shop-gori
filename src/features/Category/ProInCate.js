import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { read } from "../../api/category"

export const getProductInCategory = createAsyncThunk(
    "category/getProductInCategory",
    async (IdCategory, thunkAPI) => {
        console.log(IdCategory);
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
            console.log(action.payload);
            state.value = action.payload
        })
        builder.addCase(getProductInCategory.rejected, (state, action) => {
            console.log(action);
        })


    }
})

export default proInCateSlice.reducer