import React from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<SEO
				keywords={[
					`electrician`,
					`residential`,
					`commercial`,
					`industrial`,
					`new york city`,
					`nyc`,
					`bronx`,
					`brooklyn`,
					`queens`,
					`manhattan`,
					`osha certified`,
					`mbe`,
					`minority business enterprise`,
				]}
			/>
			<div style={{ fontFamily: `roboto` }}>
				<Header />
				<main className="flex flex-grow">
					<section className="flex flex-col justify-center w-full pt-16">
						{children}
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
