import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { GameGenresList } from '../../components/game-genres-list';
import { GameCover } from '../../components/game-cover';
import { GameBuy } from '../../components/game-buy';

import './game-page.scss';

export const GamePage = () => {
	const game = useSelector(state => state.games.currentGame);

	// проверка без Бэка
	if (!game) return null;

	return (
		<div className="game-page">
			<Helmet>
				<meta name="description" content="game page" />
				<title>{game.title}</title>
			</Helmet>

			<h1 className="game-page__title">{game.title}</h1>
			<div className="game-page__content">
				<div className="game-page__left">
					<iframe
						width="90%"
						height="400"
						src={game.video}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen></iframe>
				</div>
				<div className="game-page__right">
					<GameCover image={game.image} />
					<p className="game-page__description">{game.description}</p>
					<p className="secondary-text">Популярные метки этого продукта:</p>
					<GameGenresList game={game} />
					<div className="game-page__buy-game">
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	)
}
