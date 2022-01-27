import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page';
import { Page404 } from './pages/page-404';
import { Header } from './components/header';

import store from './store';


function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="app">
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/app/:title' element={<GamePage />} />
						<Route path='/order' element={<OrderPage />} />
						<Route path='*' element={<Page404 />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
