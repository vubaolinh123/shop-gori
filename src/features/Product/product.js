import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { add, list, read, remove, search, update } from "../../api/product";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const { data } = await list();
        return data
    }
)

export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (dataProduct) => {
        const { data } = await add(dataProduct);
        toastr.success("Thông Báo", "Thêm sản phẩm thành công")
        return data
    }
)

export const updateProducts = createAsyncThunk(
    "product/updateProducts",
    async (dataProduct) => {
        const { data } = await update(dataProduct);
        toastr.success("Thông Báo", "Cập nhật sản phẩm thành công")
        return data
    }
)

export const removeProducts = createAsyncThunk(
    "product/removeProducts",
    async (id) => {
        const { data } = await remove(id);
        toastr.success("Thông Báo", "Xóa sản phẩm thành công")
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
        builder.addCase(removeProducts.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
        builder.addCase(updateProducts.fulfilled, (state, action) => {
            state.value = state.value?.map(item => item._id === action.payload._id ? action.payload : item)
        })
    }


});

export default productSlice.reducer;