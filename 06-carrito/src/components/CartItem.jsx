import { useCart } from '../utils/customHooks'

export const CartItem = ({ product }) => {
	const { removeFromCart, addToCart } = useCart()

	return (
		<li>
			<img src={product.image} alt='product' />
			<div>
				<strong>{product.title}</strong>
			</div>
			<footer>
				<small> {product.quantity}</small>
				<button onClick={() => addToCart(product)}>+</button>
				<button onClick={() => removeFromCart(product)}>-</button>
			</footer>
		</li>
	)
}
