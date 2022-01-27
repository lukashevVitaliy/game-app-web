import { useEffect } from "react";
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { gamesFetching, gamesFetched, gamesFetchingError } from "../../store/reducers/gamesSlice";
import { GameItem } from '../../components/game-items';
import { Spinner } from '../../components/spinner';

import './home-page.scss';


export const HomePage = () => {
	const { games, gamesLoadingStatus } = useSelector(state => state.games);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(gamesFetching());
		request("http://localhost:3001/games")
			.then(data => dispatch(gamesFetched(data)))
			.catch(() => dispatch(gamesFetchingError()))
		// eslint-disable-next-line
	}, []);

	if (gamesLoadingStatus === "loading") {
		return <Spinner />;
	} else if (gamesLoadingStatus === "error") {
		return <h2 className="home-page__error">Ошибка загрузки...</h2>
	}

	const renderGamesList = (arr) => {
		if (arr.length === 0) {
			return <h2>Игр пока нет</h2>
		}

		return arr.map(game => {
			return (
				<GameItem key={game.id} game={game} />
			)
		})
	}

	const elements = renderGamesList(games);

	return (
		<>
			<Helmet>
				<meta name="description" content="Game Store testing works React & Redux" />
				<title>Game Store</title>
			</Helmet>

			<ul className="home-page">
				{elements}
			</ul>

		</>

	)
} 