import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toastr } from "react-redux-toastr";
import { detailBill, list, update } from "../../api/infoOder"



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

export const updateStatusBill = createAsyncThunk(
    "bill/updateStatusBill",
    async (bill, thunkAPI) => {
        try {
            console.log(bill.statusFake);
            const { data } = await update(bill.statusFake, bill.id)
            return data
        } catch (error) {
            console.log(error);
        }
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
        builder.addCase(updateStatusBill.fulfilled, (state, action) => {
            // const id = action.payload._id;
            // const currentBill = state.detailBill.detail.find(item => item._id === id);
            // state.detailBill.detail.flat().forEach((item) => {
            //     if (item._id === currentBill._id) {
            //         item.status = 4
            //     }
            // });
        })

    }
})

export default billSlice.reducer