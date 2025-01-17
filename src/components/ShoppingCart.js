import React,{useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import CartContext from '../contexts/CartContext';


const ShoppingCart = () => {
	const mainContext = useContext(CartContext)
	const getCartTotal = () => {
		return mainContext.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{mainContext.cart.map(item => (
				<Item key={item.id} {...item} removeItem={mainContext.removeItem}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
