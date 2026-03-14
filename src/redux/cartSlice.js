import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

name: "cart",

initialState: [],

reducers: {

// addToCart: (state, action) => {

// const exist = state.find(item => item.id === action.payload.id);

// if (exist) {

// exist.qty += 1;

// } else {

// state.push({ ...action.payload, qty: 1 });

// }

// },
addToCart: (state, action) => {
  const exist = state.find(item => item.id === action.payload.id);
  if (exist) {
    exist.qty += 1; // quantity increment
  } else {
    state.push({ ...action.payload, qty: 1 });
  }
},

removeFromCart: (state, action) => {

return state.filter(item => item.id !== action.payload);

},

increaseQty: (state, action) => {

const item = state.find(i => i.id === action.payload);

if (item) {

item.qty += 1;

}

},

decreaseQty: (state, action) => {

const item = state.find(i => i.id === action.payload);

if (item) {

if (item.qty > 1) {

item.qty -= 1;

} else {

return state.filter(i => i.id !== action.payload);

}

}

}

}

});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;