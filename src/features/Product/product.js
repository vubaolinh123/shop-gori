import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { add, filter, filterProduct, list, read, remove, search, update } from "../../api/product";

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

export const getProductPage = createAsyncThunk(
    "product/getProductPage",
    async (numberPage, thunkAPI) => {
        const { data } = await filter(numberPage);
        return data
    }
)

export const getProductFilter = createAsyncThunk(
    "product/getProductFilter",
    async (filter, thunkAPI) => {
        const { data } = await filterProduct(filter.page, filter.order);
        return data
    }
)


const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        valueOne: [],
        valueLimitPage: [],
        status: null
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
        builder.addCase(getProductPage.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        })
        builder.addCase(getProductFilter.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        })



    }


});

export default productSlice.reducer;