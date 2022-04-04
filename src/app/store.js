import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/Product/product"
import categoryReducer from "../features/Category/category"
import proincateReducer from "../features/Category/ProInCate"
import { reducer as toastrReducer } from 'react-redux-toastr'




export const store = configureStore({
  reducer: {
    toastr: toastrReducer,
    product: productReducer,
    category: categoryReducer,
    proincate: proincateReducer
  },
});


