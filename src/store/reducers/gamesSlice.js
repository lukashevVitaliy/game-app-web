import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	games: [],
	gamesLoadingStatus: 'idle',
	currentGame: {}
}

const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {
		gamesFetching: state => {
			state.gamesLoadingStatus = 'loading';
		},
		gamesFetched: (state, action) => {
			state.gamesLoadingStatus = 'idle';
			state.games = action.payload;
		},
		gamesFetchingError: state => {
			state.gamesLoadingStatus = 'error';
		},
		setCurrentGame: (state, action) => {
			state.currentGame = action.payload;
		}
	}
});

const { actions, reducer } = gamesSlice;

export default reducer;

export const {
	gamesFetching,
	gamesFetched,
	gamesFetchingError,
	setCurrentGame
} = actions;