/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Luz Electric and Control Systems Inc.`,
		description: `Company website for Luz Electric and Control Systems Inc, located in Bronx, NY.`,
		author: `@jccdev45`,
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fira Sans Condensed`, `Roboto`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Luz Electric and Control Systems Inc.`,
				short_name: `Luz Electric`,
				start_url: `/`,
				display: `standalone`,
				icon: `src/assets/img/luz-icon.png`,
			},
		},
	],
};
