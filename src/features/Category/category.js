import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toastr } from "react-redux-toastr";
import { add, list, remove, update } from "../../api/category"

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async () => {
        const { data } = await list();
        return data
    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (category) => {
        const { data } = await add(category);
        toastr.success("Thông báo", "Thêm danh mục thành công")
        return data
    }
)

export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async (category) => {
        const { data } = await update(category);
        toastr.success("Thông báo", "Cập nhật danh mục thành công")
        return data
    }
)

export const removeCategory = createAsyncThunk(
    "category/removeCategory",
    async (id) => {
        const { data } = await remove(id);
        toastr.success("Thông Báo", "Xóa thành công")
        return data
    }
)


const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.value = action.payload
        });
        builder.addCase(removeCategory.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.value.push(action.payload)
        });
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        });
    }
})

export default categorySlice.reducer