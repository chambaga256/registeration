import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isloggedin:false,
        user:null,
        cart:[]
    },
    reducers:{
        cartProducts:()=>{

        },
        addItems:(state, {payload})=>{

           // alert(JSON.stringify(payload))
           state.cart.push(payload)
        },
        removeProducts:()=>{

        },
        registerUser:(state, {payload})=>{
            state.user = payload
            

        }
    }
})
export const {cartProducts, addItems, removeProducts, registerUser} = authSlice.actions;

//selectors
export const selectTotalProducts = (state)=>state.auth.cart

export default authSlice.reducer