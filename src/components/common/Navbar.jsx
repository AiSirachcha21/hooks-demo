import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/navbar.css";

const routes = ["/useState", "/useEffect", "/useContext"];

function Navbar() {
	const [activeLink, setActiveLink] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const route = routes.findIndex((r) => r === location.pathname);
		setActiveLink(route);
	}, [location.pathname]);

	return (
		<nav className="w-screen flex flex-row justify-between p-5 fixed bg-white">
			<div>
				<h3>
					<a href="/">React Hooks Demo</a>
				</h3>
			</div>
			<div>
				{routes.map((item, index) => (
					<Link
						key={index}
						className={`text-blue-400 p-2 mx-2 transition duration-300 ease-in-out rounded-full hover:bg-blue-100 ${
							index === activeLink && "bg-blue-200 rounded-lg"
						}`}
						to={item}
						onClick={() => {
							setActiveLink(index);
						}}
					>
						{item.replace("/", "")}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
