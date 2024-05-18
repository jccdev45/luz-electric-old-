import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, keywords, title }) {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: ["24/7 emergency electrician bronx",
    "affordable electrician bronx",
    "all boroughs electrician",
    "bronx ny electrical contractor",
    "commercial electrical bronx",
    "electrical installation bronx",
    "electrical repair bronx",
    "electrician near me",
    "industrial electrical bronx",
    "licensed electrician bronx",
    "mbe electrician bronx ny",
    "minority business enterprise electrician bronx",
    "nyc electrician",
    "reliable electrician bronx",
    "residential electrical bronx",
    "same day electrician service",]
				)
				.concat(meta)}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	keywords: [],
	meta: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	lang: PropTypes.string,
	meta: PropTypes.array,
	title: PropTypes.string,
};

export default SEO;
