module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#000F37",
				secondary: "#E6EE69",
			},
			boxShadow: {
				white: "0 5px 5px 0 rgba(256, 256, 256, 0.2)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
