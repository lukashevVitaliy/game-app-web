import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { OrderItem } from '../../components/order-item';
import { calcTotalPrice, enumerate } from '../../components/utils';

import './order-page.scss';


export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart);

	if (items < 1) {
		return <h1>Ваша корзина пуста</h1>
	}

	return (
		<div className="order-page">
			<Helmet>
				<meta name="description" content="page order games" />
				<title>Order Games</title>
			</Helmet>

			<div className="order-page__games">
				{items.map(game => <OrderItem game={game} />)}
			</div>
			<div className="order-page__games-price">
				<div className="order-page__total-price">
					<span>
						{items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.
					</span>
				</div>
			</div>

		</div>
	)
}