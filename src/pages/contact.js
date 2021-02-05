import React from "react";
import Layout from "../components/shared/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";

export default () => {
	return (
		<Layout>
			<div className="p-5 row aic">
				<div>
					<Hours />
				</div>
				<div>
					<ContactForm />
				</div>
			</div>
		</Layout>
	);
};
