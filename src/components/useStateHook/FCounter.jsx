import React, { useState } from "react";
import Gist from "react-gist";

function FCounter() {
	const [name, setName] = useState(null);

	return (
		<section className="h-screen flex flex-col justify-center p-2 my-5">
			<h1 className="text-3xl mb-2 font-semibold">Hook Based</h1>

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
			<div className="h-3/4 mt-5">
				<h1 className="text-xl font-semibold">The code</h1>
				<Gist id="a8925bfb44e1218e6250bdc35bf5095e" />
			</div>
		</section>
	);
}

export default FCounter;
