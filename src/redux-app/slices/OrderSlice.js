const { createSlice } = require("@reduxjs/toolkit");
const OrderSlice = createSlice({
    name:"slices/OrderSlice",
    initialState:{
        cartTotal:[],
    },
    reducers:{
        setCartTotal:(state,action)=> {
            // const {} = action.payload
            // state.cartTotal([...state.cartTotal,action.payload])
            state.cartTotal.push(action.payload);
        }
    }
});



export const {setCartTotal}=OrderSlice.actions;
export default OrderSlice.reducer