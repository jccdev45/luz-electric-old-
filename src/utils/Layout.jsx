import React from "react";
import { Header } from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
