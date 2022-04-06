import { createSlice } from "@reduxjs/toolkit";
import { toastr as toastrx } from 'react-redux-toastr'
import toastr from "toastr";





const cartSlice = createSlice({
    name: "cart",
    initialState: {
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

    }
});

export const { addItemToCart, removeItemFromCart, decInQty, incInQty } = cartSlice.actions;
export default cartSlice.reducer;
