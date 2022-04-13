import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { list, add, remove, update } from "../../api/voucher";

export const getAllVoucher = createAsyncThunk(
    "voucher/getAllVoucher",
    async () => {
        const { data } = await list();
        return data
    }
)

export const addVoucher = createAsyncThunk(
    "voucher/addVoucher",
    async (voucher) => {
        try {
            const { data } = await add(voucher);
            toastr.success("Thông Báo", "Thêm mới mã Voucher thành công")
            return data
        } catch (error) {
            return toastr.error("Thông Báo", error.response.data.error)
        }
    }
)

export const removeVoucher = createAsyncThunk(
    "voucher/removeVoucher",
    async (id) => {
        const { data } = await remove(id);
        return data
    }
)

export const updateVoucher = createAsyncThunk(
    "voucher/updateVoucher",
    async (voucher) => {
        const { data } = await update(voucher);
        return data
    }
)


const voucherSlice = createSlice({
    name: "voucher",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllVoucher.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(addVoucher.fulfilled, (state, action) => {
            if (action.payload) {
                return
            }
            state.value.push(action.payload)
        })
        builder.addCase(removeVoucher.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateVoucher.fulfilled, (state, action) => {
            const id = action.payload._id;
            const currentVoucher = state.value.find(item => item._id === id);
            state.value.flat().forEach((item) => {
                if (item._id === currentVoucher._id) {
                    item.used--;
                    if (item.used < 1) {
                        item.used = 0
                    }
                }
            });
        })


    }
})

export default voucherSlice.reducer