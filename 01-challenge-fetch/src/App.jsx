import { useEffect, useMemo, useState } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'

function App() {
	const [users, setUsers] = useState([])
	const [togglebackground, settogglebackground] = useState(false)
	// const [toggleSortedCountry, settoggleSortedCountry] = useState(false)
	const [filterCountry, setFilterCountry] = useState('')
	const [customSort, setCustomSort] = useState('')

	useEffect(() => {
		fetch('https://randomuser.me/api?results=25')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data.results)
				localStorage.setItem('originalUsers', JSON.stringify(data.results))
			})
			.catch((err) => console.log(err))

		return () => {
			localStorage.removeItem('originalUsers')
		}
	}, [])

	// FILTER BY COUNTRY
	//----------------------------------------------
	const filteredUsers = useMemo(() => {
		console.log('filtered')
		return filterCountry !== ' ' && filterCountry.length > 0
			? users.filter((user) => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
			: users
	}, [users, filterCountry])

	// SORTING BY HEADER
	//----------------------------------------------
	const handleCustomSort = (customSortInput) => {
		console.log(customSortInput)
		setCustomSort(customSortInput)
	}

	const sortedUsersBy = useMemo(() => {
		switch (customSort) {
			case 'country':
				return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(b.location.country))
			case 'firstname':
				return [...filteredUsers].sort((a, b) => a.name.first.localeCompare(b.name.first))
			case 'lastname':
				return [...filteredUsers].sort((a, b) => a.name.last.localeCompare(b.name.last))
			default:
				return filteredUsers
		}
	}, [filteredUsers, customSort])

	// SORT BY COUNTRY ==> esto pasa a ordenar los paises filtrados
	// ----------------------------------------------
	const handleSortCountry = () => {
		const newSortingBy = customSort === 'country' ? 'none' : 'country'
		setCustomSort(newSortingBy)
	}

	// const sortedUsers = useMemo(() => {
	// 	console.log('sorted')
	// 	if (toggleSortedCountry) {
	// 		return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(b.location.country))
	// 	}
	// 	return filteredUsers
	// }, [filteredUsers, toggleSortedCountry])

	// TOGGLE BACKGROUND DE LAS CELDAS
	//----------------------------------------------
	const handletoggleBG = () => {
		settogglebackground(!togglebackground)
	}

	// DELETE USER
	//----------------------------------------------
	const handleDeleteUser = (id) => {
		const filteredUsers = users.filter((user) => user.login.uuid !== id)
		setUsers(filteredUsers)
	}
	// RESET STATUS
	//----------------------------------------------
	const handleResetStatus = () => {
		setUsers(JSON.parse(localStorage.getItem('originalUsers')))
	}

	return (
		<>
			<h1> RETO FETCH : PRUEBA TECNICA </h1>

			<div className='controlPanel'>
				<button onClick={handletoggleBG}> Toggle Background</button>
				<button onClick={handleSortCountry}>
					{customSort === 'country' ? `Unsort Country` : `Sort by Country`}{' '}
				</button>
				<input value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} />
				<button onClick={handleResetStatus}> Reset Data</button>
			</div>

			{!users || users.length === 0 ? (
				<p style={{ textAlign: 'center' }}>No data yet</p>
			) : (
				<UsersTable
					usersList={sortedUsersBy}
					togglebackground={togglebackground}
					handleDeleteUser={handleDeleteUser}
					handleCustomSort={handleCustomSort}
				/>
			)}
		</>
	)
}

export default App
