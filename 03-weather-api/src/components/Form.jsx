/* eslint-disable react/prop-types */
const Form = ({ setCity }) => {
	const handleInputChange = (e) => {
		setCity(e.target.value)
	}

	return (
		<div>
			<span> Ciudad </span>

			<input type='text' onChange={handleInputChange} />
		</div>
	)
}
export default Form
