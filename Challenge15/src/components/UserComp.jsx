import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

function UserComp() {
	const URL_BASE = 'https://jsonplaceholder.typicode.com/';

	const [reqType, setreqType] = useState();
	const [dataFetched, setdataFetched] = useState();

	const handleRequestUpdate = (e) => {
		setreqType(e.target.value);
	};

	useEffect(() => {
		const fetchJSON = async () => {
			try {
				const res = await axios.get(`${URL_BASE}${reqType}`);
				if (res.code === 'ERR_NETWORK') throw new Error('ERROR DE SERVIDOR');

				const data = await res.data;
				setdataFetched(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchJSON();
	}, [reqType]);

	return (
		<>
			<div>
				<FetchButton bName='users' bFunction={handleRequestUpdate} />
				<FetchButton bName='posts' bFunction={handleRequestUpdate} />
				<FetchButton bName='comments' bFunction={handleRequestUpdate} />
			</div>
			{/* <ul>
				{dataFetched &&
					dataFetched.map((item) => (
						<li key={item.id}>{JSON.stringify(item)}</li>
					))}
			</ul> */}

			{dataFetched ? (
				<DataTable input={dataFetched} />
			) : (
				<p> No data available</p>
			)}
		</>
	);
}

export default UserComp;

const FetchButton = ({ bName, bFunction }) => (
	<button type='button' value={bName} onClick={bFunction}>
		{bName}
	</button>
);
