import React from "react";

export default function Hours() {
	return (
		<div className="flex flex-col items-center justify-center p-4 text-center md:p-8 lg:justify-evenly lg:flex-row">
			<div className="flex-col">
				<h2 className="text-2xl md:text-3xl">We are located at:</h2>
				<div className="w-full md:text-xl">
					<p>2082 Crotona Avenue</p>
					<p>Bronx, NY 10457</p>
					<div className="flex md:flex-col">
						<p className="mx-2">
							<span className="font-bold">Tel:</span> 718-220-8989
						</p>
						<p className="mx-2">
							<span className="font-bold">Fax:</span> 718-220-4441
						</p>
					</div>
				</div>
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
