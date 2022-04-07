import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toastr } from "react-redux-toastr";
import { detailBill, list } from "../../api/infoOder"



export const getAllBill = createAsyncThunk(
    "bill/getAllBill",
    async (id) => {
        const { data } = await list();
        return data
    }
)

export const getDetailBill = createAsyncThunk(
    "bill/getDetailBill",
    async (idBill) => {
        const { data } = await detailBill(idBill);
        return data
    }
)


const billSlice = createSlice({
    name: "bill",
    initialState: {
        value: [],
        detailBill: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBill.fulfilled, (state, action) => {
            state.value = action.payload
        });
        builder.addCase(getDetailBill.fulfilled, (state, action) => {
            state.detailBill = action.payload
        });

    }
})

export default billSlice.reducer