import React from "react";
import Gist from "react-gist";

class CProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			surname: null,
			codeHidden: true,
		};

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleSurnameChange = this.handleSurnameChange.bind(this);
	}

	handleFirstNameChange(e) {
		this.setState({ ...this.state, firstName: e.target.value });
	}

	handleSurnameChange(e) {
		this.setState({ ...this.state, surname: e.target.value });
	}

	render() {
		return (
			<section className="flex flex-col justify-center p-2">
				<h1 className="text-3xl mb-2 font-semibold">Class Based</h1>
				<div className="flex flex-row items-center space-x-2">
					<input
						className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
						placeholder="Name"
						onChange={this.handleFirstNameChange}
					/>
					<input
						className="border-gray-100 border-solid border-2 p-1.5 rounded-lg w-80 focus:outline-none focus:border-blue-100 transition ease-in-out duration-300"
						placeholder="Surname"
						onChange={this.handleSurnameChange}
					/>
				</div>
				<div>
					{(this.state.firstName || this.state.surname) && (
						<>
							<h1 className="text-3xl bg-gray-100 p-2 m-2 rounded-full">{`Hi ${
								this.state.firstName ?? ""
							} ${this.state.surname ?? ""}`}</h1>
							<button onClick={this.handleNameHide}>Hide Text</button>
						</>
					)}
				</div>
				<div className="h-3/4 mt-5">
					<div className="flex flex-row space-x-2">
						<button
							className="text-lg font-light bg-blue-200 rounded-lg px-3 transition ease-in-out duration-150"
							onClick={() =>
								this.setState({ ...this.state, codeHidden: !this.state.codeHidden })
							}
						>
							{this.state.codeHidden ? "Show Code" : "Hide Code"}
						</button>
					</div>
					{!this.state.codeHidden && <Gist id="ebe006dec8e46a78a43af096f019cd31" />}
				</div>
			</section>
		);
	}
}

export default CProfile;
