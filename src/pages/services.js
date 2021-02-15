import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/shared/Hero";
import Layout from "../components/shared/Layout";
import SEO from "../components/shared/SEO";
import Intro from "../components/Services/Intro";
import Overview from "../components/Services/Overview";
import Safety from "../components/Services/Safety";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			banner: file(relativePath: { eq: "img/services/banner.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1600) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mbe: file(relativePath: { eq: "img/MBE.png" }) {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="Services" />
			<Hero img={query.banner.childImageSharp.fluid} />
			<Intro />
			<Overview />
			<Safety />
		</Layout>
	);
};
