import { GameGenre } from '../game-genre';

import './game-genres-list.scss';

export const GameGenresList = ({ game }) => {
	return (
		<div className="game-genres__list">
			{game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
		</div>
	)
}