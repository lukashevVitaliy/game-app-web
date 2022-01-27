import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import bg_404_page from './bg_page-404.jpg';
import './page-404.scss';

export const Page404 = () => {
	return (
		<div className="page-404">
			<Helmet>
				<meta name="description" content="page 404" />
				<title>Page 404</title>
			</Helmet>

			<img src={bg_404_page} alt="bg_404" />
			<div className="page-404__block">
				<h2 className="page-404__block-title">Error <span>404</span></h2>
				<Link to="/" className="page-404__block-link">на Главную</Link>
			</div>
		</div>
	)
}