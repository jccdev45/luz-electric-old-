import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/logo.png";

const ROUTES = [
	{ id: 1, name: "HOME", path: "/" },
	{ id: 2, name: "SERVICES", path: "/services" },
	// { id: 3, name: "GALLERY", path: "/gallery" },
	{ id: 4, name: "CONTACT", path: "/contact" },
];

export const Header = () => {
	const renderRoutes = () => {
		return ROUTES.map((route) => (
			<Link
				key={route.id}
				to={route.path}
				className="block no-underline md:inline-block md:ml-6"
			>
				{route.name}
			</Link>
		));
	};

	return (
		<header className="fixed top-0 z-50 w-full px-6 text-primary bg-secondary">
			<div className="flex flex-wrap items-center justify-between p-3 mx-auto">
				<Link to="/">
					<img src={logo} className="object-contain" />
				</Link>
				<nav
					className="w-full md:flex md:items-center md:w-auto"
					style={{ fontFamily: `fira sans condensed` }}
				>
					{renderRoutes()}
				</nav>
			</div>
		</header>
	);
};
