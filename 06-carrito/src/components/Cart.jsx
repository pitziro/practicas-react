import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../utils/customHooks'

import './Cart.css'
import { CartItem } from './CartItem'

export const Cart = () => {
	const cartCheckboxID = useId()

	const { cart, clearCart } = useCart()

	return (
		<>
			<label className='cart-btn' htmlFor={cartCheckboxID}>
				<CartIcon />
			</label>
			<input type='checkbox' hidden id={cartCheckboxID} />

			<aside className='cart'>
				<ul>
					{cart.map((prod) => (
						<CartItem key={prod.id} product={prod} />
					))}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}
