import React from 'react';

import { Button } from '../button';
import { calcTotalPrice } from '../utils';
import { CartItem } from '../cart-item';

import './cart-menu.scss';

export const CartMenu = ({ items, onClick }) => {
	return (
		<div className="cart-menu">
			<ul className="cart-menu__games-list">
				{items.length > 0 ? items.map(game => (
					<CartItem
						key={game.id}
						price={game.price}
						title={game.title}
						id={game.id}
					/>)) : "Корзина пуста"}
			</ul>
			{
				items.length > 0 ?
					<div className="cart-menu__arrange">
						<div className="cart-menu__total-price">
							<span>Итого:</span>
							<span>{calcTotalPrice(items)} руб.</span>
						</div>
						<Button
							type="primary"
							size="s"
							onClick={onClick}
						>
							Оформить заказ
						</Button>
					</div>
					: null
			}
		</div>
	)
}