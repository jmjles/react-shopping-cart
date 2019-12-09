import React,{useContext} from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';
const Products = () => {
	const mainContext = useContext(ProductContext)
	return (
		<div className="products-container">
			{mainContext.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={product.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
