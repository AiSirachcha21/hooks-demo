import React from "react";

class CCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
		};
	}

	render() {
		return (
			<section className="h-screen flex flex-col justify-center p-2">
				<h1 className="text-3xl mb-2">Class Based</h1>
				<div className="flex flex-row items-center space-x-2">
					<input
						className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
						placeholder="Write your name"
						onChange={(e) => this.setState({ name: e.target.value })}
					/>
					<div className="my-4">
						{this.state.name && (
							<h1 className="text-xl">Hi there {this.state.name}</h1>
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default CCounter;
