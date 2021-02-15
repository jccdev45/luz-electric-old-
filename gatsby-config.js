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
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: "UA-189836338-1",
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `luz-electric`,
				short_name: `luz`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/assets/img/luz-icon.png`,
			},
		},
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
