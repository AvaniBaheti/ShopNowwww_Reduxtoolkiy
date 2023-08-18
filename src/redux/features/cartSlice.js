import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
            const IteamIndex = state.carts.findIndex((iteam)=>iteam.id ===    action.payload.id );
            if(IteamIndex>=0)
            {
                state.carts[IteamIndex].qnty+=1;
            }
            else
            {
                const ams={...action.payload,qnty:1};
                state.carts=[...state.carts,ams];
            }
        },
        // remove particular items .
        removeToCart:(state,action)=>{
            const ans = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts =   ans ;
        },
        //remove single itemss.
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },

        // clear cart
        emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart, removeToCart ,removeSingleIteams   ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;