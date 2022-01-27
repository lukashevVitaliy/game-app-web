import { configureStore } from '@reduxjs/toolkit';

import games from './reducers/gamesSlice';
import cart from './reducers/cartSlice';

const store = configureStore({
	reducer: { games, cart },
	devTools: process.env.NODE_ENV !== 'production'
})

export default store;