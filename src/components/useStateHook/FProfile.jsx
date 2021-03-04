import React, { useState } from "react";
import Gist from "react-gist";

function FProfile() {
	const [firstName, setFirstName] = useState(null);
	const [surname, setSurname] = useState(null);

	const handleFirstNameChange = (e) => setFirstName(e.target.value);
	const handleSurnameChange = (e) => setSurname(e.target.value);

	return (
		<section className="flex flex-col justify-center p-2">
			<h1 className="text-3xl mb-2 font-semibold">Hook Based</h1>

			<div className="flex flex-row items-center space-x-2">
				<input
					className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
					placeholder="Name"
					onChange={handleFirstNameChange}
				/>
				<input
					className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
					placeholder="Surname"
					onChange={handleSurnameChange}
				/>
			</div>
			<div>
				{(firstName || surname) && (
					<h1 className="text-3xl bg-gray-100 p-2 m-2 rounded-full">{`Hi ${
						firstName ?? ""
					} ${surname ?? ""}`}</h1>
				)}
			</div>
			<div className="h-3/4 mt-5">
				<h1 className="text-xl font-semibold">The code</h1>
				<Gist id="a8925bfb44e1218e6250bdc35bf5095e" />
			</div>
		</section>
	);
}

export default FProfile;
