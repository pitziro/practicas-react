/* estados, acciones y reducers */
import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users/slice'

/* para interactuar con el localstorage
   se ejecutan 3 metodos en momentos diferentes.. 
   cada una devuelve e inyecta el rsultado a la siguiente
*/
const localStorageMiddleware = (store) => (next) => (action) => {
	next(action)
	const state = store.getState()
	localStorage.setItem('_redux_state', JSON.stringify(state))
}

export const store = configureStore({
	reducer: {
		users: usersSlice
	},
	middleware: () => [localStorageMiddleware]
})
