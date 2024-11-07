/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'

const Widget = ({ city }) => {
	const fetchURL = `${import.meta.env.VITE_WEATHER_APP_BASEURL}q=${city}&key=${import.meta.env.VITE_WEATHER_API_KEY}`
	const [weather, setWeather] = useState('')

	const getWeather = async () => {
		if (!city || city === '' || city.length < 3) return

		try {
			const res = await fetch(fetchURL)
			const data = await res.json()
			setWeather(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (!city || city === '' || city.length < 3) return
		console.log('widget loaded')

		getWeather()
	}, [city])

	return (
		<>
			{!weather ? (
				<h2> Search for a city </h2>
			) : (
				<>
					<div>
						<h3>Region : {weather?.location?.region}</h3>
						<p>Country: {weather?.location?.country}</p>
						<p>Latitud: {weather?.location?.lat}</p>
						<p>Longitud: {weather?.location?.lon}</p>
					</div>

					<div>
						<h4>Temperature: {weather?.current?.temp_c}</h4>
						<h4>Humidity: {weather?.current?.humidity}</h4>
						<h4>Wind speed: {weather?.current?.wind_kph}</h4>
						<h4 style={{ display: 'flex', alignItems: 'center' }}>
							Condition: {weather?.current?.condition.text}
							<img src={`https://${weather?.current?.condition?.icon}`} alt='img' />
						</h4>
					</div>

					<div>
						<iframe
							alt='mapa'
							src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location?.lon}!3d${weather?.location?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
							width='800'
							height='600'
							style={{ border: 0 }}
							loading='lazy'></iframe>
					</div>
				</>
			)}
		</>
	)
}
export default Widget
