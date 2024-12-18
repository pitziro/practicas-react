import { useCart } from '../utils/customHooks'
import { AddToCartIcon } from './Icons'
import './Products.css'

const Products = ({ products }) => {
	const { addToCart } = useCart()

	return (
		<main className='products'>
			<ul>
				{products.map((prod) => (
					<li key={prod.id}>
						<img src={prod.image} alt={prod.title} />
						<div className='description'>
							<p className='item-tittle'>
								<strong>{prod.title}</strong>
							</p>
							<p>
								<strong>$ {prod.price}</strong>
							</p>
							<button onClick={() => addToCart(prod)}>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}

export default Products
