import './cart-item.scss';

export const CartItem = ({ id, title, price }) => {
	return (
		<div className="cart-item">
			<p>{title}</p>
			<div className="cart-item__price">
				<span>{price} руб.</span>
			</div>
		</div>
	)
}