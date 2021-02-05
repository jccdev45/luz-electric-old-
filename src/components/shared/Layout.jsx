import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="flex flex-grow">
				<section className="flex flex-col justify-center pt-16 ml-auto">
					{children}
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
