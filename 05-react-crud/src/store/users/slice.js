import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
// el slice es una parte del stado total , y pueden existir infinitos
// necesitan un nombre, estado inicial y reducers
// el estado inicial no tiene q ser un objeto, puede ser un array o string.

const DEFAULT_STATE = [
	{ id: '001', name: 'John Doe', email: 'john@doe.com', phone: '+1 (555) 555-5555' },
	{ id: '002', name: 'Jane Smith', email: 'jane@smith.com', phone: '+1 (555) 555-5555' },
	{ id: '003', name: 'Mike Johnson', email: 'mike@johnson.com', phone: '+1 (555) 555-5555' },
	{ id: '004', name: 'Alice Brown', email: 'alice@brown.com', phone: '+1 (555) 555-5555' },
	{ id: '005', name: 'David Clark', email: 'david@clark.com', phone: '+1 (555) 555-5555' }
]

// const initialState = localStorage.getItem('_redux_state')
// 	? JSON.parse(localStorage.getItem('_redux_state')).users
// 	: DEFAULT_STATE

const initialState = JSON.parse(localStorage.getItem('_redux_state'))?.users ?? DEFAULT_STATE

export const usersSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		// las acciones que interactuan con el estado (entidad)
		addNewUser: (state, action) => {
			const id = crypto.randomUUID()
			// const { name, email, phone } = action.payload
			// return state.push({ id, name, email, phone })
			return [...state, { id, ...action.payload }]
		},

		deleteUserbyId: (state, action) => {
			const { id } = action.payload
			return state.filter((user) => user.id !== id)
		}
	}
})

// lo qe importa exportar es el reducer.
// recuperan un estado y con la accion y el estado actual => calculan el nuevo estado
export default usersSlice.reducer

//podemos exportar un metodo en contreto
export const { addNewUser, deleteUserbyId } = usersSlice.actions
