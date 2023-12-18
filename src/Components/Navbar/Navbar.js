import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

import "../../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>JSCommunity.org</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">CS/IT Jobs</a>
				<a href="/#">MBA Jobs</a>
                <a href="/#">Govt. Jobs</a>
				<a href="/#">About me</a>
                {/* <input type="search"></input> */}
                {/* <IoSearchSharp className="icons"/> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;