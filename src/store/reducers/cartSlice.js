import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemsInCart: []
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setItemInCart: (state, action) => {
			state.itemsInCart.push(action.payload);
		},
		deleteItemFromCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
		}
	}
})

const { actions, reducer } = cartSlice;

export default reducer;

export const {
	setItemInCart,
	deleteItemFromCart
} = actions;