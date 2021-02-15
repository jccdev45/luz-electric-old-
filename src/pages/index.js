import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/shared/SEO";
import Layout from "../components/shared/Layout";
import Hero from "../components/shared/Hero";
import Mission from "../components/Home/Mission";
import Estimate from "../components/Home/Estimate";
import Info from "../components/Home/Info";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			mobileImg: file(relativePath: { eq: "img/banner550.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			desktopImg: file(relativePath: { eq: "img/banner.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mbe: file(relativePath: { eq: "img/MBEwhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
			carousel: allFile(filter: { relativeDirectory: { eq: "img/carousel" } }) {
				nodes {
					childImageSharp {
						fluid(fit: CONTAIN, maxWidth: 250, maxHeight: 250) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`);

	const sources = [
		query.mobileImg.childImageSharp.fluid,
		{
			...query.desktopImg.childImageSharp.fluid,
			media: `(min-width: 768px)`,
		},
	];

	return (
		<Layout>
			<SEO title="Home" />
			<Hero img={sources} img2={query.mbe.childImageSharp.fluid} />
			<Mission />
			<Estimate img={query.carousel.nodes} />
			<Info />
		</Layout>
	);
};
