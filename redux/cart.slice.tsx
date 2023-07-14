import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interface Item {
//   id: number,
//   name: string,
//   category: string,
//   image: string,
//   price: number
// }

// interface CartState {
//   items: Item[];
// }

// const initialState: CartState = {
//   items: [],
// };

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  // initialState,
  reducers: {
    addToCart: (state, action ) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // addToCart: (state, action: PayloadAction<Item>) => {
    //   const itemExists = state.items.find((item) => item.id === action.payload.id);
    //   if (itemExists) {
    //     (itemExists as Item).quantity++; // Type assertion here
    //   } else {
    //     state.items.push({ ...action.payload, quantity: 1 });
    //   }
    // },

    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;