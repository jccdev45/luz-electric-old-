import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div style={{ fontFamily: `roboto` }}>
			<Header />
			<main className="flex flex-grow">
				<section className="flex flex-col justify-center pt-16">
					{children}
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
