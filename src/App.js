import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
	useEffect(() => {
		document.title = "React Hook Demo";
	}, []);
	return (
		<div className="container mx-auto">
			<section className="h-screen flex flex-row justify-center items-center">
				<div className="flex-1">
					<h1 className="text-6xl">Hi there.</h1>
					<h4 className="text-xl">This project is a simple demo on React Hooks</h4>

					<div className="grid grid-cols-2 grid-rows-2 gap-4 mt-3">
						{[
							{ title: "useState Hook", link: "/useState" },
							{ title: "useEffect Hook", link: "/useEffect" },
							{ title: "useContext Hook", link: "/useContext" },
						].map((obj) => (
							<Link to={obj.link}>
								<div className="bg-blue-400 rounded-lg p-2 shadow-sm transition ease-in-out duration-300 hover:shadow-md cursor-pointer">
									<p className="text-lg text-white">{obj.title}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="flex-1">
					<img className="w-9/12" src="/react.png" alt="React Placeholder" />
				</div>
			</section>
		</div>
	);
}

export default App;
