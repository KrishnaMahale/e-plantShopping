
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// Redux slice for managing the shopping cart
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add a plant to the cart
    addToCart: (state, action) => {
      const plant = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Increase plant quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease plant quantity
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (plant) => plant.id !== action.payload
          );
        }
      }
    },

    // Remove a plant from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// Helper functions for cart calculations
export const selectCartItems = (state) => state.cart.items;

export const selectCartQuantity = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
