import React from 'react'
import { ProductStockCard } from './ProductStockCard'

export const ProductsContainer = ({productsList, filterProduct}) => {

	const filteredProduct = () => {
		
		

			return productsList.filter((product)=>{
				if(filterProduct.search === "") return product;
				return product.title.toLowerCase().includes(filterProduct.search.toLowerCase().trim());
			}).filter((product)=>{
				if(filterProduct.category === "") return product; 
				return product.idCategory === filterProduct.category;
			});
		
		
	}

	


	return (
		<div className='w-full bg-primario pb-24 px-4'>
			<div className='w-full'>
				<h2 className='w-full'>Lista de productos</h2>
			</div>

			<div className='w-full'>
            {filteredProduct().map((product) => {
					return (
						<ProductStockCard
							key={product.id}
							title={product.title}
							price={product.price}
							stock={product.stock}

						/>
					)
				})}
				
			</div>
		</div>
	)
}
