import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(()=>{
		const prevStorage = localStorage.getItem('cart');
		return prevStorage ? JSON.parse(prevStorage):[]
	});

	useEffect(()=>{
		localStorage.setItem('cart',JSON.stringify(cart));
	},[cart])

	const addItem = item => {
		// add the given item to the cart
		setCart(prev => [...prev,item])
	};
	const removeItem = item => {
		setCart(prev => prev.filter(prevItem => prevItem.id !== item.id))
	}
	return (
		<ProductContext.Provider className="App" value={{products,addItem}}>
			<CartContext.Provider value={{cart,removeItem}}>
			<Navigation/>
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
