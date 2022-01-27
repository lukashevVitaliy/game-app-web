import './game-cover.scss';

export const GameCover = ({ image = '' }) => {
	return (
		<div className="game-cover" style={{ backgroundImage: `url(${image})` }} />
	)
}