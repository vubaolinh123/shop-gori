import { combineReducers } from "redux";
import productSlice from "../features/Product/product"
import categorySlice from "../features/Category/category"
import proincateSlice from "../features/Category/ProInCate"
import productSearchSlice from "../features/Product/productSearchSlice"
import cartSlice from "../features/Cart/cartSlice"
import billSlice from "../features/Bill/billSlice"
import UserSlice from "../features/User/userSlice"
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    toastr: toastrReducer,
    product: productSlice,
    category: categorySlice,
    proincate: proincateSlice,
    productSearch: productSearchSlice,
    cart: cartSlice,
    user: UserSlice,
    bill: billSlice
});


export default rootReducer;
