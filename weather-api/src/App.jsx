import { useState } from 'react'
import Form from './components/Form'
import Widget from './components/Widget'

function App() {
	const [city, setCity] = useState('')

	return (
		<>
			<h1>Weather API</h1>
			<Form setCity={setCity} />

			<Widget city={city} />
		</>
	)
}

export default App
