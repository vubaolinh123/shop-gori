import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastr as toastrx } from 'react-redux-toastr'
import toastr from "toastr";
import { update } from "../../api/infoOder";

export const updateStatusBill = createAsyncThunk(
    "cart/updateStatusBill",
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

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        valueBill: [],
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            // state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item._id === newItem._id);
            if (!existingItem) {
                state.items.push(newItem);
                state.totalQuantity++;
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.total += newItem.total;
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item._id !== id);
            state.totalQuantity--;
        },
        decInQty(state, action) {

            const id = action.payload.id;
            const currentProduct = state.items.find(item => item._id === id);
            state.items.flat().forEach((item) => {
                if (item._id === currentProduct._id) {
                    item.quantity--;
                    if (item.quantity < 1) {
                        item.quantity = 1
                        item.total = item.price
                    } else {
                        item.total = item.price * item.quantity
                    }
                }
            });
        },
        incInQty(state, action) {
            const id = action.payload.id;

            const currentProduct = state.items.find(item => item._id === id);
            state.items.flat().forEach((item) => {
                if (item._id === currentProduct._id) {
                    item.quantity++;
                    item.total = item.price * item.quantity
                }
            });
        },

        resetCart(state, action) {
            state.items = []
            state.totalQuantity = 0
        },


    },
    extraReducers: (builder) => {
        builder.addCase(updateStatusBill.fulfilled, (state, action) => {
            state.valueBill = action.payload
        })
    }
});

export const { addItemToCart, removeItemFromCart, decInQty, incInQty, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
