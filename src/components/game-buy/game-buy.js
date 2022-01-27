import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../button';
import { setItemInCart, deleteItemFromCart } from '../../store/reducers/cartSlice';

import './game-buy.scss';

export const GameBuy = ({ game }) => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.itemsInCart);
	const isItemInCart = items.some(item => item.id === game.id);

	const handleClick = (e) => {
		e.stopPropagation();

		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id))
		} else {
			dispatch(setItemInCart(game))
		}
	}


	return (
		<div className="game-buy">
			<span className="game-buy__price">{game.price} руб.</span>
			<Button
				onClick={handleClick}
				type={isItemInCart ? "secondary" : "primary"} >

				{isItemInCart ? "Убрать из корзины" : "В корзину"}

			</Button>
		</div>
	)
}