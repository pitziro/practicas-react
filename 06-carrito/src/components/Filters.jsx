import { useContext, useId } from 'react'
import { FilterContext } from '../context/FilterContext'
import './Filters.css'

export const Filters = () => {
	const { filters, setFilters: changeFilters } = useContext(FilterContext)

	// useId() crea un identificador unico para cada elemento en el DOM
	// no funciona para MAPS
	const categoryId = useId()
	const priceId = useId()

	const handleChangeRange = (e) => {
		changeFilters((prev) => {
			return {
				...prev,
				minPrice: e.target.value
			}
		})
	}

	const handleChangeCategory = (e) => {
		changeFilters((prev) => {
			return {
				...prev,
				category: e.target.value
			}
		})
	}

	return (
		<section className='filters'>
			<div>
				<label htmlFor={priceId}> Precio </label>
				<input
					type='range'
					id={priceId}
					min={0}
					max={1000}
					onChange={handleChangeRange}
					value={filters.minPrice}
				/>
				${filters.minPrice}
			</div>

			<div>
				<label htmlFor={categoryId}> Categoría </label>
				<select name='category' id={categoryId} onChange={handleChangeCategory}>
					<option value='all'> Todas </option>
					<option value='electronics'> Electronicos</option>
					<option value='jewelery'> Joyería </option>
					<option value="men's clothing"> Ropa Hombres</option>
					<option value="women's clothing"> Ropa Mujeres</option>
				</select>
			</div>
		</section>
	)
}
