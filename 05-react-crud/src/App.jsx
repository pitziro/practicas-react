import './App.css'
import UsersTable from './components/LisfofUsers'
import CreateNewUser from './components/NewUser'

function App() {
	return (
		<>
			<h1 className='text-3xl font-bold text-red-500 underline'>Hello tremor!</h1>
			<UsersTable />
			<CreateNewUser />
		</>
	)
}

export default App
