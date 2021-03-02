import React from "react";
import Gist from "react-gist";

class CCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ name: e.target.value });
	}

	render() {
		return (
			<section className="h-screen flex flex-col justify-center p-2 my-5">
				<h1 className="text-3xl mb-2 font-semibold">Class Based</h1>
				<div className="flex flex-row items-center space-x-2">
					<input
						className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
						placeholder="Write your name"
						onChange={this.handleChange}
					/>
					<div className="my-4">
						{this.state.name && (
							<h1 className="text-xl">Hi there {this.state.name}</h1>
						)}
					</div>
				</div>
				<div className="h-3/4 mt-5">
					<h1 className="text-xl font-semibold">The code</h1>
					<Gist id="ebe006dec8e46a78a43af096f019cd31" />
				</div>
			</section>
		);
	}
}

export default CCounter;
