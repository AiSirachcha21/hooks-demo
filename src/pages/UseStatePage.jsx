import React from "react";
import Navbar from "../components/common/Navbar";
import CCounter from "../components/useStateHook/CCounter";
import FCounter from "../components/useStateHook/FCounter";

function UseStatePage() {
	return (
		<div>
			<Navbar />
			<section className="grid grid-cols-2 grid-rows-1 divide-x divide-black">
				<div>
					<CCounter />
				</div>
				<div>
					<FCounter />
				</div>
			</section>
		</div>
	);
}

export default UseStatePage;
