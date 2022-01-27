import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenresList } from '../game-genres-list';
import { setCurrentGame } from '../../store/reducers/gamesSlice';

import './game-items.scss';


export const GameItem = ({ game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handlerClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`)
	}

	return (
		<div
			className="game-item"
			tabIndex={1}
			onClick={handlerClick}
		>
			<GameCover image={game.image} />
			<div className="game-item__details">
				<span className="game-item__title">{game.title}</span>
				<GameGenresList game={game} />
				<div className="game-item__description">{game.description}</div>
				<div className="game-item__buy">
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	)
}