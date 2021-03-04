import React from "react";
import Navbar from "../components/common/Navbar";
import CProfile from "../components/useStateHook/CProfile";
import FProfile from "../components/useStateHook/FProfile";

function UseStatePage() {
	return (
		<>
			<Navbar />
			<section className="grid grid-cols-2 grid-rows-1 space-x-20">
				<div className="h-screen my-20">
					<CProfile />
				</div>
				<div className="h-screen my-20">
					<FProfile />
				</div>
			</section>
		</>
	);
}

export default UseStatePage;
