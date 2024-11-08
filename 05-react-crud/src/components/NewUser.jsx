import { Button, Card, TextInput, Title } from '@tremor/react'
import { useAppDispatch } from '../hooks/storehook'
import { addNewUser } from '../store/users/slice'

const CreateNewUser = () => {
	const dispatch = useAppDispatch()
	const handleAddNewUser = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)

		const name = formData.get('name')
		const email = formData.get('email')
		const phone = formData.get('phone')

		dispatch(addNewUser({ name, email, phone }))
		e.target.reset()
	}

	return (
		<Card className='mt-8'>
			<Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong'> Create New User</Title>
			<form onSubmit={handleAddNewUser}>
				<TextInput name='name' placeholder='Name' className='mt-4' />
				<TextInput name='email' placeholder='Email' className='mt-4' />
				<TextInput name='phone' placeholder='Phone' className='mt-4' />
				<Button className='mt-4'>Añadir Usuario</Button>
			</form>
		</Card>
	)
}

export default CreateNewUser
