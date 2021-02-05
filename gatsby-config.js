module.exports = {
	siteMetadata: {
		title: `Luz Electric and Control Systems Inc.`,
		description: `Company website for Luz Electric and Control Systems Inc, located in Bronx, NY.`,
		author: `@jccdev45`,
	},
	// flags: { PRESERVE_WEBPACK_CACHE: true },
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`fira sans condensed`, `roboto`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
	],
};
