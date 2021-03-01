import React, { useState } from "react";

function FCounter() {
	const [name, setName] = useState(null);

	return (
		<section className="h-screen flex flex-col justify-center p-2">
			<h1 className="text-3xl mb-2">Hook Based</h1>
			<div className="flex flex-row items-center space-x-2">
				<input
					className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
					placeholder="Write your name"
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="my-4">
					{name && <h1 className="text-xl">Hi there {name}</h1>}
				</div>
			</div>
		</section>
	);
}

export default FCounter;
