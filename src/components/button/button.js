import classNames from 'classnames';

import './button.scss';

export const Button = ({
	onClick,
	type,
	children,
	size
}) => {
	const btnClass = classNames({
		'btn': true,
		'btn--secondary': type === 'secondary',
		'btn--primary': type === 'primary',
		'btn--small': size === 's',
		'btn--medium': size === 'm'
	})

	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	)
}

