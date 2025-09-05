import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.name === newItem.name)

        if(existingItem) {
            // If Already exists, then increase its quantity
            existingItem.quantity += 1;
        
        } else{
            // If Item is new, then add it with quantity = 1
            state.items.push({ ...newItem, quantity: 1});
        }
    
    },

    removeItem: (state, action) => {
        const itemName = action.payload;
        state.items = state.items.filter(item => item.name !== itemName)
    },
    
    updateQuantity: (state, action) => {
        const { name, amount } = action.payload;
        const existingItem = state.items.find(item => item.name === name);

        if (existingItem && amount > 0) {
            existingItem.quantity = amount;
        }
        // If amount <= 0 , we could remove the item, but leaving it as it is as if it is useless

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
