import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/shared/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";
import Hero from "../components/shared/Hero";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			contactBanner: file(relativePath: { eq: "img/about/luz-wiring.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Hero img={query.contactBanner.childImageSharp.fluid} />
			<Hours />
			<ContactForm />
		</Layout>
	);
};
