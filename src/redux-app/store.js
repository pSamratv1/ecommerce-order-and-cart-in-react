import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./slices/OrderSlice";
import CartReducer from "./slices/CartSlice";
import SearchReducer from "./slices/SearchSlice";

const store = configureStore({
    reducer:{
        order:OrderReducer,
        cart:CartReducer,
        search:SearchReducer,

    }
})




export default store;