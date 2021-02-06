import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/shared/Hero";
import Mission from "../components/Home/Mission";
import Estimate from "../components/Home/Estimate";
import Info from "../components/Home/Info";
import Layout from "../components/shared/Layout";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			mobileImg: file(relativePath: { eq: "img/banner550.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			desktopImg: file(relativePath: { eq: "img/banner.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 2000) {
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
			carousel: allFile(filter: { relativeDirectory: { eq: "img/carousel" } }) {
				nodes {
					childImageSharp {
						fluid(fit: CONTAIN, maxWidth: 250, maxHeight: 250, quality: 100) {
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
			<Hero img={sources} img2={query.mbe.childImageSharp.fluid} />
			<Mission />
			<Estimate img={query.carousel.nodes} />
			<Info />
		</Layout>
	);
};
