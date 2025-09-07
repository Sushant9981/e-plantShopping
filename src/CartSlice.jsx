import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload

        // Check if the item already exists in the cart by comparing names
        const existingItem = state.items.find(item => item.name === name );
        if (existingItem) {
        // If already exisits in the cart, increase its quantity
        existingItem.quantity++;
        } else {
            // If Item does not exist, add it to the cart with quantity 1
            state.items.push({ name, image, cost, quantity: 1 });
        }

    },
    
    removeItem: (state, action) => {
        const name = action.payload;
        state.items = state.items.filter(item => item.name !== name);
     },
          
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;

        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if(itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
