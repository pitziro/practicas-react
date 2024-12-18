import { useReducer } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

// v2 : usando los reducers para estados complejos
// necesitamos un estado + reducer
// recibe un estado y devuelve uno transformado dependiente de la accion
// esta funcion para manejar el estado podria estar en un archivo separado, y podria funcionar en otro framework
const initialState = []
const reducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case 'ADD_TO_CART': {
			const prodIdx = state.findIndex((prod) => prod.id === payload.id)
			if (prodIdx === -1) {
				return [
					...state,
					{
						...payload,
						quantity: 1
					}
				]
			} else {
				const newCart = structuredClone(state)
				newCart[prodIdx].quantity += 1
				return newCart
			}
		}
		case 'REMOVE_FROM_CART': {
			const prodIdx = state.findIndex((prod) => prod.id === payload.id)

			if (state[prodIdx].quantity === 1) {
				return state.filter((prod) => prod.id !== payload.id)
			} else {
				const newCart = structuredClone(state)
				newCart[prodIdx].quantity -= 1
				return newCart
			}
		}
		case 'CLEAR_CART': {
			return initialState
		}
	}
}

export const CartProvider = ({ children }) => {
	// v1 : usando el clasico context
	// el problema del state es que la logica esta dentro del componente
	// const [cart, setCart] = useState([])
	// const addToCart = (product) => {
	// 	// setCart([...cart, product])
	// 	// spread hace una copia superficial

	// 	const prodIdx = cart.findIndex((prod) => prod.id === product.id)
	// 	if (prodIdx === -1) {
	// 		setCart((prevCart) => [
	// 			...prevCart,
	// 			{
	// 				...product,
	// 				quantity: 1
	// 			}
	// 		])
	// 	} else {
	// 		const newCart = structuredClone(cart)
	// 		newCart[prodIdx].quantity += 1
	// 		setCart(newCart)
	// 	}
	// }

	// const removeFromCart = (product) => {
	// 	const prodIdx = cart.findIndex((prod) => prod.id === product.id)
	// 	if (prodIdx === -1) return

	// 	if (cart[prodIdx].quantity === 1) {
	// 		setCart((prevCart) => prevCart.filter((prod) => prod.id !== product.id))
	// 		return
	// 	}
	// 	if (cart[prodIdx].quantity > 1) {
	// 		const newCart = structuredClone(cart)
	// 		newCart[prodIdx].quantity -= 1
	// 		setCart(newCart)
	// 		return
	// 	}
	// }

	// const clearCart = () => {
	// 	setCart([])
	// }

	const [state, dispatch] = useReducer(reducer, initialState)

	const addToCart = (product) => {
		dispatch({ type: 'ADD_TO_CART', payload: product })
	}

	const removeFromCart = (product) => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: product })
	}

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	return (
		<CartContext.Provider
			value={{ cart: state, addToCart, removeFromCart, clearCart }}>
			{children}
		</CartContext.Provider>
	)
}
