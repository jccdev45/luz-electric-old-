import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/logo.png";

const ROUTES = [
	{ id: 1, name: "HOME", path: "/" },
	{ id: 2, name: "SERVICES", path: "/services" },
	// { id: 3, name: "GALLERY", path: "/gallery" },
	{ id: 4, name: "CONTACT", path: "/contact" },
];

export default function Header() {
	const [isExpanded, toggleExpansion] = useState(false);

	const renderRoutes = () => {
		return ROUTES.map((route) => (
			<Link
				key={route.id}
				to={route.path}
				className="block mt-4 text-xl no-underline md:mt-0 md:inline-block md:ml-6"
				onClick={() => toggleExpansion(!isExpanded)}
			>
				{route.name}
			</Link>
		));
	};

	return (
		<header className="fixed top-0 z-50 w-full px-6 text-primary bg-secondary">
			<div className="flex flex-wrap items-center justify-between px-0 py-3 mx-auto md:p-3">
				<Link to="/" onClick={() => toggleExpansion(false)}>
					<img
						src={logo}
						alt="Luz Electric logo"
						className="object-contain focus:outline-none"
					/>
				</Link>
				<button
					className="flex items-center px-3 py-2 border border-white rounded focus:outline-none md:hidden"
					onClick={() => toggleExpansion(!isExpanded)}
				>
					<svg
						className="w-3 h-3 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
				<nav
					className={`${
						isExpanded ? `block` : `hidden`
					} w-full md:flex md:items-center md:w-auto`}
					style={{ fontFamily: `fira sans condensed` }}
				>
					{renderRoutes()}
				</nav>
			</div>
		</header>
	);
}
