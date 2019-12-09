import React,{useContext} from 'react';
import ProductContext from '../contexts/ProductContext';

const Product = props => {
	const mainContext = useContext(ProductContext)
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={mainContext.addItem}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
