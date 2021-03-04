import "./styles/navbar.css";

function Navbar() {
	return (
		<nav className="w-screen flex flex-row justify-between p-5 fixed bg-white">
			<div>
				<h3>
					<a href="/">React Hooks Demo</a>
				</h3>
			</div>
			<div>
				{["useState", "useEffect", "useContext"].map((item) => (
					<a
						className="text-blue-400 p-2 mx-2 transition duration-300 ease-in-out rounded-full hover:bg-blue-100"
						href={`${item}`}
					>
						{item}
					</a>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
