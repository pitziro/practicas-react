import axios from 'axios'
import { useEffect, useState } from 'react'
import Products from './components/Products'
import Header from './components/Header'
// import { useFilters } from './utils/customHooks'
import './App.css'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { FilterContext } from './context/FilterContext'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {
	const [products, setproducts] = useState([])

	const getProducts = () =>
		axios
			.get('https://fakestoreapi.com/products')
			.then((res) => setproducts(res.data))

	useEffect(() => {
		getProducts()
	}, [])

	// const { filterProducts, setFilters } = useFilters()
	const { filterProducts } = useContext(FilterContext)
	const filteredProductos = filterProducts(products)

	return (
		<>
			<CartProvider>
				<Header />
				<Cart />
				<Products products={filteredProductos} />
				<Footer />
			</CartProvider>
		</>
	)
}

export default App
