import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/shared/Hero";
import Mission from "../components/Home/Mission";
import Estimate from "../components/Home/Estimate";
import Info from "../components/Home/Info";
import Layout from "../utils/Layout";
import "../styles/custom.scss";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			banner: file(relativePath: { eq: "img/banner.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1600) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mbe: file(relativePath: { eq: "img/MBE.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1600) {
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

	return (
		<Layout>
			<Hero
				img={query.banner.childImageSharp.fluid}
				img2={query.mbe.childImageSharp.fluid}
			/>
			<Mission />
			<Estimate img={query.carousel.nodes} />
			<Info />
		</Layout>
	);
};
