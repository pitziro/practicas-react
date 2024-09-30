import React, { useEffect, useState } from 'react';

const DataTable = ({ input }) => {
	const [dataHeaders, setdataHeaders] = useState([]);

	if (!input || input.length === 0) return <p>No data available</p>;

	useEffect(() => {
		setdataHeaders(Object.keys(input[0]));
	}, [input]);

	return (
		<div>
			<h2> Data Information</h2>

			<table>
				<thead>
					<tr>
						{dataHeaders.map((d, ix) => (
							<th key={ix}> {d} </th>
						))}
					</tr>
				</thead>

				<tbody>
					{input.map((elY, idY) => (
						<tr key={idY}>
							{dataHeaders.map((elX, idX) => (
								<td key={idX}>
									{typeof elY[elX] === 'object'
										? JSON.stringify(elY[elX])
										: elY[elX]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
