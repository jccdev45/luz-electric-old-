import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/shared/Hero";
import Layout from "../components/shared/Layout";
import Intro from "../components/Services/Intro";
import Overview from "../components/Services/Overview";
import Safety from "../components/Services/Safety";

export default () => {
	const query = useStaticQuery(graphql`
		query {
			banner: file(relativePath: { eq: "img/services/banner.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1600) {
						...GatsbyImageSharpFluid
					}
				}
			}
			# overview: allFile(filter: { relativeDirectory: { eq: "img/overview" } }) {
			# 	nodes {
			# 		childImageSharp {
			# 			fixed(width: 62, height: 62) {
			# 				...GatsbyImageSharpFixed
			# 				originalName
			# 			}
			# 		}
			# 	}
			# }
		}
	`);

	return (
		<Layout>
			<Hero img={query.banner.childImageSharp.fluid} />
			<Intro />
			<Overview />
			<Safety />
		</Layout>
	);
};
