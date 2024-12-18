import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export const useFilters = () => {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0
	})

	const filterProducts = (products) => {
		return products.filter(
			(prod) =>
				prod.price >= filters.minPrice &&
				(filters.category === 'all' || prod.category == filters.category)
		)
	}

	return { filterProducts, setFilters }
}

export const useCart = () => {
	const context = useContext(CartContext)

	if (!context || context === undefined) {
		throw new Error('useCart must be used within a CartProvider')
	}

	return context
}
