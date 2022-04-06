import { createSlice } from "@reduxjs/toolkit";



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
            // state.totalQuantity--;
            const id = action.payload;
            // const existingItem = state.items.find((item) => item.id === id);
            // if (existingItem.quantity === 1) {
            const confirm = window.confirm("Bạn có muốn xóa không?");
            if (confirm) {
                state.items = state.items.filter((item) => item._id !== id);
                state.totalQuantity--;
            }
            // } else {
            //   existingItem.quantity--;
            //   existingItem.totalPrice -= existingItem.price;
            // }
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
