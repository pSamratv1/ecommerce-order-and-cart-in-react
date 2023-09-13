const  { createSlice } = require("@reduxjs/toolkit");


const CartSlice = createSlice({
    name:"slice/CartSlice",
    initialState:{
        cartNumber:0,
        originalCart:[],
        cartItem: []
        
    },
    reducers:{
        setCartNumber:(state,action) => {
            state.cartNumber.push(action.payload);
        },
        addToCart:(state,action) => {
            const newItem = action.payload;
            console.log(newItem,"newItem")
            
            if(state.cartNumber===0){
                let cart = {
                        id:action.payload.id,
                        quantity:action.payload.quantity,
                        title:action.payload.title,
                        thumbnail:action.payload.thumbnail,
                        price:action.payload.price
                } 
                state.cartItem.push(cart); 
                state.originalCart.push(cart); 
                state.cartNumber = state.cartNumber + 1
            }
            else{
                const existingId = state.cartItem.findIndex((item) => item.id === newItem.id)
                if(existingId!== -1) {   
                    state.cartItem[existingId].quantity = state.cartItem[existingId].quantity + newItem.quantity;
                    
                }
                else {
                    let cart = {
                        id:action.payload.id,
                        quantity:action.payload.quantity,
                        title:action.payload.title,
                        thumbnail:action.payload.thumbnail,
                        price:action.payload.price
                } 
                state.cartItem.push(cart); 
                state.originalCart.push(cart); 
                state.cartNumber = state.cartNumber + 1

                }
  
            }
        },
        cartIncrement:(state,action) => {
            const itemID = action.payload;

            const itemToIncrement  = state.cartItem.find((item) => item.id === itemID)
            const {price:originalPrice}  = state.originalCart.find((item) => item.id === itemID)


            if(itemToIncrement) {
                itemToIncrement.quantity++

                itemToIncrement.price = originalPrice * itemToIncrement.quantity
            }   
           

    },
    cartDecrement:(state,action) => {
        const itemID = action.payload;
        
        const itemToDecrement  = state.cartItem.find((item) => item.id === itemID)
        const {price:originalPrice} = state.originalCart.find((item) => item.id === itemID)

        if(itemToDecrement) {
            itemToDecrement.quantity--
            itemToDecrement.price = itemToDecrement.price - originalPrice
        }
        if (itemToDecrement.quantity === 0) {
            state.cartItem = state.cartItem.filter((item) => item.id !== itemID);
        }

    },
    cartRemove:(state,action) => {
        const itemID = action.payload
        state.cartItem = state.cartItem.filter((item) => item.id !== itemID);
    }
}});

export const {setCartNumber,addToCart, cartIncrement,cartDecrement, cartRemove}=CartSlice.actions;
export default CartSlice.reducer