import { createContext, useState } from 'react'

// 1 crear un contexto
export const FilterContext = createContext()

// 2 crear un provider
export const FilterProvider = ({ children }) => {
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

	// 3 exportar el provider
	return (
		<FilterContext.Provider value={{ filters, filterProducts, setFilters }}>
			{children}
		</FilterContext.Provider>
	)
}
