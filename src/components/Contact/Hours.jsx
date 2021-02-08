import React from "react";

export default function Hours() {
	return (
		<div className="flex flex-col items-center justify-center p-4 text-center md:p-8 lg:justify-evenly lg:flex-row">
			<div className="flex flex-col">
				<h2 className="text-2xl">We are located at:</h2>
				<h4>
					2082 Crotona Avenue <br />
					Bronx, NY 10457 <br />
					Tel: 718-220-8989 <br />
					Fax: 718-220-4441
				</h4>
			</div>

			<table className="my-4 table-auto">
				<thead className="border border-gray-300">
					<tr>
						<th className="text-xl font-extrabold border border-gray-400">
							Mon
						</th>
						<th className="text-xl font-extrabold border border-gray-400">
							Tue
						</th>
						<th className="text-xl font-extrabold border border-gray-400">
							Wed
						</th>
						<th className="text-xl font-extrabold border border-gray-400">
							Thu
						</th>
						<th className="text-xl font-extrabold border border-gray-400">
							Fri
						</th>
					</tr>
				</thead>
				<tbody className="border border-gray-400">
					<tr className="border-b border-gray-400">
						<td className="p-2 text-center bg-gray-300 border border-gray-500 md:h-20">
							8AM - 4PM
						</td>
						<td className="p-2 text-center bg-gray-300 border border-gray-500 md:h-20">
							8AM - 4PM
						</td>
						<td className="p-2 text-center bg-gray-300 border border-gray-500 md:h-20">
							8AM - 4PM
						</td>
						<td className="p-2 text-center bg-gray-300 border border-gray-500 md:h-20">
							8AM - 4PM
						</td>
						<td className="p-2 text-center bg-gray-300 border border-gray-500 md:h-20">
							8AM - 4PM
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
