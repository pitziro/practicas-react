function UsersTable({ usersList, togglebackground, handleDeleteUser, handleCustomSort }) {
	return (
		<div>
			<table className='usersTable'>
				<thead>
					<tr>
						<td className='clickMe' onClick={() => handleCustomSort('none')}>
							Picture
						</td>
						<td className='clickMe' onClick={() => handleCustomSort('firstname')}>
							FirstName
						</td>
						<td className='clickMe' onClick={() => handleCustomSort('lastname')}>
							LastName
						</td>
						<td className='clickMe' onClick={() => handleCustomSort('country')}>
							Country
						</td>
						<td> Acciones</td>
					</tr>
				</thead>
				<tbody>
					{usersList.map((user, key) => {
						const bgColor = key % 2 === 0 ? 'lightgray' : '#e2bfbf'
						const colorToSet = togglebackground ? bgColor : 'transparent'

						return (
							<tr key={user.login.uuid} style={{ backgroundColor: colorToSet }}>
								<td>
									<img src={user.picture.thumbnail} alt='thumbnail' />
								</td>
								<td>{user.name.first}</td>
								<td>{user.name.last}</td>
								<td>{user.location.country}</td>
								<td>
									<button onClick={() => handleDeleteUser(user.login.uuid)}>Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default UsersTable
